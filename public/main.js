import{j as f,r as a,L as l,B as y,R as j,a as c,O as b,b as N,c as C}from"./chunks/vendor.js";const e=f.exports.jsx,i=f.exports.jsxs,w=f.exports.Fragment;function x(t){return e("div",{className:`card ${t.className}`,children:t.children})}function P(){return i(x,{className:"home-container",children:[e("h1",{children:"Duit"}),e("h3",{children:"Track your job applications easily"})]})}function E(){return a.exports.useEffect(()=>{L()}),e("main",{children:"Applications"})}async function L(){let t=await fetch("/api/applications");console.log(await t.json())}function M(){return e("main",{children:"Profile"})}function d(t){return i("div",{className:"formfield",children:[e("label",{htmlFor:t.name,children:t.label}),e("input",{id:t.name,type:t.type,onChange:s=>t.onValueChange(s.target.value)})]})}function S(t){return e("button",{className:"formbutton",onClick:t.onClickHandler,children:t.name})}function v(){const[t,s]=a.exports.useState(!1),[o,r]=a.exports.useState(""),[h,p]=a.exports.useState(""),[u,m]=a.exports.useState("");a.exports.useEffect(()=>{});async function g(){let n=await fetch("/api/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:h,password:u})});n=await n.json(),console.log(n),s(!n.status),r(n.msg?n.msg:""),setInterval(()=>{s(!1),r("")},5e3)}return i(x,{className:"signup-container",children:[e("h1",{children:"Login"}),t?e("h3",{children:o}):i(w,{children:[e(d,{name:"email",label:"Email",type:"email",onValueChange:n=>{p(n)}}),e(d,{name:"password",label:"Password",type:"password",onValueChange:n=>{m(n)}}),e(S,{name:"Login",onClickHandler:g})]})]})}function k(){const[t,s]=a.exports.useState(!1),[o,r]=a.exports.useState(""),[h,p]=a.exports.useState(""),[u,m]=a.exports.useState("");a.exports.useEffect(()=>{});async function g(){let n=await fetch("/api/signup",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:h,password:u})});n=await n.json(),console.log(n),s(!!n._id),r(n.msg?n.msg:""),setInterval(()=>{s(!1),r("")},5e3)}return i(x,{className:"signup-container",children:[e("h1",{children:"Sign Up"}),t?e("h3",{children:o}):i(w,{children:[e(d,{name:"email",label:"Email",type:"email",onValueChange:n=>{p(n)}}),e(d,{name:"password",label:"Password",type:"password",onValueChange:n=>{m(n)}}),e(S,{name:"Sign Up",onClickHandler:g})]})]})}function I(){return i("div",{className:"header",children:[e("div",{className:"left",children:"Duit"}),i("nav",{className:"right",children:[e(l,{to:"/",children:e("span",{children:"Home"})}),e(l,{to:"/applications",children:e("span",{children:"Applications"})}),e(l,{to:"/profile",children:e("span",{children:"Profile"})}),e(l,{to:"/signup",children:e("span",{children:"Sign Up"})}),e(l,{to:"/login",children:e("span",{children:"Login"})})]})]})}function O(){const[t,s]=a.exports.useState(!1);return a.exports.useEffect(()=>{R().then(o=>{console.log(o),s(o)})},[]),i(w,{children:[i(y,{children:[e(I,{}),i(j,{children:[e(c,{path:"/",element:e(P,{})}),e(c,{path:"/applications",element:t?e(E,{}):e(v,{})}),e(c,{path:"/profile",element:e(M,{})}),e(c,{path:"/login",element:e(v,{})}),e(c,{path:"/signup",element:e(k,{})})]})]}),e("main",{children:e(b,{})})]})}async function R(){let s=await(await fetch("/loggedIn")).json();return console.log(s),Promise.resolve(s.status)}N.render(e(C.StrictMode,{children:e(O,{})}),document.getElementById("duit-app"));
