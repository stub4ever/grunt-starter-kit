/**
 * Global Grunt
 * Has all the Grunt tasks grouped into specific js files
 */

// Configurable paths
module.exports = {

    //PROJECT settings
    src : "./_gruntConfigs/**/*.js",


    /*----------------------------------( port vars )----------------------------------*/

    port : {
        host: 'localhost',
        dev: 8000,
        dist: 9000,
    },

    /*----------------------------------( Dir vars )----------------------------------*/

    srcDir  : 'app',    // <%=config.srcDir%>
    distDir : 'dist',   // <%=config.distDir%>
    tempDir : '.tmp',   // <%=config.tempDir%>


    /*----------------------------------( bower var )----------------------------------*/

    bower : {
        srcDir : 'bower_components'     // <%=config.bower.srcDir%>
    },


    /*----------------------------------( css vars )----------------------------------*/

    css : {
        /*-- SOURCES FOLDERS ---------------------------------------------*/
        srcDirSass  : '<%=config.srcDir%>/styles',     // <%=config.css.srcDirSass%>
        srcDirFonts  : '<%=config.css.srcDirSass%>/fonts',     // <%=config.css.srcDirFonts%>

        srcDevList : [                                      // <%=config.css.srcDevList%>
            '<%=config.css.tempDir%>/{,*/}*.css',
            '<%=config.css.srcDirSass%>/{,*/}*.css',
        ],
        srcVendorList : [                                  // <%=config.css.srcVendorList%>
            './bower_components/normalize-css/normalize.css',
        ],


        /*-- DIST FOLDERS ---------------------------------------------*/
        distDir  : '<%=config.distDir%>/styles',    // <%=config.css.distDir%>

        distDevFile : '<%=config.css.distDir%>/main.min.css',    // <%=config.css.distDevFile%>
        distVendorFile : '<%=config.css.distDir%>/vendor.min.css',    // <%=config.css.distVendorFile%>

        /*-- TEMP FOLDERS ---------------------------------------------*/
        tempDir  : '<%=config.tempDir%>/styles',          // <%=config.css.tempDir%>
        tempDirConcat : '<%=config.css.tempDir%>/concat', // <%=config.css.tempDirConcat%>

        tempDevConcatFile : 'main.css',         // <%=config.css.tempDevConcatFile%>
        tempVendorConcatFile : 'vendor.css',    // <%=config.css.tempVendorConcatFile%>
    },


    /*----------------------------------( js vars )----------------------------------*/

    js : {
        /*-- SOURCES FOLDERS ---------------------------------------------*/
        srcDir : '<%=config.srcDir%>/scripts',       // <%=config.js.srcDir%>
        srcFile : 'main.js',                         // <%=config.js.srcFile%>

        srcDevList : [                                     // <%=config.js.srcDevList%>
            '<%=config.js.tempDir%>/*.js',
            '<%=config.js.tempDir%>/app/*.js'
        ],
        srcVendorList : [                                  // <%=config.js.srcVendorList%>
            './bower_components/jquery/dist/jquery.js',
        ],
        srcPluginsList : [                                 // <%=config.js.srcPluginsList%>
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/button.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/popover.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
        ],

        /*-- DIST FOLDERS ---------------------------------------------*/
        distDir : '<%=config.distDir%>/scripts',            // <%=config.js.distDir%>

        distDevFile : '<%=config.js.distDir%>/main.min.js',    // <%=config.js.distDevFile%>
        distVendorFile : '<%=config.js.distDir%>/vendor.min.js',    // <%=config.js.distVendorFile%>
        distPluginsFile : '<%=config.js.distDir%>/plugins.min.js',    // <%=config.js.distPluginsFile%>

        /*-- TEMP FOLDERS ---------------------------------------------*/
        tempDir : '<%=config.tempDir%>/scripts',     // <%=config.js.tempDir%>
        tempDirConcat : '<%=config.js.tempDir%>/concat', // <%=config.js.tempDirConcat%>

        tempDevConcatFile : '<%=config.js.tempDirConcat%>/main.js',         // <%=config.js.tempDevConcatFile%>
        tempVendorConcatFile : '<%=config.js.tempDirConcat%>/vendor.js',    // <%=config.js.tempVendorConcatFile%>
        tempPluginsConcaFile : '<%=config.js.tempDirConcat%>/plugins.js',   // <%=config.js.tempPluginsConcaFile%>
    },


    /*----------------------------------( img vars )----------------------------------*/

    img : {
        srcDir : '<%=config.srcDir%>/images',           // <%=config.img.srcDir%>
        distDir : '<%=config.distDir%>/images',         // <%=config.img.distDir%>

        grunticonDir : '<%=config.srcDir%>/grunticon'   // <%=config.img.grunticonDir%>
    },


    /*----------------------------------( banner vars )----------------------------------*/
    // * Short and long banners.
    // @see http://gruntjs.com/getting-started#an-example-gruntfile

    banners : {

        'short' : '/*! ' +       // <%=config.banner.short%>
            '<%= pkg.title || pkg.name %>' +
            '<%= pkg.version ? " v" + pkg.version : "" %>' +
            '<%= pkg.licenses ? " | " + _.pluck(pkg.licenses, "type").join(", ") : "" %>' +
            '<%= pkg.homepage ? " | " + pkg.homepage : "" %>' +
            ' */',

        'long' : '/**\n' +       // <%=config.banner.long%>
            ' * <%= pkg.title || pkg.name %>\n' +
            '<%= pkg.description ? " * " + pkg.description + "\\n" : "" %>' +
            ' *\n' +
            '<%= pkg.author.name ? " * @author " + pkg.author.name + "\\n" : "" %>' +
            '<%= pkg.author.url ? " * @link " + pkg.author.url + "\\n" : "" %>' +
            '<%= pkg.homepage ? " * @docs " + pkg.homepage + "\\n" : "" %>' +
            ' * @copyright Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>.\n' +
            '<%= pkg.licenses ? " * @license Released under the " + _.pluck(pkg.licenses, "type").join(", ") + ".\\n" : "" %>' +
            '<%= pkg.version ? " * @version " + pkg.version + "\\n" : "" %>' +
            ' * @date <%= grunt.template.today("yyyy/mm/dd") %>\n' +
            ' */\n\n'
    },

};

