"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={description:"Step-by-step guide for installing and using the SDK"},i="Getting started with the emnify Python SDK",p={unversionedId:"sdks/python/getting-started",id:"sdks/python/getting-started",title:"Getting started with the emnify Python SDK",description:"Step-by-step guide for installing and using the SDK",source:"@site/docs/sdks/python/getting-started.md",sourceDirName:"sdks/python",slug:"/sdks/python/getting-started",permalink:"/product-docs/sdks/python/getting-started",draft:!1,editUrl:"https://github.com/EMnify/product-docs/blob/main/docs/sdks/python/getting-started.md",tags:[],version:"current",frontMatter:{description:"Step-by-step guide for installing and using the SDK"},sidebar:"mainDocsSidebar",previous:{title:"Python",permalink:"/product-docs/sdks/python"},next:{title:"Concepts",permalink:"/product-docs/sdks/python/concepts"}},s={},l=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:3},{value:"From source code",id:"from-source-code",level:3},{value:"Using PyPI",id:"using-pypi",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Create an application token",id:"create-an-application-token",level:3},{value:"Using the SDK",id:"using-the-sdk",level:3},{value:"Explore more",id:"explore-more",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-the-emnify-python-sdk"},"Getting started with the emnify Python SDK"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python (",(0,o.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/release/python-360/"},"version 3.6.0")," or higher)")),(0,o.kt)("h3",{id:"from-source-code"},"From source code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/emnify/emnify-sdk-python.git\ncd emnify-sdk-python\npython setup.py install\n")),(0,o.kt)("h3",{id:"using-pypi"},"Using PyPI"),(0,o.kt)("p",null,"The emnify Python SDK is also available on ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/emnify-sdk/"},"PyPI as ",(0,o.kt)("inlineCode",{parentName:"a"},"emnify-sdk")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install emnify-sdk\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"create-an-application-token"},"Create an application token"),(0,o.kt)("p",null,"To use the Python SDK, you need to create an application token.\nYou can do this via the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.emnify.com/developer-blog/how-to-use-an-application-token-for-api-authentication"},"emnify REST API"),"."),(0,o.kt)("p",null,"Once created, you'll apply it to initiate the SDK."),(0,o.kt)("h3",{id:"using-the-sdk"},"Using the SDK"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"TOKEN = '<PASTE YOUR APPLICATION TOKEN HERE>'\n\n# Import the package\nfrom emnify import EMnify\n\n# Initiate the SDK instance using your application token\nemnify = EMnify(TOKEN)\n\n# Execute a command against the desired API\ndevices = emnify.devices.get_devices_list()\n\n# Show all the devices\nprint([device for device in devices])\n")),(0,o.kt)("h2",{id:"explore-more"},"Explore more"),(0,o.kt)("p",null,"Now that you have the SDK configured, it's time to learn what you can do with it."),(0,o.kt)("p",null,"If you're new to IoT connectivity and emnify, start by learning the ",(0,o.kt)("a",{parentName:"p",href:"concepts"},"common terminology and concepts"),". "),(0,o.kt)("p",null,"Once you're comfortable with these ",(0,o.kt)("a",{parentName:"p",href:"concepts"},"concepts"),", you can explore some use cases that show what the SDK is capable of based on a few ",(0,o.kt)("a",{parentName:"p",href:"examples"},"Examples"),". "),(0,o.kt)("p",null,"Also, see the ",(0,o.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/index.html"},(0,o.kt)("em",{parentName:"a"},"emnify System Documentation"))," and our ",(0,o.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html"},"OpenAPI Specification"),"."))}d.isMDXComponent=!0}}]);