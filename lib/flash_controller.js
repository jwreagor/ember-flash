Ember.flashController = Ember.Object.create({
  /**
   * currently selected message from the flashQueue
   */
  content: null,

  /**
   * callback for when the selected content has changed
   */
  contentChanged: function() {
    if (this.get('content')) {
      this.get('view').show();
      setTimeout(this.clearContent, 3000, this.get('content'), this.get('view'));
    } else {
      Ember.flashQueue.contentChanged();
    }
  }.observes('content'),

  /**
   * handles clearing out the content from the view
   *
   * @param content the content to be removed from the queue.
   * @param view the flash view to remove the content from
   */
  clearContent: function(content, view) {
    view.hide(function() {
      Ember.flashQueue.removeObject(content);
    });
  }
});
