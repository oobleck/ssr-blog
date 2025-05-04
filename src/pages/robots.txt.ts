export async function GET() {
  // TODO: Get this working https://darkvisitors.com/docs/robots-txts-api

  const request = await fetch(
    'https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/main/robots.txt',
  );
  const robotsTxt = await request.text();
  return new Response(`# Pulled from https://github.com/ai-robots-txt/ai.robots.txt
# ${new Date().toUTCString()}

${robotsTxt}`);
}
