module.exports = {
  plugins: [
    'filenames',
  ],
  rules: {
    'filenames/match-regex': [2, '^[a-z0-9.-]+$', true],
  },
};
