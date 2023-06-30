module.exports = {
  env: {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 'latest'
  },
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  rules: {
    'indent': ['error', 2],
    'semi': 'error',
    'arrow-body-style': 0,
    'object-curly-spacing': 0,
    'react/jsx-fragments': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': 0,
    'react/function-component-definition': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/require-default-props': [1, { ignoreFunctionalComponents: true }],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
      },
    ],
    'react/jsx-handler-names': [
      2,
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    'react/jsx-no-bind': [
      2,
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: true,
        allowBind: false,
      },
    ],
    
    'import/prefer-default-export': 0,
    
    'no-console': ['error', { allow: ['error'] }],
    
    'consistent-return': 0,
    
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/object-curly-spacing': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ImportDeclaration[source.value=/^lodash([.]|$)/]',
        message:
              "Import individual methods from the Lodash module.\nExample: import methodName from 'lodash/methodName'",
      },
    ],
  },
};
