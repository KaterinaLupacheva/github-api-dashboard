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
