module.exports.tasks = {

    clean: {
        dist: {
            files: [{
                dot: true,
                src: [
                    '<%=config.tempDir%>',
                    '<%=config.distDir%>/*',
                    '!<%=config.distDir%>/.git*',
                ]
            }]
        },
        server: '<%=config.tempDir%>'
    },
};

   // Empties folders to start fresh

