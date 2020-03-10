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
  data.forEach(week => {
    result.push({
      x: new Date(week.week * 1000).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: '2-digit',
      }),
      y: week.total,
    });
  });
  return result;
};

export const dataForStackChart = data => {
  const result = [];
  const owner = [];
  const contributors = [];
  data.owner.forEach((a, i) => owner.push({ x: i + 1, y: a }));
  data.all.forEach((a, i) => {
    const ownerCommits = owner.find(el => el.x === i + 1).y;
    contributors.push({ x: i + 1, y: a - ownerCommits });
  });
  result.push(owner);
  result.push(contributors);
  return result;
};
