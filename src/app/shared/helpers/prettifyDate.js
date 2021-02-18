export function prettifyDate(date) {
  return date ? new Date(date).toDateString().slice(4) : 'No date available';
}
