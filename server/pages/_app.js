(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__(476);
// EXTERNAL MODULE: external "@geist-ui/react"
var react_ = __webpack_require__(357);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    const [themeType, setThemeType] = external_react_default().useState("light");
    external_react_default().useEffect(()=>{
        const md = window.matchMedia("(prefers-color-scheme: dark)");
        setThemeType((lastThemeType)=>md.matches ? "dark" : "light");
        const handler = (event)=>{
            setThemeType((lastThemeType)=>event.matches ? "dark" : "light");
        };
        try {
            // Chrome & Firefox
            md.addEventListener("change", handler);
        } catch (e1) {
            try {
                // Safari
                md.addListener(handler);
            } catch (e2) {
                console.error(e2);
            }
        }
    }, []);
    const theme = (0,react_.useTheme)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_.GeistProvider, {
        theme: {
            type: themeType
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(react_.CssBaseline, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime.jsx((external_nextjs_progressbar_default()), {
                color: "var(--text-color)"
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 476:
/***/ (() => {



/***/ }),

/***/ 357:
/***/ ((module) => {

"use strict";
module.exports = require("@geist-ui/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(731)));
module.exports = __webpack_exports__;

})();