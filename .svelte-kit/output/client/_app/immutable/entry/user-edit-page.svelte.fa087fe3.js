import{S as te,i as ae,s as se,a as f,k as l,q as S,W as le,h as o,c as b,l as r,m,r as A,n,b as Z,G as e,u as re,C as ee,L as ne}from"../chunks/index.bce3161e.js";import{u as oe}from"../chunks/globals.8144bfcc.js";function de(h){let v,i,d,c,y,_,E=h[0].username+"",B,D,N,t,w,T,U,x,P,$,q,z,H,k,V,G,g,R,L,M,W,X,p,j,C;return{c(){v=f(),i=l("main"),d=l("div"),c=l("h1"),y=S("Profile Settings for "),_=l("span"),B=S(E),N=f(),t=l("div"),w=l("p"),T=S("Username"),U=f(),x=l("input"),$=f(),q=l("br"),z=l("br"),H=f(),k=l("p"),V=S("Bio"),G=f(),g=l("textarea"),L=f(),M=l("br"),W=l("br"),X=f(),p=l("a"),j=S("Save Changes"),this.h()},l(s){le("svelte-10ozo3h",document.head).forEach(o),v=b(s),i=r(s,"MAIN",{class:!0});var J=m(i);d=r(J,"DIV",{class:!0});var I=m(d);c=r(I,"H1",{class:!0});var F=m(c);y=A(F,"Profile Settings for "),_=r(F,"SPAN",{class:!0});var K=m(_);B=A(K,E),K.forEach(o),F.forEach(o),N=b(I),t=r(I,"DIV",{class:!0});var a=m(t);w=r(a,"P",{class:!0});var O=m(w);T=A(O,"Username"),O.forEach(o),U=b(a),x=r(a,"INPUT",{class:!0}),$=b(a),q=r(a,"BR",{}),z=r(a,"BR",{}),H=b(a),k=r(a,"P",{class:!0});var Q=m(k);V=A(Q,"Bio"),Q.forEach(o),G=b(a),g=r(a,"TEXTAREA",{class:!0}),m(g).forEach(o),L=b(a),M=r(a,"BR",{}),W=r(a,"BR",{}),X=b(a),p=r(a,"A",{href:!0,class:!0});var Y=m(p);j=A(Y,"Save Changes"),Y.forEach(o),a.forEach(o),I.forEach(o),J.forEach(o),this.h()},h(){document.title="Profile Settings | Datapack Hub",n(_,"class",D=h[0].role+"-text svelte-1ie1bbt"),n(c,"class","dark:text-white text-5xl text-center md:text-start md:text-4xl lg:text-5xl font-brand font-bold mt-8 pb-10"),n(w,"class","align-middle dark:text-new-white font-brand"),n(x,"class","dark:bg-stone-800 bg-dark-white rounded-md dark:text-white h-10 text-lg p-2 font-brand"),x.value=P=h[0].username,n(k,"class","align-middle dark:text-new-white font-brand"),n(g,"class","dark:bg-stone-800 bg-dark-white rounded-md dark:text-white h-40 w-80 text-lg p-2 font-brand resize-none"),g.value=R=h[0].bio.replaceAll("\\n",`
`),n(p,"href",C=h[0].username+"/edit/"),n(p,"class","text-red-400 bg-red-400 bg-opacity-10 font-brand rounded-md px-2 md:px-3 py-2 md:py-2 text-md md:text-lg lg:text-xl hover:scale-105 transition-all border-2 border-red-400 active:brightness-75 mt-2"),n(t,"class","align-middle text-center md:text-start"),n(d,"class","flex-col items-center md:items-start md:flex-row w-full h-screen md:pt-20 pt-10"),n(i,"class","dark:bg-stone-900 bg-new-white transition-all px-4 lg:px-32 xl:px-64")},m(s,u){Z(s,v,u),Z(s,i,u),e(i,d),e(d,c),e(c,y),e(c,_),e(_,B),e(d,N),e(d,t),e(t,w),e(w,T),e(t,U),e(t,x),e(t,$),e(t,q),e(t,z),e(t,H),e(t,k),e(k,V),e(t,G),e(t,g),e(t,L),e(t,M),e(t,W),e(t,X),e(t,p),e(p,j)},p(s,[u]){u&1&&E!==(E=s[0].username+"")&&re(B,E),u&1&&D!==(D=s[0].role+"-text svelte-1ie1bbt")&&n(_,"class",D),u&1&&P!==(P=s[0].username)&&x.value!==P&&(x.value=P),u&1&&R!==(R=s[0].bio.replaceAll("\\n",`
`))&&(g.value=R),u&1&&C!==(C=s[0].username+"/edit/")&&n(p,"href",C)},i:ee,o:ee,d(s){s&&o(v),s&&o(i)}}}function ie(h,v,i){let d;return ne(h,oe,c=>i(0,d=c)),[d]}class me extends te{constructor(v){super(),ae(this,v,ie,de,se,{})}}export{me as default};
