/*----------------------------------( FILESIZEGZIP )----------------------------------*/

/**
* Optimize by Output gzip file size information
*
* @see https://github.com/mrmartineau/grunt-filesizegzip
*
*/


module.exports.tasks = {

    filesizegzip: {
        options: {
            gzip: true
        },
        dist_js: {
            src: '<%=config.js.distDir%>/**/*.js'
        },
        dist_css: {
            src: '<%=config.css.distDir%>/**/*.css'
        }
    },

};


