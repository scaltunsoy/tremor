'use client';
import{__rest as e}from"tslib";import t,{useState as a}from"react";import{ResponsiveContainer as l,ScatterChart as o,CartesianGrid as r,XAxis as i,YAxis as n,Tooltip as s,ZAxis as m,Scatter as c,Legend as d,Dot as u}from"recharts";import p from"../common/ChartLegend.js";import v from"./ScatterChartTooltip.js";import y from"../common/NoData.js";import{constructCategories as h,constructCategoryColors as g,deepEqual as f,getYAxisDomain as x}from"../common/utils.js";import{BaseColors as k}from"../../../lib/constants.js";import{themeColorRange as w,colorPalette as b}from"../../../lib/theme.js";import{tremorTwMerge as E}from"../../../lib/tremorTwMerge.js";import{getColorClassNames as A,defaultValueFormatter as T}from"../../../lib/utils.js";const V=t.forwardRef(((V,C)=>{const{data:L=[],x:j,y:D,size:O,category:N,colors:S=w,showOpacity:X=!1,sizeRange:G=[1,1e3],valueFormatter:Y={x:T,y:T,size:T},startEndOnly:z=!1,showXAxis:F=!0,showYAxis:M=!0,yAxisWidth:K=56,intervalType:R="equidistantPreserveStart",animationDuration:W=900,showAnimation:P=!1,showTooltip:q=!0,showLegend:H=!0,showGridLines:$=!0,autoMinXValue:B=!1,minXValue:I,maxXValue:J,autoMinYValue:Q=!1,minYValue:U,maxYValue:Z,allowDecimals:_=!0,noDataText:ee,onValueChange:te,customTooltip:ae,rotateLabelX:le,className:oe,enableLegendSlider:re=!1,tickGap:ie=5}=V,ne=e(V,["data","x","y","size","category","colors","showOpacity","sizeRange","valueFormatter","startEndOnly","showXAxis","showYAxis","yAxisWidth","intervalType","animationDuration","showAnimation","showTooltip","showLegend","showGridLines","autoMinXValue","minXValue","maxXValue","autoMinYValue","minYValue","maxYValue","allowDecimals","noDataText","onValueChange","customTooltip","rotateLabelX","className","enableLegendSlider","tickGap"]),se=ae,[me,ce]=a(60),[de,ue]=t.useState(void 0),[pe,ve]=a(void 0),ye=!!te;function he(e,t,a){a.stopPropagation(),ye&&(f(de,e.node)?(ve(void 0),ue(void 0),null==te||te(null)):(ue(e.node),ve(e.payload[N]),null==te||te(Object.assign({eventType:"bubble",categoryClicked:e.payload[N]},e.payload))))}const ge=h(L,N),fe=g(ge,S),xe=x(B,I,J),ke=x(Q,U,Z);return t.createElement("div",Object.assign({ref:C,className:E("w-full h-80",oe)},ne),t.createElement(l,{className:"h-full w-full"},(null==L?void 0:L.length)?t.createElement(o,{onClick:ye&&(pe||de)?()=>{ue(void 0),ve(void 0),null==te||te(null)}:void 0,margin:{left:20,right:20}},$?t.createElement(r,{className:E("stroke-1","stroke-tremor-border","dark:stroke-dark-tremor-border"),horizontal:!0,vertical:!0}):null,j?t.createElement(i,{hide:!F,dataKey:j,interval:z?"preserveStartEnd":R,tick:{transform:"translate(0, 6)"},ticks:z?[L[0][j],L[L.length-1][j]]:void 0,type:"number",name:j,fill:"",stroke:"",className:E("text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content"),tickLine:!1,tickFormatter:Y.x,axisLine:!1,minTickGap:ie,domain:xe,allowDataOverflow:!0,angle:null==le?void 0:le.angle,dy:null==le?void 0:le.verticalShift,height:null==le?void 0:le.xAxisHeight}):null,D?t.createElement(n,{width:K,hide:!M,axisLine:!1,tickLine:!1,dataKey:D,type:"number",name:D,domain:ke,tick:{transform:"translate(-3, 0)"},tickFormatter:Y.y,fill:"",stroke:"",className:E("text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content"),allowDecimals:_,allowDataOverflow:!0}):null,t.createElement(s,{wrapperStyle:{outline:"none"},isAnimationActive:!1,cursor:{stroke:"#d1d5db",strokeWidth:1},content:q?({active:e,payload:a,label:l})=>{var o,r;const i=N?null===(r=null===(o=null==a?void 0:a[0])||void 0===o?void 0:o.payload)||void 0===r?void 0:r[N]:l;return se?t.createElement(se,{payload:null==a?void 0:a.map((e=>{var t;return Object.assign(Object.assign({},e),{color:null!==(t=fe.get(i))&&void 0!==t?t:k.Gray})})),active:e,label:i}):t.createElement(v,{active:e,payload:a,label:i,valueFormatter:Y,axis:{x:j,y:D,size:O},category:N,categoryColors:fe})}:t.createElement(t.Fragment,null)}),O?t.createElement(m,{dataKey:O,type:"number",range:G,name:O}):null,ge.map((e=>{var a,l;return t.createElement(c,{className:E(A(null!==(a=fe.get(e))&&void 0!==a?a:k.Gray,b.text).fillColor,X?A(null!==(l=fe.get(e))&&void 0!==l?l:k.Gray,b.text).strokeColor:"",te?"cursor-pointer":""),fill:`url(#${fe.get(e)})`,fillOpacity:X?.7:1,key:e,name:e,data:N?L.filter((t=>t[N]===e)):L,isAnimationActive:P,animationDuration:W,shape:e=>((e,a,l)=>{const{cx:o,cy:r,width:i,node:n,fillOpacity:s,name:m}=e;return t.createElement(u,{cx:o,cy:r,r:i/2,opacity:a||l&&l!==m?f(a,n)?s:.3:s})})(e,de,pe),onClick:he})})),H?t.createElement(d,{verticalAlign:"top",height:me,content:({payload:e})=>p({payload:e},fe,ce,pe,ye?e=>{return t=e,void(ye&&(t!==pe||de?(ve(t),null==te||te({eventType:"category",categoryClicked:t})):(ve(void 0),null==te||te(null)),ue(void 0)));var t}:void 0,re)}):null):t.createElement(y,{noDataText:ee})))}));V.displayName="ScatterChart";export{V as default};