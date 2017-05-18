module.exports = {
  plugins: [
    'lodash-fp',
  ],

  rules: {
    'lodash-fp/consistent-compose': 0,
    'lodash-fp/no-argumentless-calls': 2,
    'lodash-fp/no-chain': 2,
    'lodash-fp/no-extraneous-function-wrapping': 2,
    'lodash-fp/no-extraneous-iteratee-args': 2,
    'lodash-fp/no-single-composition': 2,
    'lodash-fp/no-submodule-destructuring': 2,
    'lodash-fp/prefer-compact': 2,
    'lodash-fp/prefer-constant': [2, {arrowFunctions: false}],
    'lodash-fp/prefer-flat-map': 2,
    'lodash-fp/prefer-get': 2,
    'lodash-fp/prefer-identity': [2, {arrowFunctions: false}],
    'lodash-fp/use-fp': 2,
  },
};
