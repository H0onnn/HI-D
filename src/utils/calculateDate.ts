export const timeSince = (date: string) => {
  const secondsPast = (Date.now() - new Date(date).getTime()) / 1000;

  if (secondsPast < 0) {
    return `0초전`;
  }
  if (secondsPast < 60) {
    return `${Math.round(secondsPast)}초전`;
  }
  if (secondsPast < 3600) {
    return `${Math.round(secondsPast / 60)}분전`;
  }
  if (secondsPast <= 86400) {
    return `${Math.round(secondsPast / 3600)}시간전`;
  }
  if (secondsPast <= 2592000) {
    return `${Math.round(secondsPast / 86400)}일전`;
  }
  return date;
};

export const formatDate = (inputDate: string): string => {
  const datePart = inputDate.split('T')[0];

  const [year, month, day] = datePart.split('-');

  return `${year}.${month}.${day}`;
};

export const getWeek = (date: Date) => {
  const currentDate = date.getDate();
  const firstDay = new Date(date.setDate(1)).getDay();

  return Math.ceil((currentDate + firstDay) / 7);
};

export const getMonth = (date: Date) => {
  const month = date.getMonth() + 1;
  return month;
};

export const formatChatTime = (timestamp: string) => {
  const date = new Date(timestamp);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};
