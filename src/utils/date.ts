import dayjs from 'dayjs';

export function formatDate(date: string) {
  return dayjs(date).format('dddd, DD MMM YYYY');
}

export function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
