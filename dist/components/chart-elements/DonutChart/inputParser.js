import{BaseColors as r}from"../../../lib/constants.js";import{colorPalette as o}from"../../../lib/theme.js";import"../../../lib/tremorTwMerge.js";import{getColorClassNames as t,sumNumericArray as l}from"../../../lib/utils.js";const s=(l,s)=>l.map(((l,i)=>{const m=i<s.length?s[i]:r.Gray;return Object.assign(Object.assign({},l),{color:m,className:t(null!=m?m:r.Gray,o.background).fillColor,fill:""})})),i=(r,o,t,s)=>r||o(((r,o)=>l(r.map((r=>r[o]))))(t,s));export{s as parseData,i as parseLabelInput};