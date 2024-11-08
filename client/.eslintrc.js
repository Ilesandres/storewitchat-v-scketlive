module.exports = {
  overrides: [
    {
      files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
      rules: {
        'react/prop-types': 'off',
        'no-console': 'off', 
        'eqeqeq': ['error', 'always'],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        '@typescript-eslint/no-unused-vars': 'off', // Desactivar advertencia de variables no usadas
        '@typescript-eslint/no-var-requires':'off', //ignoramos los require
        'react/react-in-jsx-scope':'off', //ignora la necesidad de importar react
        'quotes':'off', //desabilita las comillas simples como regla para string

      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    ...require('globals').node,
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
