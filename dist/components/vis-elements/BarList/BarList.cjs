"use strict";var e=require("tslib"),t=require("react"),r=require("../../../lib/theme.cjs"),a=require("../../../lib/tremorTwMerge.cjs"),l=require("../../../lib/utils.cjs");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(t);const m=l.makeClassName("BarList");function s(t,n){const{data:s=[],color:c,valueFormatter:i=l.defaultValueFormatter,showAnimation:u=!1,onValueChange:d,className:f}=t,b=e.__rest(t,["data","color","valueFormatter","showAnimation","onValueChange","className"]),p=(e=>{let t=-1/0;return e.forEach((e=>{t=Math.max(t,e)})),e.map((e=>0===e?0:Math.max(e/t*100,1)))})(s.map((e=>e.value)));return o.default.createElement("div",Object.assign({ref:n,className:a.tremorTwMerge(m("root"),"flex justify-between space-x-6",f)},b),o.default.createElement("div",{className:a.tremorTwMerge(m("bars"),"relative w-full")},s.map(((e,t)=>{var n,i,f;const b=e.icon;return o.default.createElement("div",{key:null!==(n=e.key)&&void 0!==n?n:e.name,className:a.tremorTwMerge(m("bar"),"flex items-center rounded-tremor-small bg-opacity-30","h-9",e.color||c?l.getColorClassNames(null!==(i=e.color)&&void 0!==i?i:c,r.colorPalette.background).bgColor:"bg-tremor-brand-subtle dark:bg-dark-tremor-brand-subtle dark:bg-opacity-30",t===s.length-1?"mb-0":"mb-2"),style:{width:`${p[t]}%`,transition:u?"all 1s":""}},o.default.createElement("div",{className:a.tremorTwMerge("absolute max-w-full flex left-2",d?"cursor-pointer":""),onClick:()=>{null==d||d(e)}},b?o.default.createElement(b,{className:a.tremorTwMerge(m("barIcon"),"flex-none h-5 w-5 mr-2","text-tremor-content","dark:text-dark-tremor-content")}):null,e.href?o.default.createElement("a",{href:e.href,target:null!==(f=e.target)&&void 0!==f?f:"_blank",rel:"noreferrer",className:a.tremorTwMerge(m("barLink"),"whitespace-nowrap hover:underline truncate text-tremor-default",d?"cursor-pointer":"","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis"),onClick:()=>{null==d||d(e)}},e.name):o.default.createElement("p",{className:a.tremorTwMerge(m("barText"),"whitespace-nowrap truncate text-tremor-default",d?"cursor-pointer":"","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis"),onClick:()=>{null==d||d(e)}},e.name)))}))),o.default.createElement("div",{className:"text-right min-w-min"},s.map(((e,t)=>{var r;return o.default.createElement("div",{key:null!==(r=e.key)&&void 0!==r?r:e.name,className:a.tremorTwMerge(m("labelWrapper"),"flex justify-end items-center","h-9",t===s.length-1?"mb-0":"mb-2")},o.default.createElement("p",{className:a.tremorTwMerge(m("labelText"),"whitespace-nowrap truncate text-tremor-default","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis")},i(e.value)))}))))}s.displayName="BarList";const c=o.default.forwardRef(s);module.exports=c;