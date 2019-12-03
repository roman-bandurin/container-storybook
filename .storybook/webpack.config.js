const path = require('path');

module.exports = async ({ config }) => {
  config.resolve.alias = {
    "Root": path.resolve(__dirname, '../'),
    "Src": path.resolve(__dirname, '../src'),
  };
  config.module.rules.push({
    test: /\.ts$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: ["@babel/preset-typescript"],
        },
      },
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' },
      }
    ]
  });
  config.resolve.extensions.push('.ts');
  return config;
};