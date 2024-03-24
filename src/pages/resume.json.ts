export async function GET({params, request}) {
  const response = await fetch("https://gitconnected.com/v1/portfolio/oobleck");
  const resume = await response.json();
  return new Response(
    JSON.stringify(resume, null, 2)
  );
}
