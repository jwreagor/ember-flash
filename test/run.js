var connect = require('connect'),
    argv = require('optimist');

connect.createServer(
  connect.logger(),
  connect.static(__dirname)
).listen(argv.port || 4000);
