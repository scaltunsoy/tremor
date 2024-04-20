"use strict";var r=require("tslib"),e=require("react"),t=require("../../../lib/constants.cjs"),o=require("../../../lib/theme.cjs"),a=require("../../../lib/tremorTwMerge.cjs"),i=require("../../../lib/utils.cjs");function d(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var s=d(e);const n=i.makeClassName("Card"),l=r=>{if(!r)return"";switch(r){case t.HorizontalPositions.Left:return"border-l-4";case t.VerticalPositions.Top:return"border-t-4";case t.HorizontalPositions.Right:return"border-r-4";case t.VerticalPositions.Bottom:return"border-b-4";default:return""}},c=s.default.forwardRef(((e,t)=>{const{decoration:d="",decorationColor:c,children:u,className:b}=e,m=r.__rest(e,["decoration","decorationColor","children","className"]);return s.default.createElement("div",Object.assign({ref:t,className:a.tremorTwMerge(n("root"),"relative w-full text-left ring-1 rounded-tremor-default p-6","bg-tremor-background ring-tremor-ring shadow-tremor-card","dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card",c?i.getColorClassNames(c,o.colorPalette.border).borderColor:"border-tremor-brand dark:border-dark-tremor-brand",l(d),b)},m),u)}));c.displayName="Card",module.exports=c;