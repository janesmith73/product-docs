"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6981],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>y});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),d=c(r),f=a,y=d["".concat(s,".").concat(f)]||d[f]||m[f]||o;return r?n.createElement(y,i(i({ref:e},l),{},{components:r})):n.createElement(y,i({ref:e},l))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[d]="string"==typeof t?t:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1397:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={description:"Must-knows for working with the Python SDK"},i="Concepts",p={unversionedId:"sdks/python/concepts",id:"sdks/python/concepts",title:"Concepts",description:"Must-knows for working with the Python SDK",source:"@site/docs/sdks/python/concepts.md",sourceDirName:"sdks/python",slug:"/sdks/python/concepts",permalink:"/product-docs/sdks/python/concepts",draft:!1,editUrl:"https://github.com/EMnify/product-docs/blob/main/docs/sdks/python/concepts.md",tags:[],version:"current",frontMatter:{description:"Must-knows for working with the Python SDK"},sidebar:"mainDocsSidebar",previous:{title:"Getting started with the emnify Python SDK",permalink:"/product-docs/sdks/python/getting-started"},next:{title:"Examples",permalink:"/product-docs/sdks/python/examples"}},s={},c=[{value:"SDK Glossary",id:"sdk-glossary",level:2}],l={toc:c};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concepts"},"Concepts"),(0,a.kt)("h2",{id:"sdk-glossary"},"SDK Glossary"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Device"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any physical device supplied with a SIM that obtains connectivity. It's important not to mix up the terms 'Device' and 'Endpoint.' A device is a superset of the endpoint and SIM acting as a whole. ",(0,a.kt)("a",{parentName:"td",href:"https://support.emnify.com/hc/en-us/sections/115000981005-Device-Configuration"},"Learn more about devices"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Device Status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Primary way to control connectivity. It can be either ",(0,a.kt)("strong",{parentName:"td"},"Enabled")," or ",(0,a.kt)("strong",{parentName:"td"},"Disabled"),". When ",(0,a.kt)("strong",{parentName:"td"},"Enabled"),", a device that has a SIM assigned can go online. On the other hand, when ",(0,a.kt)("strong",{parentName:"td"},"Disabled"),", the device doesn't get any service.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SIM"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Represents a physical or eSIM issued by emnify. ",(0,a.kt)("a",{parentName:"td",href:"https://support.emnify.com/hc/en-us/sections/360000642374-SIM-cards"},"Learn more about SIM cards"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SIM Status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the SIM's phase in the ",(0,a.kt)("a",{parentName:"td",href:"https://www.emnify.com/blog/sim-lifecycle-management"},"SIM lifecycle"),". When using the SDK, avoid changing the SIM status directly. Instead, change it using the device status.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Tariff Profile"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Controls where and how your devices have coverage. Referred to as ",(0,a.kt)("strong",{parentName:"td"},"Coverage Policy")," in the Enterprise Portal. ",(0,a.kt)("a",{parentName:"td",href:"https://cdn.emnify.net/api/doc/tariff-profile.html"},"Learn more about tariff profiles"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Service Profile"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Defines available services (e.g., SMS, 4G, etc.) and traffic limits for a device. Referred to as ",(0,a.kt)("strong",{parentName:"td"},"Service Policy")," in the Enterprise Portal. ",(0,a.kt)("a",{parentName:"td",href:"https://cdn.emnify.net/api/doc/service-profile.html"},"Learn more about service profiles"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Blacklist Operators"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Method that allows you to restrict device connectivity to a specific operator or group of operators.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Operator"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Underlying mobile network operator (MNO) used to provide connectivity. Explore operator coverage by country and region on ",(0,a.kt)("a",{parentName:"td",href:"https://www.emnify.com/pricing"},"our pricing page"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SMS"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../../services/sms"},"Learn more about SMS"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Application Token"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Authenticates your identity when using the emnify SDK and API. ",(0,a.kt)("a",{parentName:"td",href:"https://www.emnify.com/developer-blog/how-to-use-an-application-token-for-api-authentication"},"Learn how to generate an application token"),".")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"More terminology and definitions are available in the ",(0,a.kt)("a",{parentName:"p",href:"glossary"},"Developer Glossary"),". ")))}d.isMDXComponent=!0}}]);