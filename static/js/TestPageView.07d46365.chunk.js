(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[2],{137:function(e,t,n){e.exports={testsSection:"TestPage_testsSection__2JcaK",testCard:"TestPage_testCard__15fc1",questionNumber:"TestPage_questionNumber__3l3Mi",questionNumber_currentQuestion:"TestPage_questionNumber_currentQuestion__29eZu",question:"TestPage_question__3XkP0",anwersItem:"TestPage_anwersItem__16Kkp",btnWrapper:"TestPage_btnWrapper__1aqxL",nextBtn_active:"TestPage_nextBtn_active__3dTug",nextBtn_disabled:"TestPage_nextBtn_disabled__YzM--"}},160:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var s=n(19),a=n.n(s),c=n(26),r=n(31),u=n(0),i=n(137),o=n.n(i),l=n(20),b=n.n(l),d=n(157),j=n(1);function _(){var e=Object(u.useState)(null),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(u.useState)(0),l=Object(r.a)(i,2),_=l[0],x=l[1],h=Object(u.useState)(null),p=Object(r.a)(h,2),m=p[0],f=p[1];function O(){return(O=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/tests/technicalQA");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}Object(u.useEffect)((function(){(function(){return O.apply(this,arguments)})().then((function(e){return s(e.data.tests)}))}),[]);var N=function(){_!==n.length-1&&(f(null),x((function(e){return e+1})))};return Object(j.jsx)(j.Fragment,{children:n&&Object(j.jsxs)("section",{className:o.a.testsSection,children:[Object(j.jsxs)("div",{className:o.a.testCard,children:[Object(j.jsxs)("p",{className:o.a.questionNumber,children:["Question"," ",Object(j.jsx)("span",{className:o.a.questionNumber_currentQuestion,children:"".concat(_+1)})," ","/ 12"]}),Object(j.jsx)("h2",{className:o.a.question,children:n[_].question}),Object(j.jsx)(d.a.Group,{onChange:function(e){f(e.target.value)},value:m,children:n[_].answers.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(d.a,{value:e,className:o.a.anwersItem,children:e})})}))})]}),Object(j.jsxs)("div",{className:o.a.btnWrapper,children:[0===_?Object(j.jsx)("button",{className:o.a.nextBtn_disabled,disabled:!0,children:"Previous question"}):Object(j.jsx)("button",{className:o.a.nextBtn_active,onClick:function(){-1!==_&&x((function(e){return e-1}))},children:"Previous question"}),m?11===_?Object(j.jsx)("button",{className:o.a.nextBtn_active,onClick:N,children:"Finish test"}):Object(j.jsx)("button",{className:o.a.nextBtn_active,onClick:N,children:"Next question"}):Object(j.jsx)("button",{className:o.a.nextBtn_disabled,disabled:!0,children:"Next question"})]})]})})}function x(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(_,{})})}b.a.defaults.baseURL="https://intense-stream-90411.herokuapp.com"}}]);
//# sourceMappingURL=TestPageView.07d46365.chunk.js.map