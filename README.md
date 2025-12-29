
Project Title
🧠MindCare – AI-Based Mental Health Support Platform
Track
HealthTech / Social Impact / Hackxios 2025



Problem Statement
Mental health problems such as stress, anxiety, depression, and emotional burnout are becoming increasingly common, especially among students and working professionals. However, many individuals do not seek timely help due to social stigma, lack of awareness, limited access to mental health professionals, or high consultation costs.
This gap results in untreated mental health issues that can severely affect productivity, relationships, and overall quality of life. Therefore, there is a strong need for an easily accessible, affordable, and confidential mental health support system that can provide immediate assistance and guidance.



💡 Solution Overview

MindCare is a web-based AI-assisted mental health awareness platform designed to help users reflect on their mental well-being through guided conversations and easy access to support resources. 

The platform provides:
   ➤ An AI chatbot for supportive conversations.
  ➤ Chat history tracking for self-reflection.
   ➤ A curated list of doctors and medical stores.
   ➤ A clean and calming user interface.
   ➤ MindCare does not replace medical professionals but acts as a first   
      step toward awareness and support. 

MindCare acts as a first-level mental health support system. It helps users feel heard, reduces emotional stress, and encourages them to seek professional help when needed. The platform is available 24/7, ensuring accessibility anytime and anywhere.





✨Key Features
🤖 AI Chatbot
Provides supportive and non-judgmental conversations, allowing users to freely express their emotions and thoughts in a safe environment.
🕘 Chat History
Stores previous conversations so users can review past interactions, helping with self-reflection and emotional progress tracking.
👨‍⚕️ Doctors Section
Displays information about verified mental health professionals, enabling users to seek expert guidance when required.
💊 Medical Stores Section
Provides details of nearby or relevant medical stores to help users access prescribed medicines and mental health resources easily.
🔐 Authentication System
Implements secure user login and registration using Firebase Authentication, ensuring data privacy and account safety.
🎨 User-Friendly UI
Designed with a calm color palette and fully responsive layout to create a stress-free, accessible, and smooth user experience across devices.



🛠️ Technologies & Tools Used
     𑇐   Frontend                                       𑇐  Firebase Authentication                                                                                                                       
     𑇐   React.js                                         𑇐  Deployment
     𑇐   HTML, CSS, JavaScript                𑇐  Frontend: Netlify
     𑇐   Backend                                        𑇐  Backend: Render                                 
     𑇐   Node.js                                          𑇐  Other Tools
     𑇐   Express.js                                      𑇐  Git & GitHub
     𑇐   Authentication                                𑇐  vs code




🏗️ System Architecture & Workflow
🔄 Workflow Explanation:
    1. User Authentication
       The user logs in or signs up securely using Firebase Authentication, ensuring data privacy and authorized access.


     2. Dashboard Loading
        After successful login, the React-based frontend loads the user dashboard and initializes all components.


      3. User–Chatbot Interaction
          The user interacts with the AI chatbot by entering messages related to their emotional or mental health concerns.


       4. Frontend to Backend Communication
          The frontend sends user messages as API requests to the backend server for processing.


       5.  Backend Processing
          The backend handles the request, processes the input using AI/NLP logic, and generates an appropriate response.


     6. Response Delivery
        The processed response is sent back to the frontend and displayed to the user in real time.


      7. Chat History Management
         All conversations are securely stored and retrieved, allowing users to view their chat history for self-reflection.


      8.  Doctors & Medical Stores Display
         Information about mental health professionals and medical stores is fetched  from predefined data sources and shown in dedicated sections.
         
🖥️Architecture Overview:
       👤 User
           │
           ▼
🎨 Frontend (React.js)
(User Interface & Interaction)
           │
           ▼
⚙️ Backend  (Node.js + Express.js)
(Request Handling & Business Logic)
           │
           ▼
🤖🧠 AI Logic / Data Handling
(Emotion Analysis, Chat Processing,
Doctors & Medical Store Data)
           │
           ▼
🔁 Response Sent Back
           │
           ▼
🎨 Frontend Displays Output

(Chat Response, History, Doctors, Stores)


⚙️ Setup & Installation
    Prerequisites
Node.js
Git
Frontend
cd frontend
npm install
npm start

Runs at:
➡️ http://localhost:3000
Backend
cd backend
npm install
node server.js
Runs at:
➡️ http://localhost:5000
Environment Variables
PORT=5000

