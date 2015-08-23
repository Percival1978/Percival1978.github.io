module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            all_src : {
                options : {
                    sourceMap : true,
                    sourceMapName : 'js/sourceMap.map'
                },
                src : 'js/app.js',
                dest : 'js/app.min.js'
            }
        },
        less: {
            dist: {
                src: 'css/main.less',
                dest: 'css/main.min.css'
            },
            options: {
                cleancss:true,
                ieCompat:true
            }
        },
        watch:{
            scripts: {
                files: [
                    'js/*.js',
                    'css/*.less'

                ],
                tasks: ['uglify','less','livereload'],
                options: {
                    livereload:true
                }
            }
        },
        livereload:{
            options: {
            base: '/',
        },
        files: [
          'js/*.js',
          'css/*.less'
            ]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-livereload');
    grunt.registerTask('default',['uglify','less','watch','livereload']);
};
