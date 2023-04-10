"use strict";
(() => {
var exports = {};
exports.id = 661;
exports.ids = [661];
exports.modules = {

/***/ 9084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ msupdate),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/layout.tsx
var layout = __webpack_require__(7376);
// EXTERNAL MODULE: ./styles/utils.module.css
var utils_module = __webpack_require__(1928);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
;// CONCATENATED MODULE: external "@mui/x-data-grid"
const x_data_grid_namespaceObject = require("@mui/x-data-grid");
;// CONCATENATED MODULE: ./pages/msupdate.tsx





const columns = [
    {
        field: "ID",
        headerName: "ID",
        width: 90
    },
    {
        field: "DocumentTitle",
        headerName: "Title",
        width: 240
    },
    {
        field: "CurrentReleaseDate",
        headerName: "Last Updated",
        width: 180
    },
    {
        field: "InitialReleaseDate",
        headerName: "Initial Release Date",
        width: 180
    },
    {
        field: "CvrfUrl",
        headerName: "Link",
        width: 20,
        renderCell: (params)=>{
            if (params.value) {
                return /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    target: "_blank",
                    href: params.value,
                    rel: "noreferrer",
                    children: "Link"
                });
            }
        }
    }, 
];
const getServerSideProps = async ()=>{
    const res = await fetch("https://api.msrc.microsoft.com/cvrf/v2.0/updates");
    const data = await res.json();
    return {
        props: {
            data
        }
    };
};
const MsUpdate = ({ data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Microsoft Security Update"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (utils_module_default()).headingXl,
                        children: "Microsoft Security Updates"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            height: "40rem"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(x_data_grid_namespaceObject.DataGrid, {
                            rows: data.value.reverse(),
                            columns: columns,
                            pageSize: 20,
                            getRowId: (row)=>row.ID
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const msupdate = (MsUpdate);


/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,376], () => (__webpack_exec__(9084)));
module.exports = __webpack_exports__;

})();