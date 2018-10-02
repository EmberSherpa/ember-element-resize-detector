import Ember from 'ember';
import layout from '../templates/components/resize-detector';

const {
  inject: { service },
  run: { scheduleOnce, bind }
} = Ember;

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
    let $el = Ember.$(element);
    this.get('on-resize')({
      width: $el.width(),
      height: $el.height()
    }, element);
  },

  willDestroyElement() {
    this.teardown();

    this._super(...arguments);
  }
}).reopenClass({
  positionalParams: ['selector']
});
