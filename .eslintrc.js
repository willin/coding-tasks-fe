module.exports = {
  root: true,
  extends: [
    'dwing',
    'plugin:vue/recommended'
  ],
  rules: {
    'import/extensions': [2, 'always', { js: 'never', vue: 'never' }]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.config.js'
      }
    }
  }
};
