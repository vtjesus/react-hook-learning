import{f as M}from"./index-4lRnP7hS.js";import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-o1lFxRFU.js";import{a as _}from"./index-caxmlYbZ.js";import{c}from"./createSvgIcon-C3qKZvE9.js";import{F as T}from"./Favorite-9SuNKCCw.js";import{F as A}from"./Fab-CJ2TDJ4Z.js";import"./index-DEUJ_QDu.js";import"./memoTheme-CtKMhVhH.js";import"./DefaultPropsProvider-C-EGLtJD.js";import"./extends-CF3RwP-h.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Dd4UDY4p.js";import"./emotion-react.browser.esm-D9YfGLo1.js";import"./TransitionGroupContext-Cc0PzDYn.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useForkRef-Plrw27Ce.js";import"./useEventCallback-D-j5pFnD.js";import"./isFocusVisible-B8k4qzLc.js";const O=c(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),P=c(e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),k=c(e.jsx("path",{d:"M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation"),C=a=>{if(_.isValidElement(a))return a;switch(a){case"add":return e.jsx(O,{});case"edit":return e.jsx(P,{});case"favorite":return e.jsx(T,{});case"navigation":return e.jsx(k,{});default:return null}},q=({icon:a,label:d,color:N="default",size:L="medium",variant:l="circular",disabled:w=!1,...D})=>e.jsxs(A,{color:N,size:L,variant:l,disabled:w,...D,children:[C(a),d&&l==="extended"&&e.jsx("span",{style:{marginLeft:"8px"},children:d})]});q.__docgenInfo={description:"",methods:[],displayName:"Fab",props:{icon:{required:!1,tsType:{name:"union",raw:"'add' | 'edit' | 'favorite' | 'navigation' | React.ReactNode",elements:[{name:"literal",value:"'add'"},{name:"literal",value:"'edit'"},{name:"literal",value:"'favorite'"},{name:"literal",value:"'navigation'"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},color:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},variant:{defaultValue:{value:"'circular'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const ie={title:"Inputs/Fab",component:q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","success","error","info","warning"]},size:{control:"select",options:["small","medium","large"]},variant:{control:"select",options:["circular","extended"]},icon:{control:"select",options:["add","edit","favorite","navigation"]},disabled:{control:"boolean"}},args:{onClick:M()}},r={args:{icon:"add"}},o={args:{icon:"edit",color:"primary"}},t={args:{icon:"favorite",variant:"extended",label:"Favorite"}},s={args:{icon:"add",size:"small"}},n={args:{icon:"navigation",size:"large"}},i={args:{icon:"add",disabled:!0}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: 'add'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,g,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    icon: 'edit',
    color: 'primary'
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,b,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    icon: 'favorite',
    variant: 'extended',
    label: 'Favorite'
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,j,z;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    icon: 'add',
    size: 'small'
  }
}`,...(z=(j=s.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var F,S,I;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    icon: 'navigation',
    size: 'large'
  }
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var R,E,V;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    icon: 'add',
    disabled: true
  }
}`,...(V=(E=i.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const ce=["Default","Primary","Extended","Small","Large","Disabled"];export{r as Default,i as Disabled,t as Extended,n as Large,o as Primary,s as Small,ce as __namedExportsOrder,ie as default};
