"use strict";(self.webpackChunkeduverse=self.webpackChunkeduverse||[]).push([[157],{7157:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var a=t(5043),r=t(579);const s=()=>{const[e,n]=(0,a.useState)([{companyName:"",location:"",workMode:"",startDate:"",endDate:"",currentlyWorking:!1}]),t=(t,a)=>{const{name:r,value:s,type:i,checked:l}=a.target,o=[...e];o[t][r]="checkbox"===i?l:s,n(o)};return(0,r.jsxs)("div",{className:"experience-container",children:[(0,r.jsx)("h2",{children:"Professional Experience"}),(0,r.jsxs)("form",{onSubmit:n=>{n.preventDefault(),console.log("Submitted Experiences:",e)},children:[e.map(((a,s)=>(0,r.jsxs)("div",{className:"experience-item",children:[(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)("label",{children:"Company Name"}),(0,r.jsx)("input",{type:"text",name:"companyName",value:a.companyName,onChange:e=>t(s,e),placeholder:"Company Name",required:!0})]}),(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)("label",{children:"Location"}),(0,r.jsx)("input",{type:"text",name:"location",value:a.location,onChange:e=>t(s,e),placeholder:"Location",required:!0})]}),(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)("label",{children:"Work Mode"}),(0,r.jsxs)("select",{name:"workMode",value:a.workMode,onChange:e=>t(s,e),required:!0,children:[(0,r.jsx)("option",{value:"",children:"Select..."}),(0,r.jsx)("option",{value:"On-site",children:"On-site"}),(0,r.jsx)("option",{value:"Hybrid",children:"Hybrid"}),(0,r.jsx)("option",{value:"Remote",children:"Remote"})]})]}),(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)("label",{children:"Start Date"}),(0,r.jsx)("input",{type:"date",name:"startDate",value:a.startDate,onChange:e=>t(s,e),required:!0})]}),(0,r.jsx)("div",{className:"input-group",children:(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"checkbox",name:"currentlyWorking",checked:a.currentlyWorking,onChange:e=>t(s,e)}),"Currently Working Here"]})}),!a.currentlyWorking&&(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)("label",{children:"End Date"}),(0,r.jsx)("input",{type:"date",name:"endDate",value:a.endDate,onChange:e=>t(s,e),min:a.startDate,required:!0})]}),(0,r.jsx)("button",{type:"button",onClick:()=>(t=>{const a=e.filter(((e,n)=>n!==t));n(a)})(s),className:"delete-button",children:"Delete"})]},s))),(0,r.jsx)("button",{type:"button",onClick:()=>{n([...e,{companyName:"",location:"",workMode:"",startDate:"",endDate:"",currentlyWorking:!1}])},className:"add-button",children:"Add Experience"}),(0,r.jsx)("button",{type:"submit",className:"submit-button",children:"Save Experiences"})]})]})}}}]);
//# sourceMappingURL=157.f26884dd.chunk.js.map