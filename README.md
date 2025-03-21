🌟 Portfolio Website

This is my personal portfolio website built using React, TypeScript, and Tailwind CSS with Vite as the build tool. It’s a single-page application that showcases my skills, projects, and contact details with smooth scrolling navigation for a great user experience.

🔧 Features

Smooth scrolling navigation between sections

Fully responsive layout with Tailwind CSS

Dynamic typewriter effect on the dashboard

Contact form integrated directly

Docker setup for easy deployment

🛠️ Tech Stack

Frontend: React, TypeScript, Tailwind CSS

Build Tool: Vite

Deployment: Docker, Docker Compose

## 📁 Project Folder Structure

```plaintext
portfolio-website/
├── src/                    # Source code folder
│   ├── Components/         # React components
│   │   ├── Aboutme/        # About Me component
│   │   │   └── Aboutme.tsx
│   │   ├── Contactme/      # Contact Me component
│   │   │   └── Contactme.tsx
│   │   ├── Dashboard/      # Dashboard component
│   │   │   └── Dashboard.tsx
│   │   ├── Doutpage/       # Doubt page component
│   │   │   └── Doutpage.tsx
│   │   ├── Footer/         # Footer component
│   │   │   └── Footer.tsx
│   │   ├── Navbar/         # Navbar component
│   │   │   └── Navbar.tsx
│   │   ├── Project/        # Project component
│   │   │   └── Project.tsx
│   │   ├── Quations/       # Quations component
│   │   │   └── Quation.tsx
│   │   └── Techstack/      # Tech Stack component
│   │       └── Techstack.tsx
│   ├── Layout/             # Layout component
│   │   └── Layout.tsx
│   ├── App.tsx             # Main App component
│   ├── index.css           # Global CSS file
│   ├── main.tsx            # Entry point for React
│   └── vite-env.d.ts       # Vite environment types
├── public/                 # Public folder for static files
│   ├── index.html          # HTML template
│   └── vite.svg            # Vite logo (default)
├── .gitignore              # Git ignore file
├── Dockerfile              # Docker configuration file
├── package-lock.json       # NPM lock file
├── package.json            # NPM dependencies and scripts
├── README.md               # This file
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # TypeScript Node configuration
└── vite.config.ts          # Vite configuration


🚀 Setup Instructions

🛠️ Local Setup

Clone the repository:

git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website

Install dependencies:

npm install

Run the development server:

npm run dev

Open the website:

http://localhost:3000

🐳 Docker Setup

Create a Dockerfile (if not already present):

FROM node:16
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "run", "dev"]

Build and run the Docker image:

docker build -t portfolio-website .
docker run -p 3000:3000 portfolio-website

⚙️ Docker Compose Setup

Create a docker-compose.yml file:

version: '3'
services:
  app:
    build: .
    ports:
      - "4173:4173"
    volumes:
      - .:/app
    environment:
      NODE_ENV: development

Run Docker Compose:

docker-compose up --build

🛠️ Contribution Guide

Fork the repository:

git clone https://github.com/your-username/portfolio-website.git

Create a new branch:

git checkout -b your-branch-name

Commit your changes:

git add .
git commit -m "Added new feature XYZ"

Push your branch:

git push origin your-branch-name

Open a pull request on GitHub with a clear description of your changes.

📄 License

This project is licensed under the MIT License.

📩 Contact

LinkedIn: https://www.linkedin.com/in/shaik-rasheed-4b76a9276/

Email: your.shaikrasheed6341@example.com

✨ Made with 💜 by Shaik Rasheed ✨
