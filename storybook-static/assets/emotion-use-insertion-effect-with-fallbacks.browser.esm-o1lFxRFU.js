import{r as c,R as u}from"./index-caxmlYbZ.js";var l={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=c,y=Symbol.for("react.element"),E=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,m=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function i(t,e,a){var r,o={},s=null,f=null;a!==void 0&&(s=""+a),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(f=e.ref);for(r in e)v.call(e,r)&&!x.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:y,type:t,key:s,ref:f,props:o,_owner:m.current}}n.Fragment=E;n.jsx=i;n.jsxs=i;l.exports=n;var b=l.exports,R=function(e){return e()},p=u.useInsertionEffect?u.useInsertionEffect:!1,d=p||R,I=p||c.useLayoutEffect;export{d as a,b as j,I as u};
