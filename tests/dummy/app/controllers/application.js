import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Controller.extend({
  notify: service(),

  actions: {
    resize({ width, height }, element) {
      this.get('notify').info(`${element.id} resized to ${width} by ${ height }`);
    }
  }
});