const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@modules': 'src/modules',
    '@firebaseConfig': 'src/core/firebase',
    '@routes': 'src/core/routes',
    '@store': 'src/core/store',
    '@core': 'src/core',
    '@i18n': 'src/core/i18n',
    '@constants': 'src/core/constants',
    '@assets': 'src/assets',
  })(config);

  return config;
};
