import Ember from 'ember';
import layout from '../templates/components/resize-detector';

const {
  inject: { service },
  run: { scheduleOnce, bind }
} = Ember;

/**
 * Replacement for jQuery $.height()
 * Borrowed with thanks from https://github.com/nefe/You-Dont-Need-jQuery#2.2
 */

function getHeight(el) {
  let styles = window.getComputedStyle(el);
  let height = el.offsetHeight;
  let borderTopWidth = parseFloat(styles.borderTopWidth);
  let borderBottomWidth = parseFloat(styles.borderBottomWidth);
  let paddingTop = parseFloat(styles.paddingTop);
  let paddingBottom = parseFloat(styles.paddingBottom);
  return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
}

/**
 * Replacement function for jQuery $.width()
 * Borrowed with thanks from https://github.com/nefe/You-Dont-Need-jQuery#2.2
 */

function getWidth(el) {
  let styles = window.getComputedStyle(el);
  let width = el.offsetWidth;
  let borderLeftWidth = parseFloat(styles.borderLeftWidth);
  let borderRightWidth = parseFloat(styles.borderRightWidth);
  let paddingLeft = parseFloat(styles.paddingLeft);
  let paddingRight = parseFloat(styles.paddingRight);
  return width - borderLeftWidth - borderRightWidth - paddingRight - paddingLeft;
}


export default Ember.Component.extend({
  layout,
  tagName: '',
  resizeDetector: service(),

  didInsertElement() {
    this._super(...arguments);

    scheduleOnce('afterRender', this, this.setup);
  },

  setup() {
    this.callback = bind(this, this.onResize);
    this.get('resizeDetector').setup(this.get('selector'), this.callback);
  },

  teardown() {
    this.get('resizeDetector').teardown(this.get('selector'), this.callback);
  },

  onResize(element) {
    if (this.get('isDestroyed') || this.get('isDestroying')) {
      return;
    }
    this.get('on-resize')({
      width: getWidth(element),
      height: getHeight(element)
    }, element);
  },

  willDestroyElement() {
    this.teardown();

    this._super(...arguments);
  }
}).reopenClass({
  positionalParams: ['selector']
});
