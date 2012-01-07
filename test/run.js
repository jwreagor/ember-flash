var connect = require('connect'),
    argv = require('optimist');

connect(
  connect.logger(),
  connect.static(__dirname)
).listen(argv.port || 4000);
