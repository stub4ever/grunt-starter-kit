/*----------------------------------( MODERNIZR )----------------------------------*/

/**
* Modernizr test references and save out a minified, uglified,
* customized version using only the tests you've used in your JavaScript or (S)CSS
*
*
* @see https://github.com/Modernizr/grunt-modernizr
*/

module.exports.tasks = {

    modernizr: {
        dev: {      // set dest inside bower_components
            'dest' : 'bower_components/modernizr-custom.min.js',
            'uglify': true
        }
    },

};
