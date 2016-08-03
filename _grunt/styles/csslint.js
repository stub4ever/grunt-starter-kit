/*----------------------------------( CSSLINT )----------------------------------*/

/**
* Lint css files
*
* @see https://github.com/gruntjs/grunt-contrib-csslint
*
*/

module.exports.tasks = {

    csslint: {
        base: {
            src: [
                '<%=config.css.tempDirConcat%>/<%=config.css.tempDevConcatFile%>'
            ]
        },
        options: {
            csslintrc: '.csslintrc'
        }
    },

};
