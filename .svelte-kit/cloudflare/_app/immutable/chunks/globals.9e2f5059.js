import{w as i}from"./index.6890fe95.js";const h=i(!0),f=i(!1),p=i({id:-1,username:"",bio:"",profile_icon:"",role:"default"});function l(){return localStorage.getItem("dp_colorPref")=="true"}async function k(t){return(await(await fetch(`${u}/user/id/${t}`)).json()).username}async function g(t,e){console.log(await n("dph_token"));const o=await fetch(e,{method:t,headers:{Authorization:`Basic ${await n("dph_token")}`}});return o.status==498&&r("dph_token"),o}async function m(t,e){console.log(await n("dph_token"));const o=await fetch(t,{method:"post",body:JSON.stringify(e),headers:{Authorization:`Basic ${await n("dph_token")}`}});return o.status==498&&r("dph_token"),o}async function n(t){const e=t+"=",c=decodeURIComponent(document.cookie).split(";");for(let s=0;s<c.length;s++){let a=c[s];for(;a.charAt(0)==" ";)a=a.substring(1);if(a.indexOf(e)==0)return a.substring(e.length,a.length)}return""}async function r(t){document.cookie=t+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}const u="https://api.datapackhub.net";export{f as a,u as b,k as c,g as f,n as g,h as i,l,m as p,p as u};
