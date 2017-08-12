require.config({
  paths: {
    "jquery": "../js/jquery"
　}
});

define('myModule', ['jquery'], function($) {
  $('body').text('hello world');
});
