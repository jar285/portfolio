
### **Project Plan: AI-Powered Personal Portfolio**

This document outlines the vision, design, architecture, and development roadmap for the creation of a modern, AI-enhanced personal portfolio for Jesus Adonis Rosario Vargas.

***

### **1. Project Vision & Scope**

The goal is to build a high-performance, interactive personal portfolio that not only showcases projects but also demonstrates technical skills through a suite of integrated AI tools.

* **Core Features:**
    * A professional portfolio section detailing key projects and experience.
    * An AI-powered chatbot, trained on personal data (resume, bio), to answer visitor questions.
    * An "AI Playground" where visitors can use a curated set of tools.
    * A complete user authentication system (email/password and social logins) allowing users to save their creations.
* **MVP Playground Tools:**
    1.  **Resume Builder:** Users can create, save, download as PDF, and share a resume via a public link.
    2.  **Meme Generator:** Users can upload images, add text, and save the result.
    3.  **Story Generator:** Users can generate creative short stories from a text prompt.
* **Chosen Domain Strategy:** The branding will be built around a short, professional domain like **`adonisrosario.com`** or **`jesusrosario.com`**, pending availability.

***

### **2. UI/UX Design**

The design will be modern, clean, and mobile-first, adhering to WCAG 2.1 AA accessibility standards.

* **Component Library:** **Material UI (MUI)** will be used for a robust and accessible foundation.
* **Branding & Theming:** We will start with a professional dark-mode theme, highlighted by a single, vibrant accent color. This will be implemented using a centralized **Design Tokens** file for sitewide consistency.
* **Resume Template:** The generated resume will use a modern, multi-column design to be visually appealing and easy to read.
* **Key User Flows:**
    * **Onboarding:** A user can sign up or log in using either email/password or a social provider (Google/GitHub).
    * **Creation:** A logged-in user can access the AI Playground, create a resume or meme, and save it to their account.
    * **Sharing:** A user can generate a downloadable PDF or a public, shareable link for any resume they have created.



***

### **3. System Architecture**

We will use a unified, full-stack architecture built entirely within the **Next.js** framework for simplicity, performance, and developer experience.

* **Monorepo Approach:** The frontend and backend will coexist in a single Next.js application. API logic will be handled by **Next.js API Routes**.
* **Authentication:** **NextAuth.js** will manage all user authentication, including session management and social logins.
* **Database:** A **PostgreSQL** database, likely hosted on Render, will store all user data and saved creations (resumes, memes).
* **AI Integration:**
    * **Chatbot (RAG):** The AI chatbot will use a Retrieval-Augmented Generation (RAG) architecture. User documents will be embedded and stored in a **Vector Database** (e.g., Supabase pgvector) to provide accurate, context-aware answers.
    * **Playground APIs:** The backend will securely manage API keys and act as a proxy for third-party AI services like **OpenAI**.

***

### **4. Development Roadmap**

Development will proceed in a series of focused sprints.

* **Sprint 0: Project Setup**
    * Initialize the Next.js project and Git repository.
    * Set up the basic file structure and configure the Material UI theme with our design tokens.
    * Establish a CI/CD pipeline with Vercel for automated deployments.

* **Sprint 1: Core Portfolio & UI Shell**
    * Build the static pages: Home, About, and the main Projects display section.
    * [cite_start]Feature the "Geotechnical Data Automation Tool" and "Full-Stack User Management System" projects prominently[cite: 23, 29].
    * Implement the primary navigation and responsive layout.

* **Sprint 2: User Authentication & Database**
    * Set up the PostgreSQL database schema for users and their creations.
    * Integrate NextAuth.js with providers for Google, GitHub, and email/password.
    * Build the UI components for login, sign-up, and the user dashboard.

* **Sprint 3: The AI Chatbot (RAG)**
    * Develop the chatbot UI.
    * Implement the backend script to ingest and embed your resume and bio into a vector database.
    * Create the `/api/chat` endpoint to handle the retrieve-and-generate logic.

* **Sprint 4: AI Playground & Resume Builder**
    * Build the main `/playground` page grid.
    * Develop the full-featured Resume Builder with its multi-step form.
    * Implement the backend service for saving resume data and generating PDFs.
    * Create the public `/resume/[resumeId]` page for shareable links.

* **Sprint 5: Final Playground Tools**
    * Implement the Meme Generator, including image upload and server-side text overlay.
    * Implement the Story Generator with a simple UI to interact with the OpenAI API.

***

### **5. Deployment & Operations**

* **Frontend & Backend Hosting:** The entire Next.js application will be deployed to **Vercel** for optimal performance, scalability, and seamless integration.
* **Database Hosting:** The PostgreSQL database will be hosted on **Render**.
* **Domain:** The chosen domain will be purchased and configured to point to the Vercel deployment.
* **Performance:** The goal is to maintain a Lighthouse score of 90+ by leveraging Next.js's built-in optimizations (Image Optimization, SSG/ISR) and adhering to best practices.

***

### **6. Finalized Technology Stack**

| Component | Technology |
| :--- | :--- |
| **Framework** | Next.js (React) |
| **UI Library** | Material UI (MUI) |
| **Authentication** | NextAuth.js |
| **Backend API** | Next.js API Routes |
| **Database** | PostgreSQL |
| **Vector DB** | Supabase pgvector |
| **AI Services** | OpenAI API |
| **Deployment** | Vercel & Render |