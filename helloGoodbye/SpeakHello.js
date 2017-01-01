// Wrap the entire contents of SpeakHello.js inside of an IIFE
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speak = function (name) {
  	console.log(speakWord + " " + name);
  }
  // Expose the 'helloSpeaker' object to the global scope.
  window.helloSpeaker = helloSpeaker;
})(window);

