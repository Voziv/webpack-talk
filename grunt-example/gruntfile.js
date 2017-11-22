module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg    : grunt.file.readJSON('package.json'),
        watch  : {
            sass : {
                files   : ['assets/scss/**/*.scss'],
                tasks   : ['sass'],
                options : {
                    atBegin   : true,
                    spawn     : false,
                    interrupt : true
                }
            }
        },
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build   : {
                src  : 'src/<%= pkg.name %>.js',
                dest : 'build/<%= pkg.name %>.min.js'
            }
        },
        sass   : {
            options : {
                sourceMap : true
            },
            dist    : {
                files : {
                    'dist/css/app.css' : 'assets/scss/app.scss'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    // Default task(s).
    grunt.registerTask('default', ['sass']);

};