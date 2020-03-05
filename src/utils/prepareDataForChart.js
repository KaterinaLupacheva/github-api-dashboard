import { FaCommentsDollar } from 'react-icons/fa';

export const dataForPieChart = data => {
  const result = [];
  const totalSum = Object.values(data).reduce((a, b) => a + b, 0);
  let other = 0;
  for (let [key, value] of Object.entries(data)) {
    if (!((value / totalSum) * 100 < 10)) {
      result.push({ x: key, y: value });
    } else {
      other += value;
    }
  }
  result.push({ x: 'other', y: other });
  return result;
};

export const dataForLineChart = data => {
  const result = [];
  data.forEach((week, i) => {
    if (i % 10 === 0) {
      result.push({
        x: new Date(week.week * 1000).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: '2-digit',
        }),
        y: week.total,
      });
    } else {
      result.push({
        x: '',
        y: week.total,
      });
    }
  });
  return result;
};
