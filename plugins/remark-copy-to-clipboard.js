const extend = require('extend');

const codeblocks = (tree, options) => {
  options = options || {};

  const lang = options.lang || 'all';
  const name = options.name || 'codeblocks';
  const formatter = options.formatter || (v => v);

  const { children } = tree;
  // eslint-disable-next-line prefer-const
  let data = {};

  let child;

  if (lang === 'all') {
    data[name] = {};
  } else {
    data[name] = [];
  }
  for (let i = 0; i < children.length; ++i) {
    child = children[i];
    if (child.type === 'code' && child.value) {
      if (lang === 'all') {
        child.lang = child.lang || '_';
        data[name][child.lang] = data[name][child.lang] || [];
        data[name][child.lang].push(formatter(child.value));
      } else if (child.lang === lang) {
        data[name].push(formatter(child.value));
      }
    }
  }

  return data;
};

module.exports = options => (tree, file) => {
  const data = codeblocks(tree, options);
  file.data = extend(true, file.data, data);
};

module.exports.codeblocks = (tree, options) => codeblocks(tree, options);
