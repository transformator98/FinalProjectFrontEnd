(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{11:function(e,t,n){"use strict";t.a={AUTH_VIEW:"/auth",MAIN_VIEW:"/",TEST_VIEW:"/test",RESULT_VIEW:"/result",USEFUL_INFO_VIEW:"/useful-info",CONTACTS_VIEW:"/contacts"}},117:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(15),i=n.n(c),l=(n(61),n(50)),s=n.n(l),o=n(5),u=n(11),d=(n(62),n(1));function j(e){var t=e.children;return Object(d.jsx)("main",{className:"container",children:t})}var b=n(6),O=function(e){var t=e.type,n=e.className,r=e.onClick,a=e.children;return Object(d.jsx)("button",{type:t,className:n,onClick:r,children:a})};O.defaultProps={type:"button",className:null,onClick:function(){},children:null};var h,f=O,p=(n(70),function(e){var t=e.children,n=document.querySelector("#modal-root");return Object(c.createPortal)(Object(d.jsx)("div",{className:"modal__backdrop",children:Object(d.jsx)("div",{className:"modal__content",children:t})}),n)}),v=n(17),m=n(3),C=Object(m.b)("modal/toggleModal"),g=function(e){return e.modalStatus},x=(n(71),function(e){return e.user.isLoggedIn}),y=function(){var e=Object(b.d)(g),t=Object(b.d)(x),n=Object(b.c)();function r(){e&&n(C(e))}return Object(d.jsxs)("ul",{className:"list nav-list",children:[Object(d.jsx)("li",{className:"nav-list__item",onClick:r,children:t&&Object(d.jsx)(v.c,{exact:!0,to:u.a.MAIN_VIEW,className:"nav-list__item-link",activeClassName:"active-nav-list__item-link",children:"Home"})}),Object(d.jsx)("li",{className:"nav-list__item",onClick:r,children:t&&Object(d.jsx)(v.c,{to:u.a.USEFUL_INFO_VIEW,className:"nav-list__item-link",activeClassName:"active-nav-list__item-link",children:"Materials"})}),Object(d.jsx)("li",{className:"nav-list__item",onClick:r,children:Object(d.jsx)(v.c,{to:u.a.CONTACTS_VIEW,className:"nav-list__item-link",activeClassName:"active-nav-list__item-link",children:"Contacts"})})]})};function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function V(e,t){var n=e.title,a=e.titleId,c=_(e,["title","titleId"]);return r.createElement("svg",w({width:16,height:10,viewBox:"0 0 16 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,h||(h=r.createElement("path",{d:"M0.5 10H15.5V8.33333H0.5V10ZM0.5 5.83333H15.5V4.16667H0.5V5.83333ZM0.5 0V1.66667H15.5V0H0.5Z",fill:"black"})))}var E,I=r.forwardRef(V);n.p;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function N(e,t){var n=e.title,a=e.titleId,c=k(e,["title","titleId"]);return r.createElement("svg",H({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,E||(E=r.createElement("path",{d:"M15.5832 1.94413L14.0557 0.416626L7.99984 6.47246L1.944 0.416626L0.416504 1.94413L6.47234 7.99996L0.416504 14.0558L1.944 15.5833L7.99984 9.52746L14.0557 15.5833L15.5832 14.0558L9.52733 7.99996L15.5832 1.94413Z",fill:"black"})))}var L,S,M=r.forwardRef(N);n.p;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function R(e,t){var n=e.title,a=e.titleId,c=A(e,["title","titleId"]);return r.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,L||(L=r.createElement("path",{d:"M361 396c-11.046 0-20 8.954-20 20v56H55V40h286v56c0 11.046 8.954 20 20 20s20-8.954 20-20V20c0-11.046-8.954-20-20-20H35C23.954 0 15 8.954 15 20v472c0 11.046 8.954 20 20 20h326c11.046 0 20-8.954 20-20v-76c0-11.046-8.954-20-20-20z"})),S||(S=r.createElement("path",{d:"M491.141 241.858l-53.74-53.74c-7.81-7.811-20.473-7.81-28.284 0s-7.811 20.474 0 28.285L428.715 236l-165.678-.001c-11.045 0-20 8.954-20 20s8.954 20 20 20l165.68.001-19.599 19.599c-7.811 7.809-7.811 20.473 0 28.284 7.81 7.811 20.474 7.809 28.284-.001l53.74-53.74a.022.022 0 01.004-.005c4.024-4.027 5.709-8.682 5.854-14.137 0-5.392-2.291-10.576-5.859-14.142z"})))}var P,Z,W=r.forwardRef(R),F=(n.p,n(75),function(e){var t=e.children,n=Object(b.d)(g),r=Object(b.c)();function a(){r(C(n))}return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("header",{className:"site-header",children:[t,n?Object(d.jsx)(f,{className:"site-header__button",children:Object(d.jsx)(M,{}),onClick:a}):Object(d.jsx)(f,{className:"site-header__button",children:Object(d.jsx)(I,{}),onClick:a}),n&&Object(d.jsxs)(p,{children:[Object(d.jsx)(y,{}),Object(d.jsx)("div",{className:"exit-wrapper",onClick:a,children:Object(d.jsx)(W,{})})]})]})})});function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function z(e,t){var n=e.title,a=e.titleId,c=q(e,["title","titleId"]);return r.createElement("svg",U({width:129,height:28,viewBox:"0 0 129 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,P||(P=r.createElement("g",{clipPath:"url(#clip0)"},r.createElement("path",{d:"M129 0H0V28H129V0Z",stroke:"#121D2E"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M60.9109 22.3H65.5179V20.224H63.5629V8.45999H65.5179V6.38599H60.9109V22.3ZM70.4819 19H73.2359V9.34399H77.0439V7.09999H66.6739V9.34399H70.4819V19ZM86.8699 14.461C86.8892 13.5848 86.6752 12.7193 86.2499 11.953C85.8504 11.2496 85.2572 10.6758 84.5409 10.3C83.7766 9.91565 82.9322 9.71765 82.0768 9.72217C81.2213 9.72668 80.3791 9.9336 79.6189 10.326C78.8922 10.7121 78.2862 11.2914 77.8679 12C77.4388 12.7342 77.2183 13.5716 77.2299 14.422C77.2158 15.2765 77.4395 16.1182 77.8759 16.853C78.3153 17.575 78.9525 18.1559 79.7119 18.527C80.5637 18.9413 81.5019 19.147 82.4489 19.127C83.1482 19.1747 83.8493 19.0668 84.5019 18.8111C85.1545 18.5553 85.7422 18.1581 86.2229 17.648L84.8119 16.118C84.518 16.409 84.1683 16.6375 83.7839 16.79C83.3782 16.938 82.9487 17.0099 82.5169 17.002C81.9014 17.0242 81.2946 16.8517 80.7829 16.509C80.3259 16.1922 80.0092 15.711 79.8989 15.166H86.8179C86.8519 14.724 86.8689 14.486 86.8689 14.452L86.8699 14.461ZM82.1269 11.724C82.6734 11.7074 83.207 11.8917 83.6269 12.242C84.0392 12.5955 84.3057 13.0893 84.3749 13.628H79.8659C79.931 13.0858 80.1981 12.588 80.6139 12.234C81.0404 11.8875 81.5776 11.7064 82.1269 11.724ZM92.2269 19.136C93.0158 19.153 93.8015 19.0291 94.5469 18.77C95.1297 18.5745 95.6452 18.2181 96.0339 17.742C96.3705 17.3101 96.5503 16.7766 96.5439 16.229C96.5778 15.659 96.3889 15.0982 96.0169 14.665C95.6802 14.3004 95.2515 14.0334 94.7759 13.892C94.1724 13.7221 93.5593 13.5885 92.9399 13.492C92.4436 13.4296 91.9542 13.3215 91.4779 13.169C91.3448 13.1356 91.227 13.0581 91.1437 12.9491C91.0603 12.8401 91.0163 12.7061 91.0189 12.569C91.0249 12.4373 91.068 12.31 91.1432 12.2017C91.2184 12.0935 91.3226 12.0086 91.4439 11.957C91.843 11.7745 92.2808 11.6928 92.7189 11.719C93.6416 11.7115 94.5501 11.9459 95.3539 12.399L96.2379 10.512C95.742 10.2343 95.2054 10.0365 94.6479 9.92599C94.0142 9.78492 93.3671 9.7135 92.7179 9.71299C91.9449 9.69615 91.1756 9.82296 90.4489 10.087C89.8724 10.2898 89.3654 10.6522 88.9869 11.132C88.6542 11.5754 88.4783 12.1167 88.4869 12.671C88.4481 13.2539 88.6402 13.8287 89.0219 14.271C89.3679 14.6383 89.8045 14.908 90.2879 15.053C90.8957 15.2263 91.5149 15.357 92.1409 15.444C92.6201 15.4902 93.0931 15.5871 93.5519 15.733C93.6799 15.7621 93.7946 15.8331 93.8777 15.9347C93.9608 16.0363 94.0077 16.1627 94.0109 16.294C94.0109 16.8493 93.4499 17.127 92.3279 17.127C91.7526 17.1243 91.1804 17.0415 90.6279 16.881C90.1065 16.7413 89.6083 16.5264 89.1489 16.243L88.2649 18.143C88.8008 18.473 89.3868 18.7138 89.9999 18.856C90.7274 19.0435 91.4757 19.1379 92.2269 19.137V19.136ZM103.872 16.688C103.564 16.9194 103.186 17.0393 102.801 17.028C102.646 17.0379 102.491 17.015 102.346 16.9609C102.201 16.9068 102.069 16.8226 101.959 16.714C101.746 16.4668 101.639 16.1464 101.659 15.821V12.1H103.937V10.06H101.66V7.83099H99.0079V10.058H97.5999V12.1H99.0109V15.857C98.9791 16.3038 99.0418 16.7523 99.195 17.1733C99.3481 17.5942 99.5883 17.9781 99.8999 18.3C100.602 18.8932 101.507 19.1917 102.425 19.133C102.829 19.1348 103.232 19.086 103.625 18.988C103.97 18.9076 104.297 18.7605 104.586 18.555L103.872 16.688ZM105.826 20.53H114.326V19H105.826V20.53ZM120.24 22.3V6.38599H115.65V8.45999H117.588V20.224H115.65V22.3H120.24Z",fill:"#121D2E"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0H46.281L53.995 14.56L46.281 28H0V0Z",fill:"#121D2E"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0619 7.10002H10.9109V19H13.6649V15.719H16.0649C17.0065 15.7413 17.9421 15.5648 18.8109 15.201C19.5431 14.8895 20.1659 14.3669 20.5999 13.7C21.0283 13.0158 21.247 12.2211 21.2289 11.414C21.2486 10.6052 21.0299 9.80841 20.5999 9.12302C20.1613 8.45888 19.538 7.93748 18.8069 7.62302C17.9396 7.25518 17.0037 7.07687 16.0619 7.10002ZM15.9089 13.475H13.6649V9.34402H15.9089C16.5825 9.29653 17.2514 9.48614 17.7999 9.88002C18.0184 10.0696 18.1903 10.307 18.3023 10.5737C18.4143 10.8404 18.4634 11.1293 18.4459 11.418C18.4625 11.7043 18.4128 11.9906 18.3008 12.2545C18.1887 12.5185 18.0173 12.7531 17.7999 12.94C17.2524 13.3326 16.585 13.5219 15.9129 13.475H15.9089ZM26.0409 11.061V9.85402H23.5079V19H26.1599V14.682C26.1333 14.3362 26.1768 13.9887 26.2878 13.6601C26.3989 13.3316 26.5751 13.0288 26.8059 12.77C27.0455 12.5495 27.327 12.3795 27.6336 12.2699C27.9403 12.1603 28.2658 12.1134 28.5909 12.132C28.6929 12.132 28.8912 12.1434 29.1859 12.166V9.71802C28.5491 9.70581 27.9163 9.82142 27.3249 10.058C26.8119 10.2645 26.3673 10.611 26.0419 11.058L26.0409 11.061ZM35.5409 19.136C36.4386 19.1526 37.3263 18.9464 38.1249 18.536C38.8631 18.1536 39.4809 17.5742 39.9099 16.862C40.3462 16.1272 40.5699 15.2855 40.5559 14.431C40.5707 13.5768 40.3481 12.7352 39.9129 12C39.4839 11.2878 38.8661 10.7084 38.1279 10.326C37.3229 9.9291 36.4374 9.72265 35.5399 9.72265C34.6424 9.72265 33.7569 9.9291 32.9519 10.326C32.2099 10.7065 31.5887 11.2861 31.1579 12C30.7215 12.7349 30.4979 13.5765 30.5119 14.431C30.4978 15.2856 30.7215 16.1272 31.1579 16.862C31.5887 17.5759 32.2099 18.1556 32.9519 18.536C33.7535 18.9458 34.6437 19.1519 35.5439 19.136H35.5409ZM35.5409 16.96C35.2277 16.9695 34.9161 16.913 34.6262 16.7943C34.3362 16.6757 34.0745 16.4974 33.8579 16.271C33.6311 16.0227 33.4557 15.7318 33.342 15.4153C33.2282 15.0988 33.1782 14.7629 33.1949 14.427C33.1782 14.0911 33.2282 13.7552 33.342 13.4387C33.4557 13.1222 33.6311 12.8314 33.8579 12.583C34.0746 12.3569 34.3364 12.1788 34.6263 12.0602C34.9162 11.9417 35.2278 11.8854 35.5409 11.895C35.8528 11.8849 36.1634 11.9409 36.4521 12.0595C36.7408 12.1781 37.0011 12.3565 37.2159 12.583C37.669 13.0875 37.9041 13.7508 37.8699 14.428C37.9041 15.1053 37.669 15.7685 37.2159 16.273C37.0012 16.4997 36.741 16.6783 36.4523 16.7971C36.1635 16.9158 35.8529 16.9721 35.5409 16.962V16.96Z",fill:"white"}))),Z||(Z=r.createElement("defs",null,r.createElement("clipPath",{id:"clip0"},r.createElement("rect",{width:129,height:28,fill:"white"})))))}var B=r.forwardRef(z),D=(n.p,n(76),function(){var e=Object(b.d)(g),t=Object(b.c)();return Object(d.jsx)("div",{className:"logo-wrapper",onClick:function(){e&&t(C(e))},children:Object(d.jsx)(v.c,{exact:!0,to:"/auth",children:Object(d.jsx)(B,{})})})}),Q=(n(77),function(){return Object(d.jsxs)("nav",{className:"site-navigation",children:[Object(d.jsx)(D,{}),Object(d.jsx)("div",{className:"is-visible",children:Object(d.jsx)(y,{})})]})}),J=n(34),G=n.p+"static/media/sign-out.2a183282.svg",Y=n(25),K=n.n(Y),X=n(41);var $=Object(b.b)(null,(function(e){return{logOut:function(){return e(X.a.logOut())}}}))((function(e){var t=e.logOut,n=Object(r.useState)(),a=Object(J.a)(n,2),c=a[0],i=a[1],l=Object(r.useState)(),s=Object(J.a)(l,2),o=s[0],u=s[1];return Object(r.useEffect)((function(){i("Artem"),u("https://s.gravatar.com/avatar/960f3e39e8c8835d3a9d5a37eafb8819?s=250")}),[]),Object(d.jsxs)("div",{className:K.a.authNav,children:[Object(d.jsx)("img",{className:K.a.avatar,src:o,alt:"User Avatar",width:"30",height:"30"}),Object(d.jsx)("span",{className:K.a.name,children:c}),Object(d.jsx)("a",{onClick:function(e){e.preventDefault(),t()},href:"/",children:Object(d.jsx)("img",{className:K.a.signOutIcon,src:G,alt:"sign-out",width:"16",height:"16"})})]})}));function ee(){return Object(d.jsx)(d.Fragment,{})}function te(){var e=Object(b.d)(x);return Object(d.jsx)(d.Fragment,{children:e?Object(d.jsx)($,{}):Object(d.jsx)(ee,{})})}n(97);var ne=function(){return Object(d.jsxs)(F,{children:[Object(d.jsx)(Q,{}),Object(d.jsx)(te,{})]})},re=n(26),ae=n(21),ce=n(30);function ie(e){var t=e.children,n=e.redirectTo,r=void 0===n?u.a.AUTH_VIEW:n,a=Object(ce.a)(e,["children","redirectTo"]),c=Object(b.d)(x);return Object(d.jsx)(o.b,Object(ae.a)(Object(ae.a)({},a),{},{children:c?t:Object(d.jsx)(o.a,{to:r})}))}function le(e){var t=e.children,n=e.redirectTo,r=void 0===n?u.a.MAIN_VIEW:n,a=e.restricted,c=void 0!==a&&a,i=Object(ce.a)(e,["children","redirectTo","restricted"]),l=Object(b.d)(x)&&c;return Object(d.jsx)(o.b,Object(ae.a)(Object(ae.a)({},i),{},{children:l?Object(d.jsx)(o.a,{to:r}):t}))}n(117);var se=n.p+"static/media/sprite.7f1ca5ed.svg";function oe(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("div",{className:"footer-container",children:["\xa9 2021 | All Rights Reserved | Developed with",Object(d.jsx)("svg",{className:"heartIcon",width:"16",height:"15",children:Object(d.jsx)("use",{href:se+"#heart"})}),"by GoIT Students"]})})}var ue=n(56),de=(n(118),n(38));n.e(11).then(n.t.bind(null,159,7));var je=Object(r.lazy)((function(){return Promise.all([n.e(10),n.e(0)]).then(n.bind(null,164))})),be=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,167))})),Oe=Object(r.lazy)((function(){return Promise.all([n.e(8),n.e(3)]).then(n.bind(null,165))})),he=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,163))})),fe=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,166))})),pe=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,160))}));function ve(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ne,{}),Object(d.jsxs)(j,{children:[Object(d.jsx)(r.Suspense,{fallback:Object(d.jsx)(re.a,{}),children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(le,{path:u.a.CONTACTS_VIEW,children:Object(d.jsx)(je,{})}),Object(d.jsx)(le,{path:u.a.AUTH_VIEW,restricted:!0,children:Object(d.jsx)(be,{})}),Object(d.jsx)(ie,{path:u.a.MAIN_VIEW,exact:!0,redirectTo:u.a.AUTH_VIEW,children:Object(d.jsx)(he,{})}),Object(d.jsx)(ie,{path:u.a.TEST_VIEW,children:Object(d.jsx)(Oe,{})}),Object(d.jsx)(ie,{path:u.a.USEFUL_INFO_VIEW,children:Object(d.jsx)(fe,{literature:de.a,resources:de.b})}),Object(d.jsx)(le,{children:Object(d.jsx)(pe,{})})]})}),Object(d.jsx)(ue.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]}),Object(d.jsx)(oe,{})]})}var me,Ce,ge,xe=n(54),ye=n(29),we=n(10),_e=n(7),Ve=n(22),Ee=Object(m.c)("",(me={},Object(we.a)(me,Ve.a.technicalQA,(function(){return"technical QA"})),Object(we.a)(me,Ve.a.testingTheory,(function(){return"testing theory"})),me)),Ie=Object(m.c)([],(Ce={},Object(we.a)(Ce,Ve.a.addResult,(function(e,t){var n=t.payload;return[].concat(Object(ye.a)(e),[n])})),Object(we.a)(Ce,Ve.a.deleteResult,(function(){return[]})),Ce)),He=Object(_e.c)({testActive:Ee,question:Ie}),ke=n(8),Ne=Object(m.c)({name:null,email:null,token:null,isLoggedIn:!0},(ge={},Object(we.a)(ge,ke.i,(function(e,t){e.name=t.payload.data.name,e.email=t.payload.data.email,e.token=t.payload.data.token,e.isLoggedIn=!0})),Object(we.a)(ge,ke.f,(function(e,t){e.name=t.payload.data.name,e.email=t.payload.data.email,e.token=t.payload.data.token,e.isLoggedIn=!0})),Object(we.a)(ge,ke.c,(function(e,t){e.name=null,e.email=null,e.token=null,e.isLoggedIn=!1})),Object(we.a)(ge,ke.g,(function(e,t){return t.payload})),Object(we.a)(ge,ke.d,(function(e,t){return t.payload})),Object(we.a)(ge,ke.a,(function(e,t){return t.payload})),ge)),Le=Object(m.c)(!1,Object(we.a)({},C,(function(e,t){return!t.payload}))),Se=n(55),Me=n.n(Se),Te=n(18),Ae=n(39),Re=n.n(Ae),Pe=[].concat(Object(ye.a)(Object(m.d)({serializableCheck:{ignoredActions:[Te.a,Te.f,Te.b,Te.c,Te.d,Te.e]}})),[Me.a]),Ze={key:"Question",storage:Re.a},We={key:"User",storage:Re.a,whitelist:["token"]},Fe=Object(m.a)({reducer:{modalStatus:Le,user:Object(Te.g)(We,Ne),tests:Object(Te.g)(Ze,He)},middleware:Pe,devTools:!1}),Ue=Object(Te.h)(Fe);n(121);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(b.a,{store:Fe,children:Object(d.jsx)(xe.a,{loading:Object(d.jsx)(re.a,{}),persistor:Ue,children:Object(d.jsx)(v.a,{children:Object(d.jsx)(ve,{className:s.a.pageBody})})})})}),document.getElementById("root"))},22:function(e,t,n){"use strict";var r=n(3),a=Object(r.b)("questions/technicalQA"),c=Object(r.b)("questions/testingTheory"),i=Object(r.b)("questions/delete"),l={technicalQA:a,testingTheory:c,addResult:Object(r.b)("questions/results",(function(e,t){return{payload:{questionId:e,answers:t}}})),deleteResult:i};t.a=l},25:function(e,t,n){e.exports={signOutIcon:"styles_signOutIcon__nE__9",authNav:"styles_authNav__2uFYa",avatar:"styles_avatar__1qWwF",name:"styles_name__2n5N-"}},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(53),a=n.n(r),c=(n(116),n(1)),i=function(){return Object(c.jsx)(a.a,{className:"loader",type:"Audio",color:"#464646",height:40,width:40,"\u044b":!0,timeout:3e3})}},38:function(e){e.exports=JSON.parse('{"b":[{"id":1,"url":"https://dou.ua/","name":"Dou.ua"},{"id":2,"url":"https://habr.com/ru/","name":"Habr"},{"id":3,"url":"https://www.istqb.org/certification-path-root/foundation-level-2018.html","name":"ISTQB Foundation Level"},{"id":4,"url":"https://goit.ua/","name":"goit.ua"}],"a":[{"id":1,"url":"https://dou.ua/","name":"Testing dot.com Savin."},{"id":2,"url":"https://habr.com/ru/","name":"A mental hospital in the hands of patients. "},{"id":3,"url":"https://goit.ua/","name":"Scrum. J. Sutherland."}]}')},41:function(e,t,n){"use strict";var r=n(19),a=n.n(r),c=n(28),i=n(20),l=n.n(i),s=n(8);l.a.defaults.baseURL="https://intense-stream-90411.herokuapp.com";var o=function(e){l.a.defaults.headers.common.Authorization="Bearer ".concat(e)},u=function(){l.a.defaults.headers.common.Authorization=""},d={register:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(s.h()),t.prev=1,t.next=4,l.a.post("/auth/register",e);case 4:r=t.sent,o(r.data.user.token),n(s.i(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(s.g(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(s.e()),t.prev=1,t.next=4,l.a.post("/auth/login",e);case 4:r=t.sent,o(r.data.user.token),n(s.f(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(s.d(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(s.b()),e.next=4,l.a.post("auth/logout");case 4:u(),t(s.c()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(s.a(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}};t.a=d},50:function(e,t,n){e.exports={pageBody:"App_pageBody__1x1a1"}},61:function(e,t,n){},62:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},8:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return j}));var r=n(3),a=Object(r.b)("auth/registerRequest"),c=Object(r.b)("auth/registerSuccess"),i=Object(r.b)("auth/registerError"),l=Object(r.b)("auth/loginRequest"),s=Object(r.b)("auth/loginSuccess"),o=Object(r.b)("auth/loginError"),u=Object(r.b)("auth/logOutRequest"),d=Object(r.b)("auth/logOutSuccess"),j=Object(r.b)("auth/logOutError")},97:function(e,t,n){}},[[122,6,7]]]);
//# sourceMappingURL=main.e259d7ae.chunk.js.map