export function prettifyDate(date) {
  return date === undefined
    ? new Date(date).toDateString().slice(4)
    : 'No date available';
}
