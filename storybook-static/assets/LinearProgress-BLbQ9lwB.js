import{r as j}from"./index-caxmlYbZ.js";import{b as R,g as q,s as m,m as b,c as O,a as z}from"./memoTheme-CtKMhVhH.js";import{u as M}from"./index-DPfWUdsj.js";import{c as l}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{j as u}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-o1lFxRFU.js";import{k as P,c as $}from"./emotion-react.browser.esm-D9YfGLo1.js";import{c as t,u as N,l as w,e as D}from"./DefaultPropsProvider-C-EGLtJD.js";function S(e){return R("MuiLinearProgress",e)}q("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const v=4,y=P`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,A=typeof y!="string"?$`
        animation: ${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,C=P`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,T=typeof C!="string"?$`
        animation: ${C} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,h=P`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,U=typeof h!="string"?$`
        animation: ${h} 3s infinite linear;
      `:null,K=e=>{const{classes:r,variant:a,color:o}=e,d={root:["root",`color${t(o)}`,a],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar",`barColor${t(o)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${t(o)}`,a==="buffer"&&`color${t(o)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return z(d,S,r)},x=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?w(e.palette[r].main,.62):D(e.palette[r].main,.5),E=m("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[`color${t(a.color)}`],r[a.variant]]}})(b(({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter(l()).map(([r])=>({props:{color:r},style:{backgroundColor:x(e,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),X=m("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.dashed,r[`dashedColor${t(a.color)}`]]}})(b(({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter(l()).map(([r])=>{const a=x(e,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`}}})]})),U||{animation:`${h} 3s infinite linear`}),F=m("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar1Indeterminate,a.variant==="determinate"&&r.bar1Determinate,a.variant==="buffer"&&r.bar1Buffer]}})(b(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter(l()).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${v}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${v}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:A||{animation:`${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),V=m("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar2Indeterminate,a.variant==="buffer"&&r.bar2Buffer]}})(b(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter(l()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter(l()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:x(e,r),transition:`transform .${v}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:T||{animation:`${C} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),Z=j.forwardRef(function(r,a){const o=N({props:r,name:"MuiLinearProgress"}),{className:d,color:B="primary",value:g,valueBuffer:k,variant:i="indeterminate",...I}=o,s={...o,color:B,variant:i},f=K(s),L=M(),p={},c={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&g!==void 0){p["aria-valuenow"]=Math.round(g),p["aria-valuemin"]=0,p["aria-valuemax"]=100;let n=g-100;L&&(n=-n),c.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&k!==void 0){let n=(k||0)-100;L&&(n=-n),c.bar2.transform=`translateX(${n}%)`}return u.jsxs(E,{className:O(f.root,d),ownerState:s,role:"progressbar",...p,ref:a,...I,children:[i==="buffer"?u.jsx(X,{className:f.dashed,ownerState:s}):null,u.jsx(F,{className:f.bar1,ownerState:s,style:c.bar1}),i==="determinate"?null:u.jsx(V,{className:f.bar2,ownerState:s,style:c.bar2})]})});export{Z as L};
