require('dotenv').config({path: `${__dirname}/.env`});
const webpack = require('webpack');
const path = require('path');
import * as fs from 'fs';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dev = process.env.NODE_ENV !== 'production';
// Uncomment if you'd like to analyze the Webpack Bundles
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

module.exports = (env: any) => {
    return ({
        output: {
            path: resolveApp('dist'),
            filename: 'powerup-[name]-[contenthash].js',
            library: 'react',
            clean: true
        },
        entry: {
            capabilities: resolveApp(path.join('src', 'capabilities.ts')),
            addon: resolveApp(path.join('src', 'addon.tsx'))
        },
        module: {
            rules: [
                {
                    test: /\.hbs$/,
                    loader: 'handlebars-loader'
                },
                {
                    test: /\.tsx?$/,
                    loader: 'babel-loader',
                    exclude: [
                        /(node_modules)/,
                        path.join(path.resolve(__dirname, 'src'), 'dev-watch.ts')
                    ],
                    options: {
                        // This is a feature of `babel-loader` for Webpack (not Babel itself).
                        // It enables caching results in ./node_modules/.cache/babel-loader/
                        // directory for faster rebuilds.
                        cacheDirectory: true,
                        plugins: [
                            dev && require.resolve('react-refresh/babel'),
                        ].filter(Boolean),
                    },
                },
                {
                    test: /\.js$/,
                    use: ['source-map-loader'],
                    enforce: 'pre',
                    exclude: /(node_modules)/
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'sass-loader'
                    ],
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    },
                },
            ],
        },
        devtool: !env.WEBPACK_BUILD ? 'source-map' : undefined,
        plugins: [
            new webpack.EnvironmentPlugin([
                'NODE_ENV',
                'PORT',
                'POWERUP_NAME',
                'POWERUP_ID',
                'POWERUP_APP_KEY',
                'CONTEXT_PATH',
                'OPTRO_API_KEY'
            ]),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'static', to: 'static' },
                ],
            }),
            new MiniCssExtractPlugin(),
            // new BundleAnalyzerPlugin(),
            new HtmlWebpackPlugin({
                chunks: ['capabilities'],
                template: 'templates/index.hbs',
                favicon: 'static/favicon.png',
                filename: 'index.html',
                templateParameters: {
                    powerup_id: process.env.POWERUP_ID,
                    powerup_name: process.env.POWERUP_NAME
                }
            }),
            new HtmlWebpackPlugin({
                chunks: ['addon'],
                template: 'templates/react.hbs',
                favicon: 'static/favicon.png',
                filename: 'attachment-section.html',
                templateParameters: {
                    powerup_name: process.env.POWERUP_NAME,
                    powerup_app_key: process.env.POWERUP_APP_KEY
                }
            }),
            new HtmlWebpackPlugin({
                chunks: ['addon'],
                template: 'templates/react.hbs',
                favicon: 'static/favicon.png',
                filename: 'card-button.html',
                templateParameters: {
                    powerup_name: process.env.POWERUP_NAME,
                    powerup_app_key: process.env.POWERUP_APP_KEY
                }
            }),
            new HtmlWebpackPlugin({
                chunks: ['addon'],
                template: 'templates/react.hbs',
                favicon: 'static/favicon.png',
                filename: 'card-back-section.html',
                templateParameters: {
                    powerup_name: process.env.POWERUP_NAME,
                    powerup_app_key: process.env.POWERUP_APP_KEY
                }
            }),
            new HtmlWebpackPlugin({
                chunks: ['addon'],
                template: 'templates/react.hbs',
                favicon: 'static/favicon.png',
                filename: 'board-button.html',
                templateParameters: {
                    powerup_name: process.env.POWERUP_NAME,
                    powerup_app_key: process.env.POWERUP_APP_KEY
                }
            }),
            new HtmlWebpackPlugin({
                chunks: ['addon'],
                template: 'templates/react.hbs',
                favicon: 'static/favicon.png',
                filename: 'show-authorization.html',
                templateParameters: {
                    powerup_name: process.env.POWERUP_NAME,
                    powerup_app_key: process.env.POWERUP_APP_KEY
                }
            }),
            new HtmlWebpackPlugin({
                chunks: ['addon'],
                template: 'templates/react.hbs',
                favicon: 'static/favicon.png',
                filename: 'show-settings.html',
                templateParameters: {
                    powerup_name: process.env.POWERUP_NAME,
                    powerup_app_key: process.env.POWERUP_APP_KEY
                }
            }),
            !env.WEBPACK_BUILD && new webpack.HotModuleReplacementPlugin(),
            !env.WEBPACK_BUILD && new ReactRefreshWebpackPlugin(),
        ].filter(Boolean),
        optimization: !env.WEBPACK_BUILD ? {
            minimize: true,
            usedExports: 'global',
            splitChunks: {
                chunks: 'async',
                minSize: 50000,
                maxSize: 244000,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        } : undefined,
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.css']
        },
        devServer: !env.WEBPACK_BUILD ? {
            contentBase: path.join(__dirname, 'dist'),
            public: `${env.POWERUP_URL}`,
            hot: true,
            port: 3000,
            disableHostCheck: true,
            stats: {
                colors: true,
                hash: false,
                version: false,
                timings: false,
                assets: false,
                chunks: false,
                modules: false,
                reasons: true,
                children: false,
                source: false,
                errors: true,
                errorDetails: true,
                warnings: true,
                publicPath: false
            }
        } : undefined,
        mode: env.WEBPACK_BUILD ? 'production' : 'development'
    });
};
