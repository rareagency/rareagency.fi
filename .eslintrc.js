module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier.
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended'
  ],
  // most plugins append this array with their 'extends' -config
  plugins: ['react-hooks', 'sonarjs'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: { jsx: true }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    'no-invalid-this': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'import/no-default-export': 'error'
  },
  overrides: [
    {
      files: ['pages/**/*'],
      rules: {
        'import/no-default-export': 0,
        'import/no-named-export': 'error'
      }
  }
  ]
};
