(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{10:function(e,t,n){e.exports={button__delete:"ContactList_button__delete__2BM8o"}},11:function(e,t,n){e.exports={input__filter:"Filter_input__filter__1HrcU"}},18:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),o=n(2),i=n.n(o),l=(n(17),n(18),n(7)),u=n(3),s=(n(19),n(6)),f=n(10),m=n.n(f),j=function(e){var t=e.contacts,n=e.onRemove,r=e.onRemoveLocal;return 0===t.length?null:Object(a.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.name,o=e.phone;return Object(a.jsxs)("li",{children:[c," : ",o," ",Object(a.jsx)("button",{onClick:function(){r(t),n(t)},className:m.a.button__delete,children:"Delete"})]},t)}))})},b=(n(20),n(28));var d=function(e){var t=e.onAdd,n=e.onCheckUnique,c=Object(r.useState)(""),o=Object(u.a)(c,2),i=o[0],f=o[1],m=Object(r.useState)(""),j=Object(u.a)(m,2),d=j[0],O=j[1],h=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":f(a);break;case"phone":O(a);break;default:console.log("Sorry, we are not have "+n+".")}};return Object(a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),i&&d?n(i):(Object(s.b)("Some filed is empty"),!1)){var a={id:Object(b.a)(),name:i,phone:d};t(a),f(""),O("");var r=localStorage.getItem("name"),c=JSON.parse(r);if(null!==c&&0!==c.length)if(0===c.length);else{var o=[].concat(Object(l.a)(c),[a]);localStorage.setItem("name",JSON.stringify(o))}else localStorage.setItem("name",JSON.stringify([a]))}},children:[Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:i,onChange:h}),Object(a.jsx)("input",{type:"tel",name:"phone",placeholder:"Enter phone number",value:d,onChange:h}),Object(a.jsx)("button",{type:"submit",children:"Add Contact"})]})},O=n(11),h=n.n(O),p=function(e){var t=e.filter,n=e.onChange;return Object(a.jsx)("input",{className:h.a.input__filter,type:"text",name:"filter",value:t,onChange:function(e){var t=e.target;return n(t.value)},placeholder:"Enter name for Search"})};n(23);var v=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){var e=localStorage.getItem("name"),t=JSON.parse(e);null!==t?0!==t.length&&c(t):c([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"}])}),[]),Object(r.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("name",e)}),[n]);var o=Object(r.useState)(""),i=Object(u.a)(o,2),f=i[0],m=i[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"From Contact"}),Object(a.jsx)(d,{onAdd:function(e){c((function(t){return[].concat(Object(l.a)(t),[e])}))},onCheckUnique:function(e){var t=!!n.find((function(t){return t.name===e}));return t&&alert("Contact is already exist"),!t}}),Object(a.jsx)("h2",{children:"Contacts list"}),Object(a.jsx)(p,{filter:f,onChange:function(e){return m(e)}}),Object(a.jsx)(j,{contacts:n.filter((function(e){return e.name.toLowerCase().includes(f.toLowerCase())})),onRemove:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)},onRemoveLocal:function(e){var t=localStorage.getItem("name"),n=JSON.parse(t);if(null!==n&&!(n.length<0)){var a=n.filter((function(t){return t.id!==e})),r=JSON.stringify(a);localStorage.setItem("name",r)}}}),Object(a.jsx)(s.a,{})]})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1f5f6ff1.chunk.js.map