
/*----------------------------------( NOTIFY )----------------------------------*/

/**
* Run some tasks in parallel to speed up build process
*
* @see https://github.com/sindresorhus/grunt-concurrent
*
*/


module.exports.tasks = {
    // https://github.com/studiodumbar/altair/blob/master/grunt/config/notify.js

    notify: {
        templates: {
           options: {
                title: "Task Complete (<%= pkg.author %>)", // optional; defaults to the name in package.json, or will use project directory's name
                message: 'Assemble finished running', // required
            },
        },
        styles: {
           options: {
                title: "Task Complete (<%= pkg.author %>)", // optional; defaults to the name in package.json, or will use project directory's name
                message: 'Sass finished running', // required
            },
        },
        grunticon: {
            options: {
                title: "Task Complete (<%= pkg.author %>)", // optional; defaults to the name in package.json, or will use project directory's name
                message: 'Grunticon finished running', // required
            },
        },
        scripts: {
            options: {
                title: "Task Complete (<%= pkg.author %>)", // optional; defaults to the name in package.json, or will use project directory's name
                message: 'Scripts finished running', // required
            },
        },
        server: {
            options: {
                title: "Task Complete (<%= pkg.author %>)", // optional; defaults to the name in package.json, or will use project directory's name
                message: 'Server is ready!', // required
            },
        },
        config: {
            options: {
                title: "Task Complete (<%= pkg.author %>)", // optional; defaults to the name in package.json, or will use project directory's name
                message: 'Config is updated!', // required
            },
        },
        release: {
            options: {
                title: "Task Complete (<%= pkg.author %>)", // optional; defaults to the name in package.json, or will use project directory's name
                message: 'Production is ready!', // required
            },
        },
    }

};




