const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .styles([
        'resources/views/assets/css/animated.css',
        'resources/views/assets/css/bootstrap.min.css',
        'resources/views/assets/css/fontawesome.css',
        'resources/views/assets/css/owl.css',
        'resources/views/assets/css/templatemo-seo-dream.css',
    ], 'public/assets/css/libs.css')

    .scripts([
        'resources/views/assets/js/jquery.min.js'
    ], 'public/assets/js/jquery.min.js')

    .scripts([
        'resources/views/assets/js/bootstrap.bundle.min.js',
        'resources/views/assets/js/owl-carousel.js',
        'resources/views/assets/js/animation.js',
        'resources/views/assets/js/imagesloaded.js',
        'resources/views/assets/js/custom.js'
    ], 'public/assets/js/libs.js')

    .copyDirectory('resources/views/assets/css/bootstrap.css.map', 'public/assets/css/bootstrap.css.map')
    .copyDirectory('resources/views/assets/fonts', 'public/assets/fonts')
    .copyDirectory('resources/views/assets/images', 'public/assets/images')

    .copyDirectory('resources/views/assets/js/', 'public/assets/js/app.js')
    .copyDirectory('resources/views/assets/js/', 'public/assets/js/bootstrap.bundle.min.js.map')
    .copyDirectory('resources/views/assets/js/', 'public/assets/js/bootstrap.js')
    .copyDirectory('resources/views/assets/js/', 'public/assets/js/bootstrap.min.js')
    .copyDirectory('resources/views/assets/js/', 'public/assets/js/isotope.js')
    .copyDirectory('resources/views/assets/js/', 'public/assets/js/jquery.js')
    .copyDirectory('resources/views/assets/js/', 'public/assets/js/jquery.min.map')
    .copyDirectory('resources/views/assets/js/', 'public/assets/js/jquery.slim.js')
    .copyDirectory('resources/views/assets/js/', 'public/assets/js/jquery.slim.min.js')
    .copyDirectory('resources/views/assets/js/', 'public/assets/js/jquery.slim.min.map')
    .copyDirectory('resources/views/assets/js/', 'public/assets/js/tabs.js')

    .options({
        processCssUrls: false
    })
    .version()

;
