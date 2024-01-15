"use strict";

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

//=============================================================================
// EISLive2D.js
//=============================================================================

/*:
* @author Kino
* @plugindesc This plugin allows the developer to use live2D
* models in their RPGMakerMV game. <EISLive2D>
*
* @param models
* @text Live 2D Models
* @desc The models that will be loaded into the RPGMakerMV game.
* @type struct<Live2DModel>[]
*
* @help
* version 1.0.0
//=============================================================================
//  Introduction
//=============================================================================
*
* This is a Live2D plugin for RPGMakerMV that allows the developer to add Live2D
* models to their RPGMakerMV game.
*
* You set the path and the name for the model in the plugin parameters.
* Once that's complete, when the game starts all model information will be
* loaded and cached for use in any way you want.
*
*  When you include a model to a scene; it starts out hidden, so you
* must show to the model once it's added to a scene.
*
//=============================================================================
//  How To Use
//=============================================================================
*
* Create a Live2d folder in your project directory.
* Place your assets for your model in a folder within the live2D directory
* to be loaded by the game engine.
*
* My recommendation make an assets folders in your live2D directory.
* Then make a folder with the model name containing all the textures
* and other files for the model.
*
* Example: live2D/assets/haru/
* That folder would contain all of haru's files.
*
//=============================================================================
//  Script Calls
//=============================================================================
*
* The script calls offer more finer grained control over the model in
* game; many of the script calls also mirror the plugin commands in parameters.
*
* Many of the model's function can be accessed through the Live2DUtil
* function.
*
* Note, you can either type script calls like below or like so:
* L2D(modelName).commandName
*
* Example: L2D("haru").startRandomMotion("tap_body");
* That's all I have to add; the rest of the script calls are below.
*
* Live2DUtils.getModel(modelName).adjustScale(centerX, centerY, scale);
* Scales the sprite given the center point and also the scale factor.
*
* Example: Live2DUtils.getModel("haru").adjustScale(0.5, 0.5, 0.5);
*
* Live2DUtils.getModel(modelName).startRandomMotion(motionName);
* Starts a random motion that will loop on the model.
*
* Example: Live2DUtils.getModel("haru").startRandomMotion("tap_body");
*
* Live2DUtils.getModel(modelName).stopRandomMotion();
* Stops all random motion on the model.
*
* Example: Live2DUtils.getModel("haru").stopRandomMotion();
*
* Live2DUtils.getModel(modelName).setViewPoint(x, y);
* Sets where the model will view given x and y coordinates.
*
* Example: Live2DUtils.getModel("haru").setViewPoint(100, 100);
*
* Live2DUtils.getModel(modelName).move(x, y);
* Moves the model to the specified x and y coordinates.
*
* Example: Live2DUtils.getModel("haru").move(100, 100);
*
* Live2DUtils.getModel(modelName).show();
* Shows the model on the screen.
*
* Example: Live2DUtils.getModel("haru").show();
* 
* Live2DUtils.getModel(modelName).hide();
* Hides the model on the screen.
*
* Example: Live2DUtils.getModel("haru").hide();
*
* Live2DUtils.addModelToScene(modelName)
* Adds the model to the current RPGMakerMV scene.
*
* Example: Live2DUtils.addModelToScene("haru");
*
* -- Advanced --
*
* Live2Dutils.getModel(modelName).on(eventName, function(){ //do stuff });
*
* Live2Dutils.getModel(modelName).once(eventName, function(){ //do stuff });
*
*
* These script calls allow you to attach event handlers to your model.
* For example, you can have the model, respond to when the mouse is moved.
*
* Or, you can have the model respond to when it's clicked on.
* All of these are possible actions with the on and once methods.
* The once script call means it will only be called once; on script calls
* will be called whenever the event occurs.
*
* Example:
* Live2Dutils.getModel("haru").once("click",
* function(event){
*  const point = evt.data.global;
* Live2Dutils.getModel("haru").startRandomMotion("tap_body", 1);
* });
*
* This example means whenever the model is clicked; she will start
* the random motion called tap_body.
//=============================================================================
//  Plugin Commands
//=============================================================================
* The plugin commands mirror many of the script calls.
*
* adjustScale <centerX> <centerY> <scale>
* Scales the 2D sprite by a scale factor, given the center point of the sprite.
*
* Example: adjustScale 0.5 0.5 0.5
* This example would scale the sprite down to half it's size in game.
*
* startRandomMotion <modelName> <motionName>
* This starts a motion on the model that will be repeated and cycled
* through.
*
* Example: startRandomMotion haru tap_body
*
* stopRandomMotion <modelName>
* This stops any random motion being played by the model.
*
* Example: stopRandomMotion haru
*
* setViewPoint <modelName> <x> <y>
* Sets the model to view a specific coordinate on screen.
*
* Example: setViewPoint haru 100, 100
* 
* moveModel <modelName> <x> <y>
* This moves the Live2D model to the specified x and y coordinates on
* the screen.
*
* Example: moveModel haru 200 300
*
* showModel <modelName> 
* Shows the specified model on screen.
*
* Example: showModel haru
*
* hideModel <modelName>
* Hides the specified model on screen.
*
* Example: hideModel haru
*
* addToScene <modelName>
* Adds a model to the current RPGMakerMV scene.
*
* Example: addToScene haru
*
//=============================================================================
//  Contact Information
//=============================================================================
*
* Contact me via twitter: EISKino, or on the rpg maker forums.
* Username on forums: Kino.
*
* Forum Link: http://forums.rpgmakerweb.com/index.php?/profile/75879-kino/
* Website Link: http://endlessillusoft.com/
* Twitter Link: https://twitter.com/EISKino
* Patreon Link: https://www.patreon.com/EISKino
*
* Hope this plugin helps, and enjoy!
* --Kino
*/
/*~struct~Live2DModel:
 *
 * @param name
 * @text Key, Name, Symbol
 * @desc A name that can be used to call the model on to the game scene; it's
 * case sensitive.
 *
 * @param modelPath
 * @text Model path
 * @require 1
 * @desc The path to the model.json file for loading; you don't have to add .json extension.
 * @default assets/
 */

