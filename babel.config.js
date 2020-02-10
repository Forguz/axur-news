module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        targets: {
          browsers: ['last 3 versions'],
        },
      },
    ],
    ['@babel/preset-react'],
  ],
};
