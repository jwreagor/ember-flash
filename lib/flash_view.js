Ember.FlashView = Ember.View.extend({
  contentBinding: 'Ember.flashController.content',
  classNameBindings: ['isNotice', 'isWarning', 'isError'],
  isNoticeBinding: 'content.isNotice',
  isWarningBinding: 'content.isWarning',
  isErrorBinding: 'content.isError',

  /**
   * callback after view has been inserted into the dom
   */
  didInsertElement: function() {
    this.$('#message').hide();
    Ember.flashController.set('view', this);
  },

  /**
   * show the view
   * @param callback function to be called after animation
   */
  show: function(callback) {
    this.$('#message').
      css({ top: '-9px' }).
      animate({ top: '40px', opacity: 'toggle' }, 700, callback);
  },

  /**
   * hide the view
   * @param callback function to be called after animation
   */
  hide: function(callback) {
    this.$('#message').
      css({ top: '40px' }).
      animate({ top: '-9px', opacity: 'toggle' }, 700, callback);
  }
});
