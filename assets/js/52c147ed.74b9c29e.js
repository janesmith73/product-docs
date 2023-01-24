"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(v,a(a({ref:t},l),{},{components:n})):r.createElement(v,a({ref:t},l))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={description:"Overview and setup"},a="OpenVPN",p={unversionedId:"services/openvpn",id:"services/openvpn",title:"OpenVPN",description:"Overview and setup",source:"@site/docs/services/openvpn.md",sourceDirName:"services",slug:"/services/openvpn",permalink:"/product-docs/services/openvpn",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/openvpn.md",tags:[],version:"current",frontMatter:{description:"Overview and setup"},sidebar:"mainDocsSidebar",previous:{title:"Cloud Connect",permalink:"/product-docs/services/cloud-connect"},next:{title:"SMS",permalink:"/product-docs/services/sms"}},c={},s=[{value:"OpenVPN overview",id:"openvpn-overview",level:2},{value:"OpenVPN setup",id:"openvpn-setup",level:2}],l={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openvpn"},"OpenVPN"),(0,o.kt)("p",null,"emnify\u2019s communication platform hosts an OpenVPN service that allows to establish a private network between the device and any remote client location.\nThe remote client can either be on the application server itself, or on any machine that wants to remotely access the device (such as operational staff)."),(0,o.kt)("h2",{id:"openvpn-overview"},"OpenVPN overview"),(0,o.kt)("p",null,"To use the OpenVPN service the IoT device does not need any private APN, OpenVPN software or dynamic DNS resolution.\nThrough the emnify SIM, every device will get a static private IP address which can be used to identify and address the device."),(0,o.kt)("p",null,"At the same time the IoT device can send data through the private tunnel to the IP address of the remote machine."),(0,o.kt)("h2",{id:"openvpn-setup"},"OpenVPN setup"),(0,o.kt)("p",null,"In order to set up OpenVPN on your machine the following high-level steps are required."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the emnify Portal \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Device Policies"),": Set the ",(0,o.kt)("strong",{parentName:"li"},"Service Policy")," to a VPN breakout region, e.g.,\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"eu-west-1 (VPN)")),(0,o.kt)("li",{parentName:"ol"},"Portal \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Integrations")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"OpenVPN"),": download the VPN configuration file for your region and operating system"),(0,o.kt)("li",{parentName:"ol"},"Create a\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"credentials.txt"),"\xa0with your username / password or organisation ID / application token (recommended)."),(0,o.kt)("li",{parentName:"ol"},"Load the VPN configuration file and\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"credentials.txt"),"\xa0with your OpenVPN client")),(0,o.kt)("p",null,"For detailed instructions please refer to our knowledge base articles"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://support.emnify.com/hc/en-us/articles/360019625379-OpenVPN-Integration-Guide-for-MacOS"},"OpenVPN Integration MacOS")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://support.emnify.com/hc/en-us/articles/115001723273-OpenVPN-Integration-Guide-for-Windows"},"OpenVPN Integration Windows")," "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://support.emnify.com/hc/en-us/articles/115001724434-OpenVPN-Integration-Guide-for-Linux"},"OpenVPN Integration Linux"))))}u.isMDXComponent=!0}}]);