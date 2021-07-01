const visit = require('unist-util-visit');
const toString = require('mdast-util-to-string');
const parseSelector = require('hast-util-parse-selector');
const GithubSlugger = require('github-slugger');
const slugger = new GithubSlugger();

function transformer(tree, { text = 'copy', svg = '' }) {
  visit(tree, 'element', visitor);

  function visitor(node) {
    const props = node.properties;

    if (
      node.tagName === 'div' &&
      props.className &&
      props.className.includes('nuxt-content-highlight')
    ) {
      const slugId = slugger.slug(toString(node));
      props.id = slugId;
      const button = parseSelector('button.copy-btn');

      if (svg !== '') {
        const use = parseSelector('use');
        const icon = parseSelector('svg.icon');
        // use.properties = { href: require(svg) + '#copy' };
        icon.children = [use];
        button.children = [icon, { type: 'text', value: text }];
      } else {
        button.children = [{ type: 'text', value: text }];
      }
      node.children = [...node.children, button];
      // console.log(node.children[2]);
    }
    return node;
  }
}

module.exports = allOptions => tree => {
  // console.log(allOptions);
  return transformer(tree, allOptions);
};
