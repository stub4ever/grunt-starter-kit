/*----------------------------------( COPY )----------------------------------*/

/**
* Copy files and folders.
*
* @see https://github.com/gruntjs/grunt-contrib-copy
* @see http://gruntjs.com/configuring-tasks#globbing-patterns
*/

module.exports.tasks = {

    copy: {
        html: {
            files: [
                {   // Copy Html to Dist
                    expand: true,
                    dot: true,
                    cwd: '<%=config.tempDir%>',
                    src: ['{,*/}*.html'],
                    dest: '<%=config.distDir%>',
                    filter: 'isFile',
                    flatten: false
                },
            ],
        },
        css: {
            files: [
                {   // Copy Css to Dist
                    expand: true,
                    dot: true,
                    cwd: '<%=config.css.tempDirConcat%>',
                    src: ['*.css'],
                    dest: '<%=config.css.distDir%>',
                    filter: 'isFile',
                    flatten: false
                },
            ],
        },
        js: {
            files: [
                {   // Copy js to Dist
                    expand: true,
                    dot: true,
                    cwd: '<%=config.js.tempDirConcat%>',
                    src: ['*.js'],
                    dest: '<%=config.js.distDir%>',
                    filter: 'isFile',
                    flatten: false
                },
                {   // Copy Liberary File to Dist
                    expand: true,
                    dot: true,
                    cwd: '<%=config.js.tempDir%>/lib/',
                    src: ['*.min.js'],
                    dest: '<%=config.js.distDir%>/lib/',
                    filter: 'isFile',
                    flatten: false
                },
            ],
        },
        fonts: {
            files: [
                {   // Copy Src Fonts to Dist
                    expand: true,
                    dot: true,
                    cwd: '<%=config.srcDir%>',
                    src: ['<%=config.css.srcDirFonts%>/{,*/}*.*'],
                    dest: '<%=config.distDir%>',
                    filter: 'isFile',
                    flatten: false
                },
                {   // Copy Bootstrap Fonts to Dist
                    expand: true,
                    dot: true,
                    cwd: '.',
                    src: '<%=config.bower.srcDir%>/bootstrap-sass/assets/fonts/bootstrap/*',
                    dest: '<%=config.distDir%>'
                },
            ],
        },
        img: {
            files: [
                {   // Copy new image format for the web to Dist
                    expand: true,
                    dot: true,
                    cwd: '<%=config.img.srcDir%>',
                    src: ['{,*/}*.webp'],
                    dest: '<%=config.img.distDir%>',
                    filter: 'isFile',
                    flatten: false
                },
            ],
        },
        icons: {
            files: [
                {   // Copy Icon ico + png files to Dist
                    expand: true,
                    dot: true,
                    cwd: '<%=config.ico.srcDir%>',
                    src: ['{,*/}*.{ico,png}'],
                    dest: '<%=config.ico.distDir%>',
                    filter: 'isFile',
                    flatten: false
                },
            ],
        },
        others: {
            files: [
                {   // Copy Others to Dist
                    expand: true,
                    dot: true,
                    cwd: '<%=config.srcDir%>',
                    src: ['{,*/}*.txt'],
                    dest: '<%=config.distDir%>',
                    filter: 'isFile',
                    flatten: false
                },
            ],
        },
    },
    // Optionally, add more generated files here ...

};


