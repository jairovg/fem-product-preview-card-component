const isConfig = (token) => token.attributes.category === 'config';
const isColor = (token) => token.attributes.category === 'color'
  || token.attributes.type === 'color';
const isBaseColor  = (token) => isConfig(token) && isColor(token);

export default {
  source: ['dictionaries/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'fem',
      buildPath: 'dist/css/',
      files: [
        {
          destination: '_colors.css',
          format: 'css/variables',
          filter: (token) => isColor(token) && !isBaseColor(token),
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      prefix: 'fem',
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables',
          filter: (token) => !isConfig(token) && !isColor(token),
        },
        {
          destination: '_mixins.scss',
          format: 'scss/mixin',
        },
      ],
    },
  },
};
