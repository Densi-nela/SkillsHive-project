Skills Exchange Platform
A peer-to-peer platform where users can list skills they offer and skills they want to learn, enabling community-driven knowledge exchange.

 Table of Contents

Overview
Features
Tech Stack
Project Structure
Getting Started
API Reference
Database Schema
Available Scripts
Contributing
License


Overview
The Skills Exchange Platform connects people who want to teach with people who want to learn. Users can post skills they're offering, browse skills listed by others, and arrange exchanges — all without any monetary transaction.

 Features

 User registration and profile management
 Post skills you can teach
 Search and filter available skills
 Send and receive exchange requests
 Rate and review completed exchanges
Notifications for new requests and messages


🛠 Tech Stack
LayerTechnologyFrontendReactMock APIjson-serverDatabasedb.json (flat file)StylingCSS / TailwindCSSRuntimeNode.js

 Project Structure
skills-exchange/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SkillCard.jsx
│   │   ├── UserProfile.jsx
│   │   └── ExchangeRequest.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── community.jsx
│   │   ├── dashboard.jsx
│   │   └── signup.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── index.js
├── db.json
├── package.json
└── README.md

Getting Started
Prerequisites
Make sure you have the following installed:

Node.js (v14 or higher)
npm (comes with Node.js)

Installation

Clone the repository

bashgit clone https://github.com/your-username/skills-exchange.git
cd skills-exchange

Install dependencies

bashnpm install

Start the mock API server

bashnpx json-server db.json --port 3001

Start the React development server (in a new terminal)

bashnpm start

Open your browser and navigate to:

http://localhost:3000
The API will be running at http://localhost:3030.

 API Reference
The mock API is powered by json-server and mirrors a RESTful structure.
Base URL
http://localhost:3001
Endpoints
Users
MethodEndpointDescriptionGET/usersGet all usersGET/users/:idGet a user by IDPOST/usersCreate a new userPUT/users/:idUpdate a userDELETE/users/:idDelete a user
Skills
MethodEndpointDescriptionGET/skillsGet all skillsGET/skills/:idGet a skill by IDPOST/skillsPost a new skillPUT/skills/:idUpdate a skillDELETE/skills/:idDelete a skill
Exchange Requests
MethodEndpointDescriptionGET/requestsGet all exchange requestsGET/requests/:idGet a request by IDPOST/requestsCreate an exchange requestPUT/requests/:idUpdate request statusDELETE/requests/:idCancel a request
Reviews
MethodEndpointDescriptionGET/reviewsGet all reviewsPOST/reviewsSubmit a review
Query & Filter Examples
bash# Filter skills by category
GET /skills?category=programming

# Search skills by title (json-server full-text search)
GET /skills?q=JavaScript

# Get skills offered by a specific user
GET /skills?userId=1

# Paginate results
GET /skills?_page=1&_limit=10

# Sort by newest first
GET /skills?_sort=createdAt&_order=desc

🗄 Database Schema
The db.json file serves as the data store. Below is the structure:
json{
  "users": [
    {
      "id": 1,
      "name": "Alice Wanjiru",
      "email": "alice@example.com",
      "location": "Nairobi, KE",
      "bio": "Frontend developer and Swahili tutor",
      "avatar": "https://i.pravatar.cc/150?img=1",
      "createdAt": "2024-01-10T08:00:00Z"
    }
  ],
  "skills": [
    {
      "id": 1,
      "userId": 1,
      "title": "React Development",
      "description": "I can teach modern React including hooks, context, and state management.",
      "category": "Programming",
      "type": "offer",
      "level": "intermediate",
      "createdAt": "2024-02-01T09:00:00Z"
    },
    {
      "id": 2,
      "userId": 1,
      "title": "Guitar Lessons",
      "description": "Looking to learn acoustic guitar basics.",
      "category": "Music",
      "type": "request",
      "level": "beginner",
      "createdAt": "2024-02-01T09:05:00Z"
    }
  ],
  "requests": [
    {
      "id": 1,
      "fromUserId": 2,
      "toUserId": 1,
      "skillId": 1,
      "status": "pending",
      "message": "Hi! I'd love to learn React from you.",
      "createdAt": "2024-02-05T10:00:00Z"
    }
  ],
  "reviews": [
    {
      "id": 1,
      "requestId": 1,
      "reviewerId": 2,
      "revieweeId": 1,
      "rating": 5,
      "comment": "Excellent teacher, very patient!",
      "createdAt": "2024-03-01T12:00:00Z"
    }
  ]
}

 Available Scripts
CommandDescriptionnpm startStart the React development servernpm run buildBuild for productionnpm testRun testsnpx json-server db.json --port 3001Start the mock APInpx json-server db.json --port 3001 --watchStart API with live reload

 Contributing
Contributions are welcome! To get started:

git clone the project
Create a new branch: git checkout -b feature/your-feature-name
Make your changes and commit: git commit -m "Add your feature"
Push to your branch: git push origin feature/your-feature-name
Open a Pull Request

Please make sure your code follows existing conventions and that all features are tested.

 License
This project is licensed under the MIT License.


Built with  to connect learners and teachers in every community.