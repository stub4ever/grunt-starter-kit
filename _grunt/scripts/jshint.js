/*----------------------------------( JSHINT )----------------------------------*/

/**
* Validate files with JSHint.
*
* @see https://github.com/gruntjs/grunt-contrib-jshint
* @see http://www.jshint.com/docs/
*/

module.exports.tasks = {

    jshint: {
        base: {
            src: [
                '<%=config.js.tempDevConcatFile%>'
            ]
        },
        options: {
            jshintrc: true,
        }
    },

};
