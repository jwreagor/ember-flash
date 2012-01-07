App.flashQueue = Em.ArrayProxy.create({
  content: [],

  contentChanged: function() {
    var current = Who.flashController.get('content');

    if (current != this.objectAt(0)) {
      Who.flashController.set('content', this.objectAt(0));
    }
  }.observes("content.[]"),

  pushFlash: function(type, message) {
    this.pushObject(Who.FlashMessage.create({
      message: message,
      type: type
    }));
  }
});
