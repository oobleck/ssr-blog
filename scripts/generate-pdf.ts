import { settings } from "../src/data/settings";
import { exec, execSync } from "child_process";
import { join } from "path";
import puppeteer from "puppeteer";
import { pdfPage } from "puppeteer-report";

const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const goTo = async (page, url) => {
  await page.goto(url, { waitUntil: "networkidle0" });
};

const retry = async ({ promise, retries, retryTime }) => {
  try {
    return await promise();
  } catch (error) {
    if (retries <= 0) throw error;

    await waitFor(retryTime);

    return await retry({ promise, retries: retries - 1, retryTime });
  }
};

const main = async () => {
  const child = exec("pnpm run dev");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const page = await browser.newPage();

  await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });

  await retry({
    promise: () => goTo(page, "http://localhost:8056/cv"),
    retries: 5,
    retryTime: 1000,
  });
  const outputFilename = join(
    process.cwd(),
    "public",
    `${settings.title.replace(/[\s]+/g, "-").toLowerCase()}-resume.pdf`
  );

  await pdfPage(page, {
    path: outputFilename,
    format: "Letter",
    printBackground: false,
    margin: { top: "0.5in", right: "0.5in", bottom: "0.5in", left: "0.5in" },
  });
  console.log(`Generated ${outputFilename}`);

  await browser.close();

  child.kill();
};

main();
