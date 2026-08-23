# Interactive Engineering Portfolio Website

## Overview
A fully responsive engineering portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The site showcases my projects across embedded systems, robotics, computer vision, IoT, and full-stack development through a polished one-project-at-a-time project viewer.

This project was also my first full React portfolio build after mostly working with vanilla HTML, CSS, and JavaScript. It gave me a practical way to learn component-based UI design, modern frontend tooling, routing, animation, deployment, and technical storytelling while building something useful for my career.

## Features
- **Responsive project portfolio** that works across desktop and mobile screens
- **One-project-at-a-time carousel** with Previous, Next, Shuffle, and direct jump controls
- **Category filters** for Embedded, Robotics, Computer Vision, Full-Stack, and IoT projects
- **Custom mobile-friendly dropdown** for jumping directly to a selected project
- **YouTube demo embeds** with thumbnails for projects that have video demos
- **Animated transitions** between projects using Framer Motion
- **Guided portfolio chatbot** that helps visitors explore projects, skills, and role fit
- **Contact page** with resume download, email, phone, GitHub, and LinkedIn links
- **React Router navigation** between the project page and contact page
- **Vercel deployment setup** with SPA routing support for direct links like `/contact`

## Technologies
- **TypeScript**
- **JavaScript**
- **HTML**
- **CSS**
- **React**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **React Router**
- **Lucide React**
- **React Icons**
- **GitHub**
- **Vercel**

## Date Completed: August 2026
  

## How It Works
1. **React App Setup:** Vite creates the React + TypeScript development environment, local dev server, and production build system.
2. **Routing:** React Router controls navigation between the home/project page and the contact page without fully reloading the site.
3. **Project Data:** Project information is stored in `src/data/projects.ts` as structured objects containing titles, dates, descriptions, categories, videos, tech, hardware, challenges, and skills.
4. **Project Viewer:** The homepage reads from the project data and displays one active project at a time using reusable components.
5. **Carousel Controls:** Previous, Next, Shuffle, and direct jump controls update React state to change which project is currently displayed.
6. **Category Filtering:** Filter buttons create a smaller project list based on the selected category, and the carousel updates to match that filtered list.
7. **Reusable Components:** Components like `ProjectCard`, `ContactBar`, project controls, dropdown UI, and `PortfolioChatbot` keep the interface modular and easier to maintain.
8. **Animations:** Framer Motion adds smooth transitions when the active project changes, making the UI feel more polished.
9. **Chatbot Logic:** The chatbot uses preset prompt buttons and keyword-based response logic to guide visitors through my projects and strengths without a backend or API key.
10. **Deployment:** The code is stored on GitHub, and Vercel builds/deploys the site automatically when changes are pushed.

## Folder Structure
```bash
PORTFOLIO-SITE/
├── public/
│   ├── kaden_resume.pdf
│   └── favicon files
├── src/
│   ├── components/
│   │   ├── ContactBar.tsx
│   │   ├── PortfolioChatbot.tsx
│   │   └── ProjectCard.tsx
│   ├── data/
│   │   └── projects.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── ContactPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind config files
└── vercel.json
