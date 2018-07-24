/* globals module */

var options = {
  modulePrefix: '',
  filter: '//.*ember-element-resize-detector/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov'],
    autostart: true
  }
};

module.exports = options;
