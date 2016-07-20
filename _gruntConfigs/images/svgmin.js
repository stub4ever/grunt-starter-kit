module.exports.tasks = {

    svgmin: {
        dist: {
        files: [{
                expand: true,
                cwd: '<%=config.img.srcDir%>',
                src: '{,*/}*.svg',
                dest: '<%=config.img.distDir%>'
            }]
        }
    },
};
