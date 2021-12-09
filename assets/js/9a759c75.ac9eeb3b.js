"use strict";(self.webpackChunkoceanpay_app_api=self.webpackChunkoceanpay_app_api||[]).push([[860],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function A(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),m=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=A(t,["components","mdxType","originalType","parentName"]),s=m(n),u=r,k=s["".concat(i,".").concat(u)]||s[u]||g[u]||l;return n?a.createElement(k,d(d({ref:e},p),{},{components:n})):a.createElement(k,d({ref:e},p))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,d=new Array(l);d[0]=s;var A={};for(var i in e)hasOwnProperty.call(e,i)&&(A[i]=e[i]);A.originalType=t,A.mdxType="string"==typeof t?t:r,d[1]=A;for(var m=2;m<l;m++)d[m]=n[m];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7455:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return A},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return p},default:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),d=["components"],A={sidebar_position:1,title:"\u521b\u5efa\u8ba2\u5355"},i=void 0,m={unversionedId:"api/trade/create",id:"api/trade/create",isDocsHomePage:!1,title:"\u521b\u5efa\u8ba2\u5355",description:"\u8bf7\u6c42URL",source:"@site/docs/api/trade/create.md",sourceDirName:"api/trade",slug:"/api/trade/create",permalink:"/OceanPay-app/docs/api/trade/create",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u521b\u5efa\u8ba2\u5355"},sidebar:"tutorialSidebar",previous:{title:"\u6211\u7684\u7ed3\u7b97\u4fe1\u606f",permalink:"/OceanPay-app/docs/api/user/my-settle-info"},next:{title:"\u8ba2\u5355\u8be6\u60c5",permalink:"/OceanPay-app/docs/api/trade/detail"}},p=[{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",children:[]},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",children:[]},{value:"\u8bf7\u6c42Header",id:"\u8bf7\u6c42header",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5",children:[]},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9\u8bf4\u660e",id:"\u8fd4\u56de\u5185\u5bb9\u8bf4\u660e",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9\u793a\u4f8b",id:"\u8fd4\u56de\u5185\u5bb9\u793a\u4f8b",children:[]}],g={toc:p};function s(t){var e=t.components,n=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/app/trade/create\n")),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,l.kt)("p",null,"POST\u8bf7\u6c42\uff0cContent-Type: application/json"),(0,l.kt)("h2",{id:"\u8bf7\u6c42header"},"\u8bf7\u6c42Header"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x-app"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},'"OceanPay"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u4e3aOceanPay")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x-token"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},'"fc41dad58a764e7987c26d103e08d610"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u540etoken")))),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},'"promptpay"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ed8\u6b3e\u7c7b\u578b,promptpay")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"1THB = 100, \u4ee5\u5206\u4e3a\u5355\u4f4d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"19"),(0,l.kt)("td",{parentName:"tr",align:null},'"1639152000000"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u5355\u65f6\u95f4\u6233")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remark"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},'"\u6d4b\u8bd5\u7528"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5907\u6ce8")))),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type":"promptpay",\n    "amount":100,\n    "timestamp":1635696000000,\n    "remark":""\n}\n')),(0,l.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9\u8bf4\u660e"},"\u8fd4\u56de\u5185\u5bb9\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},'"ok"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf4\u660e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},'"2021-11-05 10:50:08"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u53d1\u751f\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qrCode"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"ktbcard"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"base64\u4e8c\u7ef4\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qrCodeExpireSec"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"600"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8c\u7ef4\u7801\u6709\u6548\u671f(\u79d2)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payChannel"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"OP"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u9053\u6807\u8bc6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"paymentMethod"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"promptpay"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u652f\u4ed8\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tradeNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"1456468850848694272"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5355\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"merchantTradeNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},'"112233445123"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5546\u6237\u4ea4\u6613\u5355\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remark"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},'"Code No. 1636084208574"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5907\u6ce8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},'"PAYING"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b49\u5f85\u652f\u4ed8")))),(0,l.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9\u793a\u4f8b"},"\u8fd4\u56de\u5185\u5bb9\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "msg": "ok",\n  "code": 200,\n  "data": {\n    "tradeNumber": "1468848549558091776",\n    "merchantTradeNumber": "1468848549558091776",\n    "qrCode": "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",\n    "qrCodeExpireSec": "480",\n    "payChannel": "OP",\n    "paymentMethod": "promptpay",\n    "createTime": 1639035758762,\n    "status": "PAYING",\n    "amount": 100\n  }\n}\n')))}s.isMDXComponent=!0}}]);