// This file configures the development web server
// which supports hot reloading and synchronized testing.

// Require Browsersync along with webpack and middleware for it
import browserSync from 'browser-sync';
// Required for react-router browserHistory
// see https://github.com/BrowserSync/browser-sync/issues/204#issuecomment-102623643
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack-dev-config';
import proxy from 'http-proxy-middleware';

const bundler = webpack(config);

const apiProxy = proxy('/base', {
    target: 'http://localhost:8090'
    // target: 'http://10.138.42.97:8090'
});

// const apiProxy2 = proxy('/wmsrest', {
//     // target: 'http://localhost:8090'
//     target: 'http://192.168.253.12:8093'
//     //target: 'http://10.138.42.97:8080'
// });

// Run Browsersync and use middleware for Hot Module Replacement
browserSync({
    port: 8888,
    ui: {
        port: 8889
    },
    server: {
        baseDir: 'src',

        middleware: [
            apiProxy,
            // apiProxy2,
            historyApiFallback(),

            webpackDevMiddleware(bundler, {
                // Dev middleware can't access config, so we provide publicPath
                publicPath: config.output.publicPath,

                // These settings suppress noisy webpack output so only errors are displayed to the console.
                noInfo: false,
                quiet: false,
                stats: {
                    assets: false,
                    colors: true,
                    version: false,
                    hash: false,
                    timings: false,
                    chunks: false,
                    chunkModules: false
                },

                // for other settings see
                // http://webpack.github.io/docs/webpack-dev-middleware.html
            }),

            // bundler should be the same as above
            webpackHotMiddleware(bundler)
        ]
    },

    // no need to watch '*.js' here, webpack will take care of it for us,
    // including full page reloads if HMR won't work
    files: [
        'src/*.html'
    ]
});
