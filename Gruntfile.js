module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),

   connect: {
   	server: {
   		options: {
   			port: 9002,
   			base: 'html/'
   		}
   	}
   },

   sass: {
   	dist: {
   		files: {
   			'css/main.css' : 'css/main.scss'
   		}
   	}
   },

   jade: {
  	compile: {
   		files: [{
        src: "**/*.jade",
     	  dest: "",
        ext: ".html",
        expand: true,  
        cwd: "jade/"
      }],
     	options: {
     		pretty: true
     	}
   	}
   },

   autoprefixer: {
   	options: {
   		browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
   	},
   	no_dest: {
   		src: 'css/main.css'
   	}
   },

   watch: {
   	css: {
   		files: 'css/*.scss',
   		tasks: ['sass','autoprefixer']
   	},
   	jade: {
   		files: ['jade/*.jade'],
   		tasks: ['jade']
   	},
   	options: {
   		livereload: true
   	}
   }

 });

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jade');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-connect');

 // Default task(s).
grunt.registerTask('default', ['connect','watch']);
};