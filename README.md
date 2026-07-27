# 📰 NewsNow

NewsNow is a full-stack news aggregation platform that delivers live news updates from multiple RSS sources. Users can explore category-based news, search articles, create accounts, and save bookmarks for later reading.

## 🚀 Live Demo

[🚀 Open NewsNow](https://newsnow-7oq1.vercel.app)

## 📸 Screenshots

### Home Page

![Home Page](screenshots/Home.png)

### India News

![India Page](screenshots/India.png)

### Login Page

![Login Page](screenshots/login.png)

## ✨ Features

* Live news aggregation using RSS feeds
* Category-wise news browsing

  * India
  * World
  * UPSC
  * NTA
* Search news articles
* User authentication (Register/Login)
* Save and manage bookmarks
* Responsive design
* Automatic news updates

## 🛠 Tech Stack

### Frontend

* React.js
* React Router
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JWT (JSON Web Tokens)

### News Sources

* RSS Feeds
* RSS Parser

### Deployment

* Render
🏗 Project Architecture
HTTP Requests
REST API Calls
Fetch & Parse
Pull Feeds
Read / Write
Verify Token
👤 User Browser
⚛️ React FrontendVercel
🚂 Express BackendRender
📡 RSS Aggregation LayerRSS Parser
🌐 External RSS SourcesIndia / World / UPSC / NTA
🍃 MongoDBUsers, Bookmarks, Articles
🔐 JWT Auth Middleware
🔄 How News Aggregation Works
MongoDB
RSS Sources
RSS Parser
Backend (Express)
Frontend (React)
User
MongoDB
RSS Sources
RSS Parser
Backend (Express)
Frontend (React)
User
Opens "India" / "World" / "UPSC" / "NTA" tab
GET /api/news/:category
Request latest feed
Fetch RSS XML
Return raw feed data
Parsed articles (JSON)
Cache / store latest articles
Return articles list
Render news cards
🔐 Authentication Flow
No
Yes
Valid
Invalid/Expired
User submitsLogin/Register form
ValidCredentials?
❌ Return Error
Generate JWT Token
Send Token to Client
Store Tokenin Browser
Attach Token toFuture API Requests
MiddlewareVerifies Token
✅ Access Protected RoutesBookmarks, Profile
🔖 Bookmark Flow
No
Yes
User clicks Save/Bookmarkicon
Logged In?
Redirect to Login
POST /api/bookmarks
Backend verifies JWT
Save article referenceto MongoDB
Update UI:Bookmark marked as saved
User views saved articlesin Bookmarks page
📂 Folder Structure
REST API
server/
routes/
middleware/
models/
server.js
client/
src/
pages/
components/
services/
App.jsx
<details> <summary>📁 Plain text folder structure (click to expand)</summary>
client/
├── src/
│   ├── pages/
│   ├── components/
│   ├── services/
│   └── App.jsx
server/
├── routes/
├── middleware/
├── models/
└── server.js
</details>
⚙️ Installation

Clone the repository:

bash
git clone https://github.com/ashmitachaturvedi/newsnow.git

Install dependencies:

bash
cd client
npm install
cd ../server
npm install

Start frontend:

bash
npm run dev

Start backend:

bash
npm start
🔐 Environment Variables

Create a .env file in server/:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
🎯 Future Improvements
 AI-powered article summaries
 Dark/Light mode
 Trending news section
 Personalized recommendations
 Multi-language support
👩‍💻 Author

Ashmita Chaturvedi GitHub: ashmitachaturvedi
