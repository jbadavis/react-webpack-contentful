var contentful = require('contentful');

let client;

const CONFIG = {
  space: 'by53c2kf2oty',
  accessToken: '2848816f1498bbb20ac607ce35329fa77753b93f23dfc30a3915bdca0037fbd0'
};

const initClient = () => {
  client = contentful.createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });
};

const getEntries = (type) => {
  const config = {
    'content_type': type,
    'include': 10
  };

  return client.getEntries(config).then(response => response.items);
};

const init = () => {
  initClient();
};

export {init, getEntries};
