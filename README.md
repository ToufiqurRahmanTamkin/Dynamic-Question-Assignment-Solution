# Dynamic Question Assignment System

A dynamic question assignment system that distributes questions based on region and cycles. The system ensures that users in different regions receive different questions, and these questions are assigned in configurable cycles (e.g., weekly).

## Project Overview

This project is designed to handle region-specific question assignments that rotate over configurable cycles. Each region has its own set of questions, and a new question is assigned to users in that region every cycle. The cycle duration is configurable (default is 7 days starting every Monday at 7 PM SGT). The system is optimized for scalability, capable of handling 100k daily active users and supporting millions globally.

### Features:
- **Region-Specific Assignment**: Different regions have distinct question sets.
- **Configurable Cycles**: The duration of cycles can be adjusted (e.g., weekly, bi-weekly, etc.).
- **Caching with Redis**: Questions are cached to enhance performance.
- **Scalable Design**: Optimized to handle a large number of users efficiently.
  
## Architecture and Approach

The project architecture follows a modular structure with separate components for database handling, scheduling, and routing.

### Approach:

1. **Region-Specific Questions**:
    - Each region has its own set of questions stored in the database.
    - Users from the same region will receive the same question for a given cycle.

2. **Cycle Management**:
    - The cycle duration is configurable (e.g., weekly, 7 days, 14 days).
    - A cron job is used to schedule the question assignment updates. By default, it updates every Monday at 7 PM SGT.
    - Questions are rotated in a sequential manner for each region.

3. **Caching with Redis**:
    - To ensure fast responses, Redis is used to cache the question for each region during the cycle.
    - Redis reduces the load on the database by avoiding repeated queries for the same question during a cycle.

4. **Scalability**:
    - The system is designed to handle large-scale user traffic efficiently using MongoDB for storing questions and Redis for caching.


## Setup Instructions

### Prerequisites:

- Node.js (>=20.x)
- MongoDB (locally or using MongoDB Atlas)
- Redis (locally or using Redis Cloud)

### Steps to Set Up:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ToufiqurRahmanTamkin/Dynamic-Question-Assignment-Solution.git
    cd Dynamic-Question-Assignment-Solution
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure environment variables**:
    Create a `.env` file in the project root with the following content:
    ```bash
    MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
    REDIS_URL=redis://<your_redis_url>
    PORT=5000
    ```

4. **Start MongoDB and Redis**:
    Ensure MongoDB and Redis are running locally or accessible through cloud services.

5. **Run the app**:
    - In development mode:
      ```bash
      npm run dev
      ```
    - In production mode:
      ```bash
      npm start
      ```

6. **Access the API**:
    - Fetch the question for a specific region:
      ```http
      GET /api/questions/:region
      ```
    - Example:
      ```http
      GET http://localhost:5000/api/questions/Singapore
      ```

## Pros and Cons of the Solution

### Pros:
- **Region-Specific Assignment**: The system handles region-based question assignment efficiently, ensuring users in different regions receive their respective questions.
- **Configurable Cycles**: Flexibility to set the cycle duration (e.g., weekly, daily) allows adaptability to different use cases.
- **Scalability**: The use of Redis caching ensures that the system can handle a high volume of requests without overloading the database.
- **Modular Structure**: The codebase is well-organized into modules, making it easy to maintain and extend.
- **Efficiency**: Caching and scheduled updates using cron jobs reduce redundant database calls and optimize performance.

### Cons:
- **Complexity in Redis Management**: Using Redis requires additional infrastructure management, and handling cache invalidation correctly adds complexity.
- **Database Dependency**: Although MongoDB is used here, scaling databases can become a challenge for very large datasets (e.g., if there are millions of questions and users globally).
- **Single Point of Failure for Scheduler**: The cron job is responsible for updating the cycle, and if it fails, the entire question rotation may not work as expected. This can be mitigated by using distributed cron jobs or external scheduling services.

## Future Improvements

- **Distributed Scheduler**: Consider using a more robust scheduler (e.g., Redis-based distributed job queues) to handle scheduling in case of server failure.
- **Rate Limiting**: Implement rate limiting on the API to prevent abuse and ensure consistent performance.
- **Question Personalization**: Add support for personalizing questions based on user activity or preferences within a region.
- **Monitoring**: Integrate logging and monitoring solutions to track question rotation performance and any potential issues.
  


