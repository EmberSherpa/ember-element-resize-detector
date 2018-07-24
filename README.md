# ember-element-resize-detector

[![Build Status](https://travis-ci.org/EmberSherpa/ember-element-resize-detector.svg)](https://travis-ci.org/EmberSherpa/ember-element-resize-detector)
[![npm version](https://badge.fury.io/js/ember-element-resize-detector.svg)](http://badge.fury.io/js/ember-element-resize-detector)
[![Code Climate](https://codeclimate.com/github/EmberSherpa/ember-element-resize-detector/badges/gpa.svg)](https://codeclimate.com/github/EmberSherpa/ember-element-resize-detector)
[![Dependency Status](https://david-dm.org/EmberSherpa/ember-element-resize-detector.svg)](https://david-dm.org/EmberSherpa/ember-element-resize-detector)

## Features


Installation
------------------------------------------------------------------------------

```
ember install ember-element-resize-detector
```

## Helpful Links

- ### [Live Demo](https://embersherpa.github.io/ember-element-resize-detector)

- ### [Changelog](CHANGELOG.md)

## Usage

This addon provides a `resize-detector` service and a `{{resize-detector}}` component.

### Component

This component allows you to specify what element should be monitored for change and what action should be triggered.

```hbs
{{resize-detector '#my-container' on-resize=(action 'resize')}}
<div id="my-container"></div>
```

#### ResizeDetector#selector

jQuery CSS selector for an element that should be watched.

#### ResizeDetector#on-resize

Action to be triggered when resized. The action handler will receive a hash with `width` and `height` 
as well as the element that changed sizes.


### Service

The service allows you to create components that monitor sizes of other DOM elements. 
To use the service in you need to inject into the component and add a listener.

To see a complete implementation, look at the [`{{resize-detector}}`](/EmberSherpa/ember-element-resize-detector/blob/master/addon/components/resize-detector.js) component's code.

The service provides two methods.

#### ResizeDetectorService#setup(selector, callback)

Will add a listener that'll trigger the callback when the element matching the selector changes in size.

Selector is jQuery selector that'll match the element. The detector will only watch the first matched element. I would recommend creating callbacks using [`Ember.run.bind`](http://emberjs.com/api/classes/Ember.run.html#method_bind) to ensure that
the runloop is started when the callback is called.

#### ResizeDetectorService#teardown(selector, callback)

Will remove the listener from element matching selector for given callback.

## Looking for help?
If it is a bug [please open an issue on GitHub](http://github.com/EmberSherpa/ember-element-resize-detector/issues).

## Nested Addons (or using this addon inside of an addon)

To use this addon as a dependency of another addon, you must specify this addon as a peerDependency of your addon.
This will cause the host app that's installing your addon to also install this addon in the root node_modules.
For more formation, read comment in [ember-tether library](https://github.com/yapplabs/ember-tether#using-ember-tether-in-your-own-addon).

## Credits

This addon uses [wnr/element-resize-detector](https://github.com/wnr/element-resize-detector) library. 
Lucas Wiener thank you for doing the hard to work make this performant. 
