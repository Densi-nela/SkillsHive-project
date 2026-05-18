# Skill Hive – Skill Exchange Platform

## Project Overview

Skill Hive is a modern React-based skill exchange platform that allows users to connect, collaborate, and exchange skills with one another. Instead of paying for courses or services, users can trade knowledge directly with others in the community.

The platform promotes peer-to-peer learning, collaboration, networking, and community-driven growth among students, developers, creatives, and professionals.

Users can:

Create accounts
Set skills they can offer
 Add skills they want to learn
 Discover compatible matches
Send exchange requests
 Accept or decline collaboration requests
 Manage skill exchanges from a personalized dashboard

The project was developed collaboratively using Git and GitHub workflows.

---

# Live Features

## Home Page

The homepage acts as the landing page of the platform.

### Features

 Modern responsive hero section
 Platform introduction and branding
 Navigation bar
 Call-to-action buttons
 Feature highlights
 Community engagement section
 Responsive design for mobile and desktop

### Purpose

The homepage introduces users to the purpose of Skill Hive and encourages them to join the community.

---

## Signup / Authentication

Users can create accounts and access personalized platform features.

### Features

 User registration
 User login
 Form validation
 Authentication persistence using localStorage
 Redirect users after successful login
 Logout functionality

### Technologies Used

 React Hooks
 useState
 useNavigate from React Router
 localStorage

---

## Community Page

The community page allows users to manage and update their skills.

### Features

 Add skills offered
 Add skills wanted
 Edit existing skills
 Display user profile information
 Dynamic rendering of skills
 Real-time updates

### Purpose

This page helps users define what they can teach and what they want to learn.

---

## Dashboard

The dashboard is the core functionality of the platform.

### Features

 View compatible skill matches
 Match users based on offered and wanted skills
 Send exchange requests
 Prevent duplicate requests
 Accept or decline requests
 Track exchange statuses
 Display profile summary
 Display offering and wanted skills
 Responsive card-based layout

### Match Logic

The application automatically matches users when:

 Another user offers a skill the current user wants
 Another user wants a skill the current user offers

This creates a two-way skill exchange system.

### Exchange Request System

Users can:

 Send requests
 Accept requests
 Decline requests
 View pending exchanges
 View accepted exchanges

---

# Technologies Used

## Frontend

 React
 React Router DOM
 JavaScript (ES6+)
 Tailwind CSS
 Vite

## Backend / Data Handling

* JSON Server / Mock API
* Fetch API
* Render Deployment

## State Management

 React Hooks
 useState
 useEffect
 Context API concepts

## Version Control

 Git
 GitHub

---

# Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── MatchCard.jsx
│   └── ExchangeCard.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── Signup.jsx
│   ├── Community.jsx
│   └── Dashboard.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── data/
│   └── db.json
│
├── App.jsx
└── main.jsx
```

---

# Routing System

The application uses React Router for navigation.

## Routes

| Route        | Page           |
| ------------ | -------------- |
| `/`          | Home Page      |
| `/signup`    | Signup Page    |
| `/community` | Community Page |
| `/dashboard` | Dashboard      |

---

# Responsive Design

The application was built with responsiveness in mind.

### Responsive Features

 Mobile-first layouts
 Flexible grids
 Adaptive navigation
 Responsive cards
 Tailwind utility classes

The platform works across:

 Mobile devices
 Tablets
 Desktop screens

---

# Authentication Flow

 User signs up or logs in
 User data is stored in localStorage
 Protected pages check for authenticated user
 User is redirected appropriately
 Logout clears localStorage and redirects user

---

# Skill Matching Algorithm

The platform uses filtering logic to identify compatible users.

## Matching Conditions

A match occurs when:

```javascript
User A offers what User B wants
AND
User B offers what User A wants
```

This ensures meaningful two-way exchanges.

---

# Collaboration Workflow

This project was developed collaboratively using Git and GitHub.

## Collaboration Process

Each team member worked on separate features using feature branches.

### Example Branches

```bash
git checkout -b feature/homepage

git checkout -b feature/dashboard

git checkout -b feature/community-page
```

Each developer:

1. Pulled the latest changes from the main branch
2. Created a feature branch
3. Developed their assigned feature
4. Committed changes locally
5. Pushed their branch to GitHub
6. Opened a Pull Request
7. Merged changes after review

---

# GitHub Collaboration Features Used

## Branching Strategy

 Feature branches
 Main branch protection workflow

## Pull Requests

Used for:

 Code reviews
 Feature integration
 Team collaboration

## Merge Conflict Resolution

The team resolved merge conflicts collaboratively whenever multiple developers modified the same files.

---

# Challenges Faced

## 1. Merge Conflicts

Multiple developers occasionally modified the same files, especially:

 App.jsx
 Dashboard.jsx

### Solution

 Improved communication
 Used feature branches properly
 Pulled latest changes frequently
 Resolved conflicts manually

---

## 2. State Synchronization

Keeping dashboard data updated after sending requests.

### Solution

 Updated state immediately after API responses
 Used React state management effectively

---

## 3. Dynamic Matching Logic

Creating accurate skill matches between users.

### Solution

* Used array filtering methods
* Implemented matching algorithms using JavaScript array methods

---

# Learning Outcomes

Through this project, the team learned:

 React component architecture
 React Hooks
 Routing with React Router
 State management
 Context API concepts
 Tailwind CSS styling
 API integration
 Git collaboration workflows
 Branching strategies
 Pull requests and code reviews
 Merge conflict resolution
 Team communication in software development

---

# Future Improvements

The platform can be improved further by adding:

 Real authentication backend
 Firebase authentication
 Real-time messaging
 Notifications system
 Video call integration
 User ratings and reviews
 Search and filtering
 Profile pictures
 Skill recommendations
 Dark/light mode
 Admin dashboard
 JWT authentication
 Database integration with MongoDB

---

# Installation Guide

## Clone Repository

```bash
git clone https://github.com/your-username/skill-hive.git
```

---

## Navigate Into Project

```bash
cd skill-hive
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

# Deployment

The project frontend can be deployed using:

 Vercel
 Netlify
 Render

The backend/mock API can be deployed using:

 Render
 Railway
 JSON Server

---

# Team Contributions

The project was completed collaboratively with different team members contributing to:

 Homepage design
 Authentication system
 Dashboard functionality
 Skill matching logic
 Community page
 API integration
 UI styling
 GitHub collaboration
 Bug fixing
 Testing

---

# Conclusion

Skill Hive demonstrates how technology can encourage collaborative learning and community interaction through skill exchange.

The project successfully combines:

 React development
 Responsive UI design
 API integration
 Team collaboration
 GitHub workflows
 Real-world frontend architecture

The platform reflects both technical implementation skills and collaborative software development practices.

---

# Authors

Skill Hive Development Team

Built collaboratively using React, Tailwind CSS, Git, and GitHub.
