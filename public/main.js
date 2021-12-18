import{j,r as s,u as k,L as S,B as T,R as U,a as v,b as O,c as R}from"./chunks/vendor.js";const e=j.exports.jsx,n=j.exports.jsxs,L=j.exports.Fragment;function E(t){return e("div",{className:`card ${t.className}`,children:t.children})}function A(){return n(E,{className:"home-container",children:[e("h1",{children:"Duit"}),e("h3",{children:"Track your job applications easily"})]})}function f(t){return n("div",{className:`formfield ${t.size?t.size:""}`,children:[e("label",{htmlFor:t.name,children:t.label}),e("input",{id:t.name,type:t.type,onChange:i=>t.onValueChange(i.target.value)})]})}function N(t){return e("button",{className:`formbutton ${t.iconButton?t.iconButton:""}`,onClick:t.onClickHandler,children:t.name})}function B(){const[t,i]=s.exports.useState([]),[u,d]=s.exports.useState(""),[h,m]=s.exports.useState(""),[l,r]=s.exports.useState("");async function y(){let a=await fetch("/api/applications");a=await a.json(),console.log(a),i(a)}async function o(){let a=t,p={company:h,title:l,url:u,status:!1},g=await fetch("/api/application",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(p)});g=await g.json(),a.push(p),console.log(t),i([...a]),d(""),m(""),r("")}async function b(a,p){let g=t,w={};g.forEach(C=>{C._id==a&&(C.status=p,w=C)});let x=await fetch("/api/application",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(w)});x=await x.json(),console.log(t),i([...g])}async function c(a){let p=t,g={};p.forEach(x=>{x._id==a&&(g=x)});let w=await fetch("/api/application",{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify(g)});w=await w.json(),console.log(t),i([...p])}return s.exports.useEffect(()=>{y()},[]),n("div",{className:"application-wrapper",children:[n("div",{className:"add-application",children:[e(f,{name:"company",label:"Company",type:"text",size:"small",onValueChange:a=>{m(a)}}),e(f,{name:"title",label:"Title",type:"text",size:"medium",onValueChange:a=>{r(a)}}),e(f,{name:"url",label:"Job Posting URL",type:"text",size:"large",onValueChange:a=>{d(a)}}),e(N,{iconButton:"add-icon",name:"+",onClickHandler:o})]}),e("div",{className:"application-list",children:t.map(a=>n("details",{className:"application-card",children:[n("summary",{children:[n("span",{className:"summary-company",children:[e("b",{children:"Company: "}),a.company]}),n("span",{className:"summary-title",children:[e("b",{children:"Title: "})," ",a.title]}),e("span",{className:a.status?"applied":"not-applied",onClick:p=>{p.preventDefault(),b(a._id,!a.status)}}),e(N,{iconButton:"trash-icon",name:" ",onClickHandler:()=>{c(a._id)}})]}),n("div",{className:"application-details",children:[n("h3",{children:["Company: ",a.company]}),n("h3",{children:["Title: ",a.title]}),n("h3",{children:["URL: ",a.url]})]})]},a._id))})]})}function H(){return e("main",{children:"Profile"})}function P(t){const[i,u]=s.exports.useState(!1),[d,h]=s.exports.useState(""),[m,l]=s.exports.useState(""),[r,y]=s.exports.useState(""),o=k();s.exports.useEffect(()=>{});async function b(){let c=await fetch("/api/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:m,password:r})});c=await c.json(),console.log(c),u(!c.status),h(c.msg?c.msg:""),setTimeout(()=>{t.setLogin(!0),u(!1),h(""),o("/")},1500)}return n(E,{className:"signup-container",children:[e("h1",{children:"Login"}),i?e("h3",{children:d}):n(L,{children:[e(f,{name:"email",label:"Email",type:"email",onValueChange:c=>{l(c)}}),e(f,{name:"password",label:"Password",type:"password",onValueChange:c=>{y(c)}}),e(N,{name:"Login",onClickHandler:b})]})]})}function I(){const[t,i]=s.exports.useState(!1),[u,d]=s.exports.useState(""),[h,m]=s.exports.useState(""),[l,r]=s.exports.useState("");s.exports.useEffect(()=>{});async function y(){let o=await fetch("/api/signup",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:h,password:l})});o=await o.json(),console.log(o),i(!!o._id),d(o.msg?o.msg:""),setInterval(()=>{i(!1),d("")},5e3)}return n(E,{className:"signup-container",children:[e("h1",{children:"Sign Up"}),t?e("h3",{children:u}):n(L,{children:[e(f,{name:"email",label:"Email",type:"email",onValueChange:o=>{m(o)}}),e(f,{name:"password",label:"Password",type:"password",onValueChange:o=>{r(o)}}),e(N,{name:"Sign Up",onClickHandler:y})]})]})}function M(t){return n("div",{className:"header",children:[e("div",{className:"left",children:"Duit"}),n("nav",{className:"right",children:[e(S,{to:"/",children:e("span",{children:"Home"})}),e(S,{to:"/applications",children:e("span",{children:"Applications"})}),e(S,{to:"/signup",children:e("span",{children:"Sign Up"})}),t.loggedIn?e(S,{to:"",children:e("span",{onClick:t.logout,children:"Logout"})}):e(S,{to:"/login",children:e("span",{children:"Login"})})]})]})}function V(){const[t,i]=s.exports.useState(!1),[u,d]=s.exports.useState(!0);async function h(){let r=await(await fetch("/loggedIn")).json();return d(!1),Promise.resolve(r.status)}async function m(){let r=await(await fetch("/logout")).json();console.log(r.status),window.location.reload()}return s.exports.useEffect(()=>{h().then(l=>{i(l)})},[]),e(L,{children:n(T,{children:[e(M,{loggedIn:t,logout:m}),u?e("main",{}):e("main",{children:n(U,{children:[e(v,{path:"/",element:e(A,{})}),e(v,{path:"/applications",element:t?e(B,{}):e(P,{setLogin:l=>i(l)})}),e(v,{path:"/profile",element:e(H,{})}),e(v,{path:"/login",element:e(P,{setLogin:l=>i(l)})}),e(v,{path:"/signup",element:e(I,{})})]})})]})})}O.render(e(R.StrictMode,{children:e(V,{})}),document.getElementById("duit-app"));
