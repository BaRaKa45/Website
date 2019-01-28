var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')
    .addStyleEntry('main', './assets/sass/main.scss')
    .addStyleEntry('header', './assets/sass/header.scss')
    .addStyleEntry('description', './assets/sass/description.scss')
    .cleanupOutputBeforeBuild()
    .enableSingleRuntimeChunk()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
;

module.exports = Encore.getWebpackConfig();
