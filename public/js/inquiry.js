/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/assets/js/Vue/Components/EditInquiryComponent.vue":
/*!*********************************************************************!*\
  !*** ./Resources/assets/js/Vue/Components/EditInquiryComponent.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditInquiryComponent_vue_vue_type_template_id_a48c1f24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditInquiryComponent.vue?vue&type=template&id=a48c1f24&scoped=true& */ "./Resources/assets/js/Vue/Components/EditInquiryComponent.vue?vue&type=template&id=a48c1f24&scoped=true&");
/* harmony import */ var _EditInquiryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditInquiryComponent.vue?vue&type=script&lang=js& */ "./Resources/assets/js/Vue/Components/EditInquiryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditInquiryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditInquiryComponent_vue_vue_type_template_id_a48c1f24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditInquiryComponent_vue_vue_type_template_id_a48c1f24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a48c1f24",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Resources/assets/js/Vue/Components/EditInquiryComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./Resources/assets/js/Vue/Components/EditInquiryComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./Resources/assets/js/Vue/Components/EditInquiryComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInquiryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditInquiryComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./Resources/assets/js/Vue/Components/EditInquiryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInquiryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./Resources/assets/js/Vue/Components/EditInquiryComponent.vue?vue&type=template&id=a48c1f24&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./Resources/assets/js/Vue/Components/EditInquiryComponent.vue?vue&type=template&id=a48c1f24&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInquiryComponent_vue_vue_type_template_id_a48c1f24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditInquiryComponent.vue?vue&type=template&id=a48c1f24&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Resources/assets/js/Vue/Components/EditInquiryComponent.vue?vue&type=template&id=a48c1f24&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInquiryComponent_vue_vue_type_template_id_a48c1f24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInquiryComponent_vue_vue_type_template_id_a48c1f24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./Resources/assets/js/Vue/Components/InquiriesComponent.vue":
/*!*******************************************************************!*\
  !*** ./Resources/assets/js/Vue/Components/InquiriesComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InquiriesComponent_vue_vue_type_template_id_47450aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InquiriesComponent.vue?vue&type=template&id=47450aa6& */ "./Resources/assets/js/Vue/Components/InquiriesComponent.vue?vue&type=template&id=47450aa6&");
/* harmony import */ var _InquiriesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InquiriesComponent.vue?vue&type=script&lang=js& */ "./Resources/assets/js/Vue/Components/InquiriesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InquiriesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InquiriesComponent_vue_vue_type_template_id_47450aa6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InquiriesComponent_vue_vue_type_template_id_47450aa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Resources/assets/js/Vue/Components/InquiriesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./Resources/assets/js/Vue/Components/InquiriesComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./Resources/assets/js/Vue/Components/InquiriesComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InquiriesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InquiriesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./Resources/assets/js/Vue/Components/InquiriesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InquiriesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./Resources/assets/js/Vue/Components/InquiriesComponent.vue?vue&type=template&id=47450aa6&":
/*!**************************************************************************************************!*\
  !*** ./Resources/assets/js/Vue/Components/InquiriesComponent.vue?vue&type=template&id=47450aa6& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InquiriesComponent_vue_vue_type_template_id_47450aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InquiriesComponent.vue?vue&type=template&id=47450aa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Resources/assets/js/Vue/Components/InquiriesComponent.vue?vue&type=template&id=47450aa6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InquiriesComponent_vue_vue_type_template_id_47450aa6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InquiriesComponent_vue_vue_type_template_id_47450aa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./Resources/assets/js/Vue/Services/InquiryServices.js":
/*!*************************************************************!*\
  !*** ./Resources/assets/js/Vue/Services/InquiryServices.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InquiryServices; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InquiryServices =
/*#__PURE__*/
function (_Services) {
  _inherits(InquiryServices, _Services);

  function InquiryServices() {
    _classCallCheck(this, InquiryServices);

    return _possibleConstructorReturn(this, _getPrototypeOf(InquiryServices).apply(this, arguments));
  }

  _createClass(InquiryServices, null, [{
    key: "index",
    value: function index(context, _ref) {
      var query = _ref.query,
          onSuccess = _ref.onSuccess,
          onError = _ref.onError;
      axios.get(route('admin.api.inquiries.index', query)).then(function (response) {
        InquiryServices.handle(context, response, onSuccess);
      }, function (_ref2) {
        var response = _ref2.response;
        InquiryServices.handle(context, response, onError);
      });
    }
  }, {
    key: "get",
    value: function get(context, _ref3) {
      var id = _ref3.id,
          onSuccess = _ref3.onSuccess,
          onError = _ref3.onError;
      axios.get(route('admin.api.inquiries.show', id)).then(function (response) {
        InquiryServices.handle(context, response, onSuccess);
      }, function (_ref4) {
        var response = _ref4.response;
        InquiryServices.handle(context, response, onError);
      });
    }
  }, {
    key: "edit",
    value: function edit(context, _ref5) {
      var id = _ref5.id;
      location.href = route('admin.inquiries.edit', {
        inquiry: id
      }).url();
    }
  }, {
    key: "delete",
    value: function _delete(context, _ref6) {
      var id = _ref6.id,
          onSuccess = _ref6.onSuccess,
          onError = _ref6.onError;
      axios.get(route('admin.api.inquiries.delete', id)).then(function (response) {
        InquiryServices.handle(context, response, onSuccess);
      }, function (_ref7) {
        var response = _ref7.response;
        InquiryServices.handle(context, response, onError);
      });
    }
  }]);

  return InquiryServices;
}(Services);



