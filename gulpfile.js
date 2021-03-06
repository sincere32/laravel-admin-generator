var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    //mix.sass('app.scss');

    mix.styles([
        'fullcalendar/fullcalendar.css'
    ]);

    mix.scripts([
        'fullcalendar/fullcalendar.js',
        'fullcalendar/lang/pt-br.js',
        'jquery.plugins/jquery.cookie.js'
    ]);

    mix.browserify('main.js');

    mix.version(['css/all.css', 'js/all.js']);
});
