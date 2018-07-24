'use strict';
var path = require('path');
var dirname = path.dirname;
var join = path.join;
var resolve = path.resolve;
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-element-resize-detector',

  included: function(app) {
    if (app.app) {
      app = app.app;
    }
    this.app = app;

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import('vendor/element-resize-detector/element-resize-detector.js');
    }
  },

  treeForVendor: function(tree) {
    var trees = [];

    if (tree) {
      trees.push(tree);
    }

    var erdSrc = dirname(require.resolve('element-resize-detector'));
    var erdPath = resolve(join(erdSrc, '..', 'dist'));
    var erdTree = new Funnel(this.treeGenerator(erdPath), {
      srcDir: '/',
      files: ['element-resize-detector.js'],
      destDir: 'element-resize-detector'
    });

    trees.push(erdTree);

    return mergeTrees(trees);
  }
};