/***/ }),

/***/ "./Resources/assets/js/app.js":
/*!************************************!*\
  !*** ./Resources/assets/js/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component('inquiries-component', __webpack_require__(/*! ./Vue/Components/InquiriesComponent.vue */ "./Resources/assets/js/Vue/Components/InquiriesComponent.vue")["default"]);
Vue.component('edit-inquiry-component', __webpack_require__(/*! ./Vue/Components/EditInquiryComponent.vue */ "./Resources/assets/js/Vue/Components/EditInquiryComponent.vue")["default"]);

/***/ }),

/***/ "./Resources/assets/sass/app.scss":
/*!****************************************!*\
  !*** ./Resources/assets/sass/app.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./Resources/assets/js/Vue/Components/EditInquiryComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./Resources/assets/js/Vue/Components/EditInquiryComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_InquiryServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Services/InquiryServices */ "./Resources/assets/js/Vue/Services/InquiryServices.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      required: true,
      type: Number
    }
  },
  data: function data() {
    return {
      inquiry: {},
      resolved: false,
      back: route('admin.inquiries.index').url()
    };
  },
  mounted: function mounted() {
    this.setDefaults();
  },
  methods: {
    setDefaults: function setDefaults() {
      var _this = this;

      _Services_InquiryServices__WEBPACK_IMPORTED_MODULE_0__["default"].get(this, {
        id: this.id,
        onSuccess: function onSuccess(_ref) {
          var data = _ref.data;
          _this.inquiry = data.inquiry;
          _this.resolved = _this.inquiry.resolved_at ? true : false;
        }
      });
    },
    onResolved: function onResolved() {
      this.inquiry.resolved_at = moment().format('DD/MM/YYYY hh:mm A');
    },
    onSave: function onSave() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./Resources/assets/js/Vue/Components/InquiriesComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./Resources/assets/js/Vue/Components/InquiriesComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_InquiryServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Services/InquiryServices */ "./Resources/assets/js/Vue/Services/InquiryServices.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {},
  data: function data() {
    return {
      index: _Services_InquiryServices__WEBPACK_IMPORTED_MODULE_0__["default"].index,
      labels: [{
        field: "id",
        title: "ID",
        'sortable': true
      }, {
        field: "name",
        title: "Name",
        'sortable': true
      }, {
        field: "email",
        title: "Email Address",
        'sortable': true
      }, {
        field: "message",
        title: "Message",
        'filters': ['truncate'],
        'sortable': false
      }, {
        field: "status",
        title: "Status",
        'sortable': true
      }, {
        field: "resolved_at",
        title: "Resolved At",
        'sortable': true,
        "default": 'Still Open'
      }, {
        field: "sent_at",
        title: "Sent At",
        'sortable': true
      }]
    };
  },
  mounted: function mounted() {
    this.setDefaults();
  },
  methods: {
    setDefaults: function setDefaults() {},
    onExport: function onExport(e) {},
    onEdit: function onEdit(id) {
      _Services_InquiryServices__WEBPACK_IMPORTED_MODULE_0__["default"].edit(this, {
        id: id
      });
    },
    onDelete: function onDelete(id) {
      _Services_InquiryServices__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](this, {
        id: id
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Resources/assets/js/Vue/Components/EditInquiryComponent.vue?vue&type=template&id=a48c1f24&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Resources/assets/js/Vue/Components/EditInquiryComponent.vue?vue&type=template&id=a48c1f24&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper" }, [
    _c("div", { staticClass: "btn-back d-flex" }, [
      _c("i", { staticClass: "fal fa-arrow-left fa-lg" }),
      _vm._v(" "),
      _c("a", { attrs: { href: _vm.back } }, [_vm._v("Inquiries")])
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card mt-5" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("form", { staticClass: "form" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { staticClass: "text-grey-darkest uppercase" }, [
                  _vm._v("Name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inquiry.name,
                      expression: "inquiry.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.inquiry.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.inquiry, "name", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { staticClass: "text-grey-darkest uppercase" }, [
                  _vm._v("Email Address")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inquiry.email,
                      expression: "inquiry.email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.inquiry.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.inquiry, "email", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { staticClass: "text-grey-darkest uppercase" }, [
                  _vm._v("Message")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inquiry.message,
                      expression: "inquiry.message"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { rows: "15", disabled: "" },
                  domProps: { value: _vm.inquiry.message },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.inquiry, "message", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { staticClass: "text-grey-darkest uppercase" }, [
                  _vm._v("Status")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inquiry.status,
                      expression: "inquiry.status"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.inquiry.status },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.inquiry, "status", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { staticClass: "text-grey-darkest uppercase" }, [
                  _vm._v("Sent At")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inquiry.sent_at,
                      expression: "inquiry.sent_at"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.inquiry.sent_at },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.inquiry, "sent_at", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _c(
                "div",
                { staticClass: "form-group d-flex flex-column" },
                [
                  !_vm.resolved
                    ? _c(
                        "label",
                        { staticClass: "text-grey-darkest uppercase" },
                        [_vm._v("Mark As Resolved")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.resolved
                    ? _c(
                        "label",
                        { staticClass: "text-grey-darkest uppercase" },
                        [_vm._v("Resolved At")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.resolved
                    ? _c("toggle-button", {
                        attrs: { color: "#1f3d4e", sync: true },
                        on: { change: _vm.onResolved },
                        model: {
                          value: _vm.resolved,
                          callback: function($$v) {
                            _vm.resolved = $$v
                          },
                          expression: "resolved"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.resolved
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inquiry.resolved_at,
                            expression: "inquiry.resolved_at"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", disabled: "" },
                        domProps: { value: _vm.inquiry.resolved_at },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inquiry,
                              "resolved_at",
                              $event.target.value
                            )
                          }
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col d-flex" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary ml-auto",
                  attrs: { type: "button" },
                  on: { click: _vm.onSave }
                },
                [_vm._v("Save")]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-title" }, [
      _c("span", { staticClass: "page-text" }, [
        _c("i", { staticClass: "fal fa-envelope-open-text mr-2" }),
        _vm._v("\n\t\t\t\tEdit Inquiry\n\t\t\t")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header d-flex align-items-center" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Inquiry Details")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Resources/assets/js/Vue/Components/InquiriesComponent.vue?vue&type=template&id=47450aa6&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Resources/assets/js/Vue/Components/InquiriesComponent.vue?vue&type=template&id=47450aa6& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm.index
        ? _c(
            "v-table",
            {
              attrs: {
                title: "Inquiries List",
                index: _vm.index,
                "enable-edit": true,
                "enable-delete": true,
                labels: _vm.labels
              },
              on: { edit: _vm.onEdit, delete: _vm.onDelete }
            },
            [
              _c("template", { slot: "table-header-actions" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary ml-auto",
                    attrs: { type: "button" },
                    on: { click: _vm.onExport }
                  },
                  [_vm._v("Export")]
                )
              ])
            ],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-title" }, [
      _c("span", { staticClass: "page-text" }, [
        _c("i", { staticClass: "fal fa-envelope-open-text mr-2" }),
        _vm._v("\n\t\t\t\tInquiries\n\t\t\t")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 0:
/*!***************************************************************************!*\
  !*** multi ./Resources/assets/js/app.js ./Resources/assets/sass/app.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/aimen.s.a.sasi/Sites/Code/Laravel/starter/Modules/Inquiry/Resources/assets/js/app.js */"./Resources/assets/js/app.js");
module.exports = __webpack_require__(/*! /Users/aimen.s.a.sasi/Sites/Code/Laravel/starter/Modules/Inquiry/Resources/assets/sass/app.scss */"./Resources/assets/sass/app.scss");


/***/ })

/******/ });