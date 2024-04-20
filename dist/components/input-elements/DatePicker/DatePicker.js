'use client';
import{__rest as e}from"tslib";import r,{useMemo as t}from"react";import{tremorTwMerge as a}from"../../../lib/tremorTwMerge.js";import{startOfToday as o,startOfMonth as n}from"date-fns";import{enUS as l}from"date-fns/locale";import{Popover as d,Transition as s}from"@headlessui/react";import m from"../../../assets/CalendarIcon.js";import i from"../../../assets/XCircleIcon.js";import c from"../Calendar/Calendar.js";import{makeDatePickerClassName as u}from"./datePickerUtils.js";import b from"../../../hooks/useInternalState.js";import{formatSelectedDates as f}from"../DateRangePicker/dateRangePickerUtils.js";import{getSelectButtonColors as p,hasValue as k}from"../selectUtils.js";const h=o(),w=r.forwardRef(((o,w)=>{var g;const{value:v,defaultValue:y,onValueChange:x,minDate:N,maxDate:D,placeholder:j="Select date",disabled:C=!1,locale:E=l,enableClear:S=!0,displayFormat:O,className:P,enableYearNavigation:F=!1,weekStartsOn:I=0,disabledDates:V}=o,R=e(o,["value","defaultValue","onValueChange","minDate","maxDate","placeholder","disabled","locale","enableClear","displayFormat","className","enableYearNavigation","weekStartsOn","disabledDates"]),[T,U]=b(y,v),Y=t((()=>{const e=[];return N&&e.push({before:N}),D&&e.push({after:D}),[...e,...null!=V?V:[]]}),[N,D,V]),M=T?f(T,void 0,E,O):j,z=n(null!==(g=null!=T?T:D)&&void 0!==g?g:h),B=S&&!C;return r.createElement(d,Object.assign({ref:w,as:"div",className:a("relative w-full min-w-[10rem] text-tremor-default","focus:ring-2 focus:ring-tremor-brand-muted dark:focus:ring-dark-tremor-brand-muted",P)},R),r.createElement(d.Button,{disabled:C,className:a("w-full outline-none text-left whitespace-nowrap truncate focus:ring-2 transition duration-100 rounded-tremor-default flex flex-nowrap border pl-3 py-2","border-tremor-border shadow-tremor-input text-tremor-content-emphasis focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted","dark:border-dark-tremor-border dark:shadow-dark-tremor-input dark:text-dark-tremor-content-emphasis dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted",B?"pr-8":"pr-4",p(k(T),C))},r.createElement(m,{className:a(u("calendarIcon"),"flex-none shrink-0 h-5 w-5 mr-2 -ml-0.5","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle"),"aria-hidden":"true"}),r.createElement("p",{className:"truncate"},M)),B&&T?r.createElement("button",{type:"button",className:a("absolute outline-none inset-y-0 right-0 flex items-center transition duration-100 mr-4"),onClick:e=>{e.preventDefault(),null==x||x(void 0),U(void 0)}},r.createElement(i,{className:a("flex-none h-4 w-4","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle")})):null,r.createElement(s,{className:"absolute z-10 min-w-min left-0",enter:"transition ease duration-100 transform",enterFrom:"opacity-0 -translate-y-4",enterTo:"opacity-100 translate-y-0",leave:"transition ease duration-100 transform",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 -translate-y-4"},r.createElement(d.Panel,{className:a("divide-y overflow-y-auto outline-none rounded-tremor-default p-3 border my-1","bg-tremor-background border-tremor-border divide-tremor-border shadow-tremor-dropdown","dark:bg-dark-tremor-background dark:border-dark-tremor-border dark:divide-dark-tremor-border dark:shadow-dark-tremor-dropdown")},(({close:e})=>r.createElement(c,{showOutsideDays:!0,mode:"single",defaultMonth:z,selected:T,weekStartsOn:I,onSelect:r=>{null==x||x(r),U(r),e()},locale:E,disabled:Y,enableYearNavigation:F})))))}));w.displayName="DatePicker";export{w as default};