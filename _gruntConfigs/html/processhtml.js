/*----------------------------------( PREPROCESS-HTML )----------------------------------*/

/**
* Grunt task around preprocess npm module.
*
* @see https://github.com/onehealth/grunt-preprocess
* @see https://github.com/onehealth/preprocess
* @see http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
*/


module.exports.tasks = {

    processhtml: {
        options: {
            data: {
                message: 'html ready on build',
                strip: true,
            },
            process: true,
        },
        dist: {
            files: [
                {
                    expand: true,
                    cwd: '<%=config.tempDir%>',
                    src: ['**/*.html', ],
                    dest: '<%=config.distDir%>',
                    ext: '.html',
                    flatten: false,
                },
            ],
        }
    },

};
