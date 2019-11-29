module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.ts$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: ["@babel/preset-typescript"],
    },
  });
  config.resolve.extensions.push('.ts');
  return config;
};