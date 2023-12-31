import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    internshala,
    salesforce,
    rksc,
    codingninjas,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Programmer",
      icon: mobile,
    },
    {
      title: "Java Developer",
      icon: backend,
    },
    {
      title: "Tech Blogger",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Salesforce Developer Intern",
      company_name: "Smart Internz",
      icon: salesforce,
      iconBg: "#383E56",
      date: "Apr 2023 - May 2023",
      points: [
        "Developed and implemented Apex Triggers for automating business processes.",
        "Integrated Salesforce APIs to connect the platform with external applications, enhancing data flow and synchronization.",
        "Collaborated with cross-functional teams to gather requirements, ensuring the development aligned with business objectives.",
        "Created Apex Components to enhance the user interface and improve user experience.",
      ],
    },
    {
      title: "Cyber Security Intern",
      company_name: "Rachakonda Security Council",
      icon: rksc,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Now",
      points: [
        "Collaborated with the Rachakonda Security Council team to identify and mitigate potential security vulnerabilities across various platforms.",
        "Assisted in conducting penetration testing and vulnerability assessments.",
        "Engaged in continuous learning sessions and workshops to stay updated on the latest cyber threats.",
        "Played a key role in enhancing the organization's security awareness.",
      ],
    },
    {
      title: "Ninja Entreprenuer",
      company_name: "Coding Ninjas",
      icon: codingninjas,
      iconBg: "#383E56",
      date: "Mar 2023 - Aug 2023",
      points: [
        "Collaborated with industry experts to stay ahead of tech trends and incorporate best practices.",
        "Organized and led coding workshops, elevating the community's programming proficiency.",
        "Collaborated with content creators to produce engaging multimedia content for various platforms.",
        "Analyzed and leveraged key performance metrics to optimize marketing strategies.",
      ],
    },
    {
      title: "Internshala Student Partner",
      company_name: "Internshala",
      icon: internshala,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Jan 2023",
      points: [
        "Organized and led workshops, webinars, and training sessions, enhancing students' skills and introducing them to potential career opportunities.",
        "Fostered relationships with college departments, securing collaboration for Internshala events.",
        "Provided feedback and insights to the Internshala team, contributing to the refinement of their student-centric initiatives.",
        "Built a network of student ambassadors, fostering a community of like-minded individuals focused on professional growth and development.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Note Flow - Notes Sharing App",
      description:
        "Note Flow lets people find and share short tech notes. It's designed to help users quickly get the information they need and share their knowledge with others.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/samara6855/Noteflow",
    },

    {
      name: "Text - Utilities",
      description:
        "Text Utilities is a comprehensive tool designed to enhance text processing. It boasts features like word and character counting, conversion to uppercase or lowercase, and a text-to-speech functionality.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/samara6855/Text-Utilities",
    },
    
    {
      name: "Nike - Landing Page",
      description:
        "This stylish page is dedicated to showcasing Nike products in their full glory. It offers viewers an engaging experience, highlighting the latest trends and bestsellers. Visitors can effortlessly navigate and explore Nike's offerings.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: tripguide,
      source_code_link: "https://github.com/samara6855/Nike-Landing-Page",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };