export const fetchData = async url => {
  const result = await fetch(url);
  const json = await result.json();
  return json;
};
