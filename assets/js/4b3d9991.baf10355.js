"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),f=i,d=p["".concat(u,".").concat(f)]||p[f]||c[f]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},83:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(7462),i=(n(7294),n(3905));const a={},o="Integration guides",l={unversionedId:"integration-guides/index",id:"integration-guides/index",title:"Integration guides",description:"emnify services can be integrated with your existing infrastructure.",source:"@site/docs/integration-guides/index.md",sourceDirName:"integration-guides",slug:"/integration-guides/",permalink:"/integration-guides/",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/integration-guides/index.md",tags:[],version:"current",lastUpdatedAt:1676367938,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{},sidebar:"mainDocsSidebar",previous:{title:"Troubleshooting",permalink:"/sso/troubleshooting"},next:{title:"Glossary",permalink:"/glossary"}},u={},m=[{value:"Amazon Web Services",id:"amazon-web-services",level:2},{value:"Microsoft Azure",id:"microsoft-azure",level:2},{value:"Google Cloud",id:"google-cloud",level:2},{value:"Webhooks",id:"webhooks",level:2},{value:"Other integrations",id:"other-integrations",level:2}],s={toc:m};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integration-guides"},"Integration guides"),(0,i.kt)("p",null,"emnify services can be integrated with your existing infrastructure.\nHere are some step-by-step integration guides to help you along the process."),(0,i.kt)("h2",{id:"amazon-web-services"},"Amazon Web Services"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-and-aws-iot-core-integration"},"emnify and AWS IoT Core integration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/emnify-datastreamer-integration-into-aws-kinesis"},"emnify Data Streamer integration into AWS Kinesis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/emnify-datastreamer-integration-into-aws-s3"},"emnify Data Streamer integration into AWS S3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/emnify-cloud-connect-into-aws-transit-gateway"},"emnify Cloud Connect integration with AWS Transit Gateway"))),(0,i.kt)("h2",{id:"microsoft-azure"},"Microsoft Azure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/emnify-datastreamer-integration-into-azure-event-hub"},"emnify Data Streamer integration into Azure Event Hub")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/emnify-and-azure-iot-hub-integration"},"emnify and Azure IoT Hub integration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/emnify-datastreamer-integration-for-azure-time-series-classic"},"emnify Data Streamer integration for Azure Time Series Classic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/emnify-cloud-connect-azure-integration"},"emnify Cloud Connect integration into Azure Virtual Network Gateway")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/emnify-datastreamer-integration-for-power-bi"},"emnify Data Streamer integration for Power BI"))),(0,i.kt)("h2",{id:"google-cloud"},"Google Cloud"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/datastreamer-integration-google-bigquery"},"emnify DataStreamer integration for Google BigQuery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/emnify-and-google-cloud-iot-core-integration"},"emnify and Google Cloud IoT Core integration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/emnify-cloudconnect-integration-to-google-cloud-platform"},"emnify Cloud Connect Integration to Google Cloud Platform")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/datastreamer-integration-into-google-cloud-pubsub"},"emnify Data Streamer integration for Google Cloud Pub/Sub"))),(0,i.kt)("h2",{id:"webhooks"},"Webhooks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/emnify-mcds-integromat-integration"},"Automate Business Processes with Multi Cloud Data Streamer and Integromat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/how-to-receice-email-notifications-using-automate.io"},"How to receive email notifications using Automate.io"))),(0,i.kt)("h2",{id:"other-integrations"},"Other integrations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/emnify-datastreamer-integration-for-datadog"},"emnify Data Streamer integration for Datadog")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/how-to-setup-an-ipsec-using-emnify-cloudconnect"},"How to setup an IPsec using emnify Cloud Connect")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-keen-io"},"emnify Data Streamer integration for Keen.io")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emnify.com/en/developer-hub/ussd-integration-guide"},"USSD integration guide"))))}p.isMDXComponent=!0}}]);