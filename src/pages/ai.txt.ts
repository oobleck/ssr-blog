export async function GET() {
  const request = await fetch(
    'https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/main/ai.txt',
  );
  const result = await request.text();
  return new Response(`# Pulled from https://github.com/ai-robots-txt/ai.txt
# ${new Date().toUTCString()}

${result}`);
}
