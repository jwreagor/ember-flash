ember-flash
===========

**ember-flash** is a simple flash message widget that is used to alert a user. A message is simply given a type (notice, warning, error) and a message body and is pushed into a queue. Once the message becomes the queue's latest message it will display by animating a slide down pane from the top of the screen.

Please don't expect this to be an out of box experience, this is only an example, I'm positive stylesheets and animations will need to be changed to match your app needs. With that said, it should be fully working and operable for your EmberJS applications.

Example
-------

Coming soon... read the source and tests for now.

Tests
-----

To run the qunit tests you'll need phantomjs installed. You can also open the `test/index.html` file in your web browser.

    $ brew install phantomjs
    $ cd test
    $ phantomjs runner.js file:///Users/you/Somewhere/ember-flash/test/index.html


