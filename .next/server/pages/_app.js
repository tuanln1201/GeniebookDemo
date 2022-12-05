(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 89:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_555963', '__Inter_Fallback_555963'","fontStyle":"normal"},
	"className": "__className_555963"
};


/***/ }),

/***/ 370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"pages/_app.tsx","import":"Inter","arguments":[{"subsets":[]}],"variableName":"inter"}
var _app_tsx_import_Inter_arguments_subsets_variableName_inter_ = __webpack_require__(89);
var _app_tsx_import_Inter_arguments_subsets_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Inter_arguments_subsets_variableName_inter_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: ./globalstyles.tsx

const GlobalStyle = external_styled_components_.createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background: #f3f5f7;
  }
  h1,h2,h3,h4,h5,p {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;
/* harmony default export */ const globalstyles = (GlobalStyle);

;// CONCATENATED MODULE: ./theme/index.ts
const theme = {
    colors: {
        white: "#FFFFFF",
        yellow: "#FFBB00",
        green: "#DFF6DE",
        pink: "#FBE2E2",
        gray: "#F2F5F7",
        grey: "#f3f5f7",
        primaryText1: "#081F42",
        primaryText2: "#5E6D84",
        primaryText3: "#00003B"
    },
    fontSizes: {
        small: "10px",
        medium: "12px",
        large: "14px",
        big: "18px"
    }
};
/* harmony default export */ const theme_0 = (theme);

;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
// EXTERNAL MODULE: ./services/bank.ts + 1 modules
var bank = __webpack_require__(270);
;// CONCATENATED MODULE: ./store.ts


const rootReducer = (0,toolkit_namespaceObject.combineReducers)({
    [bank/* bankApi.reducerPath */.Qd.reducerPath]: bank/* bankApi.reducer */.Qd.reducer
});
const setupStore = (preloadedState)=>{
    return (0,toolkit_namespaceObject.configureStore)({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware)=>// adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
            getDefaultMiddleware().concat(bank/* bankApi.middleware */.Qd.middleware),
        preloadedState
    });
};

;// CONCATENATED MODULE: ./pages/_app.tsx







const store = setupStore();
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
            store: store,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
                theme: theme_0,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                    className: (_app_tsx_import_Inter_arguments_subsets_variableName_inter_default()).className,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(globalstyles, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qd": () => (/* binding */ bankApi),
  "b_": () => (/* binding */ useCreateDonateMutation),
  "pB": () => (/* binding */ useGetBankInformationQuery)
});

;// CONCATENATED MODULE: external "@reduxjs/toolkit/query/react"
const react_namespaceObject = require("@reduxjs/toolkit/query/react");
;// CONCATENATED MODULE: ./services/bank.ts

const bankApi = (0,react_namespaceObject.createApi)({
    reducerPath: "bankApi",
    tagTypes: [],
    baseQuery: (0,react_namespaceObject.fetchBaseQuery)({
        baseUrl: `${"https://be-homework.vercel.app/api"}`
    }),
    endpoints: (builder)=>({
            getBankInformation: builder.query({
                query: ()=>`/bank`
            }),
            createDonate: builder.mutation({
                query: (data)=>({
                        url: `/card`,
                        method: "POST",
                        body: data
                    })
            })
        })
});
const { useGetBankInformationQuery , useCreateDonateMutation  } = bankApi;


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(370));
module.exports = __webpack_exports__;

})();