import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/gotodev.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driven to deliver impactful results.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "MERN Stack Developer, Graphic Designer, Instructor & Consultant",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Quiz-GoToDev Platform",
    des: "A quiz platform for university students to master Microeconomics and other topics.",
    img: "/quiz_website.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/nodejs.svg", "express.svg"],
    link: "https://www.quiz-gotodev.tech/",
    sourceCode: "https://www.quiz-gotodev.tech/",
  },
  {
    id: 2,
    title: "GoToDev Digital Solutions",
    des: "A platform offering web, mobile app development, UX/UI design, and more.",
    img: "/gotodev_website.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", ],
    link: "https://gotodev.ma",
    sourceCode: "https://gotodev.ma",
  },
  {
    id: 3,
    title: "G.K Maroc E-commerce Platform",
    des: "An elegant eCommerce website showcasing high-end, customizable bags and accessories.",
    img: "/gk_website.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/nodejs.svg", "express.svg"],
    link: "https://gk-maroc.ma/",
    sourceCode: "https://gk-maroc.ma/",
  },
  {
    id: 4,
    title: "MR TECHNOLOGIES E-commerce Platform",
    des: "A sleek and modern eCommerce website offering high-performance laptops with an intuitive shopping experience.",
    img: "/mrtechnologies_website.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg","/nodejs.svg", "express.svg"],
    link: "https://mr-technologies.ma/",
    sourceCode: "https://mr-technologies.ma/",
  },
  {
    id: 5,
    title: "NLIVRILIK Delivery Platform",
    des: "A modern and efficient delivery platform that connects users with trusted couriers, offering a seamless experience for managing deliveries and tracking orders in real time.",
    img: "/nlivrilik_website.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/nodejs.svg", "express.svg"],
    link: "https://nlivrilik.ma/",
    sourceCode: "https://nlivrilik.ma/",
  },
  {
    id: 6,
    title: "Toolkit Hub",
    des: "A fully client-side platform built with React and Tailwind CSS, providing developers with an all-in-one toolkit for UI inspiration, productivity resources, and design components — all without a backend.",
    img: "/toolkithub.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://toolkit-hub.gotodev.ma/",
    sourceCode: "https://toolkit-hub.gotodev.ma/",
  },
  
] as const;

export const testimonials = [
  {
    quote: `${links.ownerName}’s versatility is unparalleled. Whether it's crafting seamless user experiences, building robust applications, or pitching ideas to clients, he excels in every role. He inspires the team to push boundaries and achieve greatness.`,
    name: "Issam EL JAOUHARI",
    title: "Mobile & Full-stack Web Developer",
    profileImg: "/issam.jpg",
  },
  {
    quote: `${links.ownerName} is a powerhouse of skills—his expertise in Full Stack Development and UX/UI design sets him apart. His ability to manage projects with precision and deliver innovative solutions makes working with him a truly enriching experience.`,
    name: "Azeddine Ait TAAKAT",
    title: "ISTQB & Full-stack Web Developer",
    profileImg: "/azeddine.jpg",
  },
  {
    quote: `${links.ownerName}’s ability to seamlessly combine technical expertise, marketing strategies, and outstanding design is nothing short of remarkable. His charisma and vision inspire confidence, and he always finds innovative ways to bring value to both the team and our clients.`,
    name: "Reda EL MACHHOUNE",
    title: "Teacher of English & Digital Marketer",
    profileImg: "/reda.jpg",
  },
  {
    quote: `${links.ownerName} is the definition of a multi-talented professional. From designing intuitive interfaces to developing scalable systems, he does it all with exceptional skill and a keen eye for detail. His leadership and marketing acumen have significantly propelled GoToDev forward.`,
    name: "Oussama EZITOUNI",
    title: "Data Scientist & Software Engineer",
    profileImg: "/oussama.png",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "mrtechnologies",
    nameImg: "/mrtechnologies.webp",
  },
  {
    id: 2,
    name: "uit",
    nameImg: "/uit.png",
  },
  {
    id: 3,
    name: "paylik",
    nameImg: "/paylik.webp",
  },
  {
    id: 4,
    name: "gotodev",
    nameImg: "/gotodev2.png",
  },
  {
    id: 5,
    name: "ecoimpact",
    nameImg: "/ecoimpact.svg",
  },
  {
    id: 6,
    name: "quiz",
    nameImg: "/quiz.png",
  },
  {
    id: 7,
    name: "gk",
    nameImg: "/gk.png",
  },
  {
    id: 8,
    name: "touzar",
    nameImg: "/touzar.webp",
  },
  {
    id: 9,
    name: "vic",
    nameImg: "/vic.png",
  },
  {
    id: 10,
    name: "houssnijob",
    nameImg: "/houssnijob.png",
  },
  {
    id: 11,
    name: "GMC school of technology",
    nameImg: "/gmc.png",
  },
  {
    id: 12,
    name: "Jadara",
    nameImg: "/jadara.png",
  },
  {
    id: 13,
    name: "GoMyCode",
    nameImg: "/gmc.jpg",
  },
  {
    id: 14,
    name: "Aksam assurance",
    nameImg: "/aksam.png",
  },
  {
    id: 15,
    name: "nlivrilik",
    nameImg: "/nlivrilik.png",
  },
 

] as const;

