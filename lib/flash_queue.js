Ember.flashQueue = Ember.ArrayProxy.create({
  content: [],

  contentChanged: function() {
    var current = Ember.flashController.get('content');

    if (current != this.objectAt(0)) {
      Ember.flashController.set('content', this.objectAt(0));
    }
  }.observes("content.[]"),

  pushFlash: function(type, message) {
    this.pushObject(Ember.FlashMessage.create({
      message: message,
      type: type
    }));
  }
});
