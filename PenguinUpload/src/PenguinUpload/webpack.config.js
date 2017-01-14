var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var merge = require('webpack-merge');
var allFilenamesExceptJavaScript = /\.(?!js(\?|$))([^.]+(\?|$))/;
var utils = require('./build/utils');
var projectRoot = path.resolve(__dirname, '../');

// Configuration in common to both client-side and server-side bundles
var sharedConfig = {
  resolve: {
    extensions: ['', '.js', '.ts', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../ClientApp'),
      'assets': path.resolve(__dirname, '../ClientApp/assets'),
      'components': path.resolve(__dirname, '../ClientApp/components'),
      vue: 'vue/dist/vue.js'
    }
  },
  output: {
    filename: '[name].js',
    publicPath: '/dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
  },
  module: {
    loaders: [{
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  }
};

// Configuration for client-side bundle suitable for running in browsers
var clientBundleConfig = merge(sharedConfig, {
  //entry: { 'main-client': './build/dev-client.js' },
  entry: {
    // The loader will follow all chains of reference from this entry point...
    main: ['./ClientApp/main.js']
  },
  output: {
    path: path.join(__dirname, './wwwroot/dist')
  },
  devtool: isDevBuild ? 'inline-source-map' : null,
  plugins: [
    //new webpack.DllReferencePlugin({
    //    context: __dirname,
    //    manifest: require('./wwwroot/dist/vendor-manifest.json')
    //})
  ].concat(isDevBuild ? [] : [
    // Plugins that apply in production builds only
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ])
});

// Configuration for server-side (prerendering) bundle suitable for running in Node
var serverBundleConfig = merge(sharedConfig, {
  //entry: { 'main-server': './build/dev-server.js' },
  entry: {
    // The loader will follow all chains of reference from this entry point...
    main: ['./ClientApp/main.js']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, './ClientApp/dist')
  },
  target: 'node',
  devtool: 'inline-source-map',
  externals: [nodeExternals({
    whitelist: [allFilenamesExceptJavaScript]
  })] // Don't bundle .js files from node_modules
});

module.exports = [clientBundleConfig, serverBundleConfig];