# 🎬 Netma Streams

**Netma Streams** is a web-based video streaming platform designed to showcase creative and educational content — developed by **Tebogo Nelson Mashabane** and the **neTma Group**.  
It provides users with an intuitive interface to explore, watch, and interact with video content in real time.

---

## 🚀 Features

- 🎥 Stream and showcase videos dynamically  
- 🔍 Browse featured and trending content  
- 🧠 Responsive, modern UI built with React and Vite  
- 🧩 Component-based architecture for scalability  
- 🌐 Deployed on [Vercel](https://vercel.com)  
- 🛠️ Ready for backend API integration (authentication, comments, etc.)

---

## 🧰 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend Framework** | React (with Vite) |
| **Routing** | React Router DOM |
| **Styling** | CSS Modules |
| **Build Tool** | Vite |
| **Deployment** | Vercel |
| **Version Control** | Git + GitHub |

---

## 📁 Project Structure
netma-stream/
│
├── src/
│ ├── assets/ # Images, thumbnails, and static assets
│ │ ├── thumbnail1.png
│ │ ├── thumbnail2.png
│ │ ├── pukkeconnect.png
│ │ └── mustang.jpg
│ │
│ ├── Components/ # Reusable UI components
│ │ ├── Feed/
│ │ │ ├── Feed.jsx # Displays list of video cards
│ │ │ └── Feed.css
│ │ └── Navbar/
│ │ ├── Navbar.jsx
│ │ └── Navbar.css
│ │
│ ├── Pages/ # Route-level pages (e.g., Home, Video)
│ │ ├── Home.jsx
│ │ ├── Video.jsx
│ │ └── NotFound.jsx
│ │
│ ├── App.jsx # Root component defining routes
│ ├── main.jsx # Entry point (Vite + ReactDOM)
│ └── index.css # Global styles
│
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
