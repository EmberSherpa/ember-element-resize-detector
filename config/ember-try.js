/*jshint node:true*/
module.exports = {
  "command": "ember test",
  "scenarios": [
    {
      "name": "default",
      "bower": {
        "dependencies": {}
      }
    },
    {
      "name": "ember-release",
      "bower": {
        "dependencies": {
          "ember": "components/ember#release",
          "ember-data": "components/ember-data#release"
        },
        "resolutions": {
          "ember": "release",
          "ember-data": "release"
        }
      }
    },
    {
      "name": "ember-beta",
      "bower": {
        "dependencies": {
          "ember": "components/ember#beta",
          "ember-data": "components/ember-data#beta"
        },
        "resolutions": {
          "ember": "beta",
          "ember-data": "beta"
        }
      }
    },
    {
      "name": "ember-canary",
      "bower": {
        "dependencies": {
          "ember": "components/ember#canary",
          "ember-data": "components/ember-data#canary"
        },
        "resolutions": {
          "ember": "canary",
          "ember-data": "canary"
        }
      }
    }
  ]
};
