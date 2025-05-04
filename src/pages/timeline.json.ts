import { TIMELINE, timelineSorter } from '@data/timeline';

export async function GET() {
  const timeline = [...TIMELINE].sort(timelineSorter);
  return new Response(JSON.stringify(timeline, void 0, 2));
}
