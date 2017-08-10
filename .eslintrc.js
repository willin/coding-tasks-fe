module.exports = {
  root: true,
  extends: [
    'dwing',
    'plugin:vue/recommended'
  ],
  rules: {
    'global-require': 0,
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
