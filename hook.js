var http = require('http');
var child_process = require('child_process');
var async = require('async');
var spawn = child_process.spawn;

var path = process.argv[2];
// var node;

// function restartNode(callback) {
//   if (node) {
//     node.kill();
//     node = null;
//   }
//   node = spawn('node', ['app.js'], {
//     cwd: path,
//     stdio: 'ignore'
//   });
//   if (callback)
//     callback();
// }

// restartNode();

http.createServer(function(req, res) {
  async.series([
    function(callback) {
      child_process.exec('git pull', {
        cwd: path
      }, function(err, stdout, stderr) {
        callback(err, {
          stdout: stdout,
          stderr: stderr
        });
      });
    },
    function(callback) {
      child_process.exec('npm install && npm update', {
        cwd: path
      }, callback);
    },
    // restartNode();
  ], function(err, results) {
    console.log(err, results);
    res.end();
  });
}).listen(8001);
