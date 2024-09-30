import{j as a}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-o1lFxRFU.js";import{r as u}from"./index-caxmlYbZ.js";import{a as M,R as S}from"./Radio-DobfXOpy.js";import{a as V,F as I}from"./FormLabel-stlYbfB0.js";import{b as x,g as G,s as L,c as F,a as j}from"./memoTheme-CtKMhVhH.js";import{u as P}from"./useControlled-BzlaMV7b.js";import{u as U}from"./useForkRef-Plrw27Ce.js";import{u as k}from"./useId-D8TmcrIr.js";import{u as D}from"./useFormControl-kznOudH-.js";import{f as H}from"./utils-DK5FnA_s.js";import{u as N}from"./DefaultPropsProvider-C-EGLtJD.js";import{F as _}from"./FormControlLabel-CiuOtQHS.js";import"./SwitchBase-p0DrBTiZ.js";import"./ButtonBase-Dd4UDY4p.js";import"./emotion-react.browser.esm-D9YfGLo1.js";import"./TransitionGroupContext-Cc0PzDYn.js";import"./extends-CF3RwP-h.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useEventCallback-D-j5pFnD.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-C3qKZvE9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./isMuiElement-DAw16oV4.js";import"./useSlot-D9bplHaG.js";import"./resolveComponentProps-eMZxqe1w.js";import"./Typography-BpcV8GlC.js";import"./index-jmn92H5i.js";import"./useTheme-js8xzI_O.js";import"./extendSxProp-B1nIj3LR.js";function O(e){return x("MuiFormGroup",e)}G("MuiFormGroup",["root","row","error"]);const $=e=>{const{classes:o,row:r,error:t}=e;return j({root:["root",r&&"row",t&&"error"]},O,o)},A=L("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.row&&o.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),W=u.forwardRef(function(o,r){const t=N({props:o,name:"MuiFormGroup"}),{className:s,row:i=!1,...p}=t,n=D(),m=H({props:t,muiFormControl:n,states:["error"]}),d={...t,row:i,error:m.error},f=$(d);return a.jsx(A,{className:F(f.root,s),ownerState:d,ref:r,...p})});function z(e){return x("MuiRadioGroup",e)}G("MuiRadioGroup",["root","row","error"]);const B=e=>{const{classes:o,row:r,error:t}=e;return j({root:["root",r&&"row",t&&"error"]},z,o)},J=u.forwardRef(function(o,r){const{actions:t,children:s,className:i,defaultValue:p,name:n,onChange:m,value:d,...f}=o,v=u.useRef(null),q=B(o),[R,b]=P({controlled:d,default:p,name:"RadioGroup"});u.useImperativeHandle(t,()=>({focus:()=>{let l=v.current.querySelector("input:not(:disabled):checked");l||(l=v.current.querySelector("input:not(:disabled)")),l&&l.focus()}}),[]);const T=U(r,v),y=k(n),E=u.useMemo(()=>({name:y,onChange(l){b(l.target.value),m&&m(l,l.target.value)},value:R}),[y,m,b,R]);return a.jsx(M.Provider,{value:E,children:a.jsx(W,{role:"radiogroup",ref:T,className:F(q.root,i),...f,children:s})})}),g=({label:e,name:o,options:r,value:t,onChange:s,row:i=!1,radioProps:p={}})=>a.jsxs(V,{component:"fieldset",children:[a.jsx(I,{component:"legend",children:e}),a.jsx(J,{name:o,value:t,onChange:s,row:i,children:r.map(n=>a.jsx(_,{value:n.value,control:a.jsx(S,{...p,disabled:n.disabled}),label:n.label},n.value))})]});g.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string; disabled?: boolean }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"{ label: string; value: string; disabled?: boolean }[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>, value: string) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},row:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radioProps:{required:!1,tsType:{name:"RadioProps"},description:"",defaultValue:{value:"{}",computed:!1}}}};const qe={title:"Inputs/RadioGroup",component:g},K=e=>{const[o,r]=u.useState(e.value),t=(s,i)=>{r(i)};return a.jsx(g,{...e,value:o,onChange:t})},c=K.bind({});c.args={label:"Select an option",name:"options",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3",disabled:!0}],value:"option1",row:!1};var C,h,w;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, newValue: string) => {
    setValue(newValue);
  };
  return <RadioGroup {...args} value={value} onChange={handleChange} />;
}`,...(w=(h=c.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const Te=["Default"];export{c as Default,Te as __namedExportsOrder,qe as default};
