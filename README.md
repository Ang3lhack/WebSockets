# 💬 Real-Time Chat Application

A lightweight, real-time chat application built with **Node.js**, **Express**, and **Socket.io**. This project demonstrates full-duplex communication between clients and servers, featuring instant messaging and "typing" status indicators.

Based on the classic "Mario Chat" concept but modernized for 2024+ deployment standards.

## 🚀 Features

* **Real-Time Messaging:** Instant communication using WebSockets.
* **Broadcasting:** Events are shared across all connected clients.
* **Typing Indicators:** Real-time feedback when a user is typing a message (`User is typing...`).
* **Responsive Design:** Clean and simple UI.
* **Cloud Ready:** Optimized for deployment on Koyeb, Render, or Heroku.

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **WebSocket Engine:** Socket.io
* **Frontend:** HTML5, CSS3, Vanilla JavaScript

## 📂 Project Structure

```text
/
├── public/              # Static frontend files
│   ├── index.html       # Chat interface
│   ├── chat.js          # Client-side socket logic
│   └── styles.css       # UI Styling
├── index.js             # Server entry point (Backend)
├── package.json         # Dependencies and scripts
└── .gitignore           # Ignored files
⚙️ Local Installation & Setup
Clone the repository

Bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name
Install dependencies

Bash
npm install
Run the server

Bash
npm start
Or for development with auto-restart:

Bash
nodemon index.js
Open in Browser Visit http://localhost:3000 in multiple tabs to test the real-time interaction.

☁️ Deployment (Koyeb/Render)
This project is configured to detect the environment port automatically (process.env.PORT).

Deploy to Koyeb
Push your code to GitHub.

Create a new Web Service on Koyeb.

Select your repository.

Build Command: (Leave empty, auto-detected).

Run Command: npm start

Deploy!

Deploy to Render
Create a new Web Service on Render.

Connect your GitHub repository.

Build Command: npm install

Start Command: node index.js

Deploy!
