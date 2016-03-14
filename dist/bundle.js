/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	var PorkDumpling = __webpack_require__(5);
	
	// DEMO ////////////////////////////////////////////////////////////////////////
	
	var watches = document.getElementsByClassName('watch__face');
	var instances = [];
	
	for (var i = 0; i < watches.length; i += 1) {
	
	    instances[i] = new PorkDumpling(watches[i]);
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Helper = __webpack_require__(6);
	var Pause = __webpack_require__(7);
	var Timer = __webpack_require__(9);
	var Beat = __webpack_require__(10);
	var Hue = __webpack_require__(11);
	var Background = __webpack_require__(12);
	var Heart = __webpack_require__(13);
	var Rate = __webpack_require__(14);
	var Graph = __webpack_require__(15);
	
	/**
	 * Face module.
	 * @module ./face
	 */
	
	/**
	 * Class that acts as the root initialiser for the Pork Dumpling execution.
	 */
	var Face = (function () {
	
		/**
	  * Create a watch face instance.
	  * @param {class} canvas - The sole canvas element that the execution
	  * instance will be constructed on.
	  */
	
		function Face(canvas) {
			_classCallCheck(this, Face);
	
			this.canvas = canvas;
			this.size = this.canvas.width;
			this.ctx = this.canvas.getContext('2d');
			this.Pause = new Pause(this);
			this.Timer = new Timer(this);
			this.Hue = new Hue(this);
			this.Background = new Background(this);
			this.Beat = new Beat(this);
			this.Heart = new Heart(this);
			this.Rate = new Rate(this);
			this.Graph = new Graph(this);
			this.animate();
		}
	
		/*
	  * The required redraw functions executed each requestAnimationFrame tick.
	  **/
	
		_createClass(Face, [{
			key: 'animate',
			value: function animate() {
				var _this = this;
	
				Helper.clearCanvas(this);
				this.Hue.animate();
				this.Background.animate();
				this.Timer.animate();
				this.Beat.animate();
				this.Heart.animate();
				this.Rate.animate();
				this.Graph.animate();
	
				requestAnimationFrame(function () {
					return _this.animate();
				});
			}
		}]);
	
		return Face;
	})();
	
	module.exports = Face;

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Helper module.
	 * @module ./helper
	 */
	
	/**
	 * Class that holds a series of more “generic” functions uses across the execution.
	 */
	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Helper = (function () {
	
		/**
	  * Create a helper instance.
	  * @param {class} Face - The watch face base class that this timer is bound
	  * to.
	  */
	
		function Helper(Face) {
			_classCallCheck(this, Helper);
	
			this.Face = Face;
		}
	
		/**
	  * Generate a random number between two values.
	  * @param {number} min - The minimum possible value in the random generation process.
	  * @param {number} max - The maximum possible value in the random generation process.
	  * @return {number} - The randomly generated value.
	  */
	
		_createClass(Helper, [{
			key: "randomise",
			value: function randomise(_ref) {
				var _ref$min = _ref.min;
				var min = _ref$min === undefined ? 0 : _ref$min;
				var max = _ref.max;
	
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
	
			/**
	   * Generates a randomised boolean.
	   * @return {boolean} - random boolean.
	   */
		}, {
			key: "clearCanvas",
	
			/**
	   * Clear the canvas of all content.
	   */
			value: function clearCanvas(ref) {
	
				ref.ctx.clearRect(0, 0, ref.size, ref.size);
			}
		}, {
			key: "boolean",
			get: function get() {
	
				return this.randomise({ max: 1 }) % 2 === 0 ? false : true;
			}
		}]);
	
		return Helper;
	})();
	
	module.exports = new Helper();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var ifvisible = __webpack_require__(8);
	
	/**
	 * Pause module.
	 * @module ./pause
	 */
	
	/**
	 * Class that creases a synergy between the requestAnimationFrame sequence and
	 * the native OS timer. When the user moves away from the executions active tab
	 * the requestAnimation frame pauses the sequence. This is great for performance
	 * however if the native OS timer continues to run there will be an irregularity
	 * between the two once the tab becomes active again. We therefore pause the
	 * “perceived” timer in sync with the requestAniamtionFrame stream.
	 */
	var Pause = (function () {
	
		/**
	  * Create a pause instance.
	  * @param {class} Face - The watch face base class that this timer is bound
	  * to.
	  */
	
		function Pause(Face) {
			_classCallCheck(this, Pause);
	
			this.Face = Face;
			this.listeners();
			this.activated = 0;
		}
	
		/**
	  * Activate the invisible API to manage the timer when the execution goes
	  * into a dormant/active state.
	  */
	
		_createClass(Pause, [{
			key: 'listeners',
			value: function listeners() {
				var _this = this;
	
				ifvisible.on('blur', function () {
					return _this.activate();
				}).on('focus', function () {
					return _this.deactivate();
				});
			}
	
			/**
	   * Activate a pause by getting a final time reference.
	   */
		}, {
			key: 'activate',
			value: function activate() {
	
				var date = new Date();
				this.activated = date.getTime();
			}
	
			/**
	   * Deactivate the pause state by riffing the stared final time stamp with a
	   * new current time value. We rip the elapsed time out of the Pork Dumpling
	   * timer and continue as per usual =)
	   */
		}, {
			key: 'deactivate',
			value: function deactivate() {
	
				var date = new Date();
				var deactivated = date.getTime();
				var redundant = deactivated - this.activated;
	
				this.Face.Timer.offset += redundant;
				this.Face.Beat.nextBeat += redundant;
			}
		}]);
	
		return Pause;
	})();
	
	module.exports = Pause;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
	  (function(root, factory) {
	    if (true) {
	      return !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return factory();
	      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	      return module.exports = factory();
	    } else {
	      return root.ifvisible = factory();
	    }
	  })(this, function() {
	    var addEvent, customEvent, doc, fireEvent, hidden, idleStartedTime, idleTime, ie, ifvisible, init, initialized, status, trackIdleStatus, visibilityChange;
	    ifvisible = {};
	    doc = document;
	    initialized = false;
	    status = "active";
	    idleTime = 60000;
	    idleStartedTime = false;
	    customEvent = (function() {
	      var S4, addCustomEvent, cgid, fireCustomEvent, guid, listeners, removeCustomEvent;
	      S4 = function() {
	        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	      };
	      guid = function() {
	        return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
	      };
	      listeners = {};
	      cgid = '__ceGUID';
	      addCustomEvent = function(obj, event, callback) {
	        obj[cgid] = undefined;
	        if (!obj[cgid]) {
	          obj[cgid] = "ifvisible.object.event.identifier";
	        }
	        if (!listeners[obj[cgid]]) {
	          listeners[obj[cgid]] = {};
	        }
	        if (!listeners[obj[cgid]][event]) {
	          listeners[obj[cgid]][event] = [];
	        }
	        return listeners[obj[cgid]][event].push(callback);
	      };
	      fireCustomEvent = function(obj, event, memo) {
	        var ev, j, len, ref, results;
	        if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
	          ref = listeners[obj[cgid]][event];
	          results = [];
	          for (j = 0, len = ref.length; j < len; j++) {
	            ev = ref[j];
	            results.push(ev(memo || {}));
	          }
	          return results;
	        }
	      };
	      removeCustomEvent = function(obj, event, callback) {
	        var cl, i, j, len, ref;
	        if (callback) {
	          if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
	            ref = listeners[obj[cgid]][event];
	            for (i = j = 0, len = ref.length; j < len; i = ++j) {
	              cl = ref[i];
	              if (cl === callback) {
	                listeners[obj[cgid]][event].splice(i, 1);
	                return cl;
	              }
	            }
	          }
	        } else {
	          if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
	            return delete listeners[obj[cgid]][event];
	          }
	        }
	      };
	      return {
	        add: addCustomEvent,
	        remove: removeCustomEvent,
	        fire: fireCustomEvent
	      };
	    })();
	    addEvent = (function() {
	      var setListener;
	      setListener = false;
	      return function(el, ev, fn) {
	        if (!setListener) {
	          if (el.addEventListener) {
	            setListener = function(el, ev, fn) {
	              return el.addEventListener(ev, fn, false);
	            };
	          } else if (el.attachEvent) {
	            setListener = function(el, ev, fn) {
	              return el.attachEvent('on' + ev, fn, false);
	            };
	          } else {
	            setListener = function(el, ev, fn) {
	              return el['on' + ev] = fn;
	            };
	          }
	        }
	        return setListener(el, ev, fn);
	      };
	    })();
	    fireEvent = function(element, event) {
	      var evt;
	      if (doc.createEventObject) {
	        return element.fireEvent('on' + event, evt);
	      } else {
	        evt = doc.createEvent('HTMLEvents');
	        evt.initEvent(event, true, true);
	        return !element.dispatchEvent(evt);
	      }
	    };
	    ie = (function() {
	      var all, check, div, undef, v;
	      undef = void 0;
	      v = 3;
	      div = doc.createElement("div");
	      all = div.getElementsByTagName("i");
	      check = function() {
	        return (div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->", all[0]);
	      };
	      while (check()) {
	        continue;
	      }
	      if (v > 4) {
	        return v;
	      } else {
	        return undef;
	      }
	    })();
	    hidden = false;
	    visibilityChange = void 0;
	    if (typeof doc.hidden !== "undefined") {
	      hidden = "hidden";
	      visibilityChange = "visibilitychange";
	    } else if (typeof doc.mozHidden !== "undefined") {
	      hidden = "mozHidden";
	      visibilityChange = "mozvisibilitychange";
	    } else if (typeof doc.msHidden !== "undefined") {
	      hidden = "msHidden";
	      visibilityChange = "msvisibilitychange";
	    } else if (typeof doc.webkitHidden !== "undefined") {
	      hidden = "webkitHidden";
	      visibilityChange = "webkitvisibilitychange";
	    }
	    trackIdleStatus = function() {
	      var timer, wakeUp;
	      timer = false;
	      wakeUp = function() {
	        clearTimeout(timer);
	        if (status !== "active") {
	          ifvisible.wakeup();
	        }
	        idleStartedTime = +(new Date());
	        return timer = setTimeout(function() {
	          if (status === "active") {
	            return ifvisible.idle();
	          }
	        }, idleTime);
	      };
	      wakeUp();
	      addEvent(doc, "mousemove", wakeUp);
	      addEvent(doc, "keyup", wakeUp);
	      addEvent(doc, "touchstart", wakeUp);
	      addEvent(window, "scroll", wakeUp);
	      ifvisible.focus(wakeUp);
	      return ifvisible.wakeup(wakeUp);
	    };
	    init = function() {
	      var blur;
	      if (initialized) {
	        return true;
	      }
	      if (hidden === false) {
	        blur = "blur";
	        if (ie < 9) {
	          blur = "focusout";
	        }
	        addEvent(window, blur, function() {
	          return ifvisible.blur();
	        });
	        addEvent(window, "focus", function() {
	          return ifvisible.focus();
	        });
	      } else {
	        addEvent(doc, visibilityChange, function() {
	          if (doc[hidden]) {
	            return ifvisible.blur();
	          } else {
	            return ifvisible.focus();
	          }
	        }, false);
	      }
	      initialized = true;
	      return trackIdleStatus();
	    };
	    ifvisible = {
	      setIdleDuration: function(seconds) {
	        return idleTime = seconds * 1000;
	      },
	      getIdleDuration: function() {
	        return idleTime;
	      },
	      getIdleInfo: function() {
	        var now, res;
	        now = +(new Date());
	        res = {};
	        if (status === "idle") {
	          res.isIdle = true;
	          res.idleFor = now - idleStartedTime;
	          res.timeLeft = 0;
	          res.timeLeftPer = 100;
	        } else {
	          res.isIdle = false;
	          res.idleFor = now - idleStartedTime;
	          res.timeLeft = (idleStartedTime + idleTime) - now;
	          res.timeLeftPer = (100 - (res.timeLeft * 100 / idleTime)).toFixed(2);
	        }
	        return res;
	      },
	      focus: function(callback) {
	        if (typeof callback === "function") {
	          this.on("focus", callback);
	        } else {
	          status = "active";
	          customEvent.fire(this, "focus");
	          customEvent.fire(this, "wakeup");
	          customEvent.fire(this, "statusChanged", {
	            status: status
	          });
	        }
	        return this;
	      },
	      blur: function(callback) {
	        if (typeof callback === "function") {
	          this.on("blur", callback);
	        } else {
	          status = "hidden";
	          customEvent.fire(this, "blur");
	          customEvent.fire(this, "idle");
	          customEvent.fire(this, "statusChanged", {
	            status: status
	          });
	        }
	        return this;
	      },
	      idle: function(callback) {
	        if (typeof callback === "function") {
	          this.on("idle", callback);
	        } else {
	          status = "idle";
	          customEvent.fire(this, "idle");
	          customEvent.fire(this, "statusChanged", {
	            status: status
	          });
	        }
	        return this;
	      },
	      wakeup: function(callback) {
	        if (typeof callback === "function") {
	          this.on("wakeup", callback);
	        } else {
	          status = "active";
	          customEvent.fire(this, "wakeup");
	          customEvent.fire(this, "statusChanged", {
	            status: status
	          });
	        }
	        return this;
	      },
	      on: function(name, callback) {
	        init();
	        customEvent.add(this, name, callback);
	        return this;
	      },
	      off: function(name, callback) {
	        init();
	        customEvent.remove(this, name, callback);
	        return this;
	      },
	      onEvery: function(seconds, callback) {
	        var paused, t;
	        init();
	        paused = false;
	        if (callback) {
	          t = setInterval(function() {
	            if (status === "active" && paused === false) {
	              return callback();
	            }
	          }, seconds * 1000);
	        }
	        return {
	          stop: function() {
	            return clearInterval(t);
	          },
	          pause: function() {
	            return paused = true;
	          },
	          resume: function() {
	            return paused = false;
	          },
	          code: t,
	          callback: callback
	        };
	      },
	      now: function(check) {
	        init();
	        return status === (check || "active");
	      }
	    };
	    return ifvisible;
	  });
	
	}).call(this);
	
	//# sourceMappingURL=ifvisible.js.map


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Timer module.
	 * @module ./timer
	 */
	
	/**
	 * Class that updates the elapsed time since starting the execution and injects
	 * it onto the  canvas.
	 */
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Timer = (function () {
	
		/**
	  * Create a timer.
	  * @param {class} Face - The watch face base class that this timer is bound
	  * to.
	  */
	
		function Timer(Face) {
			_classCallCheck(this, Timer);
	
			this.Face = Face;
			this.offset = this.elapsedTime;
		}
	
		/**
	  * Calculate the elapsed time by diffing the starting time vs the current
	  * time.
	  * @return {number} The elapsed time.
	  */
	
		_createClass(Timer, [{
			key: 'formatTime',
	
			/**
	   * Turn the raw millisecond elapsed time into a formatted rendition that can
	   * be injected onto the canvas.
	   * @param {number} time - The elapsed time in milliseconds.
	   * @return {string} The elapsed time in a 00:00 format.
	   */
			value: function formatTime(time) {
	
				var hours = Math.floor(time / (1000 * 60 * 60));
				time = time % (1000 * 60 * 60);
				var minutes = Math.floor(time / (1000 * 60));
				var seconds = Math.floor(time % (1000 * 60) / 1000);
	
				return '' + this.queryHours(hours) + this.queryMinutes(minutes) + this.querySeconds(seconds);
			}
	
			/**
	   * Makes sure the current unit i.e. seconds / minutes are always comprised
	   * of two digits.
	   * @param {number} value - The current unit i.e. seconds / minutes.
	   * @return {string} Current units in a two digit format.
	   */
		}, {
			key: 'queryDigits',
			value: function queryDigits(value) {
	
				return ('' + value).length < 2 ? '0' + value : '' + value;
			}
		}, {
			key: 'queryHours',
			value: function queryHours(hours) {
	
				return hours > 0 ? hours + ':' : '';
			}
		}, {
			key: 'queryMinutes',
			value: function queryMinutes(minutes) {
	
				return minutes > 0 ? this.queryDigits(minutes) + ':' : '';
			}
		}, {
			key: 'querySeconds',
			value: function querySeconds(seconds) {
	
				return '' + this.queryDigits(seconds);
			}
		}, {
			key: 'queryUnits',
			value: function queryUnits(format) {
	
				return format.length > 5 ? 'hrs' : format.length > 2 ? 'mins' : 'secs';
			}
	
			/**
	   * Injects the formatted elapsed time onto the canvas with a centered align
	   * appearance, custom fonts and dynamic color.
	   * @param {string} format - The elapsed time in a 00:00 format.
	   */
		}, {
			key: 'injectTime',
			value: function injectTime(format) {
	
				var ctx = this.Face.ctx;
				var units = ' ' + this.queryUnits(format);
				var y = 95;
				var hsl = 'hsl(' + this.Face.Hue.current + ', 100%, 65%)';
				// Centre text by offsetting half of the total combined text width from
				// the canvas centre.
				var offset = (ctx.measureText(format).width + ctx.measureText(units).width) / 2;
				var x = this.Face.size / 2 - offset;
	
				ctx.font = '500 12px Roboto';
				ctx.fillStyle = hsl;
				ctx.fillText(format, x, y);
	
				x += ctx.measureText(format).width;
	
				ctx.font = '300 12px Roboto';
				ctx.fillStyle = hsl;
				ctx.fillText(units, x, y);
			}
	
			/**
	   * Runs through the sequence in order to update the elapsed time.
	   */
		}, {
			key: 'animate',
			value: function animate() {
	
				var time = this.elapsedTime;
				var format = this.formatTime(time);
				this.injectTime(format);
			}
		}, {
			key: 'elapsedTime',
			get: function get() {
	
				var date = new Date();
				var offset = this.offset || 0;
				var time = date.getTime() - offset;
	
				return time;
			}
		}]);
	
		return Timer;
	})();
	
	module.exports = Timer;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Helper = __webpack_require__(6);
	
	/**
	 * Beat module.
	 * @module ./beat
	 */
	
	/**
	 * Class that represents a human heat beat that both the BPM meter and graph
	 * systems reference.
	 */
	var Beat = (function () {
	
		/**
	  * Create a beat instance.
	  * @param {class} Face - The watch face base class that this timer is bound
	  * to.
	  */
	
		function Beat(Face) {
			_classCallCheck(this, Beat);
	
			this.Face = Face;
			this.nextBeat = this.currentTime;
			this.i = 0;
		}
	
		/**
	  * Gets the current time from the OS clock.
	  * @return {number} The current time.
	  */
	
		_createClass(Beat, [{
			key: 'updateBeat',
	
			/**
	   * Randomises when the next heart beat should run.
	   */
			value: function updateBeat() {
	
				this.nextBeat = this.nextBeat + Helper.randomise({ min: 400, max: 520 });
			}
	
			/**
	   * Updates the heart beat system on each requestAnimationFrame tick.
	   */
		}, {
			key: 'animate',
			value: function animate() {
	
				if (this.currentProgress) {
	
					this.updateBeat();
					this.Face.Graph.registerBeat();
					this.i += 1;
				}
			}
		}, {
			key: 'currentTime',
			get: function get() {
	
				var date = new Date();
	
				return date.getTime();
			}
	
			/**
	   * Diffs the current time against the “next beat” interval.
	   * @return {boolean} The next beat’s relevance.
	   */
		}, {
			key: 'currentProgress',
			get: function get() {
	
				var time = this.currentTime;
	
				return time > this.nextBeat;
			}
		}]);
	
		return Beat;
	})();
	
	module.exports = Beat;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Helper = __webpack_require__(6);
	
	/**
	 * Hue module.
	 * @module ./hue
	 */
	
	/**
	 * Class that modifies the hue of the base HSL color over the 360 its spectrum.
	 */
	var Hue = (function () {
	
		/**
	  * Create a hue instance.
	  * @param {class} Face - The watch face base class that this timer is bound
	  * to.
	  */
	
		function Hue(Face) {
			_classCallCheck(this, Hue);
	
			this.Face = Face;
			this.current = Helper.randomise({ max: 360 });
		}
	
		/**
	  * Increment the current hue reference forward. If the new value exceeds the
	  * 360 limit then we reset it to zero and continue the loop.
	  */
	
		_createClass(Hue, [{
			key: 'updateHue',
			value: function updateHue() {
	
				this.current += 0.25;
				if (this.current > 360) this.current = 0;
			}
	
			/**
	   * Prompts the current hue value to increment on each requestAnimationFrame tick.
	   */
		}, {
			key: 'animate',
			value: function animate() {
	
				this.updateHue();
			}
		}]);
	
		return Hue;
	})();
	
	module.exports = Hue;

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Background module.
	 * @module ./background
	 */
	
	/**
	 * Class that renders the background color based on the current hue value..
	 */
	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Background = (function () {
	
		/**
	  * Create a background instance.
	  * @param {class} Face - The watch face base class that this timer is bound
	  * to.
	  */
	
		function Background(Face) {
			_classCallCheck(this, Background);
	
			this.Face = Face;
		}
	
		/**
	  * Generate the background instance on the Pork Dumpling canvas.
	  */
	
		_createClass(Background, [{
			key: "updateBackground",
			value: function updateBackground() {
	
				var ctx = this.Face.ctx;
	
				ctx.beginPath();
				ctx.rect(0, 0, this.Face.size, this.Face.size);
				ctx.fillStyle = "hsl(" + this.Face.Hue.current + ", 100%, 15%)";
				ctx.fill();
				ctx.closePath();
			}
	
			/**
	   * Prompts the backgrounds hue value on each requestAnimationFrame tick.
	   */
		}, {
			key: "animate",
			value: function animate() {
	
				this.updateBackground();
			}
		}]);
	
		return Background;
	})();
	
	module.exports = Background;

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Heart module.
	 * @module ./heart
	 */
	
	/**
	 * Class that builds out a heart shape symbol on the canvas.
	 */
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Heart = (function () {
	
		/**
	  * Constructs the raw scenario in which to create a heart from. This will be
	  * extended to fulfil the executions requirements.
	  * @param {class} Face - The watch face base class that this timer is bound
	  * to.
	  */
	
		function Heart(Face) {
			_classCallCheck(this, Heart);
	
			this.Face = Face;
			// An increment or that keeps track of the current frame in the sequence.
			this.i = 1;
			// Dictates how many frames the entire animation should span.
			this.duration = 100;
			this.climax = this.duration / 2;
			this.animate();
		}
	
		_createClass(Heart, [{
			key: 'updateIncrementor',
			value: function updateIncrementor() {
	
				this.i = this.i > this.duration ? 0 : this.i + 1;
			}
	
			/**
	   * Updates each facet of the heart symbol during the animation sequence.
	   */
		}, {
			key: 'updateFacets',
			value: function updateFacets() {
				var _arr = ['echoLarge', 'echoSmall', 'base'];
	
				for (var _i = 0; _i < _arr.length; _i++) {
					var facet = _arr[_i];this.buildFacet(facet);
				}
			}
	
			/**
	   * Controls the base facet properties in reference to the incrementor (i).
	   * The heart base facet increases the scale of itself for the first half of
	   * the animation duration and then resets back to its original base scale.
	   */
		}, {
			key: 'buildFacet',
	
			/**
	   * Turns the initial SVG heart shape into Canvas bezier curves, places the
	   * shape in the applicable location and modifies its aesthetic based on the r
	   * eferenced bespoke parameters.
	   *
	   * http://www.professorcloud.com/svg-to-canvas/
	   *
	   * @param {string} facet - The reference in which to query the current Class
	   * to get its bespoke heart properties from.
	   */
			value: function buildFacet(facet) {
	
				// Bespoke values.
				var bes = this[facet + 'Properties'];
	
				var ctx = this.Face.ctx;
				var hsl = 'hsla(' + this.Face.Hue.current + ', 100%, ' + bes.luminosity + '%, ' + bes.alpha + ')';
				var height = 14.6;
				var width = 16;
				var x = 65;
				var y = 60;
	
				// Save the context state before modifying the translate and scale
				// properties.
				ctx.save();
				// Set the middle of the heart to point 0,0 of the canvas. This
				// translation is based on the current scale of the heart.
				ctx.translate(width * bes.scale / 2 * -1, height * bes.scale / 2 * -1);
				ctx.scale(bes.scale, bes.scale);
				// Now that the heart has been scaled around point 0,0 we can move it’s
				// centre point to its correct destination on the canvas.
				ctx.translate(x / bes.scale, y / bes.scale);
				// Build the heart.
				ctx.beginPath();
				ctx.moveTo(8, 14.6);
				ctx.bezierCurveTo(8.3, 14.6, 8.3, 14.6, 11.3, 12.2);
				ctx.bezierCurveTo(14.3, 9.8, 16, 7.2, 16, 4.5);
				ctx.bezierCurveTo(16, 1.9, 13.9, 0, 11.5, 0);
				ctx.bezierCurveTo(9.1, 0, 8, 1.8, 8, 1.8);
				ctx.bezierCurveTo(8, 1.8, 6.8, 0, 4.5, 0);
				ctx.bezierCurveTo(2.2, 0, 0, 1.9, 0, 4.6);
				ctx.bezierCurveTo(0, 7.2, 1.7, 9.9, 4.7, 12.3);
				ctx.bezierCurveTo(7.7, 14.6, 7.7, 14.6, 8, 14.6);
				ctx.fillStyle = hsl;
				ctx.fill();
				ctx.closePath();
				// Now that the current heart instance has been injected onto the canvas
				// we reset the translation and scale properties back to normal by
				// restoring the canvas context.
				ctx.restore();
			}
	
			/**
	   * Animates the heart and it facet through the sequence duration. This
	   * animation is set in its own requestAnimationFrame setup outside of the
	   * main watch face animation loop.
	   */
		}, {
			key: 'animate',
			value: function animate() {
	
				this.updateFacets();
				this.updateIncrementor();
			}
		}, {
			key: 'baseProperties',
			get: function get() {
	
				var luminosity = 65;
				var alpha = 1;
				var increment = 0.005;
				var scale = this.i < this.climax ? 1 + this.i * increment : 1 + this.climax * increment - (this.i - this.climax) * increment;
	
				return { luminosity: luminosity, alpha: alpha, scale: scale };
			}
	
			/**
	   * Controls the small echo facet properties in reference to the incrementor
	   * (i). This heart echo facet begins increasing its scale once the base
	   * heart start resetting itself into its dormant phase. As it increases in
	   * scale it’s alpha value decreases to zero.
	   */
		}, {
			key: 'echoSmallProperties',
			get: function get() {
	
				var luminosity = 40;
				var alpha = this.i > this.climax ? 1 - this.i / this.duration : 0;
				var scale = this.i > this.climax ? 1 + this.i * 0.01 : 1;
	
				return { luminosity: luminosity, alpha: alpha, scale: scale };
			}
	
			/**
	   * Controls the small echo facet properties in reference to the incrementor
	   * (i). This heart echo facet begins increasing its scale once the base
	   * heart start resetting itself into its dormant phase. As it increases in
	   * scale it’s alpha value decreases to zero.
	   */
		}, {
			key: 'echoLargeProperties',
			get: function get() {
	
				var luminosity = 30;
				var alpha = this.i > this.climax ? 1 - this.i / this.duration : 0;
				var scale = this.i > this.climax ? 1 + this.i * 0.03 : 1;
	
				return { luminosity: luminosity, alpha: alpha, scale: scale };
			}
		}]);
	
		return Heart;
	})();
	
	module.exports = Heart;

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Rate module.
	 * @module ./rate
	 */
	
	/**
	 * Class that represents the current average heart rate in a BPM format.
	 */
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Rate = (function () {
	
		/**
	  * Create a beat instance.
	  * @param {class} Face - The watch face base class that this timer is bound
	  * to.
	  */
	
		function Rate(Face) {
			_classCallCheck(this, Rate);
	
			this.Face = Face;
			this.i = 0;
			this.currentBpm = '000';
		}
	
		/**
	  * Calculate the average BPM value.
	  */
	
		_createClass(Rate, [{
			key: 'updateBpm',
			value: function updateBpm() {
	
				var equaliser = 60000 / this.Face.Timer.elapsedTime;
				var bpm = this.Face.Beat.i * equaliser;
	
				this.currentBpm = Math.round(bpm);
			}
	
			/**
	   * Inject the BPM text onto the canvas area making sure the different text
	   * elements flow next to each other like generic text in the DOM.
	   */
		}, {
			key: 'injectBpm',
			value: function injectBpm() {
	
				var ctx = this.Face.ctx;
				var bpm = ('' + this.currentBpm).length < 3 ? '0' + this.currentBpm : '' + this.currentBpm;
				var units = ' bpm';
				var y = 70;
				var hsl = 'hsl(' + this.Face.Hue.current + ', 100%, 65%)';
				var x = 85;
	
				ctx.font = '300 30px Roboto';
				ctx.fillStyle = hsl;
				ctx.fillText(bpm, x, y);
				x += ctx.measureText(bpm).width;
				ctx.font = '300 12px Roboto';
				ctx.fillStyle = hsl;
				ctx.fillText(units, x, y);
			}
	
			/**
	   * We update the BPM value every 60 frames to avoid possible flickering as
	   * the BPM’s average constantly changes.
	   * @return {boolean} Checks if the 60 frame duration has elapsed.
	   */
		}, {
			key: 'animate',
	
			/**
	   * Updates the BPM value on each requestAnimationFrame tick.
	   */
			value: function animate() {
	
				if (this.frequency) this.updateBpm();
				this.injectBpm();
			}
		}, {
			key: 'frequency',
			get: function get() {
	
				var frequency = 60;
				var status = this.i > frequency;
				this.i = status ? 0 : this.i + 1;
	
				return status;
			}
		}]);
	
		return Rate;
	})();
	
	module.exports = Rate;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Helper = __webpack_require__(6);
	
	/**
	 * Graph module.
	 * @module ./graph
	 */
	
	/**
	 * Class that represents the “richter graph” aesthetic that dictates a heart beat.
	 */
	var Graph = (function () {
	
		/**
	  * Create a graph instance.
	  * @param {class} Face - The watch face base class that this timer is bound
	  * to.
	  */
	
		function Graph(Face) {
			_classCallCheck(this, Graph);
	
			this.Face = Face;
			this.legacyGraph = this.buildLegacy;
			this.currentGraph = this.buildCurrent;
			this.BaseLine = 150;
			this.i = 0;
		}
	
		/**
	  * Since there is no legacy graph to override initially we create a
	  * flatlined representation.
	  */
	
		_createClass(Graph, [{
			key: 'updateLegacy',
	
			/**
	   * When the current graph’s paths are exhausted we move it to ride as the
	   * legacy representation and begin to build a new current graph.
	   */
			value: function updateLegacy() {
	
				this.legacyGraph = this.currentGraph;
				this.currentGraph = this.buildCurrent;
			}
	
			/**
	   * Generates the next point in the current graph while adhering to the
	   * format of the previous points the exponential sine curve system.
	   */
		}, {
			key: 'updateCurrent',
			value: function updateCurrent() {
	
				var sin = Math.sin(this.i);
				var offset = sin * this.i * 2.5;
	
				this.i = this.i < 1 ? 0 : this.i - 1;
	
				this.currentGraph.push(offset);
			}
	
			/**
	   * Draw a line between two points
	   * @param {object} ctx - the canvas context
	   * @param {string} graph - the current graph instance i.e. ‘current’ / ‘legacy’.
	   */
		}, {
			key: 'drawPoints',
			value: function drawPoints(ctx, graph) {
	
				for (var i = 0; i < this.Face.size; i += 1) {
	
					ctx.lineTo(i, this.BaseLine - this[graph + 'Graph'][i]);
				}
			}
	
			/**
	   * Fade away the legacy graph instance.
	   * @return {object} A canvas gradient.
	   */
		}, {
			key: 'legacyColor',
			value: function legacyColor() {
	
				var alpha = 1 - 1 / this.Face.size * this.currentGraph.length * 1.5;
				var gradient = this.Face.ctx.createLinearGradient(0, 0, 100, 0);
	
				gradient.addColorStop(0, 'hsla(' + this.Face.Hue.current + ', 100%, 65%, 0)');
				gradient.addColorStop(1, 'hsla(' + this.Face.Hue.current + ', 100%, 65%, ' + alpha + ')');
	
				return gradient;
			}
	
			/**
	   * Color the current graph instance.
	   * @return {object} A canvas gradient.
	   */
		}, {
			key: 'currentColor',
			value: function currentColor() {
	
				var gradient = this.Face.ctx.createLinearGradient(0, 0, 100, 0);
	
				gradient.addColorStop(0, 'hsla(' + this.Face.Hue.current + ', 100%, 65%, 0)');
				gradient.addColorStop(1, 'hsla(' + this.Face.Hue.current + ', 100%, 65%, 1)');
	
				return gradient;
			}
	
			/**
	   * Draw a graph instance.
	   * @param {string} graph - the current graph instance i.e. ‘current’ / ‘legacy’.
	   */
		}, {
			key: 'drawGraph',
			value: function drawGraph(graph) {
	
				var ctx = this.Face.ctx;
	
				ctx.beginPath();
				ctx.moveTo(0, this.BaseLine);
				this.drawPoints(ctx, graph);
				ctx.strokeStyle = this[graph + 'Color'](ctx);
				ctx.stroke();
				ctx.closePath();
			}
	
			/**
	   * Checks if there is room for more current graph points of if we need to
	   * generate a new current instance.
	   */
		}, {
			key: 'queryCircumstance',
			value: function queryCircumstance() {
	
				if (this.currentGraph.length >= this.Face.size) this.updateLegacy();
			}
	
			/**
	   * inject required graph instance onto the canvas.
	   */
		}, {
			key: 'injectInstances',
			value: function injectInstances() {
				var _arr = ['legacy', 'current'];
	
				for (var _i = 0; _i < _arr.length; _i++) {
					var graph = _arr[_i];this.drawGraph(graph);
				}
			}
	
			/**
	   * Draws in the bright circular “pip” the indicates the currents graph progress.
	   */
		}, {
			key: 'injectProgress',
			value: function injectProgress() {
	
				var ctx = this.Face.ctx;
				var length = this.currentGraph.length;
				var radius = 3;
				var x = length - radius;
				var y = this.BaseLine - this.currentGraph[length - 1];
	
				ctx.beginPath();
				ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
				ctx.fillStyle = this.currentColor();
				ctx.fill();
				ctx.closePath();
			}
	
			/**
	   * Decide the severity of the current heart beat - this will dictate how
	   * dominant the sign curves influence is on the graph.
	   */
		}, {
			key: 'registerBeat',
			value: function registerBeat() {
	
				this.i = Helper.randomise({ min: 5, max: 15 });
			}
	
			/**
	   * Runs through the sequence in order to update the graph sequence.
	   */
		}, {
			key: 'animate',
			value: function animate() {
	
				this.queryCircumstance();
				this.updateCurrent();
				this.injectInstances();
				this.injectProgress();
			}
		}, {
			key: 'buildLegacy',
			get: function get() {
	
				var points = [];
	
				for (var i = 0; i < this.Face.size; i += 1) {
	
					points[i] = 0;
				}
	
				return points;
			}
	
			/**
	   * Generate the first point in the current graph that we will begin to build
	   * during the animation process.
	   */
		}, {
			key: 'buildCurrent',
			get: function get() {
	
				return [0];
			}
		}]);
	
		return Graph;
	})();
	
	module.exports = Graph;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map