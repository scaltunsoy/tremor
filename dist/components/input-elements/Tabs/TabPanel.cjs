'use client';
"use strict";var e=require("tslib");require("../../../contexts/BaseColorContext.cjs");var t=require("../../../contexts/IndexContext.cjs");require("../../../contexts/RootStylesContext.cjs");var r=require("../../../contexts/SelectedValueContext.cjs"),s=require("../../../lib/tremorTwMerge.cjs"),a=require("../../../lib/utils.cjs"),l=require("react");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=c(l);const n=a.makeClassName("TabPanel"),u=o.default.forwardRef(((a,c)=>{const{children:u,className:i}=a,d=e.__rest(a,["children","className"]),{selectedValue:x}=l.useContext(r),f=x===l.useContext(t);return o.default.createElement("div",Object.assign({ref:c,className:s.tremorTwMerge(n("root"),"w-full mt-2",f?"":"hidden",i),"aria-selected":f?"true":"false"},d),u)}));u.displayName="TabPanel",module.exports=u;