# Overview

## Getting Started

The **Dynamo Framework** is a comprehensive, modular framework that simplifies the development of large-scale enterprise applications. Built using Java and Spring Boot, Dynamo integrates a range of essential libraries for different functionalities such as AI integration, authentication, AWS services, batch processing, CSV handling, and more. Each library is designed to serve a distinct purpose, offering flexibility and scalability to the application development process.

### Libraries Included

* **dynamo-ai**: Leverages OpenAI and Spring AI for intelligent capabilities.
* **dynamo-auth**: Supports FusionAuth and Active Directory for secure authentication management.
* **dynamo-aws**: Simplifies AWS services integration like SNS, S3, DynamoDB.
* **dynamo-batch**: Manages batch operations with ease.
* **dynamo-csv**: Facilitates CSV parsing and generation using OpenCSV.
* **dynamo-form-builder**: Uses Jackson to easily manage form data.
* **dynamo-generics-crud**: Provides a CRUD operation layer with JPA and QueryDSL.
* **dynamo-iac**: Infrastructure as Code (IaC) integration with AWS CDK.
* **dynamo-image**: Image processing via ImgScalr.
* **dynamo-logging**: Centralized logging with Log4j2.
* **dynamo-push-notification**: Manages to push notifications via AWS SNS.
* **dynamo-pages**: Uses CommonMark for dynamic page generation and markdown handling.
* **dynamo-sdk-lib-bom**: Ensures consistent version management for all functional libraries.
* **dynamo-user-management**: Provides user management capabilities using AWS Cognito.
* **dynamo-utils**: Utility library including Commons Text, Hibernate Validator, and custom exceptions.
* **dynamo-workflow**: Integrates Camunda BPM for workflow management with Spring Boot.

## Using Dynamo

### Prerequisites

* **Java**: 17+
* **Maven**: 3.x+
* **Spring Boot**: 3.2.x
* **AWS**: For AWS-related modules
* **PostgreSQL**: (Optional) For persistence modules

### Dependencies

To use any of the Dynamo libraries, include them in your `pom.xml` as follows:

```xml
<dependency>
    <groupId>net.breezeware.dynamo</groupId>
    <artifactId>dynamo-{module}</artifactId>
    <version>{version}</version>
</dependency>
Replace {module} with the desired module name, such as dynamo-ai, dynamo-aws, etc and version.

Example:

<dependency>
    <groupId>net.breezeware.dynamo</groupId>
    <artifactId>dynamo-auth</artifactId>
    <version>1.44.0</version>
</dependency>
```


### Configuration

Each module may require specific configurations. Please refer to the individual module documentation for detailed setup instructions.

## Building From Source

To build Dynamo from the source, follow these steps:

1. **Clone the Repository:**

   ```javascript
   git clone https://github.com/your-repo/dynamo-framework.gi
   ```
2. **Build the Project Using Maven:**

   ```javascript
   mvn clean install
   ```
3. **Include Specific Modules in Your Project:**

   Add the required library modules to your project's `pom.xml` as shown in the [Dependencies](#maven-dependencies) section.

   \

## Versions

Below is the version history of the Dynamo Framework Library:

| Version | Changes |
|----|----|
| v1.44.0 | - Added Push Notification Support. |
| v1.43.0 | - Updated Spring AI version (1.0.0-SNAPSHOT). |
| v1.42.0 | - Added AI Module using Spring AI. |
| v1.40.0 | - Added Generative AI Module. |
| v1.39.0 | - Updated javax packages to Jakarta.                                                                                                                 - Replaced springdoc-openapi-ui with springdoc-openapi-starter-webmvc-ui. |
| v1.38.0-SNAPSHOT | - Updated Parent version (dynamo-parent-lib).                                                                                                 - Removed deprecated WebSecurityConfigurerAdapter. |
| v1.36.0 | - Added Dynamo Docs Module for creating, updating, retrieving, deleting, uploading, and downloading Markdown (MD) docs using the CommonMark library. |
| v1.35.0 | - Enabled dynamic creation and management of tables for form submissions.                                     - Integrated seamlessly with Form Builder service.                                                                                         - Updated the Response List view layout. |
| v1.34.0 | - Updated Form Builder service for generating secure publishable links.                                                 - Added Form Invitation entity and service to manage form invitations.                                                  - Updated Response list. |
| v1.33.0 | - Updated Form Builder service for generating publishable links.                                                              - Added Form Response entity and service to manage form responses. |
| v1.32.2 | - Updated Parent version (dynamo-parent-lib). |
| v1.32.1 | - Refactored Image Compress Module using ImgScalr. |
| v1.32.0 | - Added Image Compress Module using ImgScalr. |
| v1.31.0 | - Added Bean Utils for representing a bean with only the specified fields.                                             - Added Valid UUIDValidator annotation for UUID validation. |
| v1.30.0 | - Added CSV Read Service method using OpenCSV in Dynamo CSV module. |
| v1.29.0 | - Added Generic Service methods to handle bulk deletion. |
| v1.28.0 | - Migrated from Camunda 8 to Camunda 7 in the Dynamo Workflow module.                                      - Updated naming convention for Form module service. |
| v1.27.0 | - Added Workflow Support using Camunda. |
| v1.26.1 | - Added EnableGlobalMethodSecurity in Web Security Config. |
| v1.26.0 | - Added retrieval of users by roles and groups in the User Management Module. |
| v1.25.0 | - Added Form Builder Support. |
| v1.24.0 | - Added User Management Module for managing user database and AWS Cognito.                          - Added retrieval of a list of entities with/without sorting in Generic Services. |
| v1.23.0 | - Added common HTTP security configuration in Dynamo Auth.                                                                - Updated Dynamo Auth module package name.                                                                                              - Updated dynamo-sdk-bom to dynamo-sdk-lib-bom. |
| v1.20.1 | - Refactored AWS SES mail service. |
| v1.20.0 | - Added get email template in Dynamo AWS SES.                                                                                            - Added MapStruct dependency. |
| v1.19.0 | - Added NoSuchElementException and IllegalArgumentException in DynamoExceptionHandler.  - Added ValidationExceptionUtils for field violations.                                                                                    - Added dynamo-generics-crud. |
| v1.18.0 | - Refactored Dynamo exception and exception handler.                                                                                - Added Maven Compiler Plugin with MapStruct. |
| v1.17.2 | - Refactored Dynamo Auth. |
| v1.17.1 | - Added email template with BCC address. |
| v1.17.0 | - Refactored Dynamo Auth. |
| v1.16.2 | - Refactored reset password workflow in Dynamo Auth.                                                                              - Added profile for Azure Active Directory.                                                                                                        - Added profile for SMTP email flow. |
| v1.16.1 | - Refactored AWS SES send mail to support HTML formatted email. |
| v1.16.0 | - Added support for Azure Active Directory. |
| v1.15.2 | - Refactored DynamoDB test method. |
| v1.15.1 | - Refactored reset password workflow in Dynamo Auth to send templated email instead of SMTP email. |
| v1.15.0 | - Added support for DynamoDB using AWS SDK v2.0. |
|  \n  |    |

## Notes

* **Supported Version:** We currently support **v1.44.0** only.

## License

Dynamo is an open-source project distributed under the Apache License 2.0. The same licensing is applied to most of the framework’s libraries.


