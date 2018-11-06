/* global elementResizeDetectorMaker */

import Ember from 'ember';

const {
  Logger: { error }
} = Ember;

export default Ember.Service.extend({

  init() {
    this._super(...arguments);
    this.detector = elementResizeDetectorMaker({
      strategy: "scroll"
    });
  },

  setup(selector, callback) {
    let element = document.querySelector(selector)
    if (!element) {
      error(`service:resize-detector - could not find an element matching ${selector}`);
      return;
    }
    this.detector.listenTo(element, callback);
  },

  teardown(selector, callback) {
    let element = document.querySelector(selector)
    if (element) {
      this.detector.removeListener(element, callback);
    }
  }

});
