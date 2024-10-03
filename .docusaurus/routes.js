import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/dynamo-docs/markdown-page',
    component: ComponentCreator('/dynamo-docs/markdown-page', '47d'),
    exact: true
  },
  {
    path: '/dynamo-docs/search',
    component: ComponentCreator('/dynamo-docs/search', 'a53'),
    exact: true
  },
  {
    path: '/dynamo-docs/docs',
    component: ComponentCreator('/dynamo-docs/docs', '506'),
    routes: [
      {
        path: '/dynamo-docs/docs',
        component: ComponentCreator('/dynamo-docs/docs', '4c0'),
        routes: [
          {
            path: '/dynamo-docs/docs',
            component: ComponentCreator('/dynamo-docs/docs', 'dcc'),
            routes: [
              {
                path: '/dynamo-docs/docs/category/dynamo-framework',
                component: ComponentCreator('/dynamo-docs/docs/category/dynamo-framework', '7b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs/docs/category/dynamo-templates',
                component: ComponentCreator('/dynamo-docs/docs/category/dynamo-templates', '856'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs/docs/dynamo-framework/Dynamo AI Module Documentation',
                component: ComponentCreator('/dynamo-docs/docs/dynamo-framework/Dynamo AI Module Documentation', 'beb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs/docs/dynamo-framework/Dynamo Auth Module',
                component: ComponentCreator('/dynamo-docs/docs/dynamo-framework/Dynamo Auth Module', '8fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs/docs/dynamo-framework/Dynamo Docs with Spring Boot using CommonMark',
                component: ComponentCreator('/dynamo-docs/docs/dynamo-framework/Dynamo Docs with Spring Boot using CommonMark', 'd64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs/docs/dynamo-framework/Dynamo Form Builder Documentation',
                component: ComponentCreator('/dynamo-docs/docs/dynamo-framework/Dynamo Form Builder Documentation', '7ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs/docs/dynamo-framework/Dynamo Generics CRUD Module Documentation (1)',
                component: ComponentCreator('/dynamo-docs/docs/dynamo-framework/Dynamo Generics CRUD Module Documentation (1)', 'e49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs/docs/dynamo-framework/Dynamo Image_ Image Size Conversion Using Imgscalr',
                component: ComponentCreator('/dynamo-docs/docs/dynamo-framework/Dynamo Image_ Image Size Conversion Using Imgscalr', '6b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs/docs/dynamo-framework/Dynamo Utils Module Documentation',
                component: ComponentCreator('/dynamo-docs/docs/dynamo-framework/Dynamo Utils Module Documentation', '47b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs/docs/dynamo-framework/Dynamo WorkFlow Documentation',
                component: ComponentCreator('/dynamo-docs/docs/dynamo-framework/Dynamo WorkFlow Documentation', '658'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs/docs/dynamo-framework/User Management with AWS Cognito - Spring Boot Documentation',
                component: ComponentCreator('/dynamo-docs/docs/dynamo-framework/User Management with AWS Cognito - Spring Boot Documentation', 'ca3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs/docs/dynamo-templates/Dynamo Forms Template Setup Guide',
                component: ComponentCreator('/dynamo-docs/docs/dynamo-templates/Dynamo Forms Template Setup Guide', '060'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs/docs/dynamo-templates/Dynamo Pages Template Setup Guide',
                component: ComponentCreator('/dynamo-docs/docs/dynamo-templates/Dynamo Pages Template Setup Guide', 'ed6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs/docs/intro',
                component: ComponentCreator('/dynamo-docs/docs/intro', '9c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/dynamo-docs/',
    component: ComponentCreator('/dynamo-docs/', '1a1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
