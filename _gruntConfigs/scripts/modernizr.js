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
        dist: {
            devFile: '<%=config.js.srcDir%>/lib/modernizr/modernizr.js',
            dest: '<%=config.js.tempDir%>/lib/modernizr.min.js',
            files: {
                'src': [
                    ['<%=config.js.tempDevConcatFile%>'],
                    ['<%=config.css.tempDevConcatFile%>']
                ]
            },
            uglify: true,
            parseFiles: true
        }
    },

};
