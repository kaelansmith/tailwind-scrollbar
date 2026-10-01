module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2021: true,
    'jest/globals': true,
  },
  plugins: ['jest', 'jsdoc'],
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:jsdoc/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'jest/no-standalone-expect': [
      'error',
      { additionalTestBlockFunctions: ['testUnlessVersion'] },
    ],
    'jsdoc/require-jsdoc': [
      'error',
      {
        publicOnly: true,
        require: {
          ArrowFunctionExpression: true,
        },
      },
    ],
    'jsdoc/tag-lines': [
      'error',
      'never',
      {
        startLines: null,
      },
    ],
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
  },
};
