module('ember-flash/flash_controller_test', {
  setup: function() {
    this.message = Ember.FlashMessage.create({
      type: 'notice', message: 'Something'
    });

    this.view = {
      hidden: false,
      shown: false,

      show: function() {
        this.shown = true;
        this.hidden = false;
      },

      hide: function(callback) {
        callback();
        this.shown = false;
        this.hidden = true;
      }
    }

    Ember.flashController.set('view', this.view);
  }
});

asyncTest('flashes the message view', function() {
  Ember.flashQueue.pushFlash('notice', 'This is a notice message');

  setTimeout(function(view) {
    ok(view.shown, 'flash view should be displayed');

    start();
  }, 2999, this.view);

  setTimeout(function(view) {
    ok(view.hidden, 'flash view should not be displayed');

    start();
  }, 3001, this.view);
});

asyncTest('clears its content from the queue', function() {
  Ember.flashQueue.pushObject(this.message);

  setTimeout(function(queue, message) {
    equals(Ember.flashController.get('content'), message, "controller content is the message");
    equals(queue.objectAt(0), message, "message should be in the queue");

    start();
  }, 2999, Ember.flashQueue, this.message);

  setTimeout(function(queue) {
    equals(Ember.flashController.get('content'), null, "controller content is cleared");
    equals(queue.objectAt(0), null, "message should not be in the queue");

    start();
  }, 3001, Ember.flashQueue);
});