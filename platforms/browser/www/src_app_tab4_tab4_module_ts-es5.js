(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_tab4_tab4_module_ts"], {
    /***/
    35355:
    /*!*********************************************!*\
      !*** ./src/app/tab4/tab4-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab4PageRoutingModule": function Tab4PageRoutingModule() {
          return (
            /* binding */
            _Tab4PageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab4.page */
      3631);

      var routes = [{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
      }];

      var _Tab4PageRoutingModule = function Tab4PageRoutingModule() {
        _classCallCheck(this, Tab4PageRoutingModule);
      };

      _Tab4PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab4PageRoutingModule);
      /***/
    },

    /***/
    32486:
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab4PageModule": function Tab4PageModule() {
          return (
            /* binding */
            _Tab4PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab4.page */
      3631);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab4-routing.module */
      35355);

      var _Tab4PageModule = function Tab4PageModule() {
        _classCallCheck(this, Tab4PageModule);
      };

      _Tab4PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
          path: '',
          component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
        }]), _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab4PageRoutingModule],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page]
      })], _Tab4PageModule);
      /***/
    },

    /***/
    3631:
    /*!***********************************!*\
      !*** ./src/app/tab4/tab4.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab4Page": function Tab4Page() {
          return (
            /* binding */
            _Tab4Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab4.page.html */
      28203);
      /* harmony import */


      var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab4.page.scss */
      35300);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _Tab4Page = /*#__PURE__*/function () {
        function Tab4Page(router, http, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, Tab4Page);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.subcategoryList = [];
          this.offerList = "";
          this.cardVisible = true;
          this.isvisible = false;
          this.Category = '';
          this.subcategory = '';
          this.productName = '';
          this.offer = '';
          this.otheroffer = '';
          this.totalCost = '';
          this.offerPrice = '';
          this.offerTime = '';
          this.description = '';
          this.orderObjRes = [];
          this.subCategoryNotfound = false;
          this.PopupModel = false;
          this.subcategoryPopupModel = false;
          route.params.subscribe(function (val) {
            _this.isvisible = false;
            _this.cardVisible = true;

            _this.getCategoryList();

            _this.getSubcategoryList();

            _this.getProductList();

            _this.getOfferList(); // this.orderObj()

          });
        }

        _createClass(Tab4Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "backToPrivious",
          value: function backToPrivious() {
            this.cardVisible = true;
            this.isvisible = false;
          }
        }, {
          key: "offerPage",
          value: function offerPage() {
            this.cardVisible = false;
            this.isvisible = true;
          }
        }, {
          key: "NavigatetoNotification",
          value: function NavigatetoNotification() {
            this.router.navigate(['/notification']);
          }
        }, {
          key: "popupModel",
          value: function popupModel(data) {
            var _this2 = this;

            var formdata = new FormData();
            formdata.append("category", data.category);
            this.category_tbid = data.category;
            console.log(data.category);
            var obj = {
              category: data.category
            };
            this.http.post('/read_subcategory', obj).subscribe(function (response) {
              console.log(response.records);
              _this2.subcategoryList = response.records;
              console.log(_this2.subcategoryList);
              _this2.subCategoryNotfound = false;
            }, function (error) {
              console.log(error);
              _this2.subCategoryNotfound = true;
              _this2.subcategoryList = [];
            });
          }
        }, {
          key: "addoffer",
          value: function addoffer() {
            var productData = {
              category: this.category_tbid,
              subcategory: this.subcategory,
              product: this.productName,
              description: this.description,
              offer: this.offer,
              other_offer: this.otheroffer,
              total_cost: this.totalCost,
              offer_price: this.offerPrice,
              offer_time: this.offerTime
            };
            this.http.post('/create_offer', productData).subscribe(function (response) {
              console.log(response);

              if (response.success == "true") {
                console.log(response);
                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: function didOpen(toast) {
                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                  }
                });
                Toast.fire({
                  icon: 'success',
                  title: 'Offer Created Successfully'
                });
              }
            }, function (error) {
              console.log(error);
              var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: function didOpen(toast) {
                  toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                  toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                }
              });
              Toast.fire({
                icon: 'success',
                title: 'Offer Already Exist'
              });
            });
          }
        }, {
          key: "popupModelOpen",
          value: function popupModelOpen() {
            this.PopupModel = true;
          }
        }, {
          key: "subcategoryPopupModelOpen",
          value: function subcategoryPopupModelOpen() {
            if (this.subcategory == "subcategoryPopup") {
              this.subcategoryPopupModel = true;
            }
          }
        }, {
          key: "getCategoryList",
          value: function getCategoryList() {
            var _this3 = this;

            this.http.get('/read_all_category').subscribe(function (response) {
              _this3.categoryList = response.records;
              console.log(response.records);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getSubcategoryList",
          value: function getSubcategoryList() {
            var _this4 = this;

            this.http.get('/read_all_subcategory').subscribe(function (response) {
              console.log(response.records);
              _this4.subcategoryList = response.records;
              console.log(response.records);
              console.log(_this4.subcategoryList);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getProductList",
          value: function getProductList() {
            var _this5 = this;

            this.http.get('/read_all_product').subscribe(function (response) {
              _this5.productList = response.records;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "repostOffer",
          value: function repostOffer(tbid) {
            this.router.navigate(['/addofferEditPage'], {
              queryParams: {
                tbid: tbid
              }
            });
            console.log(tbid);
          }
        }, {
          key: "getOfferList",
          value: function getOfferList() {
            var _this6 = this;

            this.http.get('/read_all_offer').subscribe(function (response) {
              _this6.offerList = response.records;
              console.log(response.records);
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return Tab4Page;
      }();

      _Tab4Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }];
      };

      _Tab4Page = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab4Page);
      /***/
    },

    /***/
    35300:
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card {\n  background-color: #fff;\n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc !important;\n  width: 96% !important;\n  margin: 5px;\n}\n\nimg {\n  margin: 12px 10px;\n  height: 65px;\n  width: 75x;\n}\n\n.offer-btn {\n  margin: 25px !important;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  border: 1px solid #fff;\n  border-radius: 5px;\n  color: #fff;\n}\n\n.product-name {\n  margin-top: -10px !important;\n  text-align: center;\n}\n\n.badge {\n  font-size: 10px !important;\n  margin-left: 20px !important;\n  color: #50C7C8;\n}\n\n#offer:focus {\n  outline: none !important;\n  border: 1px solid #fff;\n  box-shadow: 0 0 2px #e9f3ff;\n}\n\n.confirm-btn {\n  border-radius: 5px !important;\n  width: 50%;\n  height: 35px;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  border: 1px solid #fff;\n  margin: 5px;\n}\n\n#card {\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  margin-bottom: 5px;\n  border: 1px solid #ebe6e6;\n}\n\n#blurred {\n  -moz-filter: blur(2px);\n  -o-filter: blur(2px);\n  -ms-filter: blur(2px);\n  filter: blur(2px);\n}\n\n#kg-dropdwon {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 3em;\n  border-radius: 0.25em;\n  overflow: hidden;\n}\n\ninput[type=text] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #23d5ab;\n}\n\ninput[type=text]:focus {\n  border-color: #23d5ab !important;\n  box-shadow: 0 0 8px 0 #23d5ab !important;\n}\n\n#edit {\n  cursor: pointer;\n}\n\n.myproduct-div {\n  position: absolute;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: 5px;\n}\n\n.select {\n  width: 95% !important;\n  text-align: center !important;\n}\n\n.repost-btn {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  text-align: center;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsOERBQUE7RUFHQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFJQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQURBOztBQUlBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhEQUFBO0VBR0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUhBOztBQUtBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUZBOztBQUlBO0VBRUEsc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFEQTs7QUFHQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFBOztBQUVBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQUNBOztBQU1BO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtBQUhBOztBQUtBO0VBQ0EsZUFBQTtBQUZBOztBQUlBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQURBOztBQUlBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQURBOztBQUlBO0VBQ0UsOERBQUE7RUFHRixXQUFBO0VBRUEsa0JBQUE7QUFKQTs7QUFPQTtFQUNBLG9DQUFBO0VBS0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFSQTs7QUFTQTtFQUNJLGFBQUE7QUFQSiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcmR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjoxcHggc29saWQgI2JmYmZiZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2NjYyAhaW1wb3J0YW50O1xuICB3aWR0aDo5NiUgIWltcG9ydGFudDtcbiAgbWFyZ2luOjVweDtcbn1cbmltZ3tcbiAgbWFyZ2luOjEycHggMTBweDtcbiAgaGVpZ2h0OjY1cHg7XG4gIHdpZHRoOjc1eFxufVxuLm9mZmVyLWJ0bntcbiAgbWFyZ2luOjI1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgMCUsICMyM2Q1YWJcbiAgMTAwJSk7XG4gIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wcm9kdWN0LW5hbWV7XG4gIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5iYWRnZXtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OjIwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IzUwQzdDOFxuICA7XG59XG5cblxuXG4jb2ZmZXI6Zm9jdXMge1xub3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuYm94LXNoYWRvdzogMCAwIDJweCAjZTlmM2ZmO1xufVxuXG4uY29uZmlybS1idG57XG5ib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbndpZHRoOiA1MCU7XG5oZWlnaHQ6MzVweDtcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gIDAlLCAjMjNkNWFiXG4gIDEwMCUpO1xuY29sb3I6I2ZmZjtcbmJvcmRlcjoxcHggc29saWQgI2ZmZjtcbm1hcmdpbjo1cHg7XG59XG4jY2FyZHtcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG5ib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2NjYztcbm1hcmdpbi1ib3R0b206IDVweDtcbmJvcmRlcjoxcHggc29saWQgI2ViZTZlNjtcbn1cbiNibHVycmVkIHtcbi13ZWJraXQtZmlsdGVyOiBibHVyKDJweCk7XG4tbW96LWZpbHRlcjogYmx1cigycHgpO1xuLW8tZmlsdGVyOiBibHVyKDJweCk7XG4tbXMtZmlsdGVyOiBibHVyKDJweCk7XG5maWx0ZXI6IGJsdXIoMnB4KTsgICAgXG59XG4ja2ctZHJvcGR3b24ge1xucG9zaXRpb246IHJlbGF0aXZlO1xuZGlzcGxheTogZmxleDtcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAzZW07XG5ib3JkZXItcmFkaXVzOiAuMjVlbTtcbm92ZXJmbG93OiBoaWRkZW47XG59XG5pbnB1dFt0eXBlPXRleHRdIHtcbmZvbnQtc2l6ZTogMTVweDtcbm1hcmdpbjogMCA1cHg7XG53aWR0aDogOTAlO1xuYm94LXNpemluZzogYm9yZGVyLWJveDtcbmJvcmRlcjogbm9uZTtcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5ib3JkZXItYm90dG9tOiAycHggc29saWQgIzIzZDVhYjtcbn1cbi8vIGlucHV0OmZvY3VzIHtcbi8vICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuLy8gICBib3JkZXI6MXB4IHNvbGlkICNlOWYzZmYgIWltcG9ydGFudDtcbi8vICAgYm94LXNoYWRvdzogMCAwIDJweCAjOGI4ZDkxO1xuLy8gfVxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuYm9yZGVyLWNvbG9yOiAjMjNkNWFiICFpbXBvcnRhbnQ7XG5ib3gtc2hhZG93OiAwIDAgOHB4IDAgIzIzZDVhYiAhaW1wb3J0YW50O1xufVxuI2VkaXR7XG5jdXJzb3I6IHBvaW50ZXI7XG59XG4ubXlwcm9kdWN0LWRpdntcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5ib3JkZXI6MXB4IHNvbGlkICNjY2M7XG5ib3JkZXItcmFkaXVzOiA4cHg7XG5ib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2ViZTZlNjtcbndpZHRoOjk2JSAhaW1wb3J0YW50O1xubWFyZ2luOjVweDtcblxufVxuLnNlbGVjdHtcbndpZHRoOjk1JSAhaW1wb3J0YW50O1xudGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5yZXBvc3QtYnRue1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIzYTZkNVxuICAwJSwgIzIzZDVhYlxuICAxMDAlKTtcbmNvbG9yOiNmZmY7XG4vLyBtYXJnaW4tdG9wOiAtNXB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5pb24tY29udGVudCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiNGNEY3RkEgICFpbXBvcnRhbnQ7XG4vLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXG4vLyAwJSwgI2QxZjJlN1xuLy8gMTAwJSkgIWltcG9ydGFudDtcblxuLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbi0tb3ZlcmZsb3c6IGhpZGRlbjtcbm92ZXJmbG93OiBhdXRvO1xuJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG59Il19 */";
      /***/
    },

    /***/
    28203:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n        <!-- <img  id=\"logo\"  src=\"assets/logo.jpeg\" alt=\"\"> -->\n        <h5 style=\"color:#fff;margin-top:30px\">24HRS</h5>\n      </div>\n      <div class=\"col-7\" style=\"text-align: right;width: 90%;margin-top: -40px;\" (click)=\"NavigatetoNotification()\">\n        <svg style=\"margin:5px;text-align:right\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\"\n            fill=\"white\" />\n        </svg>\n      </div>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"bg-class\">\n  <div class=\"container\">\n\n    <div style=\"width: 100%; text-align: center;\">\n      <button *ngIf=\"cardVisible\" (click)=\"offerPage()\" class=\"btn btn-success btn-sm  offer-btn mt-1\">+ Add\n        Offer</button>\n    </div>\n\n    <div *ngIf=\"cardVisible\" class=\"add-card-div\">\n      <div *ngFor=\"let offer of offerList; let i = index\">\n        <div class=\"card\">\n          <div class=\"row\">\n            <div class=\"col-4\">\n              <img src=\"{{offer.product_image}}\" alt=\"\">\n              <h6 class=\"product-name\">{{offer.product}}</h6>\n              <ion-badge class=\"badge\" color=\"light\" style=\"color:#404040\" slot=\"start\">1 Kg</ion-badge>\n            </div>\n            <div class=\"col-8\">\n              <h6 class=\"no-of-views\">Number of views: <span> 10</span></h6>\n              <p style=\"font-size: smaller;\">\n                <svg width=\"20\" height=\"18\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path\n                    d=\"M8.49963 12.492L8.49859 12.5105C8.42789 13.7644 9.12154 14.9391 10.2662 15.5023L10.278 15.5081C10.6815 15.7035 11.0123 16.0258 11.221 16.4265L11.2257 16.4352C11.8025 17.5473 12.9954 18.2214 14.2672 18.1538L14.2865 18.1527C14.7477 18.1266 15.2055 18.247 15.5958 18.4974C16.6726 19.1795 18.0396 19.1795 19.1164 18.4974C19.5067 18.247 19.9645 18.1266 20.4257 18.1527L20.445 18.1538C21.7147 18.2219 22.9092 17.5473 23.4873 16.4334L23.4902 16.4273C23.6996 16.0255 24.0312 15.7027 24.4361 15.507L24.4455 15.5023C25.5902 14.9388 26.2841 13.7644 26.2131 12.5102L26.2121 12.4928C26.1886 12.0511 26.3096 11.614 26.5569 11.2492C27.2688 10.1979 27.2688 8.81162 26.5572 7.76004C26.3101 7.39552 26.1886 6.95861 26.2121 6.51696L26.2131 6.49847C26.2841 5.24429 25.5902 4.06988 24.4444 3.50618L24.434 3.5009C24.0312 3.30596 23.7012 2.98528 23.4922 2.58562L23.4862 2.57374C22.9092 1.46167 21.7147 0.787825 20.445 0.855183L20.4255 0.85624C19.9645 0.88239 19.5067 0.761938 19.1167 0.511525H19.1162C18.0393 -0.170508 16.6724 -0.170508 15.5955 0.511525C15.2052 0.761674 14.7474 0.882126 14.2862 0.855975L14.2669 0.854919C12.997 0.786768 11.8027 1.46141 11.226 2.57321L11.2215 2.5814C11.0126 2.9829 10.6815 3.30543 10.2774 3.50117L10.2665 3.50645C9.1218 4.06961 8.42789 5.24429 8.49885 6.49847L8.49989 6.5159C8.52337 6.95756 8.40233 7.39472 8.15503 7.75925C7.44312 8.81083 7.44312 10.1973 8.15503 11.2487C8.40207 11.6132 8.52337 12.0504 8.49963 12.492ZM9.03441 8.37366C9.41606 7.81102 9.60311 7.13639 9.56658 6.45488L9.56554 6.43639C9.52798 5.60538 9.98867 4.83353 10.7324 4.48037L10.7415 4.47588C11.3517 4.18003 11.8513 3.69294 12.1664 3.08698L12.1716 3.07694C12.5548 2.33785 13.3575 1.88986 14.21 1.93582L14.2288 1.93661C14.911 1.97544 15.5879 1.7974 16.165 1.42707C16.8936 0.965597 17.8181 0.965597 18.5467 1.42707C19.1238 1.79687 19.8007 1.97518 20.4826 1.93687L20.5014 1.93582C21.3581 1.89038 22.1569 2.33785 22.539 3.07483L22.5461 3.0883C22.8612 3.69347 23.3603 4.17976 23.9696 4.47535L23.9785 4.47984C24.734 4.85176 25.1926 5.61964 25.1464 6.43666L25.1454 6.45594C25.1089 7.13744 25.2962 7.81182 25.6778 8.37445C26.139 9.05569 26.1388 9.9538 25.6773 10.6348C25.2959 11.1977 25.1089 11.8723 25.1454 12.5538L25.1464 12.572C25.1926 13.3891 24.734 14.1572 23.9782 14.5294L23.9704 14.5331C23.3597 14.8295 22.8596 15.3171 22.5443 15.9241L22.5403 15.932C22.1569 16.6711 21.3555 17.1194 20.5017 17.0732L20.4831 17.0721C19.801 17.0335 19.1238 17.2118 18.5464 17.5819C17.8181 18.0431 16.8936 18.0431 16.1652 17.5819C15.6404 17.2451 15.0315 17.0665 14.4101 17.0671C14.3499 17.0671 14.2893 17.0687 14.2288 17.0721L14.21 17.0729C13.3687 17.127 12.5728 16.6812 12.1708 15.9307L12.1654 15.9204C11.8507 15.3155 11.352 14.8295 10.7428 14.5339L10.7329 14.5289C9.97719 14.1569 9.51858 13.3888 9.56502 12.572L9.56606 12.5528C9.60232 11.8713 9.41502 11.1966 9.03363 10.6342C8.57268 9.95301 8.57294 9.0549 9.03441 8.37419V8.37366Z\"\n                    fill=\"#5F5F5F\" />\n                  <path\n                    d=\"M13.9082 15.097C14.1584 15.2553 14.4879 15.1779 14.6441 14.9245L20.9731 4.65812C21.0764 4.49408 21.085 4.28646 20.9952 4.1145C20.9055 3.94228 20.7312 3.83239 20.5392 3.82631C20.3472 3.82024 20.1667 3.91903 20.0665 4.08518L13.7379 14.3516C13.5816 14.6052 13.6578 14.9388 13.9082 15.097Z\"\n                    fill=\"#5F5F5F\" />\n                  <path\n                    d=\"M14.4755 9.53113C15.7765 9.53113 16.8351 8.30891 16.8351 6.80669C16.8351 5.30447 15.7765 4.08252 14.4755 4.08252C13.1746 4.08252 12.1162 5.30447 12.1162 6.80669C12.1162 8.30891 13.1746 9.53113 14.4755 9.53113ZM14.4755 5.16448C15.1874 5.16448 15.7665 5.90119 15.7665 6.80669C15.7665 7.7122 15.1874 8.44917 14.4755 8.44917C13.7639 8.44917 13.1847 7.71193 13.1847 6.80669C13.1847 5.90145 13.7639 5.16448 14.4755 5.16448Z\"\n                    fill=\"#5F5F5F\" />\n                  <path\n                    d=\"M17.8765 12.2027C17.8765 13.7049 18.9348 14.9269 20.2358 14.9269C21.5367 14.9269 22.5953 13.7046 22.5953 12.2027C22.5953 10.701 21.537 9.47852 20.236 9.47852C18.9348 9.47852 17.8765 10.7002 17.8765 12.2027ZM21.5268 12.2027C21.5268 13.1082 20.9477 13.8449 20.2358 13.8449C19.5241 13.8449 18.945 13.1082 18.945 12.2027C18.945 11.2972 19.5241 10.5605 20.2358 10.5605C20.9477 10.5605 21.5268 11.2967 21.5268 12.2027Z\"\n                    fill=\"#5F5F5F\" />\n                  <path\n                    d=\"M28.6263 21.186C27.9188 19.9146 26.35 19.4304 25.0626 20.0861L20.8775 22.0883C20.2997 21.0003 19.1912 20.3077 17.9714 20.2728L14.108 20.165C13.4962 20.1473 12.896 19.9902 12.352 19.706L11.9589 19.4997C9.94606 18.4372 7.54686 18.4399 5.53609 19.5065L5.56061 18.6047C5.5687 18.306 5.33626 18.0571 5.04122 18.0489L0.804722 17.9309C0.50968 17.9227 0.264203 18.158 0.256116 18.4568L0.000204782 27.8708C-0.00788216 28.1696 0.224551 28.4184 0.519593 28.4266L4.75609 28.5447H4.77096C5.06026 28.5444 5.29687 28.3111 5.30496 28.0185L5.31696 27.5681L6.41756 26.9714C6.84956 26.736 7.35486 26.68 7.82677 26.8153L14.3988 28.6831C14.4103 28.6865 14.4218 28.6891 14.4335 28.6918C14.9086 28.7924 15.3927 28.8429 15.8782 28.8426C16.906 28.8431 17.9218 28.6189 18.856 28.1846C18.879 28.174 18.9011 28.1619 18.9223 28.1482L28.4513 21.9066C28.6889 21.7513 28.7656 21.4351 28.6263 21.186ZM1.08307 27.3597L1.3095 19.0276L4.47801 19.1158L4.25131 27.4482L1.08307 27.3597ZM18.3744 27.2178C17.2138 27.7482 15.9176 27.8946 14.6701 27.6362L8.11555 25.7737C7.37808 25.5624 6.58817 25.6501 5.9133 26.0175L5.35087 26.3224L5.50165 20.7824C7.28364 19.5821 9.56937 19.4587 11.4674 20.4601L11.8606 20.6664C12.5477 21.0256 13.3058 21.224 14.0787 21.2465L17.9422 21.3542C19.0274 21.3857 19.949 22.1681 20.1692 23.2448L14.4145 23.0844C14.1194 23.0762 13.874 23.3116 13.8659 23.6103C13.8578 23.9091 14.0902 24.1579 14.3853 24.1661L20.7361 24.3431H20.7512C21.0403 24.3428 21.2769 24.1096 21.285 23.8169C21.2915 23.5818 21.274 23.3465 21.2333 23.1151L25.5251 21.0613L25.5376 21.0552C26.1465 20.743 26.8829 20.8473 27.3835 21.3167L18.3744 27.2178Z\"\n                    fill=\"#5F5F5F\" />\n                </svg>\n                {{offer.offer}}\n              </p>\n\n              <p style=\"font-size: smaller;\">\n                <svg width=\"20\" height=\"18\" viewBox=\"0 0 29 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path\n                    d=\"M18.9116 3.42642V1.81135H20.5929V0.22644H15.5488V1.81135H17.2302V3.42642C14.4736 3.62501 12.0001 4.79208 10.1921 6.56606H3.66697V8.15044H8.86504C8.52445 8.65143 8.22897 9.18153 7.98298 9.73587H1.98559V11.3202H7.43614C7.30667 11.8354 7.21773 12.3647 7.1739 12.9057H0.304199V14.4906H7.17384C7.21773 15.0316 7.30662 15.5609 7.43608 16.0755H1.98559V17.6604H7.98298C8.22891 18.2147 8.52445 18.7448 8.86504 19.2453H3.66697V20.8302H10.1921C12.1821 22.7828 14.9784 24 18.0709 24C24.0971 24 28.9999 19.3786 28.9999 13.6981C28.9999 8.28426 24.5466 3.83242 18.9116 3.42642ZM27.2799 14.4906C26.8787 18.666 23.3412 22.0006 18.9116 22.3787V20.8302H17.2302V22.3787C12.8005 22.0006 9.26297 18.666 8.86184 14.4906H10.5046V12.9057H8.86184C9.26297 8.73025 12.8005 5.39566 17.2302 5.01756V6.56606H18.9116V5.01756C23.3412 5.39566 26.8787 8.73025 27.2799 12.9057H25.6371V14.4906H27.2799Z\"\n                    fill=\"#5F5F5F\" />\n                  <path\n                    d=\"M15.5488 13.6981C15.5488 15.009 16.6802 16.0755 18.0709 16.0755C19.0607 16.0755 19.9634 15.5259 20.3705 14.6754L23.1146 8.94385L17.0341 11.5305C16.1318 11.9144 15.5488 12.7652 15.5488 13.6981ZM17.7258 12.9751L19.7527 12.1128L18.838 14.0235C18.7021 14.3072 18.401 14.4906 18.0709 14.4906C17.6074 14.4906 17.2302 14.1351 17.2302 13.6981C17.2302 13.387 17.4248 13.1032 17.7258 12.9751Z\"\n                    fill=\"#5F5F5F\" />\n                </svg>\n                {{offer.offer_time}}\n              </p>\n\n              <div class=\"row\" style=\"margin-top: -10px;\">\n                <div class=\"col-6\">\n                  <p style=\"font-size: 13px;\"><b><del>₹{{offer.total_cost}} </del> &nbsp;₹{{offer.offer_price}}</b></p>\n                </div>\n                <div class=\"col-6\">\n                  <button (click)=\"repostOffer(offer.tbid)\" class=\"btn btn-sm repost-btn\">Repost</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n\n\n\n    </div>\n\n\n    <div *ngIf=\"isvisible\" class=\"container signin-div\" style=\"margin-top: 20px;\">\n      <div class=\"row\">\n        <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n\n          <svg (click)=\"backToPrivious()\" style=\"margin-top:-8px;cursor:pointer;margin:5px;\"\n            xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"20\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\"\n            viewBox=\"0 0 16 16\">\n            <path fill-rule=\"evenodd\"\n              d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n          </svg>\n        </div>\n        <div class=\"col-12\">\n          <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Add Your Offer</b></h5>\n          <p class=\"name mt-3 ion-text-left\" style=\"color:#404040;\">Category :</p>\n        </div>\n\n        \n        <form  #categoryselect=\"ngForm\"  (change)=\"popupModel(categoryselect.value)\">\n          <div class=\"col-12 \">\n            <div class=\"select\" >\n              <select  ngModel placeholder=\"category\" name=\"category\">\n                <option value=\"\" disabled selected>Select Your Category</option>\n                <option *ngFor=\"let cat of categoryList\" value=\"{{cat.tbid}}\">{{cat.category}}</option>\n                <option style=\"background-color:#23d5ab;color:#fff;\" value=\"categoryPopup\" (click)=\"popupModelOpen()\">+ add new</option>\n              </select>\n            </div>\n          </div>\n        </form>\n\n        <div class=\"col-12\">\n          <p class=\"name mt-3 ion-text-left\" style=\"color:#404040;\">Sub Category :</p>\n        </div>\n        <div class=\"col-12\">\n          <div class=\"select\" id=\"kg-dropdwon\">\n            <select [(ngModel)]=\"subcategory\">\n              <option value=\"\" disabled selected>Select Your Subcategory</option>\n              <option *ngFor=\"let subcat of subcategoryList\" value=\"{{subcat.tbid}}\">{{subcat.subsubcategory}}\n              </option>\n              <option  disabled *ngIf=\"subCategoryNotfound\">No Sub Category Found</option>\n              <option style=\"background-color:#23d5ab;color:#fff;\" value=\"subcategoryPopup\">+ add new</option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12 ion-text-left\">\n          <p class=\"name mt-2\" style=\"color:#404040;\">Product:</p>\n        </div>\n        <div class=\"col-12\">\n          <div class=\"select\" id=\"kg-dropdwon\">\n            <select [(ngModel)]=\"productName\">\n              <option value=\"\" disabled selected>Select Your Product</option>\n              <option *ngFor=\"let product of productList\" value=\"{{product.tbid}}\">{{product.product_name}}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-6\">\n          <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Offer:</p>\n        </div>\n        <div class=\"col-6\">\n          <input [(ngModel)]=\"offer\" type=\"text\" id=\"offer\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Total Cost :</p>\n        </div>\n        <div class=\"col-6\">\n          <input [(ngModel)]=\"totalCost\" type=\"text\" id=\"offer\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Other Offer :</p>\n        </div>\n        <div class=\"col-6\">\n          <input [(ngModel)]=\"otheroffer\" type=\"text\" id=\"offer\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Offer Price :</p>\n        </div>\n        <div class=\"col-6\">\n          <input [(ngModel)]=\"offerPrice\" type=\"text\" id=\"offer\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Offer Time :</p>\n        </div>\n        <div class=\"col-6\">\n          <input [(ngModel)]=\"offerTime\" type=\"text\" id=\"offer\">\n        </div>\n      </div>\n\n      <div class=\"form-group mt-3 ion-text-center\">\n        <label for=\"exampleFormControlTextarea1\" style=\"color:#404040;\"> Description </label>\n        <textarea [(ngModel)]=\"description\" maxlength=\"100\" style=\"background-color: #fff;margin-top: 5px;\"\n          class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n      </div>\n\n      <div style=\"width:100%; text-align: center;\">\n        <button type=\"button\" (click)=\"addoffer()\" class=\"btn btn-primary  confirm-btn mt-2\">Confirm</button>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n\n\n<div class=\"card\" *ngIf=\"PopupModel\" style=\"margin-top: 20px;\" id=\"card\">\n  <div class=\"row\" style=\"margin:10%\" id=\"modal\">\n    <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n      <svg (click)=\"backToprivious()\" style=\"color: black;margin-top:-8px;cursor:pointer\"\n        xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\"\n        viewBox=\"0 0 16 16\">\n        <path fill-rule=\"evenodd\"\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n      </svg>\n    </div>\n    <div class=\"col-12\">\n      <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Type Your Category Name</b></h5>\n    </div>\n    <div class=\"col-12\">\n      <input [(ngModel)]=\"categoryName\" type=\"text\">\n    </div>\n\n    <div style=\"width:100%; text-align: center;\">\n      <button type=\"button\" (click)=\"createCategory()\" class=\"btn  submit-btn mt-2\">Submit</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"subcategoryPopupModel\" style=\"margin-top: 20px;\" id=\"card\">\n  <div class=\"row\" style=\"margin:10%\" id=\"modal\">\n    <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n      <svg (click)=\"ScBackToprivious()\" style=\"color: black;margin-top:-8px;cursor:pointer\"\n        xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\"\n        viewBox=\"0 0 16 16\">\n        <path fill-rule=\"evenodd\"\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n      </svg>\n    </div>\n    <div class=\"col-12\">\n      <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Type Your Subcategory Name</b></h5>\n    </div>\n    <div class=\"col-12\">\n      <input [(ngModel)]=\"subcategoryName\" type=\"text\">\n    </div>\n\n    <div style=\"width:100%; text-align: center;\">\n      <button type=\"button\" (click)=\"createSubcategory()\" class=\"btn  submit-btn mt-2\">Submit</button>\n    </div>\n  </div>\n</div> \n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab4_tab4_module_ts-es5.js.map