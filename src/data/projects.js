import img1 from "../assets/chat.png";
import img2 from "../assets/ai-project-img.png";
import img3 from "../assets/password.png";
import img4 from "../assets/itask.png";
import img5 from "../assets/weather.png";
import img6 from "../assets/converter.png";
import img7 from "../assets/portfolio.png";

const projects = [
  {
    id: 1,
    Img: img1,
    Title: "Swift Talk App",
    Description: "SwiftTalk is a fast, modern chat app that brings people together in real time. Built on the MERN stack with Socket.io powering instant message delivery, it features private messaging, live presence indicators, image sharing, and profile customization — wrapped in a clean, responsive interface.",
    Link: "https://swift-talk-app-1i5p.vercel.app",
    Github: "https://github.com/Maryamf27/Swift-Talk-App",
    TechStack: ["Reactjs", "Node.js", "Expressjs", "MongoDB", "TailwindCSS", "Socket.io", "Web socket"],
    Features: ["JWT Authentication", "Private Messaging", "Online/Offline Status", "File & Image Sharing", "Profile Management", "Cloud Media Storage", "Real-Time Updates", "Centralized Error Handling"],
  },
  {
    id: 2,
    Img: img2,
    Title: "AI Review App",
    Description: "The AI Code Reviewer is an advanced web application that automatically reviews code snippets, detects errors, suggests improvements, and provides intelligent feedback just like a human reviewer.",
    Link: "",
    Github: "Private",
    TechStack: ["React", "Node.js", "Express", "Google Gemini API"],
    Features: ["Code review automation", "Error analysis", "AI feedback"],
  },
  {
    id: 3,
    Img: img3,
    Title: "Password Manager",
    Description: "An app that helps users securely store and manage their passwords.",
    Link: "https://password-manager-bdcaa4.netlify.app/",
    Github: "https://github.com/Maryamf27/Password-Manager_Project",
    TechStack: ["React", "Node.js", "Express", "MongoDB"],
    Features: [
      "Add, view, and delete passwords",
      "Hide/Show password toggle",
      "Copy password to clipboard",
      "Encrypted local storage (optional)",
      "Responsive and secure UI",
    ],
  },
  {
    id: 4,
    Img: img4,
    Title: "Todo App",
    Description: "The To-Do Task Manager is a minimalist productivity app designed to help users organize their daily tasks efficiently. It allows adding, editing, and deleting tasks with smooth animations and local storage support to keep data persistent across sessions.",
    Link: "https://todo-app-7343ea.netlify.app/",
    Github: "https://github.com/Maryamf27/Todo-List",
    TechStack: ["React", "Tailwind CSS"],
    Features: [
      "Add, edit, and delete tasks",
      "Mark tasks as completed",
      "Filter by completed or pending",
      "Data saved in local storage",
      "Minimal and responsive interface",
    ],
  },
  {
    id: 5,
    Img: img5,
    Title: "Weather App",
    Description:
      "A web app that provides users with current and forecasted weather information for a specific location.",
    Link: "https://weather-52c712.netlify.app/",
    Github: "https://github.com/Maryamf27/Weather-App",
    TechStack: ["React", "Tailwind CSS", "Axios", "OpenWeatherMap API"],
    Features: [
      "Search weather by city name",
      "Real-time temperature, humidity, and wind data",
      "Dynamic weather-based background",
      "Error handling for invalid input",
      "Responsive design",
    ],
  },
  {
    id: 6,
    Img: img6,
    Title: "Currency Converter",
    Description: "An app that converts currencies in real-time using a third-party API.",
    Link: "https://converter-ce22fd.netlify.app/",
    Github: "https://github.com/Maryamf27/Currency_Convertor_Project",
    TechStack: ["React", "Tailwind CSS", "ExchangeRate API", "Axios"],
    Features: [
      "Real-time currency conversion",
      "Supports multiple currencies",
      "Auto-updates exchange rates via API",
      "Input validation",
      "Simple and responsive UI",
    ],
  },
  {
    id: 7,
    Img: img7,
    Title: "Portfolio Website",
    Description: "A collection of practical, real-world projects built with React — including a Weather Forecast App, To-Do Manager, and Currency Converter. Each project focuses on clean UI design, API integration, and user-centric functionality, showcasing my growth as a frontend developer.",
    Link: "https://my-portfolio-270.netlify.app/#/",
    Github: "Private",
    TechStack: ["React", "Tailwind CSS", "JavaScript"],
    Features: ["Responsive design", "Animated UI", "Routing with React Router"],
  },
];

export default projects;