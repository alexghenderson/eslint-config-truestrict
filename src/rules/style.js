module.exports = {
  rules: {
    'indent': [2, 2],
    'arrow-parens': [2, 'always'],
    'brace-style': [2, '1tbs', {
      allowSingleLine: true,
    }],
    'quotes': [2, 'single', 'avoid-escape'],
    'camelcase': 2,
    'comma-spacing': [2, {
      before: false,
      after: true,
    }],
    'comma-style': [2, 'last'],
    'eol-last': 2,
    'func-names': 0,
    'func-style': [2, 'expression'],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
    }],
    'object-curly-spacing': [2, 'never'],
    'array-bracket-spacing': [2, 'never'],
    'max-len': [2, 80, 2],
    'new-cap': [2, {
      newIsCap: true,
      capIsNew: false,
    }],
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': [2, true],
    'no-multiple-empty-lines': [2, {max: 1}],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-extra-parens': 0,
    'no-underscore-dangle': 0,
    'one-var': [2, 'never'],
    'padded-blocks': [2, 'never'],
    'semi': [2, 'always'],
    'semi-spacing': [2, {
      before: false,
      after: true,
    }],
    'keyword-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, {
      anonymous: 'never',
      named: 'never',
    }],
    'space-infix-ops': 2,
    'spaced-comment': 2,
    'consistent-this': [2, '_this'],
  },
};
