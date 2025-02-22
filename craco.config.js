const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      if (env === 'production') {
        webpackConfig.plugins.push(
          new WebpackObfuscator(
            {
              // Obfuscation için ayarları buraya ekleyebilirsiniz.
              rotateStringArray: true,
              stringArray: true,
              stringArrayEncoding: ['rc4'], // veya base64
              stringArrayThreshold: 0.75
            },
            []
          )
        );
      }
      return webpackConfig;
    }
  }
};
