Ember.FlashMessage = Em.Object.extend({
  type: "notice",
  message: null,

  isNotice: function() {
    return this.get("type") == "notice";
  }.property("type").cacheable(),

  isWarning: function() {
    return this.get("type") == "warning";
  }.property("type").cacheable(),

  isError: function() {
    return this.get("type") == "error";
  }.property("type").cacheable()
});
