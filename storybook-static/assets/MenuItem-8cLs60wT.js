import{r as l}from"./index-caxmlYbZ.js";import{g as O,b as k,s as V,r as j,m as F,c as y,a as P}from"./memoTheme-CtKMhVhH.js";import{L as C}from"./List-DDQAG58g.js";import{j as x}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-o1lFxRFU.js";import{B as U}from"./ButtonBase-Dd4UDY4p.js";import{d as I}from"./dividerClasses-B9-ByUQZ.js";import{l as $}from"./listItemTextClasses-B9pD8KrC.js";import{a as c,u as E}from"./DefaultPropsProvider-C-EGLtJD.js";import{a as G}from"./useEventCallback-D-j5pFnD.js";import{u as N}from"./useForkRef-Plrw27Ce.js";function ee(e){return k("MuiListItemIcon",e)}const M=O("MuiListItemIcon",["root","alignItemsFlexStart"]);function D(e){return k("MuiMenuItem",e)}const i=O("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),H=(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]},z=e=>{const{disabled:t,dense:a,divider:s,disableGutters:n,selected:d,classes:o}=e,r=P({root:["root",a&&"dense",t&&"disabled",!n&&"gutters",s&&"divider",d&&"selected"]},D,o);return{...o,...r}},W=V(U,{shouldForwardProp:e=>j(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:H})(F(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${i.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${i.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${i.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${i.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${i.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${I.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${I.inset}`]:{marginLeft:52},[`& .${$.root}`]:{marginTop:0,marginBottom:0},[`& .${$.inset}`]:{paddingLeft:36},[`& .${M.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${M.root} svg`]:{fontSize:"1.25rem"}}}]}))),te=l.forwardRef(function(t,a){const s=E({props:t,name:"MuiMenuItem"}),{autoFocus:n=!1,component:d="li",dense:o=!1,divider:m=!1,disableGutters:r=!1,focusVisibleClassName:R,role:B="menuitem",tabIndex:f,className:L,...w}=s,g=l.useContext(C),v=l.useMemo(()=>({dense:o||g.dense||!1,disableGutters:r}),[g.dense,o,r]),p=l.useRef(null);G(()=>{n&&p.current&&p.current.focus()},[n]);const S={...s,dense:v.dense,divider:m,disableGutters:r},u=z(s),T=N(p,a);let b;return s.disabled||(b=f!==void 0?f:-1),x.jsx(C.Provider,{value:v,children:x.jsx(W,{ref:T,role:B,tabIndex:b,component:d,focusVisibleClassName:y(u.focusVisible,R),className:y(u.root,L),...w,ownerState:S,classes:u})})});export{te as M,ee as g};
