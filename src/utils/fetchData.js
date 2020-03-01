let languages = {};

export const fetchData = async url => {
  const result = await fetch(url);
  return await result.json();
};

export const fetchAllLanguages = async repos => {
  const names = repos.filter(r => !r.fork).map(rep => rep.name);
  const langs = await fetchLanguages(names);
  langs.forEach(ar => combineLanguages(ar));
  return languages;
};

const fetchUrl = async url => {
  const languages = await fetch(url);
  return await languages.json();
};

const fetchLanguages = async names => {
  const requests = names.map(async name => {
    const url = `https://api.github.com/repos/KaterinaLupacheva/${name}/languages`;
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
