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
        server: '<%=config.tempDir%>',
        css_server: '<%=config.css.tempDir%>',
        js_server: '<%=config.js.tempDir%>',
    },
};

   // Empties folders to start fresh

