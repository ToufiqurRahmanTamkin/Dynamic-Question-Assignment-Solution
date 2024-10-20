# Dynamic Question Assignment System

## Overview

This project implements a dynamic question rotation system that assigns questions to users based on their region and a configurable cycle duration. It's designed to handle a large number of daily active users and can scale to support millions of global users.

## Task Requirements

### Design & Implementation

We have built a question rotation system with an efficient architecture to solve the problem of dynamically assigning region-specific questions to users on a cyclical basis. The system is designed to be scalable, flexible, and easily maintainable.

#### Core Components:

1. **Question Service**: Manages the question database and provides APIs for question retrieval.
2. **User Service**: Manages user information, including their region.
3. **Assignment Service**: Handles the logic for assigning questions based on region and cycle.
4. **API Gateway**: Provides a single entry point for client applications.
5. **Database**: Stores questions, user information, and assignment history.
6. **Cache**: Improves performance by caching frequently accessed data.

#### Architecture:

The application follows a Model-View-Controller (MVC) architecture with additional Service and Config layers:

- **Models**: Define the data structures for questions and assignments.
- **Controllers**: Handle HTTP requests and responses.
- **Services**: Contain the core business logic for question assignment.
- **Config**: Manage configuration for database and Redis connections.
- **Routes**: Define the API endpoints.

#### Implementation Details:

- Built using Node.js and Express for high performance and scalability.
- MongoDB is used for data persistence, allowing for flexible document storage and easy scaling.
- Redis is prepared for future implementation to cache frequently accessed data.
- The question assignment logic is encapsulated in a service, allowing for easy modifications and extensions.
- The cycle duration is configurable, defaulting to 7 days but can be easily changed.

### Strategy and Rationale

Our strategy focused on creating a system that is both efficient and flexible:

1. **Separation of Concerns**: By using an MVC architecture with additional layers, we've made the system modular and easy to maintain and extend.

2. **Scalability**: The use of Node.js and MongoDB allows for horizontal scaling to handle increased load.

3. **Flexibility**: The configurable cycle duration and region-based question assignment allow for easy adaptation to different business requirements.

4. **Performance**: By preparing for Redis integration, we've laid the groundwork for high-performance caching to reduce database load.

5. **API-First Design**: The system is built around a clear API, making it easy to integrate with various front-end applications or other services.

### Pros and Cons

#### Pros:

1. **Scalability**: Can handle 100k DAU and scale to millions of users.
2. **Flexibility**: Easy to configure cycle duration and add new regions or question sets.
3. **Maintainability**: Clear separation of concerns makes the code easy to understand and modify.
4. **Performance**: Prepared for high-performance caching with Redis.
5. **API-Driven**: Easy to integrate with various client applications.

#### Cons:

1. **Complexity**: The multi-layered architecture might be overkill for very simple use cases.
2. **Learning Curve**: New developers might need time to understand the full architecture.
3. **Database Dependency**: Heavy reliance on MongoDB might make it challenging to switch databases in the future.
4. **Asynchronous Nature**: The asynchronous nature of Node.js can make certain types of processing (like heavy computations) less efficient.

### Potential Improvements

To further enhance the product, I will suggest the following improvements:

1. **Implement Redis Caching**: Fully implement Redis to cache frequently accessed data like current cycle and region-specific question sets.
2. **User Authentication**: Add a robust user authentication system to ensure secure access to questions.
3. **Advanced Question Selection**: Implement more sophisticated algorithms for question selection, possibly incorporating user performance or preferences.
4. **Localization**: Add support for multiple languages to cater to a global user base.
5. **Analytics Service**: Implement a service to track user engagement and question effectiveness, providing valuable insights for content improvement.
6. **Feature Flags**: Implement a feature flag system for the gradual rollout of new features or question sets.
7. **Comprehensive Error Handling**: Enhance error handling and implement a logging system for better debugging and monitoring.
8. **Load Testing**: Conduct thorough load testing to ensure the system can handle the expected user load and identify potential bottlenecks.
9. **API Versioning**: Implement API versioning to allow for future changes without breaking existing client integrations.
10. **Dockerization**: Containerize the application for easier deployment and scaling across different environments.

we can further enhance the scalability, performance, and functionality of the question rotation system, making it even more robust and adaptable to future needs.

### Folder Structure
```
project-root/
│
├── src/
│   ├── models/
│   │   ├── question.model.js
│   │   └── assignment.model.js
│   │
│   ├── controllers/
│   │   └── assignment.controller.js
│   │
│   ├── services/
│   │   └── questionAssignment.service.js
│   │
│   ├── config/
│   │   ├── database.config.js
│   │   └── redis.config.js
│   │
│   ├── routes/
│   │   └── assignment.routes.js
│   │
│   └── app.js
│
├── package.json
└── README.md
```
