const path = require('path');

module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs/register',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');

    const alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, '../src/components'),
    };

    // Return the altered config
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias,
      },
    };
  },
};
