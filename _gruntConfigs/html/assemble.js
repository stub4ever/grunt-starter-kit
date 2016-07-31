module.exports.tasks = {

    assemble: {
        options: {
            flatten: true,
            layout: 'default.hbs',
            layoutdir: '<%=config.tpl.srcDir%>/layout/',
            partials: [ '<%=config.tpl.srcDir%>/partial/**/*.hbs' ],
            data: [ '<%=config.tpl.srcDir%>/data/*.json' ]
        },
        page: {
            src: [ '<%=config.tpl.srcDir%>/pages/*.hbs' ],
            dest: '<%=config.tempDir%>'
        }
    },

};
