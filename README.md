# ember-flash

**ember-flash** is a simple flash message widget that is used to alert a user. A
message is simply given a type (notice, warning, error) and a message body and is
pushed into a queue. Once the message becomes the queue's latest message it will
display by animating a slide down pane from the top of the screen.

Please don't expect this to be an out of box experience, this is only an example,
I'm positive stylesheets and animations will need to be changed to match your app
needs. With that said, it should be fully working and operable for your EmberJS
applications.

Side note: This is also a great example of how EmberJS can be used to build widgets
for an already existing web application. The only prerequisite is EmberJS and jQuery.

## Usage

* Include all of the scripts under ``lib/``.

* Add the appropriate HTML and CSS, using the examples under ``share/``.

* Call the following when you are ready to flash a message to your users.

```javascript
    Ember.flashQueue.pushFlash('notice', 'This is the message');
```

* I prefer to map this to my application namespace, as a helper.

```javascript
    App.setFlash = function(type, mesg) {
      Ember.flashQueue.pushFlash(type, mesg);
    }
```

## Tests

To run the QUnit tests headless you'll need ``PhantomJS`` installed. You can also
open the `test/index.html` file in your web browser locally.

    $ brew install phantomjs
    $ cd test
    $ phantomjs runner.js file:///Users/you/Somewhere/ember-flash/test/index.html


## Thanks

These people contributed and are awesome.

* @[gerry3](https://github.com/gerry3)
* @[bradleypriest](https://github.com/bradleypriest)

## [License](https://www.youtube.com/watch?v=jvOge07GcO4)

[This part](https://help.github.com/articles/open-source-licensing#where-does-the-license-live-on-my-repository) [intentionally](https://github.com/cheapRoc/ember-flash/blob/master/LICENSE) left blank.
