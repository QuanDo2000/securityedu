exports.id = 376;
exports.ids = [376];
exports.modules = {

/***/ 9849:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "layout_container__fbLkO",
	"header": "layout_header__kY0Lt",
	"footer": "layout_footer__dka_2"
};


/***/ }),

/***/ 1928:
/***/ ((module) => {

// Exports
module.exports = {
	"heading2Xl": "utils_heading2Xl___9fFP",
	"headingXl": "utils_headingXl__u25Y2",
	"headingLg": "utils_headingLg__5535D",
	"headingMd": "utils_headingMd__gD1Ok",
	"borderCircle": "utils_borderCircle__s2nTm",
	"colorInherit": "utils_colorInherit__mSH_x",
	"padding1px": "utils_padding1px__PWQKR",
	"margin1rem": "utils_margin1rem__wJACA",
	"list": "utils_list__4Mu4l",
	"listItem": "utils_listItem__s2m6i",
	"lightText": "utils_lightText__eUzGY"
};


/***/ }),

/***/ 7376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "y": () => (/* binding */ siteTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9849);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1928);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4519);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);









const siteTitle = "SecurityEdu";
const Layout = ({ children , home , admin  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: isAuth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        (0,_lib_auth__WEBPACK_IMPORTED_MODULE_6__/* .authCheck */ .X)().then((res)=>{
            setAuth(res);
        }).catch(()=>{
            setAuth(false);
        });
    });
    const handleLogout = async (e)=>{
        try {
            const res = await fetch(`${_lib_auth__WEBPACK_IMPORTED_MODULE_6__/* .BACKEND_URL */ .z}/auth/logout`, {
                method: "POST",
                credentials: "include"
            });
            const resJson = res.json();
            if (res.status === 200) {
                router.push("/");
            } else {
                console.log(resJson);
            }
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "og:title",
                    content: siteTitle
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),
                children: home ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading2Xl),
                        children: [
                            siteTitle,
                            " ",
                            admin && "Admin Page"
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading2Xl),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: admin ? "/admin" : "/",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().colorInherit),
                                children: [
                                    siteTitle,
                                    " ",
                                    admin && "Admin Page"
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),
                children: [
                    !home && !admin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        children: "← Back to home"
                    }),
                    !home && admin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        children: "← Back to main site"
                    }),
                    !admin && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                        sx: {
                            display: "flex"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/faq",
                                    children: "FAQ"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                sx: {
                                    ml: "1rem"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/search",
                                    children: "Search"
                                })
                            })
                        ]
                    }),
                    home && isAuth && !admin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/admin",
                        children: "Admin"
                    }),
                    isAuth && admin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        legacyBehavior: false,
                        href: "#",
                        onClick: handleLogout,
                        children: "Logout"
                    }),
                    home && !isAuth && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/login",
                        children: "Login"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 4519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ authCheck),
/* harmony export */   "z": () => (/* binding */ BACKEND_URL)
/* harmony export */ });
const BACKEND_URL = "http://securityedu.eastus.cloudapp.azure.com/:8000";
// export const BACKEND_URL = 'http://localhost:8000';
const authCheck = async ()=>{
    try {
        const res = await fetch(`${BACKEND_URL}/auth/user`, {
            method: "GET",
            credentials: "include"
        });
        if (res.status === 200) return true;
        return false;
    } catch (err) {
        console.log(err);
        return false;
    }
};


/***/ })

};
;