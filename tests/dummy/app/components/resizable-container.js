import Ember from 'ember';

const {
  String: { htmlSafe },
  computed
} = Ember;

export default Ember.Component.extend({
  classNames: ['resizable-container'],
  
  style: computed('height', 'width', function(){
    return htmlSafe(`height: ${this.get('height')}px; width: ${this.get('width')}px;}`);
  })
});