var hasBabel = false;

// Determine if we are using babel or not.
try {
  require.resolve('babel-eslint');
  hasBabel = true;
} catch (err) {
  // If we can't load babel then stop caring.
}

module.exports = {
  plugins: [
    'import',
  ],

  settings: {},
  rules: {
    'import/no-unresolved': [2, {caseSensitive: false}],
    'import/named': 2,
    'import/default': 0,
    'import/no-commonjs': 2,
    'import/no-amd': 2,
    'import/imports-first': 2,
    'import/no-duplicates': 2,
    'import/export': 2,
  },
};

// If using babel, then be sure to parse the code as ES6.
if (hasBabel) {
  module.exports.settings['import/parser'] = require.resolve('babel-eslint');
  module.exports.settings['import/resolver'] = {'babel-module': {}}
}
