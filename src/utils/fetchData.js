let languages = {};

export const fetchData = async (url, setIsError) => {
  console.log('Fetching... ' + url);
  const result = await fetch(url);
  if (result.status === 403) {
    return setIsError({ active: true, status: 403 });
  } else if (result.status === 404) {
    return setIsError({ active: true, status: 404 });
  }
  return await result.json();
};

export const fetchAllLanguages = async (repos, user) => {
  const names = repos.filter(r => !r.fork).map(rep => rep.name);
  const langs = await fetchLanguages(names, user);
  langs.forEach(ar => combineLanguages(ar));
  return languages;
};

const fetchUrl = async url => {
  const languages = await fetch(url);
  return await languages.json();
};

const fetchLanguages = async (names, user) => {
  const requests = names.map(async name => {
    const url = `https://api.github.com/repos/${user}/${name}/languages`;
    console.log('Fetching languages ' + url);
    return await fetchUrl(url);
  });
  return Promise.all(requests);
};

const combineLanguages = data => {
  for (let [key, value] of Object.entries(data)) {
    if (languages[key]) {
      languages[key] += value;
    } else {
      languages[key] = value;
    }
  }
};
