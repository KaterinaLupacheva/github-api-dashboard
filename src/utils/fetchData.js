const TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

let languages = {};

export const fetchData = async (url, setIsError) => {
  const result = await fetch(url, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });
  if (result.status === 403) {
    return setIsError({ active: true, status: 403 });
  } else if (result.status === 404) {
    return setIsError({ active: true, status: 404 });
  }
  const res = await result.json();
  return res;
};

export const fetchAllLanguages = async (repos, user) => {
  const names = repos.filter(r => !r.fork).map(rep => rep.name);
  const langs = await fetchLanguages(names, user);
  langs.forEach(ar => combineLanguages(ar));
  return languages;
};

const fetchUrl = async url => {
  const languages = await fetch(url, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });
  return languages.json();
};

const fetchLanguages = async (names, user) => {
  const requests = names.map(async name => {
    const url = `https://api.github.com/repos/${user}/${name}/languages`;
    return fetchUrl(url);
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
