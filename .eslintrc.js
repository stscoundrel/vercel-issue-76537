module.exports = {
  'extends': [
    'airbnb-base',    
    "plugin:react/recommended"
  ],
  'env': {
      'node': true,
      'es6': true,
      'jest': true,
      'cypress/globals': true,
  },
  'globals': {
    'window': true,
    'document': true,    
    'jest/globals': true,
  },
  'plugins': [
    'import',
    'react',
    'react-hooks',
    'jest',
    'cypress',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'globalReturn': true,
      'generators': false,
      'objectLiteralDuplicateProperties': false,
      'experimentalObjectRestSpread': true,
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'parser': 'babel-eslint',
  'settings': {
    'react': {
      'version': '16.10.2',
    },
    'import/resolver': {
      'node': {
        'paths': ['.']
      }
    },
  },
  'rules': {
    'semi': 0,
    'no-console': 0,
    'consistent-return' : 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
  }
}