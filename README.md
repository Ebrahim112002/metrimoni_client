Matrimony Platform – Frontend

A modern, responsive Matrimony web application built with React.js and Tailwind CSS. This platform facilitates matrimonial connections with role-based dashboards, biodata management, and AI-powered matchmaking features.

🌐 Live Demo
Live Site: https://metrimoniyal.netlify.app/

📑 Table of Contents
✨ Core Features

🏗️ System Architecture

📁 Project Structure

🔐 Authentication Flow

🔄 State Management

🤖 AI Chatbot Integration

🔌 API Integration

🚀 Installation & Setup

⚙️ Environment Variables

📦 Scripts

👨‍💻 Author

✨ Core Features
🎯 User Features
Biodata Management: Create, update, and manage detailed matrimonial profiles

Smart Matching: AI-powered profile matching with advanced filters

Contact Requests: Secure contact exchange system with privacy controls

Premium Membership: Tiered subscription plans with enhanced features

Favorites System: Bookmark and track interesting profiles

👑 Admin Features
Dashboard Analytics: Visual statistics and platform insights

User Management: Approve, suspend, or delete user accounts

Biodata Moderation: Review and verify submitted biodatas

Payment Management: Monitor premium subscription transactions

Content Management: Manage platform content and announcements

🤖 AI Assistant
Smart Matchmaking: AI suggests compatible profiles based on preferences

Profile Optimization: Recommendations for improving biodata visibility

Conversation Starter: AI-generated icebreakers for initial contact

Personalized Tips: Custom advice based on user behavior and preferences

📱 Responsive Design
Mobile-first responsive layout

Cross-browser compatibility

Dark/Light mode support

Accessibility compliant (WCAG 2.1)

🏗️ System Architecture
System Architecture Overview:
![alt text](https://i.ibb.co.com/gZtcHrNg/systemarchitecture.png)

Data Flow Architecture:
![alt text](https://i.ibb.co.com/hRxKmYJm/deepseek-mermaid-20260210-66653e.png)

Component Hierarchy & State Flow
![alt text](https://i.ibb.co.com/Dd0JbyC/deepseek-mermaid-20260210-daa075.png)

📁 Project Structure:
client/
├── src/
│   ├── assets/                 # Static assets (images, icons)
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/             # Reusable UI components
│   │   ├── AboutUs/           # About page components
│   │   ├── Admin_Control/     # Admin dashboard components
│   │   │   ├── DashboardStats.jsx
│   │   │   ├── UserManagement.jsx
│   │   │   └── ContentModeration.jsx
│   │   ├── Authentication/    # Auth-related components
│   │   ├── Biodata/           # Biodata management components
│   │   │   ├── BiodataForm.jsx
│   │   │   ├── BiodataView.jsx
│   │   │   └── BiodataFilters.jsx
│   │   ├── Chatbot/           # AI Chatbot components
│   │   │   ├── ChatInterface.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   └── SuggestionsPanel.jsx
│   │   ├── Premium/           # Premium features
│   │   ├── UI/                # Generic UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   └── Layout/            # Layout components
│   │       ├── Navbar.jsx
│   │       ├── Footer.jsx
│   │       └── Sidebar.jsx
│   │
│   ├── context/               # React Context providers
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── ChatbotContext.jsx
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useAdmin.js
│   │   ├── useAxiosSecure.js
│   │   ├── useBiodata.js
│   │   └── useChatbot.js
│   │
│   ├── pages/                 # Page components
│   │   ├── Home/
│   │   ├── Dashboard/
│   │   │   ├── UserDashboard.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── Auth/
│   │   ├── Browse/
│   │   └── Profile/
│   │
│   ├── services/              # API and external services
│   │   ├── api.js            # Axios configuration
│   │   ├── auth.js           # Firebase auth service
│   │   ├── biodata.js        # Biodata API calls
│   │   └── chatbot.js        # AI service integration
│   │
│   ├── utils/                 # Utility functions
│   │   ├── validators.js
│   │   ├── formatters.js
│   │   └── constants.js
│   │
│   ├── routes/                # Routing configuration
│   │   ├── PrivateRoute.jsx
│   │   ├── AdminRoute.jsx
│   │   └── routes.js
│   │
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
│
├── public/                   # Static public files
├── .env                      # Environment variables
├── .env.example             # Environment template
├── package.json
└── README.md

🔐 Authentication Flow
![alt text](https://i.ibb.co.com/1GpTJdBs/authentication.png)

Key Authentication Features:
Firebase Authentication with email/password

JWT token management for API authorization

Automatic token refresh mechanism

Role-based access control (User/Admin)

Session persistence across page reloads

State Flow Diagram:
![alt text](https://i.ibb.co.com/6cb9Q34M/Stateflow.png)

AI Chatbot Integration
Chatbot Architecture
![alt text](https://i.ibb.co.com/prncfrsx/chatbot.png)

Key Chatbot Features:

Profile match suggestions based on preferences

Conversation icebreakers generator

Profile completion recommendations

 API Integration
Frontend-Backend Communication Architecture
![alt text](https://i.ibb.co.com/0Vh0zJdt/api.png)

# Request/Response Lifecycle:
![alt text](https://i.ibb.co.com/Z16YNdcz/lifecycle.png)

 Installation & Setup
Prerequisites
Node.js (v16 or higher)

npm or yarn

Firebase account for authentication

Backend API server running

Step 1: Clone the Repository
bash
git clone https://github.com/Ebrahim112002/metrimoni_client.git
cd client
Step 2: Install Dependencies
bash
npm install
# or
yarn install
Step 3: Configure Environment Variables
Create a .env file in the root directory based on .env.example:

bash
cp .env.example .env
Step 4: Run Development Server
bash
npm run dev
# or
yarn dev
The application will be available at http://localhost:5173

⚙️ Environment Variables
Create a .env file in the root directory:

env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Backend API
VITE_API_URL=http://localhost:5000/api
# or for production:
# VITE_API_URL=https://your-backend-api.com/api

# ImgBB for Image Uploads (Optional)
VITE_IMGBB_KEY=your_imgbb_api_key

# AI Service (Optional)
VITE_AI_SERVICE_URL=https://ai-service.com/api
VITE_AI_API_KEY=your_ai_service_key
📦 Scripts
Command	Description
npm run dev	Start development server
npm run build	Build for production
npm run preview	Preview production build
npm run lint	Run ESLint
npm run format	Format code with Prettier
🧪 Testing
bash
# Run unit tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run end-to-end tests
npm run test:e2e
Browser Support
Browser	Version	Support

Chrome	60+	✅ Full

Firefox	55+	✅ Full

Safari	12+	✅ Full

Edge	79+	✅ Full

Opera	50+	✅ Full

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author

Md Ebrahim Aka Mondal Tithi

MERN Stack Developer

