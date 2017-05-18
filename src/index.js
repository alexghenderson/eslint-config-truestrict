module.exports = {
  settings: {
    react: {
      pragma: 'createElement',
    },
  },
  "parserOptions": {
    "sourceType": "module"
  },
  extends: [
    './rules/best-practices.js',
    './rules/docs.js',
    './rules/errors.js',
    './rules/filenames.js',
    './rules/import.js',
    './rules/style.js',
    './rules/babel.js',
    './rules/modern.js',
    './rules/jsx.js',
    './rules/react.js',
  ].map(require.resolve)
}
