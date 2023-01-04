"use strict";(self.webpackChunkemnify_docs=self.webpackChunkemnify_docs||[]).push([[69],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(a),p=i,g=m["".concat(l,".").concat(p)]||m[p]||c[p]||o;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const o={description:"Data streamer integrations and links to step-by-step guides."},r="Available integrations",s={unversionedId:"data-streamer/available-integrations",id:"data-streamer/available-integrations",title:"Available integrations",description:"Data streamer integrations and links to step-by-step guides.",source:"@site/docs/data-streamer/available-integrations.md",sourceDirName:"data-streamer",slug:"/data-streamer/available-integrations",permalink:"/undefined/data-streamer/available-integrations",draft:!1,editUrl:"https://github.com/EMnify/product-docs/blob/main/docs/data-streamer/available-integrations.md",tags:[],version:"current",frontMatter:{description:"Data streamer integrations and links to step-by-step guides."},sidebar:"ourSidebar",previous:{title:"Using the Data Streamer",permalink:"/undefined/data-streamer/usage"},next:{title:"Events",permalink:"/undefined/events"}},l={},u=[{value:"Amazon",id:"amazon",level:2},{value:"Amazon Kinesis Data Streams",id:"amazon-kinesis-data-streams",level:3},{value:"Amazon S3",id:"amazon-s3",level:3},{value:"S3 Security Guidelines",id:"s3-security-guidelines",level:4},{value:"Amazon QuickSight",id:"amazon-quicksight",level:3},{value:"Azure",id:"azure",level:2},{value:"Azure Event Hubs",id:"azure-event-hubs",level:3},{value:"Microsoft Power BI",id:"microsoft-power-bi",level:3},{value:"Azure Time Series Insights",id:"azure-time-series-insights",level:3},{value:"Google Cloud",id:"google-cloud",level:2},{value:"Google Cloud Pub/Sub",id:"google-cloud-pubsub",level:3},{value:"Google Cloud BigQuery",id:"google-cloud-bigquery",level:3},{value:"Keen",id:"keen",level:2},{value:"Datadog",id:"datadog",level:2},{value:"Webhook",id:"webhook",level:2},{value:"Make (formerly Integromat)",id:"make-formerly-integromat",level:3},{value:"Automate.io",id:"automateio",level:3}],d={toc:u};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"available-integrations"},"Available integrations"),(0,i.kt)("h2",{id:"amazon"},"Amazon"),(0,i.kt)("h3",{id:"amazon-kinesis-data-streams"},"Amazon Kinesis Data Streams"),(0,i.kt)("p",null,"Amazon Kinesis Data Streams allows for collecting and processing large streams of event and usage data records in real time.\nApplications created on Amazon Kinesis Data Streams can run on Amazon EC2 instances.\nTypical uses are to send processed records to dashboards, generate alerts, dynamically change pricing or advertising strategies, or send data to other Amazon services."),(0,i.kt)("admonition",{title:"Step-by-step guide",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-into-aws-kinesis"},"emnify Data Streamer integration into AWS Kinesis"))),(0,i.kt)("h3",{id:"amazon-s3"},"Amazon S3"),(0,i.kt)("p",null,"Amazon S3 is an object storage service that stores the raw event and usage data as it arrives from a data stream.\nShortly after creating the stream, a CSV file containing your event or usage data records is uploaded to the S3 bucket.\nThe CSV files can then be sent to other Amazon services (e.g., Amazon QuickSight) or consumed by a third-party analytics or business intelligence tool for generating insights."),(0,i.kt)("admonition",{title:"Step-by-step guide",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-into-aws-s3"},"emnify Data Streamer Integration into AWS S3"))),(0,i.kt)("h4",{id:"s3-security-guidelines"},"S3 Security Guidelines"),(0,i.kt)("p",null,"Event data sent via data streams may include usernames, email addresses, and other data which can identify users or platform resources (depending on the event filtering applied).\nTherefore, you should treat the delivered files as containing sensitive information.\nPrecautions should be taken to ensure that the event and usage data in the destination S3 buckets are adequately secured."),(0,i.kt)("p",null,"The following steps are the minimum security requirements for storing this data in S3:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensure that the S3 bucket isn't publicly accessible. You can block public access in the \u2018Permissions\u2019 tab of the S3 bucket:"),(0,i.kt)("li",{parentName:"ol"},"Server-side encryption can be enabled for each bucket, and S3 will encrypt objects before they are saved to disk.\nDecryption performs when downloading the objects.\nYou can enable this in the \u2018Properties\u2019 tab of the S3 bucket:")),(0,i.kt)("h3",{id:"amazon-quicksight"},"Amazon QuickSight"),(0,i.kt)("p",null,"Amazon QuickSight allows you to create and publish interactive business intelligence dashboards that include machine learning-powered insights into your event and usage data.\nOnce you have configured your data stream and are storing event and usage data in Amazon S3, you can use AWS QuickSight to view and analyze them."),(0,i.kt)("admonition",{title:"Step-by-step guide",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://support.emnify.com/hc/en-us/articles/360010604820-How-to-analyze-EMnify-usage-data-and-events-in-AWS-Quicksight-"},"How to analyze emnify usage data and events in AWS QuickSight?")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Warning: This guide uses a legacy version of the emnify Portal.")))),(0,i.kt)("h2",{id:"azure"},"Azure"),(0,i.kt)("h3",{id:"azure-event-hubs"},"Azure Event Hubs"),(0,i.kt)("p",null,"Azure Event Hubs is a fully managed, real-time data ingestion service that can receive and process millions of event or usage data records per second.\nData sent to an event hub can be transformed and stored using any real-time analytics provider or batching/storage adapters, such as Microsoft Power BI or Azure Time Series Insights."),(0,i.kt)("admonition",{title:"Step-by-step guide",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-into-azure-event-hub"},"emnify Data Streamer integration into Azure Event Hub"))),(0,i.kt)("h3",{id:"microsoft-power-bi"},"Microsoft Power BI"),(0,i.kt)("p",null,"Microsoft Power BI is a unified, scalable platform for self-service and enterprise business intelligence (BI) that allows you to analyze, visualize, share, and promote your connectivity metadata insights across your organization."),(0,i.kt)("admonition",{title:"Step-by-step guide",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-power-bi"},"emnify Data Streamer integration for Power BI"))),(0,i.kt)("h3",{id:"azure-time-series-insights"},"Azure Time Series Insights"),(0,i.kt)("p",null,"Azure Time Series Insights is an analytics platform to monitor, analyze, and visualize your data.\nIt allows you to use time series data insights and interactive analytics to accelerate connectivity metadata use throughout your organization and turn your event and usage data into actionable insights."),(0,i.kt)("admonition",{title:"Step-by-step guide",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-azure-time-series-classic"},"emnify Data Streamer integration for Azure Time Series Classic"))),(0,i.kt)("h2",{id:"google-cloud"},"Google Cloud"),(0,i.kt)("h3",{id:"google-cloud-pubsub"},"Google Cloud Pub/Sub"),(0,i.kt)("p",null,"Pub/Sub is Google\u2019s messaging middleware that allows you to collect and process your event and usage data in real time.\nIt can also display and analyze data with other Google services, such as Google BigQuery."),(0,i.kt)("admonition",{title:"Step-by-step guide",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.emnify.com/integration-guides/datastreamer-integration-into-google-cloud-pubsub"},"emnify Data Streamer integration for Google Cloud Pub/Sub"))),(0,i.kt)("h3",{id:"google-cloud-bigquery"},"Google Cloud BigQuery"),(0,i.kt)("p",null,"Google Cloud BigQuery is a data warehouse that enables you to query your connectivity metadata in real time to gain insights and predict business outcomes."),(0,i.kt)("admonition",{title:"Step-by-step guide",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.emnify.com/integration-guides/datastreamer-integration-google-bigquery"},"emnify Data Streamer integration for Google BigQuery"))),(0,i.kt)("h2",{id:"keen"},"Keen"),(0,i.kt)("p",null,"Keen is a managed event streaming platform that enables you to collect, store, query, and present real-time connectivity metadata without writing any code.\nWith built-in data analytics, you can build queries and display the metrics via API to troubleshoot your IoT solution."),(0,i.kt)("admonition",{title:"Step-by-step guide",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-keen-io"},"emnify Data Streamer integration for Keen.io"))),(0,i.kt)("h2",{id:"datadog"},"Datadog"),(0,i.kt)("p",null,"Datadog is a real-time monitoring and analytics service for cloud-scale applications, servers, databases, and services.\nIn conjunction with the emnify Data Streamer, it allows you to collect and analyze usage metrics for your endpoints and SIM cards.\nYou can also create dashboards and trigger alerts on specific events or situations."),(0,i.kt)("admonition",{title:"Step-by-step guide",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.emnify.com/integration-guides/emnify-datastreamer-integration-for-datadog"},"emnify Data Streamer integration for Datadog"))),(0,i.kt)("h2",{id:"webhook"},"Webhook"),(0,i.kt)("p",null,"The data streamer may also send usage and event data in JSON format to a configurable, user-specified webhook URL.\nIn this case, users provide an application that consumes HTTP POST requests sent from the emnify system."),(0,i.kt)("p",null,"This is the most flexible method of processing a data stream. It allows any custom implementation of analytics, reporting, or a pipeline of tools to process usage and event data."),(0,i.kt)("p",null,"To use the Webhook data stream, you must provide a web service that listens for messages from the emnify Data Streamer."),(0,i.kt)("p",null,"The emnify system will send HTTP POST requests with JSON data payloads when event or usage data records occur."),(0,i.kt)("p",null,"When using the emnify Webhook in bulk mode, each HTTP POST will include a JSON collection instead of an individual event or usage data record.\nThe HTTP POST requests are sent at intervals and should be used if the receiving system needs to process multiple events in bulk instead of individual events as they occur."),(0,i.kt)("h3",{id:"make-formerly-integromat"},"Make (formerly Integromat)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.make.com/en"},"Make")," (formerly Integromat) is a low-code integration platform that allows you to visualize, design, and automate your workflows based on your connectivity metadata."),(0,i.kt)("admonition",{title:"Step-by-step guide",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.emnify.com/integration-guides/emnify-mcds-integromat-integration"},"Automate Business Processes with Multi-Cloud Data Streamer and Make")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Warning: This guide still needs to be updated to reflect the new naming.")))),(0,i.kt)("h3",{id:"automateio"},"Automate.io"),(0,i.kt)("p",null,"Automate.io is a no-code integration platform that allows you to visualize, design, and automate your workflows based on your connectivity metadata."),(0,i.kt)("admonition",{title:"Step-by-step guide",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.emnify.com/integration-guides/how-to-receice-email-notifications-using-automate.io"},"How to receive email notifications using Automate.io"))))}m.isMDXComponent=!0}}]);