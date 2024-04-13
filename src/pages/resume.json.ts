export async function GET({params, request}) {
  const response = await fetch("https://gitconnected.com/v1/portfolio/oobleck");
  const resume = await response.json();
  // resume.buildDate = new Date().toString();
  return new Response(
    JSON.stringify({ buildDate: new Date().toString(), ...resume }, null, 2)
  );
}
