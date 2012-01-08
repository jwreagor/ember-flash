module('ember-flash/flash_queue_test', {
  setup: function() {
    this.oldController = Ember.flashController;
    this.content = "Something";
    this.content2 = "Another";

    Ember.flashController = {
      set: function(name, content) {
        return this.content = content;
      },

      get: function(content) {
        return this.content;
      }
    }
  },

  teardown: function() {
    Ember.flashController = this.oldController;
    Ember.flashQueue.set('content', []);
  }
});

test('sets controller content on change', function() {
  Ember.flashQueue.pushObject(this.content);

  equals(this.content, Ember.flashController.get('content'), "controller content should be set");
});

test('sets controller content on change', function() {
  Ember.flashQueue.pushObject(this.content);
  Ember.flashQueue.pushObject(this.content2);

  equals(this.content, Ember.flashController.get('content'), "controller content should be set");
});

test('pushes in new flash message', function() {
  var type = 'test', message = 'this is a message';
  Ember.flashQueue.pushFlash(type, message);
  var flashMessage = Ember.flashQueue.objectAt(0);

  equals(message, flashMessage.get('message'), "should set a message");
  equals(type, flashMessage.get('type'), "should set the type");
});
