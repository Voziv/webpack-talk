`npm install -g grunt-cli` - First we need to make sure the grunt-cli tool is installed globally.

`npm install -D grunt grunt-sass grunt-contrib-uglify grunt-contrib-watch`

Note: Why `grunt-sass` instead of `grunt-contrib-sass`? http://www.adelineyaw.com/grunt-sass-plugins/
TL;DR is that `grunt-sass` is faster (c++ lib), but lacks some newer features (sass 3.x stuff). `grunt-contrib-sass` uses the official ruby method of compiling and is up to date.