export const workExperience = [
  {
    id: 1,
    title: "Full-stack Developer at IR4LAB (Anapec Contract)",
    desc: "Contributed to innovative projects as a Full-stack Developer at IR4LAB from August 2023 to November 2023, leveraging modern technologies in a hybrid work setup to deliver impactful solutions.",
    className: "md:col-span-2",
    thumbnail: "/IR4LAB.png",
  },
  {
    id: 2,
    title: "UX/UI & Graphic Design instructor at GoMyCode (Freelance)",
    desc: "Thrilled to join GoMyCode as a part-time instructor, teaching Graphic Design & UX/UI Design since July 2023.",
    className: "md:col-span-2", 
    thumbnail: "/gmc.jpg",
  },
  {
    id: 3,
    title: "Full Stack Web instructor at GoMyCode (Freelance)",
    desc: "Thrilled to join GoMyCode as a part-time Web Development instructor, teaching the MERN Stack since August 2023.",
    className: "md:col-span-2",
    thumbnail: "/gmc.jpg",
  },
  {
    id: 4,
    title:  "Full stack web instructor at HoussniJob Innovation (Freelance)",
    desc: [
      "May–June 2024 (6 days): Trained 34+ second-year students from EFET Casablanca and EURELEC Casablanca in MERN Stack development.",
      "March 3–26, 2025 (11 days): Delivered advanced MERN Stack workshops for EFET and EURELEC students in partnership with HoussniJob Innovation and the Tamheen program by GIZ.",
      "May 5–26, 2025 (4 days): Provided MERN Stack instruction to students from OMNIA School, focusing on practical frontend and backend development skills.",
    ],
    className: "md:col-span-2",
    thumbnail: "/houssnijob.png",
  },
  {
    id: 5,
    title: "Instructor – MSc in Software Engineering at GoMyCode School of Technology (Freelance)",
    desc: [
      "Jan 2025 – Present (Remote, Morocco): Instructor in the 18-month MSc Software Engineering program.",
      "Program accredited by Woolf and internationally recognized (MFHEA Level 7 – 90 ECTS).",
    ],
    className: "md:col-span-2",
    thumbnail: "/gmc.png",
  },
  
  {
    id: 6,
    title: "Technical Assistant in Web Development at Jadara Foundation (Freelance)",
    desc: [
      "Sep – Dec 2025: Assisted the 'GON Wings Tech School' project within Jadara Foundation’s Second Chance Schools program.",
      "Delivered remote Full Stack Web Development training (frontend & backend) via the ALX platform for NEET youth in Guelmim-Oued Noun.",
    ],
    className: "md:col-span-2", 
    thumbnail: "/jadara.png",
  },
  
  
  {
    id: 7,
    title: "AI Instructor at HoussniJob Innovation (Freelance)",
    desc: [
      "Sep 22 – Oct 9, 2025 (CTPES Casablanca): Delivered an AI training program with HoussniJob Innovation under the GIZ program.",
      "Guided students in workflow automation using n8n and API integrations.",
    ],
    className: "md:col-span-2",
    thumbnail: "/houssnijob.png",
  },
  
  
  
  
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/ELMACHHOUNE",
  },
  {
    name: "Facebook",
    img: "/face.svg",
    link: "https://web.facebook.com/m.elmachhoune/",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mohamed-el-machhoune",
  },
  {
    name: "Whatsapp",
    img: "/whatsapp.svg",
    link: "https://wa.me/+212649455082",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Node.js", "Tailwind CSS", "MongoDB"],
} as const;
