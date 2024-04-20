'use client';
import{__rest as e}from"tslib";import r from"react";import t,{useTooltip as a}from"../../util-elements/Tooltip/Tooltip.js";import{colorPalette as l}from"../../../lib/theme.js";import{tremorTwMerge as o}from"../../../lib/tremorTwMerge.js";import{getColorClassNames as s,makeClassName as m}from"../../../lib/utils.js";const n=m("ProgressBar"),i=r.forwardRef(((m,i)=>{const{value:c,label:d,color:p,tooltip:b,showAnimation:f=!1,className:u}=m,g=e(m,["value","label","color","tooltip","showAnimation","className"]),{tooltipProps:h,getReferenceProps:w}=a();return r.createElement(r.Fragment,null,r.createElement(t,Object.assign({text:b},h)),r.createElement("div",Object.assign({ref:i,className:o(n("root"),"flex items-center w-full",u)},g),r.createElement("div",Object.assign({ref:h.refs.setReference,className:o(n("progressBarWrapper"),"relative flex items-center w-full rounded-tremor-full bg-opacity-20 h-2",p?s(p,l.background).bgColor:"bg-tremor-brand-muted/50 dark:bg-dark-tremor-brand-muted")},w),r.createElement("div",{className:o(n("progressBar"),"flex-col h-full rounded-tremor-full",p?s(p,l.background).bgColor:"bg-tremor-brand dark:bg-dark-tremor-brand"),style:{width:`${c}%`,transition:f?"all 1s":""}})),d?r.createElement("div",{className:o(n("labelWrapper"),"w-16 truncate text-right ml-2","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis")},r.createElement("p",{className:o(n("label"),"shrink-0 whitespace-nowrap truncate text-tremor-default")},d)):null))}));i.displayName="ProgressBar";export{i as default};