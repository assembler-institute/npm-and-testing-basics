const http = require('http');
const gulp = require('gulp');
const util = require('./src/date');


const hostname = '127.0.0.1';
const port = 3000;


function copy(cb) {
  gulp.src('src/*.js').pipe(gulp.dest('dist'));
  cb();
}


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(util.getFullDate());
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

exports.copy = copy;
