import { writeFileSync } from "fs";
import vercelJson from "../vercel.json";

async function build() {
  const request = await fetch(
    "https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/main/robots.txt"
  );
  const robotsTxt = await request.text();
  const knownBots: string[] = (robotsTxt ?? "")
    .split("\n")
    .reduce((agg: any[], line: string) => {
      if (!/^user-agent/i.test(line)) {
        return agg;
      }

      const bot = line.split(": ")[1];

      return [...agg, bot];
    }, []);

  // This config inspired by https://github.com/orgs/vercel/discussions/74
  const newJson = {
    ...(vercelJson ?? {}),
    rewrites: [
      // {
      //   source: "/(.*)",
      //   has: [
      //     {
      //       type: "header",
      //       key: "User-Agent",
      //       value: `/.*(${knownBots.join("|")}).*/i`,
      //     },
      //   ],
      //   destination: "/401",
      //   permanent: false,
      // },
      ...knownBots.reduce(
        (agg, bot) => [
          ...agg,
          {
            source: "/(.*)",
            has: [
              { type: "header", key: "User-Agent", value: `/.*(${bot}).*/i` },
            ],
            destination: "/401",
            // permanent: false,
          },
        ],
        [] as Record<string, any>[],
      ),
    ],
  };

  const serialized = JSON.stringify(newJson, null, 2);

  // console.log(serialized);
  writeFileSync("./vercel.json", serialized, "utf8");
  console.log("✨ vercel.json file updated to block the latest bot scrapers");
}

build();
