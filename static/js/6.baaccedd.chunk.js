(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{247:function(e,t,a){e.exports={form:"AuthForm_form__KcinH",text:"AuthForm_text__3teb-",buttonGoogleWrapper:"AuthForm_buttonGoogleWrapper__21G6u",buttonGoogle:"AuthForm_buttonGoogle__1Sq9E",input:"AuthForm_input__3bDTW",buttonWrapper:"AuthForm_buttonWrapper__3qbja",buttonSignIn:"AuthForm_buttonSignIn__1n5TN",buttonSignUp:"AuthForm_buttonSignUp__1M-EL"}},248:function(e,t,a){e.exports={section:"AuthPageView_section__3AZgF",wrapper:"AuthPageView_wrapper__2XSxD",title:"AuthPageView_title__MJNFX",text:"AuthPageView_text__2eHBL",textBold:"AuthPageView_textBold__3kHfq"}},253:function(e,t,a){"use strict";a.r(t);var n=a(46),r=a(0),s=a(12),o=a(226),c=a.n(o),i=a(228),u=a(229),l=a.n(u),p=a(24);l.a.defaults.baseURL="https://intense-stream-90411.herokuapp.com";var h=function(e){l.a.defaults.headers.common.Authorization="Bearer ".concat(e)},b={register:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(p.e()),t.prev=1,t.next=4,l.a.post("/auth/register",e);case 4:n=t.sent,h(n.data.token),a(p.f(n.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a(p.d(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(p.b()),t.prev=1,t.next=4,l.a.post("/users/login",e);case 4:n=t.sent,h(n.data.token),a(p.c(n.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a(p.a(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},d=a(247),m=a.n(d),j=a(1);function x(){var e=Object(s.c)(),t=Object(r.useState)(""),a=Object(n.a)(t,2),o=a[0],c=a[1],i=Object(r.useState)(""),u=Object(n.a)(i,2),l=u[0],p=u[1],h=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"email":return c(n);case"password":return p(n);default:return}};return Object(j.jsxs)("form",{className:m.a.form,autoComplete:"off",children:[Object(j.jsx)("h2",{className:m.a.text,children:"You can use your Google Account to authorize:"}),Object(j.jsx)("div",{className:m.a.buttonGoogleWrapper,children:Object(j.jsx)("button",{className:m.a.buttonGoogle,children:"Google"})}),Object(j.jsx)("h2",{className:m.a.text,children:"Or login to our app using e-mail and password"}),Object(j.jsx)("input",{type:"email",name:"email",placeholder:"E-mail",value:o,className:m.a.input,onChange:h}),Object(j.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:l,className:m.a.input,onChange:h}),Object(j.jsxs)("div",{className:m.a.buttonWrapper,children:[Object(j.jsx)("button",{className:m.a.buttonSignIn,onClick:function(t){t.preventDefault(),e(b.logIn({email:o,password:l})),c(""),p("")},children:"Sign in"}),Object(j.jsx)("button",{className:m.a.buttonSignUp,onClick:function(t){t.preventDefault(),e(b.register({email:o,password:l})),c(""),p("")},children:"Sign up"})]})]})}var _=a(248),f=a.n(_);t.default=function(){return Object(j.jsxs)("section",{className:f.a.section,children:[Object(j.jsxs)("div",{className:f.a.wrapper,children:[Object(j.jsx)("h2",{className:f.a.title,children:"Pro Test"}),Object(j.jsxs)("p",{className:f.a.text,children:[Object(j.jsx)("span",{className:f.a.textBold,children:"["})," We will help you find weak points",Object(j.jsx)("br",{})," in knowledge so that you can strengthen it. We will show you what is relevant to know for a"," ",Object(j.jsx)("span",{className:f.a.textBold,children:"QA Engineer"})," and will try to make the learning process more diverse_"," ",Object(j.jsx)("span",{className:f.a.textBold,children:"]"})]})]}),Object(j.jsx)("div",{className:f.a.wrapper,children:Object(j.jsx)(x,{})})]})}}}]);
//# sourceMappingURL=6.baaccedd.chunk.js.map