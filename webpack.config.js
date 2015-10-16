var config = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: '/node_modules/'
      }
    ]
  },
  resolve: {
    alias: {
      controllers: __dirname + '/src/controllers',
      services: __dirname + '/src/services'
    }
  }
};

if (process.env.MY_TEST == 'true') {
  config.entry = {};
  config.output = {};
  config.devtool = 'inline-source-map';
  config.externals = {
    'angular': 'angular'
  }
} else {
  config.context = __dirname + '/src';
  config.entry = './index';
  config.output = {
    path: __dirname + '/build',
    filename: 'bundle.js'
  }
}

module.exports = config;
