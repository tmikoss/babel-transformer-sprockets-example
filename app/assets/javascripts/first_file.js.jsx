//= require ./second_file

console.log('I should be the second log statement');

var key = 'key'

// Following line causes babel to break sprockets.
// It inlines a polyfill at the top of the page, and sprockets no longer processes the requires.
var object = { [key]: 'value' }
