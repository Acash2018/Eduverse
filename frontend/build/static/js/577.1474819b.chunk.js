"use strict";(self.webpackChunkeduverse=self.webpackChunkeduverse||[]).push([[577],{8577:(e,a,s)=>{s.r(a),s.d(a,{default:()=>d});var i=s(5043),t=s(1228),n=s(6938),l=s(3216),o=s(184),r=s(4489),c=s(579);const d=()=>{const[e,a]=(0,i.useState)({name:"",email:"",password:"",confirmPassword:"",phone:"",agreeToTerms:!1}),[s,d]=(0,i.useState)({}),[m,p]=(0,i.useState)(!1),[u,h]=(0,i.useState)(!1),[x,g]=(0,i.useState)(""),[w,j]=(0,i.useState)(!1),[v,N]=(0,i.useState)(!1),[y,P]=(0,i.useState)(0),[b,S]=(0,i.useState)(null),[f,k]=(0,i.useState)(null),T=(0,l.Zp)(),C=e=>{const{name:s,value:i,type:t,checked:n}=e.target,l="checkbox"===t?n:i;a((e=>({...e,[s]:l}))),"email"===s&&S(/\S+@\S+\.\S+/.test(i)),"phone"===s&&k(/^\+?[\d\s-]{10,}$/.test(i)),"password"===s&&(e=>{let a=0;e.length>=8&&(a+=1),/[A-Z]/.test(e)&&(a+=1),/[0-9]/.test(e)&&(a+=1),/[^A-Za-z0-9]/.test(e)&&(a+=1),P(a)})(i)};return(0,c.jsxs)("div",{className:"register-container",children:[(0,c.jsx)(r.A,{type:"cobweb",bg:!0,color:"#4fc3f7"}),(0,c.jsxs)(t.P.div,{className:"holographic-panel",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut"},children:[(0,c.jsx)(t.P.img,{src:"/eduverse-logo.png",alt:"EduVerse",className:"register-logo",whileHover:{rotate:360,scale:1.1},transition:{duration:.8}}),(0,c.jsx)(t.P.h1,{className:"register-title",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:"Join the Future of Learning and Collaboration"}),(0,c.jsx)(n.N,{children:u?(0,c.jsxs)(t.P.div,{className:"success-container",initial:{scale:0},animate:{scale:1},exit:{scale:0},children:[(0,c.jsx)(o.uoG,{className:"rocket-icon"}),(0,c.jsx)("p",{className:"success-text",children:"Welcome aboard! Preparing your EduVerse journey..."})]}):(0,c.jsxs)(t.P.form,{onSubmit:async a=>{if(a.preventDefault(),(()=>{let a={};return e.name||(a.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(a.email="Email address is invalid"):a.email="Email is required",e.password?e.password.length<8&&(a.password="Password must be at least 8 characters"):a.password="Password is required",e.password!==e.confirmPassword&&(a.confirmPassword="Passwords do not match"),e.phone&&!/^\+?[\d\s-]{10,}$/.test(e.phone)&&(a.phone="Invalid phone number"),e.agreeToTerms||(a.agreeToTerms="You must agree to the terms and conditions"),d(a),0===Object.keys(a).length})()){p(!0);try{const a=await fetch("http://127.0.0.1:5002/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await a.json();if(a.ok){const a=await fetch("http://127.0.0.1:5002/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})}),s=await a.json();a.ok?(localStorage.setItem("access_token",s.access_token),h(!0),g(""),setTimeout((()=>{T("/profile")}),3e3)):g(s.error||"Login failed.")}else g(s.error||"Registration failed.")}catch(s){g("Network error. Please try again later.")}finally{p(!1)}}},className:"register-form",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,c.jsxs)("div",{className:"social-signup",children:[(0,c.jsxs)(t.P.button,{type:"button",className:"social-button google",whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,c.jsx)(o.DSS,{})," Sign up with Google"]}),(0,c.jsxs)(t.P.button,{type:"button",className:"social-button linkedin",whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,c.jsx)(o.QEs,{})," Sign up with LinkedIn"]})]}),(0,c.jsx)("div",{className:"divider",children:(0,c.jsx)("span",{children:"or register with email"})}),(0,c.jsx)("div",{className:"input-group",children:(0,c.jsx)(t.P.input,{type:"text",name:"name",placeholder:"Full Name",value:e.name,onChange:C,whileFocus:{scale:1.02},className:"neon-input"})}),(0,c.jsxs)("div",{className:"input-group",children:[(0,c.jsx)(t.P.input,{type:"email",name:"email",placeholder:"Email",value:e.email,onChange:C,whileFocus:{scale:1.02},className:"neon-input "+(!0===b?"valid":!1===b?"invalid":"")}),null!==b&&(0,c.jsx)(t.P.div,{initial:{scale:0},animate:{scale:1},className:"validation-icon",children:b?(0,c.jsx)(o.A7C,{className:"valid-icon"}):(0,c.jsx)(o._Hm,{className:"invalid-icon"})})]}),(0,c.jsxs)("div",{className:"input-group",children:[(0,c.jsx)(t.P.input,{type:w?"text":"password",name:"password",placeholder:"Password",value:e.password,onChange:C,whileFocus:{scale:1.02},className:"neon-input"}),(0,c.jsx)(t.P.div,{className:"password-toggle",whileHover:{scale:1.1},onClick:()=>j(!w),children:w?(0,c.jsx)(o.mx3,{}):(0,c.jsx)(o.Ny1,{})}),(0,c.jsx)("div",{className:"strength-meter",children:[...Array(4)].map(((e,a)=>(0,c.jsx)(t.P.div,{className:"strength-segment "+(a<y?"active":""),initial:{width:0},animate:{width:"100%"}},a)))})]}),(0,c.jsxs)("div",{className:"input-group",children:[(0,c.jsx)(t.P.input,{type:v?"text":"password",name:"confirmPassword",placeholder:"Confirm Password",value:e.confirmPassword,onChange:C,whileFocus:{scale:1.02},className:"neon-input"}),(0,c.jsx)(t.P.div,{className:"password-toggle",whileHover:{scale:1.1},onClick:()=>N(!v),children:v?(0,c.jsx)(o.mx3,{}):(0,c.jsx)(o.Ny1,{})})]}),(0,c.jsx)("div",{className:"input-group",children:(0,c.jsx)(t.P.input,{type:"tel",name:"phone",placeholder:"Phone Number (Optional)",value:e.phone,onChange:C,whileFocus:{scale:1.02},className:"neon-input "+(!0===f?"valid":!1===f?"invalid":"")})}),(0,c.jsx)("div",{className:"terms-group",children:(0,c.jsxs)("label",{className:"terms-label",children:[(0,c.jsx)("input",{type:"checkbox",name:"agreeToTerms",checked:e.agreeToTerms,onChange:C}),(0,c.jsx)("span",{className:"checkmark"}),"I agree to the Terms and Conditions"]})}),(0,c.jsx)(t.P.button,{type:"submit",className:"submit-button",disabled:m,whileHover:{scale:1.05},whileTap:{scale:.95},children:m?(0,c.jsx)(t.P.div,{className:"loading-spinner",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}}):"Join EduVerse"})]})}),x&&(0,c.jsx)(t.P.div,{className:"error-message",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},children:x}),(0,c.jsx)(t.P.button,{onClick:()=>T("/login"),className:"login-link",whileHover:{scale:1.05,textShadow:"0 0 8px rgb(255,255,255)"},children:"Already an explorer? Launch your journey"})]})]})}}}]);
//# sourceMappingURL=577.1474819b.chunk.js.map