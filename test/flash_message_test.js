module('ember-flash/flash_message_test');

test('is a notice', function() {
  var flash = Ember.FlashMessage.create();
  flash.set('type', 'notice');
  ok(flash.get('isNotice'), 'isNotice is true');
});

test('is an warning', function() {
  var flash = Ember.FlashMessage.create();
  flash.set('type', 'warning');
  ok(flash.get('isWarning'), 'isWarning is true');
});

test('is an error', function() {
  var flash = Ember.FlashMessage.create();
  flash.set('type', 'error');
  ok(flash.get('isError'), 'isError is true');
});

