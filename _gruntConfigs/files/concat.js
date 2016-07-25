/*----------------------------------( CONCAT )----------------------------------*/

/**
* concatenate files
*
* @see
* @see
*/

module.exports.tasks = {

    concat: {
        css_dev: {
            files: {
                '<%=config.css.tempDirConcat%>/<%=config.css.tempDevConcatFile%>': '<%=config.css.srcDevList%>'
            }
        },
        css_vendor: {
            files: {
                '<%=config.css.tempDirConcat%>/<%=config.css.tempVendorConcatFile%>': '<%=config.css.srcVendorList%>'
            }
        },
        js_dev: {
            files: {
                '<%=config.js.tempDevConcatFile%>': '<%=config.js.srcDevList%>'
            }
        },
        js_vendor: {
            files: {
                '<%=config.js.tempVendorConcatFile%>': '<%=config.js.srcVendorList%>'
            }
        },
        Js_plugins: {
            files: {
                '<%=config.js.tempPluginsConcaFile%>': '<%=config.js.srcPluginsList%>'
            }
        },
    },

};


