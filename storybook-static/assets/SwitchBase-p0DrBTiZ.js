import{r as A}from"./index-caxmlYbZ.js";import{b as D,g as G,s as C,r as H,c as J,a as K}from"./memoTheme-CtKMhVhH.js";import{u as M}from"./useFormControl-kznOudH-.js";import{j as w}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-o1lFxRFU.js";import{B as Q}from"./ButtonBase-Dd4UDY4p.js";import{u as T}from"./useControlled-BzlaMV7b.js";import{c as V}from"./DefaultPropsProvider-C-EGLtJD.js";function W(s){return D("PrivateSwitchBase",s)}G("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const X=s=>{const{classes:t,checked:n,disabled:c,edge:a}=s,d={root:["root",n&&"checked",c&&"disabled",a&&`edge${V(a)}`],input:["input"]};return K(d,W,t)},Y=C(Q)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:s,ownerState:t})=>s==="start"&&t.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:s,ownerState:t})=>s==="end"&&t.size!=="small",style:{marginRight:-12}}]}),Z=C("input",{shouldForwardProp:H})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),re=A.forwardRef(function(t,n){const{autoFocus:c,checked:a,checkedIcon:d,className:y,defaultChecked:u,disabled:S,disableFocusRipple:p=!1,edge:x=!1,icon:F,id:R,inputProps:P,inputRef:v,name:z,onBlur:h,onChange:m,onFocus:f,readOnly:I,required:j=!1,tabIndex:E,type:r,value:g,...U}=t,[B,L]=T({controlled:a,default:!!u,name:"SwitchBase",state:"checked"}),o=M(),N=e=>{f&&f(e),o&&o.onFocus&&o.onFocus(e)},q=e=>{h&&h(e),o&&o.onBlur&&o.onBlur(e)},O=e=>{if(e.nativeEvent.defaultPrevented)return;const k=e.target.checked;L(k),m&&m(e,k)};let i=S;o&&typeof i>"u"&&(i=o.disabled);const $=r==="checkbox"||r==="radio",l={...t,checked:B,disabled:i,disableFocusRipple:p,edge:x},b=X(l);return w.jsxs(Y,{component:"span",className:J(b.root,y),centerRipple:!0,focusRipple:!p,disabled:i,tabIndex:null,role:void 0,onFocus:N,onBlur:q,ownerState:l,ref:n,...U,children:[w.jsx(Z,{autoFocus:c,checked:a,defaultChecked:u,className:b.input,disabled:i,id:$?R:void 0,name:z,onChange:O,readOnly:I,ref:v,required:j,ownerState:l,tabIndex:E,type:r,...r==="checkbox"&&g===void 0?{}:{value:g},...P}),B?d:F]})});export{re as S};
