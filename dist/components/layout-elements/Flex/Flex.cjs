"use strict";var e=require("tslib"),t=require("../../../lib/tremorTwMerge.cjs"),r=require("../../../lib/utils.cjs");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=s(require("react"));const i=r.makeClassName("Flex"),n={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},a={start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",stretch:"items-stretch"},c={row:"flex-row",col:"flex-col","row-reverse":"flex-row-reverse","col-reverse":"flex-col-reverse"},o=l.default.forwardRef(((r,s)=>{const{flexDirection:o="row",justifyContent:f="between",alignItems:u="center",children:m,className:d}=r,j=e.__rest(r,["flexDirection","justifyContent","alignItems","children","className"]);return l.default.createElement("div",Object.assign({ref:s,className:t.tremorTwMerge(i("root"),"flex w-full",c[o],n[f],a[u],d)},j),m)}));o.displayName="Flex",module.exports=o;