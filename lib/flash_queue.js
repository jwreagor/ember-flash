Ember.flashQueue = Ember.ArrayProxy.create({
  /**
   * all of the FlashMessages waiting to be displayed
   */
  content: [],

  /**
   * callback for when the queue's content has changed
   */
  contentChanged: function() {
    var current = Ember.flashController.get('content');

    if (current != this.objectAt(0)) {
      Ember.flashController.set('content', this.objectAt(0));
    }
  }.observes("content.@each"),

  /**
   * instantiates a FlashMessage and pushes onto the queue
   *
   * @param type the type of message
   * @param message the message body
   */
  pushFlash: function(type, message) {
    this.pushObject(Ember.FlashMessage.create({
      message: message,
      type: type
    }));
  }
});
