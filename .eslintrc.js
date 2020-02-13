module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    amd: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    'airbnb-base',
    'prettier',
    'prettier/react',
    'plugin:react/recommended'
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // overrides for the front-end compile
    'no-var': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'warn',
    'react/prop-types': 0,
    'prefer-arrow-callback': 'warn',
    'prefer-destructuring': 'warn',
    'no-console': 'warn',
    'no-plusplus': 'warn',
    'no-underscore-dangle': 'off',
    'new-cap': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none'
      }
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-direct-mutation-state': 'warn',
    'no-use-before-define': 'warn',
    'no-param-reassign': 'warn',
    'consistent-return': 'warn',
    'no-nested-ternary': 'warn',
    'no-return-assign': 'warn',
    'global-require': 'warn',
    'import/no-cycle': 'warn',
    'max-classes-per-file': 'warn',
    camelcase: 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}
