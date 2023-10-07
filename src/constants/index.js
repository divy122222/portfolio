import {
  googleclone,
  ansible,
  backend,
  creator,
  css,
  education,
  flutter,
  git,
  koch,
  metaverse,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  web,
  flutterapp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Application Development",
    icon: web,
  },
  {
    title: "Web development",
    icon: mobile,
  },
  {
    title: "Devops",
    icon: backend,
  },
  {
    title: "Software Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter ",
    icon: flutter,
  },
  {
    name: "Ansible ",
    icon: ansible,
  },
  {
    name: "CSS ",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Koch Business Solutions India",
    icon: koch,
    iconBg: "#383E56",
    date: "March 2023 - September 2023",
    points: [
      "Developed scripts in Python to automate the process.",
      "Worked closely with the infrastructure team to analyze the company’s IT infrastructure, including servers, networks, and cloud services."
    ],
  },
];

const educations = [
  {
    title: "B.E. in Mechanical Engineering",
    college_name: "JSS Science and Technology University, Mysore",
    icon: education,
    iconBg: "#383E56",
    date: "August 2019 - July 2023",
    points: [    ],
  },
  {
    title: "Senior Secondary",
    college_name: "DAV Public School, Ranchi",
    icon: education,
    iconBg: "#383E56",
    date: "August 2016 - June 2018",
    points: [    ],
  },
  {
    title: "Higher Secondary",
    college_name: "DAV Public School, Ranchi",
    icon: education,
    iconBg: "#383E56",
    date: "August 2004 - June 2016",
    points: [    ],
  },
];

const projects = [
  {
    name: "Metaverse World",
    description:
      "Developed a Next.js and Tailwind CSS-powered website as a learning project, incorporating diverse virtual environments using Spline, offering users an interactive metaverse-like experience. This project represents the intersection of technology, creativity, and the boundless possibilities of the digital age.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/divyanshu2410/metaverse-",
  },
  {
    name: "Food Ordering App",
    description:
      "Designed and developed a cross-platform food ordering application using Flutter for the front-end and Node.JS with MongoDB for the back-end. Built a scalable and performant server-side architecture using Node.JS and MongoDB. Designed robust APIs for seamless communication between the mobile app and the backend server.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: flutterapp,
    source_code_link: "https://github.com/divyanshu2410/Food_Ordering_app",
  },
  {
    name: "Google Clone App",
    description:
      "Cloned the most used search engine that is responsive, fetches results and is accurate using Flutter framework. Used knowledge of API and implemented using Dart, as it is used to fetch results for our searches.The API used here is the Google Custom Search API.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "Android Studio",
        color: "pink-text-gradient",
      },
    ],
    image: googleclone,
    source_code_link: "https://github.com/divyanshu2410/Google_clone",
  },
];

export { educations, experiences, projects, services, technologies };
