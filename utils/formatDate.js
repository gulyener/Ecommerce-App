function formatDate(date) {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return new Date(date).toLocaleDateString('en-NL', options);
}

export default formatDate;
