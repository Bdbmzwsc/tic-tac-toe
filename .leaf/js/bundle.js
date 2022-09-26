(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }

  function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  }

  /** Reactive object. */
  var Reactive = /*#__PURE__*/function () {
    function Reactive() {
      _classCallCheck(this, Reactive);

      /** Currently active running effects. */
      this.activeEffects = [];
      this.onChange = null;
      this.isSetting = false;
      this.actualState = undefined;
    }
    /**
     * Get a trackable proxy object and fire certain callbacks on certain events.
     * @param obj The object to track updates.
     * @param callbacks Callbacks to run when certain event was fired.
     * @returns A proxy to the original object.
     */


    _createClass(Reactive, [{
      key: "getTrackableObject",
      value: function getTrackableObject(obj, callbacks) {
        for (var key in obj) {
          if (obj[key] && _typeof(obj[key]) === 'object') {
            obj[key] = this.getTrackableObject(obj[key], callbacks);
          }
        }

        var outerThis = this;
        var proxy = new Proxy(obj, {
          get: function get(target, key, receiver) {
            var result = Reflect.get(target, key, receiver);
            callbacks.onGet(target, key, receiver);
            return result;
          },
          set: function set(target, key, value, receiver) {
            if (_typeof(value) === 'object') {
              value = outerThis.getTrackableObject(value, callbacks);
            }

            var result = Reflect.set(target, key, value, receiver);
            callbacks.onSet(target, key, value, receiver);
            return result;
          },
          deleteProperty: function deleteProperty(target, key) {
            var result = Reflect.deleteProperty(target, key);
            callbacks.onDeleteProperty(target, key);
            return result;
          }
        });

        if (Array.isArray(obj)) {
          Object.setPrototypeOf(proxy, Array.prototype);
        }

        return proxy;
      }
      /**
       * Create a reactive object and enable two-way auto update.
       * @param target The object to be made reactive.
       * @returns The proxied reactive object.
       */

    }, {
      key: "build",
      value: function build(target) {
        var _this = this;

        var outerThis = this; // workaround for to many rerenders
        // check if it is currently setting a reactive property, watch until it finished setting
        // and then invoke the `onStateChange` handler

        var fireWhenUpdated = function fireWhenUpdated() {
          if (!_this.isSetting) {
            if (_this.onChange) _this.onChange();
          } else {
            setTimeout(fireWhenUpdated, 2);
          }
        };

        this.actualState = this.getTrackableObject(target, {
          onGet: function onGet() {},
          onSet: function onSet() {
            if (!outerThis.isSetting) {
              outerThis.isSetting = true;
              fireWhenUpdated();
            }

            outerThis.isSetting = false;
          },
          onDeleteProperty: function onDeleteProperty() {}
        });
        return this.actualState;
      }
      /**
       * Fire an effect when any state changes, regardless of dependencies. This function can only be called once.
       * @param effect Effect to run when state changes.
       */

    }, {
      key: "onStateChange",
      value: function onStateChange(effect) {
        this.onChange = effect;
        effect();
      }
    }]);

    return Reactive;
  }();

  /**
   * Check if element is NodeList-like.
   * @param content Element to check.
   * @returns Is `content` having structures like `NodeList`.
   */
  var isNodeListLike = function isNodeListLike(content) {
    return HTMLCollection.prototype.isPrototypeOf(content) || NodeList.prototype.isPrototypeOf(content) || Array.isArray(content);
  };
  /**
   * Check if element is Node-like.
   * @param content Element to check.
   * @returns Is `content` having structures like `Node`.
   */


  var isNodeLike = function isNodeLike(content) {
    return typeof content.nodeType !== 'undefined' || typeof content === 'string' || typeof content === 'number';
  };
  /**
   * Register a leaf component to `CustomElementsRegistery`.
   * @param tagName Tag name to use in templates.
   * @param component a defined `LeafComponent` class.
   * @param props extra params to pass to `customElements.define`.
   * @param allowMultiple allow multiple registers with the same component for different names.
   * @returns The `component` class.
   */


  var registerComponent = function registerComponent(tagName, component, props, allowMultiple) {
    // initialize component map
    if (!window.componentMap) {
      window.componentMap = new WeakMap();
    } // don't register if component is already registered in the registery
    // IMPORTANT: don't check `customElements` but instead check `componentMap`
    // to ensure one component instance can only register once


    if (!allowMultiple && window.componentMap.get(component)) return component;
    customElements.define(tagName, component, props);
    window.componentMap.set(component, tagName);
    return component;
  };
  /** Preserved element attributes mapping */


  var preservedProps = {
    className: 'class'
  };
  /**
   * Check is a node falsy.
   * @param node Element node to check.
   * @returns Is `node` falsy or not.
   */

  var isFalsyNode = function isFalsyNode(node) {
    return node === false || node === undefined || node === null;
  };
  /**
   * Insert element or elements to node, depending on the actual type of `content`.
   * @param node Parent node to insert content to.
   * @param content Custom content elements to insert.
   */


  var appendContentToNode = function appendContentToNode(node, content) {
    if (isNodeListLike(content)) {
      var _iterator = _createForOfIteratorHelper(content),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ele = _step.value;
          // IMPORTANT: filter falsy nodes out to allow syntaxes like `condition && renderSomething()`
          if (isFalsyNode(ele)) continue;

          if (Array.isArray(ele)) {
            appendContentToNode(node, ele);
            continue;
          }

          node.append(ele);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      node.append(content);
    }
  };

  var _LeafComponent_state, _LeafComponent_reactiveInstance, _LeafComponent_previousRenderResult, _LeafComponent_shadow, _LeafComponent_key, _LeafComponent_isMounted, _LeafComponent_styleElement;

  var eventListeners = new WeakMap();
  /** Attributes to be updated specially, such as `input.value` vs `input.attributes.value` */

  var directPropUpdate = [{
    name: 'value',
    attr: 'value'
  }];
  var reactiveInstances = new Map();
  /**
   * Check if an attribute is an event handler.
   * @param propName Attribute name to check.
   * @param _propContent Attribute value to assert.
   * @returns Is this attribute an event handler.
   */

  var isEventListener = function isEventListener(propName, _propContent) {
    return propName.startsWith('on');
  };
  /**
   * Check is a node an element node.
   * @param node `Node` object to check.
   * @returns Is `node` an element node.
   */


  var isElement = function isElement(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  };

  var isLeafComponent = function isLeafComponent(element) {
    return element.isLeafComponent === true;
  };

  var isTextNode = function isTextNode(node) {
    return node.nodeType === Node.TEXT_NODE;
  };
  /**
   * Check is a value a valid Leaf attribute.
   * @param attr Attribute value to check.
   * @returns Is `attr` a valid Leafjs attribute.
   */


  var isValidAttribute = function isValidAttribute(attr) {
    return typeof attr === 'string' || typeof attr === 'number' || typeof attr === 'boolean';
  };

  var _createElement = function _createElement(tag, props, content) {
    var _a;

    if (typeof tag !== 'string') {
      var tagName = (_a = window.componentMap) === null || _a === void 0 ? void 0 : _a.get(tag);
      if (!tagName) throw new Error('Unable to fetch component from registery.');else tag = tagName;
    }

    var element = document.createElement(tag);
    var listeners = new Set();

    for (var prop in props) {
      var propContent = props[prop];

      if (isEventListener(prop)) {
        var listenerName = prop.substring(2).toLowerCase();
        listeners.add({
          name: listenerName,
          handler: propContent
        });
        element.addEventListener(listenerName, propContent);
        continue;
      }

      if (isLeafComponent(element)) {
        element.props[prop] = propContent;
        if (!isValidAttribute(propContent)) continue;
      }

      if (propContent === false || propContent === null || propContent === undefined) continue;

      if (prop in preservedProps) {
        element.setAttribute(preservedProps[prop], propContent.toString());
      } else {
        element.setAttribute(prop, propContent.toString());
      }
    }

    eventListeners.set(element, listeners);

    if (content) {
      appendContentToNode(element, content);
    }

    return element;
  };
  /**
   * Create a new `HTMLElement` with given information.
   * @param tag Element tag.
   * @param content Optional element initial content.
   * @param props Optional element attributes.
   * @returns Created HTML element.
   */


  var createElement = function createElement(tag, content, props) {
    if (typeof content === 'undefined') return _createElement(tag);

    if (!isNodeLike(content) && !isNodeListLike(content)) {
      return _createElement(tag, content);
    }

    return _createElement(tag, props, content);
  };
  /**
   * Create a new `HTMLElement` with given information, `React.createElement` style.
   * @param tag Element tag.
   * @param props Optional element attributes.
   * @param content Optional element initial content.
   * @returns Created HTML element.
   */


  var createElementReactStyle = function createElementReactStyle(tag, props) {
    for (var _len = arguments.length, content = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      content[_key - 2] = arguments[_key];
    }

    if (!content) return createElement(tag, props !== null && props !== void 0 ? props : {});
    return createElement(tag, content, props !== null && props !== void 0 ? props : {});
  };
  /**
   * Get event listeners of an element created by `createElement`.
   * @param element Element to check event listner list
   * @returns A set of event listener objects.
   */


  var getEventListenerOf = function getEventListenerOf(element) {
    if (!eventListeners.has(element)) return undefined;
    return eventListeners.get(element);
  };

  var setEventListenerOf = function setEventListenerOf(element, listeners) {
    eventListeners.set(element, listeners || new Set());
  };

  var deleteEventListenerOf = function deleteEventListenerOf(element) {
    return eventListeners.delete(element);
  };
  /**
   * Mount a list of elements to DOM.
   * @param children A list of children to mount.
   * @param container The container DOM element to contain the children.
   */


  var mountElements = function mountElements(children, container) {
    children.forEach(function (child) {
      container.appendChild(child);
    });
  };
  /**
   * Patch an element from one state to another.
   * @param oldChildren Children of `oldParent`.
   * @param newChildren Children of `newParent`.
   * @param oldParent The previously existing DOM element to patch.
   * @param newParent The newly generated element, unattached to DOM.
   */


  var patchElements = function patchElements(oldChildren, newChildren, oldParent, newParent) {
    if (!oldParent) return;
    var oldLen = oldChildren.length,
        newLen = newChildren.length;

    if (isElement(oldParent) && isElement(newParent)) {
      // replace event listeners
      var oldEventListener = getEventListenerOf(oldParent);
      var newEventListener = getEventListenerOf(newParent);
      oldEventListener === null || oldEventListener === void 0 ? void 0 : oldEventListener.forEach(function (value) {
        oldParent.removeEventListener(value.name, value.handler);
      });
      newEventListener === null || newEventListener === void 0 ? void 0 : newEventListener.forEach(function (value) {
        oldParent.addEventListener(value.name, value.handler);
      }); // IMPORTANT: update the event listener registery for future use

      setEventListenerOf(oldParent, newEventListener);
      deleteEventListenerOf(newParent);
    }

    for (var i = 0, j = 0; Math.max(i, j) < Math.min(oldLen, newLen); i++, j++) {
      var oldChild = oldChildren[i];
      var newChild = newChildren[j]; // IMPORTANT: filter out preserved elements, in this case `<style />` tag

      if (isElement(oldChild) && oldChild.hasAttribute('leaf-preserve')) {
        oldChild = oldChildren[++i];
        oldLen--;
      } // special optimizing for Leaf components


      if (isLeafComponent(oldChild)) oldChild.isUpdating = true;
      if (isLeafComponent(newChild)) newChild.isUpdating = true; // process attributes here so `connectedCallback` will receive the correct attribute

      if (isElement(oldChild) && isElement(newChild)) {
        // replace attributes
        var oldAttributes = Array.prototype.slice.call(oldChild.attributes);
        var newAttributes = Array.prototype.slice.call(newChild.attributes);

        var _iterator2 = _createForOfIteratorHelper(newAttributes),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var attr = _step2.value;
            // don't assign objects to attributes, assign to properties only
            if (!isValidAttribute(attr.value) || oldChild.getAttribute(attr.name) === attr.value) continue;
            if (attr.value === false || attr.value === null || attr.value === undefined) continue;
            oldChild.setAttribute(attr.name, attr.value);

            var _iterator4 = _createForOfIteratorHelper(directPropUpdate),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var specialProp = _step4.value;
                if (specialProp.name !== attr.name) continue; // @ts-ignore

                oldChild[specialProp.name] = attr.value;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var _iterator3 = _createForOfIteratorHelper(oldAttributes),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _attr = _step3.value;
            // only remove the attribute if it's not in the new element
            if (newChild.hasAttribute(_attr.name)) continue;
            oldChild.removeAttribute(_attr.name);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      if (isElement(oldChild) && isElement(newChild) && oldChild.tagName !== newChild.tagName) {
        var referenceElement = oldChild.previousSibling;
        oldChild.outerHTML = oldChild.outerHTML.replace(new RegExp("<".concat(oldChild.tagName.toLowerCase(), "(.*?)"), 'g'), "<".concat(newChild.tagName.toLowerCase(), "$1")).replace(new RegExp("</".concat(oldChild.tagName.toLowerCase(), "(.*?)"), 'g'), "</".concat(newChild.tagName.toLowerCase(), "$1")); // IMPORTANT: setting outerHTML will not update the element reference itself,
        // so refreshing the element by a reference element is needed

        if (referenceElement) {
          oldChild = referenceElement.nextSibling;
        } else {
          oldChild = oldParent.firstChild;
        }

        if (!isElement(oldChild)) continue;
        if (isLeafComponent(oldChild)) oldChild.isUpdating = true;
      } // update properties for Leaf components


      if (isLeafComponent(oldChild) && isLeafComponent(newChild)) {
        // always keep attributes and props in-sync
        var _iterator5 = _createForOfIteratorHelper(newChild.attributes),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _attr2 = _step5.value;
            // property is higher than attributes
            if (_attr2.name in newChild.props) continue;
            oldChild.props[_attr2.name] = _attr2.value;
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        for (var prop in newChild.props) {
          oldChild.props[prop] = newChild.props[prop];
        }

        for (var _prop in oldChild.props) {
          if (_prop in newChild.props || newChild.hasAttribute(_prop)) continue;
          delete oldChild.props[_prop];
        }
      }

      if (isTextNode(oldChild) && isTextNode(newChild)) {
        if (oldChild.textContent === newChild.textContent) continue;
        oldParent.replaceChild(newChild, oldChild);
        continue;
      }

      if (isTextNode(oldChild) && isElement(newChild)) {
        oldParent.replaceChild(newChild, oldChild);
        oldChild = newChild;
        if (isLeafComponent(oldChild)) oldChild.isUpdating = true;
      }

      if (isElement(oldChild) && isTextNode(newChild)) {
        oldParent.replaceChild(newChild, oldChild);
        continue;
      }

      patchElements(Array.from(oldChild.childNodes), Array.from(newChild.childNodes), oldChild, newChild);

      if (isLeafComponent(oldChild)) {
        oldChild.isUpdating = false;
        oldChild.rerender();
      }
    } // insert new elements


    if (newLen > oldLen) {
      newChildren.slice(oldLen).forEach(function (child) {
        if (child.nodeType === Node.TEXT_NODE) {
          oldParent.appendChild(child);
          return;
        }

        mountElements([child], oldParent);
      });
      return;
    } // remove old elements


    if (newLen < oldLen) {
      oldChildren.slice(newLen).forEach(function (child) {
        oldParent.removeChild(child);
      });
    }
  };
  /**
   * Helper function for defining CSS stylesheets.
   * @param styles Stylesheet string.
   * @returns Stylesheet string.
   */


  var css = function css(styles) {
    for (var _len2 = arguments.length, keys = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      keys[_key2 - 1] = arguments[_key2];
    }

    var constructedStyle = '';
    var curKeyIndex = 0;
    styles.forEach(function (style) {
      constructedStyle += style + keys[curKeyIndex++];
    });
    return constructedStyle;
  };
  /**
   * Core Leaf component class.
   *
   * This class is a thin wrapper of `HTMLElement` class and integrates a shadow DOM within.
   */


  var LeafComponent = /*#__PURE__*/function (_HTMLElement) {
    _inherits(LeafComponent, _HTMLElement);

    var _super = _createSuper(LeafComponent);

    function LeafComponent() {
      var _this;

      _classCallCheck(this, LeafComponent);

      _this = _super.call(this);

      _LeafComponent_state.set(_assertThisInitialized(_this), null);

      _LeafComponent_reactiveInstance.set(_assertThisInitialized(_this), null);

      _LeafComponent_previousRenderResult.set(_assertThisInitialized(_this), null);

      _LeafComponent_shadow.set(_assertThisInitialized(_this), null);

      _LeafComponent_key.set(_assertThisInitialized(_this), undefined);

      _LeafComponent_isMounted.set(_assertThisInitialized(_this), false);

      _LeafComponent_styleElement.set(_assertThisInitialized(_this), null);

      _this.props = {};
      _this.isLeafComponent = true;
      _this.isUpdating = false;
      var props = {}; // initialize properties

      var _iterator6 = _createForOfIteratorHelper(_this.constructor.observedAttributes),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var attr = _step6.value;
          props[attr] = null;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var outerThis = _assertThisInitialized(_this);

      var checkIsPropValid = function checkIsPropValid(key, value) {
        if (Array.isArray(_this.constructor.watchedProps) || !(key in _this.constructor.watchedProps) || value === undefined || value === null || _this.isUpdating) return;

        if (_this.constructor.observedAttributes.includes(key) && _this.constructor.watchedProps[key] !== value.constructor) {
          throw new TypeError("Types of property '".concat(key, "' unmatch: expected ").concat(_this.constructor.watchedProps[key].name, ", got ").concat(value.constructor.name));
        }
      };

      var previousPropChange = {
        name: '',
        value: null
      };
      _this.props = new Proxy(props, {
        get: function get(target, key, receiver) {
          checkIsPropValid(key);
          return Reflect.get(target, key, receiver);
        },
        set: function set(target, key, value, receiver) {
          checkIsPropValid(key, value);
          var result = Reflect.set(target, key, value, receiver);

          if (__classPrivateFieldGet(outerThis, _LeafComponent_isMounted, "f") && key !== 'key' && (previousPropChange.name !== key || previousPropChange.value !== value)) {
            outerThis.onPropChange(key, value);
            previousPropChange.name = key;
            previousPropChange.value = value;
          }

          if (__classPrivateFieldGet(outerThis, _LeafComponent_isMounted, "f")) outerThis.rerender();
          return result;
        },
        has: function has(_target, key) {
          return outerThis.constructor.observedAttributes.includes(key);
        },
        deleteProperty: function deleteProperty(target, key) {
          checkIsPropValid(key);
          return Reflect.deleteProperty(target, key);
        }
      });
      return _this;
    }

    _createClass(LeafComponent, [{
      key: "setState",
      value: function setState(newState) {
        __classPrivateFieldSet(this, _LeafComponent_state, newState, "f");
      }
    }, {
      key: "getState",
      value: function getState() {
        if (!__classPrivateFieldGet(this, _LeafComponent_isMounted, "f")) return {};
        return __classPrivateFieldGet(this, _LeafComponent_state, "f");
      }
      /** Component inner state. */

    }, {
      key: "state",
      get: function get() {
        return this.getState();
      }
      /** {@inheritDoc LeafComponent.state} */
      ,
      set: function set(value) {
        this.setState(value);
      }
      /** Event listeners attached to component. */

    }, {
      key: "listeners",
      get: function get() {
        return Array.from(getEventListenerOf(this) || []);
      }
      /**
       * Dispatch a custom event to listeners.
       * @param event Event object or name to fire.
       * @param data Extra data to pass to `CustomEvent.detail`.
       * @returns Is the fired event's `preventDefault` hook called.
       */

    }, {
      key: "fireEvent",
      value: function fireEvent(event, data) {
        if (event instanceof Event) {
          // stop bubbling to prevent multiple invokation of the event
          event.stopPropagation();
          return this.fireEvent(event.type, data);
        }

        var toDispatch = new CustomEvent(event, {
          detail: data
        });
        return this.dispatchEvent(toDispatch);
      }
      /**
       * Rerender the component based on current state.
       */

    }, {
      key: "rerender",
      value: function rerender() {
        var _a;

        if (!__classPrivateFieldGet(this, _LeafComponent_shadow, "f") || this.isUpdating || !__classPrivateFieldGet(this, _LeafComponent_isMounted, "f") || ((_a = __classPrivateFieldGet(this, _LeafComponent_reactiveInstance, "f")) === null || _a === void 0 ? void 0 : _a.isSetting)) return;
        if (__classPrivateFieldGet(this, _LeafComponent_reactiveInstance, "f")) __classPrivateFieldGet(this, _LeafComponent_reactiveInstance, "f").isSetting = true;

        if (!__classPrivateFieldGet(this, _LeafComponent_previousRenderResult, "f")) {
          this.onMounted();
        } else {
          this.onRerender();
        }

        if (__classPrivateFieldGet(this, _LeafComponent_styleElement, "f")) __classPrivateFieldGet(this, _LeafComponent_styleElement, "f").textContent = this.css();
        var renderResult = this.render();
        if (!Array.isArray(renderResult)) renderResult = [renderResult];
        if (__classPrivateFieldGet(this, _LeafComponent_reactiveInstance, "f")) __classPrivateFieldGet(this, _LeafComponent_reactiveInstance, "f").isSetting = false;

        if (!__classPrivateFieldGet(this, _LeafComponent_previousRenderResult, "f")) {
          mountElements(renderResult, __classPrivateFieldGet(this, _LeafComponent_shadow, "f"));

          __classPrivateFieldSet(this, _LeafComponent_previousRenderResult, renderResult, "f");

          return;
        }

        patchElements(Array.from(__classPrivateFieldGet(this, _LeafComponent_shadow, "f").childNodes), Array.from(renderResult), __classPrivateFieldGet(this, _LeafComponent_shadow, "f"), renderResult[0]);

        __classPrivateFieldSet(this, _LeafComponent_previousRenderResult, renderResult, "f");
      }
      /**
       * Callback when the component is mounted.
       */

    }, {
      key: "onMounted",
      value: function onMounted() {
        return;
      }
      /**
       * Callback when the component is about to perform a rerender.
       */

    }, {
      key: "onRerender",
      value: function onRerender() {
        return;
      }
      /**
       * Callback when a property of the component has changed.
       * @param name Name of changed property.
       * @param newValue The updated value of property.
       */

    }, {
      key: "onPropChange",
      value: function onPropChange(name, newValue) {
        return;
      }
      /**
       * Start component lifecycle.
       *
       * This function is invoked when the first initialization of the component.
       */

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        var _a, _b, _c, _d;

        __classPrivateFieldSet(this, _LeafComponent_isMounted, true, "f");

        __classPrivateFieldSet(this, _LeafComponent_shadow, this.attachShadow({
          mode: 'closed'
        }), "f");

        __classPrivateFieldSet(this, _LeafComponent_styleElement, createElement('style'), "f");

        __classPrivateFieldGet(this, _LeafComponent_styleElement, "f").textContent = this.css();

        __classPrivateFieldGet(this, _LeafComponent_styleElement, "f").setAttribute('leaf-preserve', 'true');

        __classPrivateFieldGet(this, _LeafComponent_shadow, "f").appendChild(__classPrivateFieldGet(this, _LeafComponent_styleElement, "f"));

        var currentInstance = reactiveInstances.get(__classPrivateFieldGet(this, _LeafComponent_key, "f") || ''); // adopt the previous reactive data, if any

        if (currentInstance) __classPrivateFieldSet(this, _LeafComponent_reactiveInstance, currentInstance, "f"); // or create a new one
        else __classPrivateFieldSet(this, _LeafComponent_reactiveInstance, new Reactive(), "f");

        if ((_a = __classPrivateFieldGet(this, _LeafComponent_reactiveInstance, "f")) === null || _a === void 0 ? void 0 : _a.actualState) {
          __classPrivateFieldSet(this, _LeafComponent_state, __classPrivateFieldGet(this, _LeafComponent_reactiveInstance, "f").actualState, "f");
        } else {
          __classPrivateFieldSet(this, _LeafComponent_state, (_b = __classPrivateFieldGet(this, _LeafComponent_reactiveInstance, "f")) === null || _b === void 0 ? void 0 : _b.build((_c = __classPrivateFieldGet(this, _LeafComponent_state, "f")) !== null && _c !== void 0 ? _c : {}), "f");
        } // IMPORTANT: only set the current `Reactive` instance when the key is valid


        if (__classPrivateFieldGet(this, _LeafComponent_reactiveInstance, "f") && __classPrivateFieldGet(this, _LeafComponent_key, "f")) reactiveInstances.set(__classPrivateFieldGet(this, _LeafComponent_key, "f"), __classPrivateFieldGet(this, _LeafComponent_reactiveInstance, "f"));
        (_d = __classPrivateFieldGet(this, _LeafComponent_reactiveInstance, "f")) === null || _d === void 0 ? void 0 : _d.onStateChange(function () {
          return _this2.rerender();
        });
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal === newVal) return; // handle keying

        if (name === 'key') {
          __classPrivateFieldSet(this, _LeafComponent_key, newVal, "f");
        } // rerender when attributes changed


        if (!Array.isArray(this.constructor.watchedProps)) {
          if (this.constructor.watchedProps[name] === Number) this.props[name] = parseFloat(newVal);else this.props[name] = newVal;
        } else {
          this.props[name] = newVal;
        }
      }
      /**
       * Core rendering logic of a component.
       * @returns HTML element to be rendered and attached.
       */

    }, {
      key: "render",
      value: function render() {
        throw new Error('Render function of `LeafComponent` must be overrided.');
      }
      /**
       * Inject CSS stylesheet to component. If not given, leaf will inject an empty string by default.
       *
       * Not to be confused with the builtin prop `style`.
       * @returns CSS stylesheet string.
       */

    }, {
      key: "css",
      value: function css() {
        return '';
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        var userProps = [];

        if (!Array.isArray(this.watchedProps)) {
          for (var key in this.watchedProps) {
            userProps.push(key);
          }
        } else {
          userProps.push.apply(userProps, _toConsumableArray(this.watchedProps));
        }

        return [].concat(userProps, ['key']);
      }
    }]);

    return LeafComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  _LeafComponent_state = new WeakMap(), _LeafComponent_reactiveInstance = new WeakMap(), _LeafComponent_previousRenderResult = new WeakMap(), _LeafComponent_shadow = new WeakMap(), _LeafComponent_key = new WeakMap(), _LeafComponent_isMounted = new WeakMap(), _LeafComponent_styleElement = new WeakMap();
  LeafComponent.watchedProps = [];

  var palette = {
    primary: '#6366f1',
    secondary: '#14b8a6',
    muted: '#6b7280'
  };

  var _templateObject$3;

  var Button = /*#__PURE__*/function (_LeafComponent) {
    _inherits(Button, _LeafComponent);

    var _super = _createSuper(Button);

    function Button() {
      _classCallCheck(this, Button);

      return _super.call(this);
    }

    _createClass(Button, [{
      key: "render",
      value: function render() {
        var _this = this;

        return createElementReactStyle("button", {
          onClick: function onClick(e) {
            return _this.fireEvent(e);
          }
        });
      }
    }, {
      key: "css",
      value: function css$1() {
        return css(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n      button {\n        padding: 5px 10px;\n        background-color: transparent;\n        border: 1px solid ", ";\n        border-radius: 5px;\n        transition: all 0.1s;\n      }\n\n      button:hover {\n        background-color: ", ";\n        color: white;\n        cursor: pointer;\n      }\n\n      button:focus {\n        box-shadow: 0px 0px 0px 2px ", ";\n        border-color: ", ";\n      }\n    "])), palette.primary, palette.primary, palette.secondary, palette.secondary);
      }
    }]);

    return Button;
  }(LeafComponent);

  registerComponent('leaf-button', Button);

  var _templateObject$2;

  var Counter = /*#__PURE__*/function (_LeafComponent) {
    _inherits(Counter, _LeafComponent);

    var _super = _createSuper(Counter);

    function Counter() {
      _classCallCheck(this, Counter);

      return _super.call(this);
    }

    _createClass(Counter, [{
      key: "onMounted",
      value: function onMounted() {
        var _this$props$count;

        this.state.counter = (_this$props$count = this.props.count) !== null && _this$props$count !== void 0 ? _this$props$count : 0;
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        return createElementReactStyle("div", null, createElementReactStyle(Button, {
          onClick: function onClick() {
            return _this.state.counter++;
          }
        }, "+"), createElementReactStyle("span", {
          className: "counter"
        }, this.state.counter), createElementReactStyle(Button, {
          onClick: function onClick() {
            return _this.state.counter--;
          }
        }, "-"));
      }
    }, {
      key: "css",
      value: function css$1() {
        return css(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n      .counter {\n        margin: 0 10px;\n      }\n    "])));
      }
    }]);

    return Counter;
  }(LeafComponent);

  _defineProperty(Counter, "watchedProps", ['count']);

  registerComponent('leaf-counter', Counter);

  var _templateObject$1;

  var Resources = /*#__PURE__*/function (_LeafComponent) {
    _inherits(Resources, _LeafComponent);

    var _super = _createSuper(Resources);

    function Resources() {
      _classCallCheck(this, Resources);

      return _super.call(this);
    }

    _createClass(Resources, [{
      key: "render",
      value: function render() {
        return createElementReactStyle("div", null, this.props.links.map(function (link) {
          return createElementReactStyle("div", {
            className: "link",
            onClick: function onClick() {
              return window.open(link.link);
            }
          }, createElementReactStyle("h3", null, link.title), createElementReactStyle("p", null, link.description));
        }));
      }
    }, {
      key: "css",
      value: function css$1() {
        return css(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n      .link {\n        padding: 10px 30px;\n        border: 1px solid #eee;\n        border-radius: 10px;\n        transition: all 0.2s;\n        margin-bottom: 20px;\n      }\n\n      .link:hover {\n        cursor: pointer;\n        border-color: ", ";\n      }\n    "])), palette.primary);
      }
    }]);

    return Resources;
  }(LeafComponent);

  _defineProperty(Resources, "watchedProps", ['links']);

  registerComponent('leaf-resources', Resources);

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "body {\n  margin: 0px;\n  padding: 0px;\n  overflow: hidden;\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n}\n";
  styleInject(css_248z);

  var _templateObject;

  var Square = /*#__PURE__*/function (_LeafComponent) {
    _inherits(Square, _LeafComponent);

    var _super = _createSuper(Square);

    //static watchedProps = ['value']
    function Square() {
      _classCallCheck(this, Square);

      return _super.call(this);
    }

    _createClass(Square, [{
      key: "render",
      value: function render() {
        var _this = this;

        return createElementReactStyle("button", {
          onClick: function onClick() {
            return _this.props.onClick();
          }
        }, this.props.value);
      }
    }, {
      key: "css",
      value: function css$1() {
        return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    button {\n        width: 100px;\n        height: 100px;\n    }\n    "])));
      }
    }]);

    return Square;
  }(LeafComponent);

  registerComponent('leaf-square', Square);

  var MyApp = /*#__PURE__*/function (_LeafComponent) {
    _inherits(MyApp, _LeafComponent);

    var _super = _createSuper(MyApp);

    function MyApp() {
      var _this;

      _classCallCheck(this, MyApp);

      _this = _super.call(this);
      _this.links = [{
        title: 'Documentation',
        description: 'Leafjs official documentation.',
        link: 'https://leafjs.samzhangjy.com'
      }, {
        title: 'GitHub',
        description: 'Found a bug? Report an issue to us!',
        link: 'https://github.com/samzhangjy/leafjs'
      }];
      _this.state = {
        squars: Array(9).fill(null),
        Isx: true
      };
      return _this;
    }

    _createClass(MyApp, [{
      key: "calculate_winner",
      value: function calculate_winner(squars) {
        var win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

        for (var i = 0; i < win.length; i++) {
          var _win$i = _slicedToArray(win[i], 3),
              a = _win$i[0],
              b = _win$i[1],
              c = _win$i[2];

          if (squars[a] && squars[a] == squars[b] && squars[a] == squars[c]) {
            return squars[a];
          }
        }

        return null;
      }
    }, {
      key: "handleClick",
      value: function handleClick(i) {
        var squ = this.state.squars.slice();

        if (this.state.Isx) {
          if (this.calculate_winner(this.state.squars)) return; // alert(this.calculate_winner(this.state.squars))

          squ[i] = 'X';
          this.state.Isx = false;
        } else {
          if (this.calculate_winner(this.state.squars)) return;
          squ[i] = 'O';
          this.state.Isx = true;
        } // this.setState({ squars: squ });


        this.state.squars = squ;
      }
    }, {
      key: "renderSpuare",
      value: function renderSpuare(i) {
        var _this2 = this;

        return createElementReactStyle(Square, {
          value: this.state.squars[i],
          onClick: function onClick() {
            return _this2.handleClick(i);
          }
        });
      }
    }, {
      key: "render",
      value: function render() {
        var winner = this.calculate_winner(this.state.squars);
        var status = 'Next player is ' + this.state.Isx ? 'X' : 'O';

        if (winner) {
          status = 'Winner is ' + winner;
        } else {
          // console.log(winner);
          status = "Next player is ".concat(this.state.Isx ? 'X' : 'O');
          console.log(status);
        }

        console.log(winner);
        return createElementReactStyle("div", null, status, createElementReactStyle("br", null), this.renderSpuare(0), this.renderSpuare(1), this.renderSpuare(2), createElementReactStyle("br", null), this.renderSpuare(3), this.renderSpuare(4), this.renderSpuare(5), createElementReactStyle("br", null), this.renderSpuare(6), this.renderSpuare(7), this.renderSpuare(8));
      }
    }]);

    return MyApp;
  }(LeafComponent);

  registerComponent('my-app', MyApp);

})();
