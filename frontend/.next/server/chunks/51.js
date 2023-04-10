"use strict";
exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 4051:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AU": () => (/* binding */ getPostData),
/* harmony export */   "ld": () => (/* binding */ getSortedPostsData),
/* harmony export */   "x0": () => (/* binding */ getPostsData)
/* harmony export */ });
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7740);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4519);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__]);
([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const getSortedPostsData = async ()=>{
    try {
        const res = await fetch(`${_auth__WEBPACK_IMPORTED_MODULE_2__/* .BACKEND_URL */ .z}/api/list`);
        const data = await res.json();
        const allSortedData = data.map((entry)=>{
            return {
                id: entry.id,
                date: entry.created_at,
                title: entry.title,
                content: entry.content
            };
        });
        return allSortedData.sort((a, b)=>{
            if (a.date < b.date) {
                return 1;
            } else if (a.date > b.date) {
                return -1;
            } else {
                return 0;
            }
        });
    } catch (err) {
        console.log(err);
    }
    return [];
};
const getPostsData = async (type)=>{
    const nType = Number(type);
    try {
        const res = await fetch(`${_auth__WEBPACK_IMPORTED_MODULE_2__/* .BACKEND_URL */ .z}/api/list`);
        const data = await res.json();
        const allSortedData = data.reduce((filtered, entry)=>{
            if (entry.category.includes(nType)) {
                filtered.push({
                    id: entry.id,
                    date: entry.created_at,
                    title: entry.title
                });
            }
            return filtered;
        }, []);
        return allSortedData.sort((a, b)=>{
            if (a.date < b.date) {
                return 1;
            } else if (a.date > b.date) {
                return -1;
            } else {
                return 0;
            }
        });
    } catch (err) {
        console.log(err);
    }
    return [];
};
const getPostData = async (id)=>{
    const nid = Number(id);
    try {
        const res = await fetch(`${_auth__WEBPACK_IMPORTED_MODULE_2__/* .BACKEND_URL */ .z}/api/getArticle?id=` + nid);
        const data = await res.json();
        if (data.content) {
            const content = await (0,remark__WEBPACK_IMPORTED_MODULE_0__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__["default"]).process(data.content);
            const contentHtml = content.toString();
            return {
                id: data.id,
                title: data.title,
                date: data.created_at,
                content: contentHtml
            };
        } else {
            return {
                id: data.id,
                title: data.title,
                date: data.created_at,
                content: data.content
            };
        }
    } catch (err) {
        console.log(err);
    }
    return {};
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;