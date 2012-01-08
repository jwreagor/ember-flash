module('ember-flash/flash_message_test', {
  setup: function() {
    this.flash = Ember.FlashMessage.create();
  }
});

test('is a notice', function() {
  this.flash.set('type', 'notice');

  ok(this.flash.get('isNotice'), 'isNotice is true');
});

test('is a warning', function() {
  this.flash.set('type', 'warning');

  ok(this.flash.get('isWarning'), 'isWarning is true');
});

test('is an error', function() {
  this.flash.set('type', 'error');

  ok(this.flash.get('isError'), 'isError is true');
});
