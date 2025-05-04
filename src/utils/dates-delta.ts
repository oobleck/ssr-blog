import { intervalToDuration, formatDuration } from 'date-fns';

export function datesDelta(...args: (Date | string | number)[]): string {
  const date1 = args[0];
  const date2 = args[1] || Date.now();
  const format = args[2] || ['years', 'months'];

  return formatDuration(
    intervalToDuration({
      start: new Date(date1),
      end: new Date(date2),
    }),
    { format, delimiter: ', ' },
  );
}
