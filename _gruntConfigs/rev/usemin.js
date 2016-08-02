module.exports.tasks = {


    // 3) Performs rewrites based on rev and the useminPrepare configuration
    // Update asset references in HTML DIST
    usemin: {
        options: {
            assetsDirs: [
                '<%=config.distDir%>',
                '<%=config.img.distDir%>',
                '<%=config.css.distDir%>'
            ]
        },
        html: ['<%=config.distDir%>/{,*/}*.html'],
        css: ['<%=config.css.distDir%>/{,*/}*.css']
    },
};

