(this.webpackJsonpgithub_search=this.webpackJsonpgithub_search||[]).push([[0],{54:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(11),s=n.n(a),i=n(61),o=n(37),u=n(123),j=n(122),b=n(21),d=n.n(b),l=n(38),O=n(39),p=d.a.mark(g),h=d.a.mark(E),x=d.a.mark(S),f=d.a.mark(y),m="FETCH_USERS",_="FETCH_USERS_SUCCESS",v=function(e){return{type:_,payload:e}},w={user:[],loading:!1};function g(e){var t,n,r,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,n="https://api.github.com/users/".concat(t,"/repos"),a.next=4,fetch(n);case 4:return r=a.sent,a.next=7,r.json();case 7:return c=a.sent,a.abrupt("return",c);case 9:case"end":return a.stop()}}),p)}function E(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(O.b)(g,e);case 2:return t=n.sent,n.next=5,Object(O.c)(v(t||[]));case 5:case"end":return n.stop()}}),h)}function S(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)(m,E);case 2:case"end":return e.stop()}}),x)}function y(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([S()]);case 2:case"end":return e.stop()}}),f)}var N=function(e){return e.user.user},k=n(114),T=n(47),C=n(118),R=n(119),U=n(120),D=n(121),F=n(60),X=n.n(F),I=(n(54),n(9)),H=function(e){var t=e.repository;return Object(I.jsxs)(k.a,{className:"wrapper-repository",item:!0,xs:12,md:6,children:[Object(I.jsx)(T.a,{className:"title",variant:"h6",children:"Repositories"}),Object(I.jsx)("div",{children:Object(I.jsx)(C.a,{children:t.length?t.map((function(e){return Object(I.jsxs)(R.a,{children:[Object(I.jsx)(U.a,{children:Object(I.jsx)(X.a,{})}),Object(I.jsx)(D.a,{primary:e.name},e.id)]})})):null})})]})},J=function(){var e=Object(o.b)(),t=Object(o.c)(N),n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],s=c[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{className:"container",children:[Object(I.jsx)(u.a,{id:"outlined-basic",label:"NickName",value:a,variant:"outlined",onChange:function(e){return s(e.target.value)},className:"container__field"}),Object(I.jsx)(j.a,{className:"container__field",variant:"outlined",color:"primary",onClick:function(){setTimeout((function(){e({type:m,payload:a})}),2e3)},children:"Search"})]}),Object(I.jsx)(H,{repository:t})]})},L=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(J,{})})},V=n(20),B=n(62),M=Object(B.a)(),q=Object(V.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case m:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case _:return Object(l.a)(Object(l.a)({},e),{},{user:r,loading:!1});default:return e}}}),z=Object(V.e)(q,Object(V.d)(Object(V.a)(M),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));M.run(y),s.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(o.a,{store:z,children:Object(I.jsx)(L,{})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.7e533ba7.chunk.js.map