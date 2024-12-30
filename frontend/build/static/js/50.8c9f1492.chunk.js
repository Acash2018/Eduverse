"use strict";(self.webpackChunkeduverse=self.webpackChunkeduverse||[]).push([[50],{6050:(e,a,s)=>{s.r(a),s.d(a,{default:()=>d});var t=s(5043),i=s(1228),l=s(6938),n=s(3216),r=s(184),c=s(4489),o=s(579);const d=()=>{const[e,a]=(0,t.useState)({email:"",password:""}),[s,d]=(0,t.useState)({}),[m,u]=(0,t.useState)(!1),[p,h]=(0,t.useState)(!1),[x,g]=(0,t.useState)(""),[v,w]=(0,t.useState)(!1),[j,N]=(0,t.useState)(0),[y,S]=(0,t.useState)(null),P=(0,n.Zp)(),b=e=>{const{name:s,value:t}=e.target;a((e=>({...e,[s]:t}))),"email"===s&&S(/\S+@\S+\.\S+/.test(t)),"password"===s&&(e=>{let a=0;e.length>=8&&(a+=1),/[A-Z]/.test(e)&&(a+=1),/[0-9]/.test(e)&&(a+=1),/[^A-Za-z0-9]/.test(e)&&(a+=1),N(a)})(t)};return(0,o.jsxs)("div",{className:"login-container",children:[(0,o.jsx)(c.A,{type:"cobweb",bg:!0,color:"#4a90e2"}),(0,o.jsxs)(i.P.div,{className:"holographic-panel",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut"},children:[(0,o.jsx)(i.P.img,{src:"/eduverse-logo.png",alt:"EduVerse",className:"login-logo",whileHover:{rotate:360,scale:1.1},transition:{duration:.8}}),(0,o.jsx)(l.N,{children:p?(0,o.jsxs)(i.P.div,{className:"success-container",initial:{scale:0},animate:{scale:1},exit:{scale:0},children:[(0,o.jsx)(r.uoG,{className:"rocket-icon"}),(0,o.jsx)("p",{className:"success-text",children:"Launching into EduVerse..."})]}):(0,o.jsxs)(i.P.form,{onSubmit:async a=>{if(a.preventDefault(),(()=>{let a={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(a.email="Email address is invalid"):a.email="Email is required",e.password?e.password.length<8&&(a.password="Password must be at least 8 characters"):a.password="Password is required",d(a),0===Object.keys(a).length})()){u(!0);try{const a=await fetch("http://127.0.0.1:5002/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await a.json();a.ok&&s.access_token?(localStorage.setItem("access_token",s.access_token),h(!0),g(""),setTimeout((()=>{P("/profile")}),2e3)):g(s.error||"Invalid credentials")}catch(s){g("Network error. Please try again.")}finally{u(!1)}}},className:"login-form",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,o.jsxs)("div",{className:"input-group",children:[(0,o.jsx)(i.P.input,{type:"email",name:"email",placeholder:"Email",value:e.email,onChange:b,whileFocus:{scale:1.02},className:"neon-input "+(!0===y?"valid":!1===y?"invalid":"")}),null!==y&&(0,o.jsx)(i.P.div,{initial:{scale:0},animate:{scale:1},className:"validation-icon",children:y?(0,o.jsx)(r.A7C,{className:"valid-icon"}):(0,o.jsx)(r._Hm,{className:"invalid-icon"})})]}),(0,o.jsxs)("div",{className:"input-group",children:[(0,o.jsx)(i.P.input,{type:v?"text":"password",name:"password",placeholder:"Password",value:e.password,onChange:b,whileFocus:{scale:1.02},className:"neon-input"}),(0,o.jsx)(i.P.div,{className:"password-toggle",whileHover:{scale:1.1},onClick:()=>w(!v),children:v?(0,o.jsx)(r.mx3,{}):(0,o.jsx)(r.Ny1,{})}),(0,o.jsx)("div",{className:"strength-meter",children:[...Array(4)].map(((e,a)=>(0,o.jsx)(i.P.div,{className:"strength-segment "+(a<j?"active":""),initial:{width:0},animate:{width:"100%"}},a)))})]}),(0,o.jsx)(i.P.button,{type:"submit",className:"submit-button",disabled:m,whileHover:{scale:1.05},whileTap:{scale:.95},children:m?(0,o.jsx)(i.P.div,{className:"loading-spinner",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}}):"Enter EduVerse"})]})}),x&&(0,o.jsx)(i.P.div,{className:"error-message",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},children:x}),(0,o.jsx)(i.P.button,{onClick:()=>P("/register"),className:"register-link",whileHover:{scale:1.05,textShadow:"0 0 8px rgb(255,255,255)"},children:"New to EduVerse? Join the future"})]})]})}}}]);
//# sourceMappingURL=50.8c9f1492.chunk.js.map