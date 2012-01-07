Ember.flashController = Ember.Object.create({
  content: null,

  contentChanged: function() {
    if (this.get('content')) {
      this.get('view').show();
      setTimeout(this.clearContent, 3000, this.get('content'), this.get('view'));
    } else {
      Ember.flashQueue.contentChanged();
    }
  }.observes('content'),

  clearContent: function(content, view) {
    view.hide(function() {
      Ember.flashQueue.removeObject(content);
    });
  }
});
