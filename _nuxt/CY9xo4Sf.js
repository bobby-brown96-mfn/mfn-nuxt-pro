import{d as g,ab as x,ac as S,r as D,b as M,N as U,w as r,g as n,e as N,j as k,t as j,a8 as v,H as T,U as $}from"./DgP3qxNX.js";import{u as C,_ as B,a as O}from"./DZhlENf2.js";import{_ as A}from"./BlwXy0kE.js";import{_ as F,a as V}from"./BnXv9DVf.js";import{_ as H,a as I}from"./SDr-wLXE.js";import"./BTLo-WS6.js";import"./CgUChgj-.js";import"./OJkHrvbi.js";import"./DHuAlWP7.js";import"./C_lRDTqq.js";function y(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function _(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function P(t,e){const o=y(t);return isNaN(e)?_(t,NaN):(e&&o.setDate(o.getDate()+e),o)}function R(t,e){const o=y(t);if(isNaN(e))return _(t,NaN);if(!e)return o;const a=o.getDate(),s=_(t,o.getTime());s.setMonth(o.getMonth()+e+1,0);const c=s.getDate();return a>=c?s:(o.setFullYear(s.getFullYear(),s.getMonth(),a),o)}function W(t,e){return P(t,-e)}function Y(t,e){return R(t,-e)}function q(t,e){const{years:o=0,months:a=0,weeks:s=0,days:c=0,hours:u=0,minutes:l=0,seconds:f=0}=e,i=Y(t,a+o*12),p=W(i,c+s*7),d=l+u*60,m=(f+d*60)*1e3;return _(t,p.getTime()-m)}const ot=g({__name:"index",setup(t){x({title:"App"});const e=S(),{isNotificationsSlideoverOpen:o}=C(),a=[[{label:"New mail",icon:"i-heroicons-paper-airplane",to:"/inbox"},{label:"New user",icon:"i-heroicons-user-plus",to:"/users"}]];D({start:q(new Date,{days:14}),end:new Date}),D("daily");const s=async()=>{try{await e.refreshAccess()}catch(c){console.log(`error refreshing: ${c}`)}};return(c,u)=>{const l=T,f=B,i=$,p=O,d=A,h=F,m=I,b=V,w=H;return M(),U(w,null,{default:r(()=>[n(b,{grow:""},{default:r(()=>[n(h,{title:"Home"},{right:r(()=>[n(p,{text:"Notifications",shortcuts:["N"]},{default:r(()=>[n(i,{color:"gray",variant:"ghost",square:"",onClick:u[0]||(u[0]=z=>o.value=!0)},{default:r(()=>[n(f,{color:"red",inset:""},{default:r(()=>[n(l,{name:"i-heroicons-bell",class:"w-5 h-5"})]),_:1})]),_:1})]),_:1}),n(d,{items:a},{default:r(()=>[n(i,{icon:"i-heroicons-plus",size:"md",class:"ml-1.5 rounded-full"})]),_:1})]),_:1}),n(m,null,{left:r(()=>[N("div",null,[n(i,{color:"red",onClick:s},{default:r(()=>[k("Refresh")]),_:1})]),N("div",null,j(v(e).accessToken),1)]),_:1})]),_:1})]),_:1})}}});export{ot as default};
