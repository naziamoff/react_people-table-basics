(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{16:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(10),s=c.n(n),r=(c(16),c(5)),a=c(2),j=c(0),b=c(1),i=function(){return Object(b.jsx)("div",{className:"tabs",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)(r.b,{to:"/people",className:"navbar-item is-tab",children:"People"}),Object(b.jsx)(r.b,{to:"/",className:"navbar-item is-tab",children:"Home"})]})})},h=function(){return Object(b.jsx)("h2",{className:"title has-text-centered",children:"Home Page"})},l=c(11),d=c(4),o=c(8),x=c.n(o),O=c(9),u=c.n(O),p=function(e){var t=e.people;return Object(b.jsxs)("table",{className:"table is-bordered is-hoverable is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Sex"}),Object(b.jsx)("th",{children:"Born"}),Object(b.jsx)("th",{children:"Died"}),Object(b.jsx)("th",{children:"Father"}),Object(b.jsx)("th",{children:"Mother"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{className:"person",children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.sex}),Object(b.jsx)("td",{children:e.born}),Object(b.jsx)("td",{children:e.died}),Object(b.jsx)("td",{className:u()({"has-background-danger":!e.fatherName}),children:e.fatherName}),Object(b.jsx)("td",{className:u()({"has-background-danger":!e.motherName}),children:e.motherName})]},e.slug)}))})]})},m=function(){var e=Object(j.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(j.useEffect)((function(){var e=function(){var e=Object(l.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}));case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{e()}catch(t){throw new Error}}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"title has-text-centered",children:"People Page"}),Object(b.jsx)(p,{people:c})]})},f=function(){return Object(b.jsx)("h2",{children:"Page not found"})},N=function(){return Object(b.jsxs)(r.a,{children:[Object(b.jsx)(i,{}),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(a.d,{children:[Object(b.jsx)(a.b,{path:"/",element:Object(b.jsx)(h,{})}),Object(b.jsx)(a.b,{path:"/people",element:Object(b.jsx)(m,{})}),Object(b.jsx)(a.b,{path:"/home",element:Object(b.jsx)(a.a,{to:"/"})}),Object(b.jsx)(a.b,{path:"*",element:Object(b.jsx)(f,{})})]})})]})};s.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a9a13acb.chunk.js.map