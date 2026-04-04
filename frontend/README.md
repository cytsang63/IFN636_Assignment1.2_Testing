
**Assessment 1.2 (Total Marks **20**)**

Assignment: **Software requirements analysis and design (**Full-Stack CRUD Application Development with DevOps Practices**)**


---

**Developer Portfolio Manager**

A Full-Stack MERN Hub for Showcasing Engineering Talent

The Developer Portfolio Manager is a dynamic web application that allows developers to go beyond a static resume. It provides a centralized workspace to manage project lifecycles, showcase technical expertise through a curated public gallery, and maintain content integrity through an administrative moderation layer.

Key Features

Developer Workspace (User Panel)

* **Project CRUD: Create, Read, Update, and Delete project entries in real-time.**
* **Media Management: Upload thumbnails and link to GitHub repositories or live demos.**
* **Profile Control: Manage professional summaries and technical skill tags (e.g., React, Python, SysML).**

Public Discovery (Recruiter View)

* **Bento-Grid Gallery: A modern, responsive layout for browsing projects.**
* **Dynamic Filtering: Filter the entire database by technology stack to find specific expertise.**
* **Direct Contact: Integrated links to developer socials and downloadable PDF resumes.**
 
Administrative Governance

* **Moderation Dashboard: Global view of all system-wide projects.**
* **Content Control: Ability to "Flag" or "Delete" projects that violate platform guidelines.**
* **System Metrics: High-level tracking of user growth and project submission volume.**
 
Architecture & Design Strategy

This project was developed following a strict Software Development Life Cycle (SDLC):

* **Requirements Modeling: Used SysML Requirements Diagrams to map user stories to technical constraints.**
* **Structural Blueprint: Developed a SysML Block Definition Diagram (BDD) to define the hierarchy between the Frontend components, the REST API, and the MongoDB schema.**
* **UI/UX Prototyping: High-fidelity wireframes were designed in Figma, focusing on a "clean-code" aesthetic and intuitive navigation.**
  

---

Getting Started

Prerequisites

* **Node.js (v18 or higher)**
* **MongoDB Atlas Account**
* **NPM or Yarn**

1. Clone the Repo


git clone https://github.com/your-username/developer-portfolio-manager.git

2. Install Dependencies (Backend & Frontend)

# From root
npm install
cd frontend && npm install

3. Environment Setup
Create a .env file in the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Run Locally

# From backend root
npm run dev

---

CI/CD & Version Control

This project utilizes GitHub Actions for an automated deployment pipeline.

* **Branching Strategy: Uses feature/* branches for development, merged into main via reviewed Pull Requests.**
* **Automated Deployment: Every push to the main branch triggers an automated build and deployment to the production environment (e.g., Render/Vercel).**

---

**GitHub link of the starter project: **[https://github.com/cytsang63/IFN636_Assignment1.2_Testing.git](https://github.com/cytsang63/IFN636_Assignment1.2_Testing.git)

---

