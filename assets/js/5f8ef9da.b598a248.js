"use strict";(self.webpackChunkdynamo=self.webpackChunkdynamo||[]).push([[913],{7517:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var s=i(4848),r=i(8453);const t={},o="Dynamo Auth Module",a={id:"dynamo-framework/Dynamo Auth Module",title:"Dynamo Auth Module",description:"Overview",source:"@site/docs/dynamo-framework/Dynamo Auth Module.md",sourceDirName:"dynamo-framework",slug:"/dynamo-framework/Dynamo Auth Module",permalink:"/dynamo-docs/docs/dynamo-framework/Dynamo Auth Module",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dynamo-framework/Dynamo Auth Module.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamo AI Module Documentation",permalink:"/dynamo-docs/docs/dynamo-framework/Dynamo AI Module Documentation"},next:{title:"Dynamo Docs with Spring Boot using CommonMark",permalink:"/dynamo-docs/docs/dynamo-framework/Dynamo Docs with Spring Boot using CommonMark"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Relevant Dependencies, Plugins, and Properties",id:"relevant-dependencies-plugins-and-properties",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Properties",id:"properties",level:3},{value:"Configuration",id:"configuration",level:2},{value:"CORS Configuration",id:"cors-configuration",level:3},{value:"Spring Security Configuration",id:"spring-security-configuration",level:3},{value:"OAuth Authentication and Password Reset Services",id:"oauth-authentication-and-password-reset-services",level:2},{value:"Key Features:",id:"key-features",level:3},{value:"Authentication Service",id:"authentication-service",level:3},{value:"Methods:",id:"methods",level:3},{value:"Summary",id:"summary",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"dynamo-auth-module",children:"Dynamo Auth Module"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Dynamo Auth Module"})," is responsible for handling authentication and authorization within the Dynamo platform. It provides security configurations, CORS settings, and JWT token processing to ensure secure access to the application. The module integrates with OAuth2 and JWT standards to manage access control and authentication. Additionally, it supports OAuth-based authentication services and password reset functionalities, integrating with FusionAuth and Active Directory."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Java 17.x"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Maven 3.8.x"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Spring Boot 3.x"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"OAuth2 and JWT compatible identity provider"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"relevant-dependencies-plugins-and-properties",children:"Relevant Dependencies, Plugins, and Properties"}),"\n",(0,s.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"spring-boot-starter-security"})}),": Spring Security for authentication and authorization."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"spring-boot-starter-web"})}),": Spring Web for building web applications."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"spring-boot-starter-oauth2-resource-server"})}),": OAuth2 resource server support."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"nimbus-jose-jwt"})}),": JWT processing library."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"plugins",children:"Plugins"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"apt-maven-plugin"})}),": Annotation processing."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"spring.security.oauth2.resourceserver.jwt.jwk-set-uri"})}),": URI to retrieve the JSON Web Key Set (JWKS)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"dynamo.auth.cors.allowed-origins"})}),": List of allowed origins for CORS."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"dynamo.auth.cors.allowed-methods"})}),": List of allowed HTTP methods for CORS."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"dynamo.auth.cors.allowed-headers"})}),": List of allowed headers for CORS."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"dynamo.auth.cors.exposed-headers"})}),": List of headers exposed to the client."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.h3,{id:"cors-configuration",children:"CORS Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"DynamoHttpConfiguration"})," class is responsible for setting up the CORS configuration for the application. It allows you to specify the allowed origins, methods, and headers."]}),"\n",(0,s.jsx)(n.h3,{id:"spring-security-configuration",children:"Spring Security Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Dynamo Auth Module"})," integrates with Spring Security to provide comprehensive authentication and authorization mechanisms. This includes setting up security filters, configuring JWT token processing, and handling OAuth2 authentication flows."]}),"\n",(0,s.jsx)(n.p,{children:"The security configuration involves:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JWT Token Processing"}),": Ensuring secure token validation and authentication using JWT."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"OAuth2 Resource Server Setup"}),": Configuring the application as an OAuth2 resource server to handle token validation and access control."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Security Filters"}),": Applying security filters to enforce authentication and authorization rules across the application."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oauth-authentication-and-password-reset-services",children:"OAuth Authentication and Password Reset Services"}),"\n",(0,s.jsx)(n.p,{children:"The module also provides an OAuth-based authentication service along with a password reset service. These services support integration with FusionAuth and Active Directory, allowing for flexible and secure user management."}),"\n",(0,s.jsx)(n.h3,{id:"key-features",children:"Key Features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"OAuth Authentication"}),": Authenticate users using OAuth with multiple flows and scopes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Password Reset"}),": Support for generating and validating OTP for password resets."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Token Management"}),": Handling refresh tokens and secure storage in cookies."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Logout"}),": A simple method to handle user logout by clearing refresh tokens."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Support for FusionAuth and Active Directory"}),": Easily configurable for both FusionAuth and Active Directory."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"authentication-service",children:"Authentication Service"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"OAuthAuthenticationService"})," interface provides methods to authenticate users and manage OAuth tokens."]}),"\n",(0,s.jsx)(n.h3,{id:"methods",children:"Methods:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"authenticateUser(loginId, password)"})}),": Authenticate a user with login ID and password."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"authenticateUser(loginId, password, scope, clientId)"})}),": Authenticate a user with additional OAuth scope and client ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"authenticateUserAndStoreTokenInCookie(httpServletResponse, loginId, password)"})}),": Authenticate a user and store the refresh token in a cookie."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"authenticateUserAndStoreTokenInCookie(httpServletResponse, loginId, password, scope, clientId)"})}),": Authenticate a user with additional OAuth scope and client ID, storing the refresh token in a cookie."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rotateRefreshToken(refreshToken)"})}),": Refresh the OAuth access token using a refresh token."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rotateRefreshTokenAndStoreTokenInCookie(httpServletResponse, refreshToken)"})}),": Refresh the OAuth access token and store the refresh token in a cookie."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"logoutUser(httpServletResponse)"})}),": Logout the user by clearing the refresh token from cookies."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These services are designed to work seamlessly with both FusionAuth and Active Directory, providing robust and secure authentication mechanisms for the Dynamo platform."}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Dynamo Auth Module"})," offers a comprehensive solution for managing authentication and authorization in the Dynamo platform. By integrating Spring Security, OAuth2, JWT, and supporting FusionAuth and Active Directory, it ensures a secure and flexible environment for user access management."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);