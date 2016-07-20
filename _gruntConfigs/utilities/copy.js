module.exports.tasks = {

    copy: {
        dist: {
            files:
            [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%=config.srcDir%>',
                    dest: '<%=config.distDir%>',
                    src: [
                        '*.{ico,png,txt}',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*'
                    ]
                },
                {
                    expand: true,
                    dot: true,
                    cwd: '.',
                    src: 'bower_components/bootstrap-sass/assets/fonts/bootstrap/*',
                    dest: '<%=config.distDir%>'
                }
            ]
        }
    },
};

 // Copies remaining files to places other tasks can use
    // copy: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       dot: true,
    //       cwd: '<%= config.app %>',
    //       dest: '<%= config.dist %>',
    //       src: [
    //         '*.{ico,png,txt}',
    //         'images/{,*/}*.webp',
    //         '{,*/}*.html',
    //         'styles/fonts/{,*/}*.*'
    //       ]
    //     }, {
    //       expand: true,
    //       dot: true,
    //       cwd: '.',
    //       src: 'bower_components/bootstrap-sass/assets/fonts/bootstrap/*',
    //       dest: '<%= config.dist %>'
    //     }]
    //   }
    // },
