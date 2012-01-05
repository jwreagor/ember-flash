App.flashController = Em.Object.create({
  content: null,

  contentChanged: function() {
    if (this.get('content')) {
      this.get('view').show();
      setTimeout(this.clearContent, 3000, this.get('content'), this.get('view'));
    } else {
      Who.flashQueue.contentChanged();
    }
  }.observes('content'),

  clearContent: function(content, view) {
    view.hide(function() {
      Who.flashQueue.removeObject(content);
    });
  }
});
