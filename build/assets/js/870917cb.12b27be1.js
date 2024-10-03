"use strict";(self.webpackChunkdynamo=self.webpackChunkdynamo||[]).push([[698],{1620:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=o(4848),s=o(8453);const i={},t="Dynamo WorkFlow Documentation",a={id:"dynamo-framework/Dynamo WorkFlow Documentation",title:"Dynamo WorkFlow Documentation",description:"---",source:"@site/docs/dynamo-framework/Dynamo WorkFlow Documentation.md",sourceDirName:"dynamo-framework",slug:"/dynamo-framework/Dynamo WorkFlow Documentation",permalink:"/dynamo-docs/docs/dynamo-framework/Dynamo WorkFlow Documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dynamo-framework/Dynamo WorkFlow Documentation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamo Utils Module Documentation",permalink:"/dynamo-docs/docs/dynamo-framework/Dynamo Utils Module Documentation"},next:{title:"User Management with AWS Cognito - Spring Boot Documentation",permalink:"/dynamo-docs/docs/dynamo-framework/User Management with AWS Cognito - Spring Boot Documentation"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Relevant Dependencies, Plugins, and Properties",id:"relevant-dependencies-plugins-and-properties",level:3},{value:"Module: dynamo-workflow",id:"module-dynamo-workflow",level:2},{value:"Module Introduction",id:"module-introduction",level:3},{value:"Vocabulary/Terminology",id:"vocabularyterminology",level:3},{value:"Technologies/3rd Party Libraries",id:"technologies3rd-party-libraries",level:3},{value:"Sample Use Cases Implemented/That Could Be Implemented",id:"sample-use-cases-implementedthat-could-be-implemented",level:3},{value:"Getting Started",id:"getting-started",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"dynamo-workflow-documentation",children:"Dynamo WorkFlow Documentation"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"This document provides an overview of the relevant dependencies, plugins, and properties required for building a custom application using the Dynamo workflow.\nIt includes a detailed structure for each Dynamo module, terminology used, technologies integrated, sample use cases, and guidelines to get started."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Java 17.x"}),"\n",(0,r.jsx)(n.li,{children:"Maven 3.8.x"}),"\n",(0,r.jsx)(n.li,{children:"PostgreSQL 12.x"}),"\n",(0,r.jsx)(n.li,{children:"Dynamo Utils"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"relevant-dependencies-plugins-and-properties",children:"Relevant Dependencies, Plugins, and Properties"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"org.camunda.bpm.springboot:camunda-bpm-spring-boot-starter-webapp:7.21.0"}),"\nProvides integration between Camunda BPM and Spring Boot, allowing you to manage and deploy BPMN processes within a Spring Boot application."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"spring-boot-starter-data-jpa"}),"\nA utility library specific to the Dynamo platform, excluding the Spring Boot Web starter to keep the module lightweight."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"org.postgresql"}),"\nPostgreSQL JDBC driver for connecting and interacting with PostgreSQL databases."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"io.hypersistence:hypersistence-utils-hibernate-63:3.7.4"}),"\nA utility library that enhances Hibernate capabilities, particularly for JPA and Hibernate users."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"com.fasterxml.jackson.core"}),"\nCore Jackson library for processing JSON in Java, allowing for JSON serialization and deserialization."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"com.fasterxml.jackson.module"}),"\nAdds support for Jakarta XML Binding annotations, enabling the seamless integration of XML data with Jackson"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"module-dynamo-workflow",children:"Module: dynamo-workflow"}),"\n",(0,r.jsx)(n.h3,{id:"module-introduction",children:"Module Introduction"}),"\n",(0,r.jsx)(n.p,{children:"The Dynamo workflow is designed to handle specific tasks in the overall process management system."}),"\n",(0,r.jsx)(n.h3,{id:"vocabularyterminology",children:"Vocabulary/Terminology"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DAO (Data Access Object)"}),": Objects responsible for accessing and managing data from the database."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DTO (Data Transfer Object)"}),": Objects that carry data between processes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Entity"}),": An object representing a domain model, usually persisted in a database."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Service"}),": A layer responsible for business logic and operations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Task Manager"}),": Component responsible for managing tasks within a process workflow"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"technologies3rd-party-libraries",children:"Technologies/3rd Party Libraries"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Camunda BPM"}),": For workflow and decision automation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Spring Boot"}),": Application framework for building the service layer."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hibernate"}),": ORM tool for database interactions."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sample-use-cases-implementedthat-could-be-implemented",children:"Sample Use Cases Implemented/That Could Be Implemented"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CamundaProcessManager"}),": Provides common functionality using Camunda."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Entity Generator"}),": The service parse and save the JSON and save the JSON in ProcessDomainEntity"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ProcessService"}),": Provides concrete methods and abstract methods ."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Clone the repository"}),":","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:Breezeware-OS/dynamo.git\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Navigate to the module directory"}),":","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd backend/dynamo-sdk-lib/dynamo-workflow\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Build the module"}),":","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mvn clean install\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>a});var r=o(6540);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);