(function () {
  var params = $plugins.filter(function (plugin) {
    return /<EISLive2D>/gi.test(plugin.description);
  })[0].parameters;
  var Live2DModelsParams = {
    models: JSON.parse(params["models"]).map(function (model) {
      return JSON.parse(model);
    }),
  };

  function setup() {
    var libs = ["js/libs/live2d.min.js", "js/libs/pixi-live2d.js"];
    var spLibs = ["js/libs/core.min.js"];
    libs.forEach(function (lib) {
      return loadLib(lib);
    });
    spLibs.forEach(function (lib) {
      return loadLibBefore(spLibs);
    });
    //=============================================================================
    //  Constants
    //=============================================================================
    window.Live2DCache = new Map();
    //=============================================================================
    //  Scene_Boot
    //=============================================================================
    var _SceneBoot_create = Scene_Boot.prototype.create;
    Scene_Boot.prototype.create = function () {
      _SceneBoot_create.call(this);
      CacheModels(Live2DModelsParams.models);
    };
    //=============================================================================
    //  Sprite_Live2D
    //=============================================================================
    /* Consumes the new PIXI.Live2D Sprite Internally */

    var Sprite_Live2D = (function (_Sprite_Base) {
      _inherits(Sprite_Live2D, _Sprite_Base);

      function Sprite_Live2D(modelDefine, options) {
        _classCallCheck(this, Sprite_Live2D);

        var _this = _possibleConstructorReturn(
          this,
          (
            Sprite_Live2D.__proto__ || Object.getPrototypeOf(Sprite_Live2D)
          ).call(this)
        );

        _this._live2DSprite = new PIXI.Live2DSprite(modelDefine, options);
        _this.addChild(_this._live2DSprite);
        _this.hide();
        return _this;
      }

      _createClass(Sprite_Live2D, [
        {
          key: "on",
          value: function on(eventName, callback) {
            this._live2DSprite.on(eventName, callback);
          },
        },
        {
          key: "once",
          value: function once(eventName, callback) {
            this._live2DSprite.once(eventName, callback);
          },
          /**
           * @param {number} centerX Between 0 - 1.
           * @param {number} centerY Between 0 - 1.
           * @param {number} scale  Example: 1, 2, 3, etc.
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "adjustScale",
          value: function adjustScale(centerX, centerY, scale) {
            this._live2DSprite.adjustScale(centerX, centerY, scale);
          },

          /**
           * @param {number} shiftX Between 0 - 1.
           * @param {number} shiftY Between 0 -1.
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "adjustTranslate",
          value: function adjustTranslate(shiftX, shiftY) {
            this._live2DSprite.adjustTranslate(shiftX, shiftY);
          },

          /**
           * Starts a random motion that the model will loop
           * over.
           * @param {string} name
           * @param {number} priority
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "startRandomMotion",
          value: function startRandomMotion(name, priority) {
            this._live2DSprite.startRandomMotion(name, priority);
          },

          /**
           * Starts a random motion that the model will only
           * go through once.
           * @param {string} name
           * @param {number} priority
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "startRandomMotionOnce",
          value: function startRandomMotionOnce(name, priority) {
            this._live2DSprite.startRandomMotionOnce(name, priority);
          },

          /**
           * Stops all random motions and returns to the default
           * motion of the model.
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "stopRandomMotion",
          value: function stopRandomMotion() {
            this._live2DSprite.stopRandomMotion();
          },
        },
        {
          key: "startMotion",
          value: function startMotion(name, no, priority) {
            this._live2DSprite.startMotion(name, no, priority);
          },

          /**
           *
           *
           * @param {string} filename The filename.
           * @param {string} host The directory of the file.
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "playSound",
          value: function playSound(filename, host) {
            this._live2DSprite.playSound(filename, host);
          },

          /**
           * Checks if the model has been touched in a specified
           * body part.
           * @param {string} [id=null]
           * @param {number} x
           * @param {number} y
           * @returns  {boolean}
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "hitTest",
          value: function hitTest() {
            var id =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : null;
            var x = arguments[1];
            var y = arguments[2];

            return this._live2DSprite.hitTest(id, x, y);
          },

          /**
           *
           *
           * @param {boolean} boolean Enable or Disable lip sync.
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "setLipSync",
          value: function setLipSync(boolean) {
            this._live2DSprite.setLipSync(boolean);
          },
        },
        {
          key: "setRandomExpression",
          value: function setRandomExpression() {
            this._live2DSprite.setRandomExpression();
          },

          /**
           * Sets the viewpoint of the model; this is
           * where the model is looking at any point in time.
           * @param {number} x
           * @param {number} y
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "setViewPoint",
          value: function setViewPoint(x, y) {
            this._live2DSprite.setViewPoint(x, y);
          },

          /**
           * Enables or disables random motions on the model.
           *
           * @param {boolean} boolean Enable or disable random motions.
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "setRandomMotion",
          value: function setRandomMotion(boolean) {
            this._live2DSprite.model.randomMotion = boolean;
          },
        },
        {
          key: "setParamFloat",
          value: function setParamFloat(keyNumber, value) {
            var weight =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : 1;

            this._live2DSprite.setParamFloat(keyNumber, value, weight);
          },
        },
        {
          key: "addParamFloat",
          value: function addParamFloat(keyNumber, value) {
            var weight =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : 1;

            this._live2DSprite.addParamFloat(keyNumber, value, weight);
          },
        },
        {
          key: "multParamFloat",
          value: function multParamFloat(key, value) {
            var weight =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : 1;

            this._live2DSprite.multParamFloat(key, value, weight);
          },
        },
        {
          key: "getParamFloat",
          value: function getParamFloat(keyNumber) {
            this._live2DSprite.getParamFloat(keyNumber);
          },

          /**
           * Gets the Live2D model information of the sprite.
           *
           * @returns {Live2DModel}
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "getModel",
          value: function getModel() {
            return this._live2DSprite.model;
          },
        },
        {
          key: "getModelSettingJson",
          value: function getModelSettingJson() {
            return this.getModel().modelSetting.json;
          },

          /**
           * Returns the name of all the motions of the model.
           *
           * @returns {string[]}
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "getMotionNames",
          value: function getMotionNames() {
            return Object.keys(this.getModelSettingJson().motions);
          },

          /**
           * Returns the name of the model set in the model
           * settings.
           * @returns
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "getModelName",
          value: function getModelName() {
            return this.getModelSettingJson().name;
          },

          /**
           * Gets the specified hit areas of the model
           * in the model settings.
           * @returns {string[]}
           * @memberof Sprite_Live2D
           */
        },
        {
          key: "getHitAreas",
          value: function getHitAreas() {
            return this.getModelSettingJson().hitAreas.map(function (area) {
              return area.name;
            });
          },
        },
      ]);

      return Sprite_Live2D;
    })(Sprite_Base);
    //=============================================================================
    //  PluginCommands
    //=============================================================================

    var _GameInterpreter_pluginCommand =
      Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
      _GameInterpreter_pluginCommand.call(this, command, args);
      var modelName = args[0].toLowerCase();
      var modelSprite = Live2DUtils.cache().get(modelName);

      if (command === "startRandomMotion") {
        modelSprite.startRandomMotion(lowerCase(args[1]), 1);
      }

      if (command === "stopRandomMotion") {
        modelSprite.stopRandomMotion();
      }

      if (command === "setViewPoint") {
        modelSprite.setViewPoint(toInt(args[1]), toInt(args[2]));
      }

      if (command === "moveModel") {
        modelSprite.move(toInt(args[1]), toInt(args[2]));
      }

      if (command === "showModel") {
        modelSprite.show();
      }

      if (command === "hideModel") {
        modelSprite.hide();
      }

      if (command === "addToScene") {
        Live2DUtils.addModelToScene(modelName);
      }
    };
    //=============================================================================
    //  Utils
    //=============================================================================
    function CacheModels(modelStructs) {
      modelStructs.forEach(function (modelStruct) {
        var name = modelStruct.name,
          modelPath = modelStruct.modelPath;

        Live2DUtils.cacheModel(name, modelPath);
      });
    }

    function createLib(url) {
      try {
        var script = document.createElement("script");
        script.src = url;
        script.async = false;
        script.onerror = function () {
          return console.error("Failed to load lib" + url);
        };
        return script;
      } catch (err) {
        console.error(err);
      }
    }

    function loadLib(url) {
      document.body.insertBefore(createLib(url), document.body.children[5]);
    }

    function loadLibBefore(url) {
      document.body.insertBefore(createLib(url), document.body.firstChild);
    }

    var lowerCase = function lowerCase(string) {
      return string.toLowerCase();
    };
    var toInt = function toInt(string) {
      return parseInt(string);
    };

    window.Live2DUtils = {
      cacheModel: function cacheModel(key, path) {
        var _this2 = this;

        this.loadModelSettings(path)
          .then(function (modelData) {
            _this2.addModelToCache(
              key,
              _this2.updateModelPath(modelData, path)
            );
          })
          .catch(console.error);
      },
      addModelToCache: function addModelToCache(key, model) {
        Live2DCache.set(key, new Sprite_Live2D(model));
      },
      updateModelPath: function updateModelPath(modelData, path) {
        var pathSlice = path.split("/");
        var relevantPath = pathSlice.slice(0, pathSlice.length - 1);
        var newPath = "live2D/" + relevantPath.join("/") + "/";
        var props = ["model", "physics", "pose"];
        props.forEach(function (propName) {
          modelData[propName] = newPath.concat(modelData[propName]);
        });
        modelData.textures = modelData.textures.map(function (texture) {
          return newPath.concat(texture);
        });
        modelData.expressions.forEach(function (expression) {
          expression.file = newPath.concat(expression.file);
        });
        Object.values(modelData.motions).forEach(function (value) {
          value.forEach(function (motionComponent) {
            motionComponent.file = newPath.concat(motionComponent.file);
            if (motionComponent.sound !== undefined)
              motionComponent.sound = newPath.concat(motionComponent.sound);
          });
        });
        return modelData;
      },
      loadModelSettings: function loadModelSettings(path) {
        return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          var url = "live2D/" + path + ".json";
          xhr.open("GET", url);
          xhr.overrideMimeType("application/json");
          xhr.onload = function () {
            if (xhr.status < 400) {
              resolve(JSON.parse(xhr.responseText));
            }
          };
          xhr.onerror = function () {
            console.error("Failed to load");
            reject("Failed to load resource", xhr.status);
          };
          xhr.send(null);
        });
      },
      cache: function cache() {
        return Live2DCache;
      },
      addModelToScene: function addModelToScene(modelName) {
        SceneManager._scene.addChild(this.getModel(modelName));
      },
      getModel: function getModel(modelName) {
        return this.cache().get(lowerCase(modelName));
      },
    };

    window.L2D = function (modelName) {
      return Live2DUtils.getModel(modelName);
    };
    //=============================================================================
    //  Exports
    //=============================================================================
    window.Sprite_Live2D = Sprite_Live2D;
  }

  setup();
})();
