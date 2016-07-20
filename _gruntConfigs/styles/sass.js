module.exports.tasks = {


    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
        options: {
            expand: true,
            outputStyle: 'expanded',
            sourceMap: true,
            sourceMapEmbed: true,
            sourceMapContents: true,
            includePaths: require('node-bourbon').includePaths
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%=config.css.scssDir%>',
                src: ['*.{scss,sass}'],
                dest: '<%=config.css.tempDir%>',
                ext: '.css'
            }]
        }
    },
};
