(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{22:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(17),i=t.n(a),u=(t(22),t(8)),o=t(3),d=t(4),s=t.n(d),l="/api/persons",f=function(){return s.a.get(l).then((function(e){return e.data}))},h=function(e){return s.a.post(l,e).then((function(e){return e.data}))},j=function(e){return s.a.delete("".concat(l,"/").concat(e))},b=function(e,n){return s.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},m=t(0),p=function(e){var n=e.filter,t=e.handleChange;return Object(m.jsxs)("div",{children:["filter shown with ",Object(m.jsx)("input",{value:n,onChange:t})]})},O=function(e){var n=e.name,t=e.number,c=e.handleSubmit,r=e.handleNameChange,a=e.handleNumberChange;return Object(m.jsxs)("form",{onSubmit:c,children:[Object(m.jsxs)("div",{children:["name: ",Object(m.jsx)("input",{required:!0,value:n,onChange:r})]}),Object(m.jsxs)("div",{children:["number: ",Object(m.jsx)("input",{required:!0,value:t,onChange:a})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},v=t(7),x=function(e){var n=e.label,t=e.id,c=e.handleClick;return Object(m.jsx)("button",{onClick:function(){return c(t)},children:n})},g=function(e){var n=e.name,t=e.number,c=e.id,r=e.handleClick;return Object(m.jsxs)("li",{children:[n," ",t," ",Object(m.jsx)(x,{label:"delete",id:c,handleClick:r})]})},C=function(e){var n=e.persons,t=e.filter,r=e.handleClick,a=new RegExp("".concat(t),"i"),i=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e,n=/<span style="color: red">||<\/span>/g,c=i.current.childNodes,r=Object(v.a)(c);try{for(r.s();!(e=r.n()).done;){var u=e.value;n.test(u.innerHTML)&&(u.innerHTML=u.innerHTML.replace(n,""))}}catch(l){r.e(l)}finally{r.f()}if(t){var o,d=Object(v.a)(c);try{for(d.s();!(o=d.n()).done;){var s=o.value;s.innerHTML=s.innerHTML.replace(a,'<span style="color: red">'.concat(s.innerHTML.match(a),"</span>"))}}catch(l){d.e(l)}finally{d.f()}}}),[t]),Object(m.jsx)("ul",{ref:i,children:n.filter((function(e){return a.test(e.name)})).map((function(e){return Object(m.jsx)(g,{name:e.name,number:e.number,id:e.id,handleClick:r},e.id)}))})},w=function(e){var n=e.notification;return Object(m.jsx)("span",{className:"notification ".concat("err"===n.type?"error ":"success"===n.type?"success ":"").concat(n.active?"show":"hide"),children:n.content})};var y=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),d=i[0],s=i[1],l=Object(c.useState)(""),v=Object(o.a)(l,2),x=v[0],g=v[1],y=Object(c.useState)(""),k=Object(o.a)(y,2),S=k[0],N=k[1],M=Object(c.useState)(null),T=Object(o.a)(M,2),H=T[0],L=T[1];Object(c.useEffect)((function(){f().then((function(e){r(e)}))}),[]);var E=function(e,n,t){var c={content:function(e,n){return{"person added":"Added ".concat(n),"person deleted":"Deleted ".concat(n),"person updated":"Updated ".concat(n),"delete error":"".concat(n," has already been deleted from the server"),"unexpected error":"Something went wrong"}[e]}(e,t),type:n,active:!0};L(c),setTimeout((function(){L(Object(u.a)(Object(u.a)({},c),{},{active:!1}))}),5e3)};return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("h2",{children:"Phonebook"}),H&&Object(m.jsx)(w,{notification:H})]}),Object(m.jsx)(p,{filter:S,handleChange:function(e){N(e.target.value)}}),Object(m.jsx)("h2",{children:"add a new"}),Object(m.jsx)(O,{name:d,number:x,handleSubmit:function(e){e.preventDefault();var n={name:d,number:x};if(t.some((function(e){return e.name===n.name}))){if(window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))){var c=t.find((function(e){return e.name===n.name})).id;b(c,n).then((function(e){r(t.map((function(n){return n.id===e.id?e:n}))),E("person updated","success",e.name)})).catch((function(){return E("unexpected error","err",null)}))}}else h(n).then((function(e){r(t.concat(e)),E("person added","success",e.name)})).catch((function(){return E("unexpected error","err",null)}));s(""),g("")},handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){g(e.target.value)}}),Object(m.jsx)("h2",{children:"Numbers"}),Object(m.jsx)(C,{persons:t,filter:S,handleClick:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&(j(e).then((function(e){204===e.status&&E("person deleted","success",n.name)})).catch((function(e){E("delete error","err",n.name)})),r(t.filter((function(n){return n.id!==e}))))}})]})};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b2be05cc.chunk.js.map