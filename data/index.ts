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
    title: "Tech enthusiast with a passion for development.",
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
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://www.quiz-gotodev.tech/",
    sourceCode: "https://www.quiz-gotodev.tech/",
  },
  {
    id: 2,
    title: "GoToDev Digital Solutions",
    des: "A platform offering web, mobile app development, UX/UI design, and more.",
    img: "/gotodev_website.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://gotodev.ma",
    sourceCode: "https://gotodev.ma",
  },
  {
    id: 3,
    title: "G.K Maroc E-commerce Platform",
    des: "An elegant eCommerce website showcasing high-end, customizable bags and accessories.",
    img: "/gk_website.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://gk-maroc.ma/",
    sourceCode: "https://gk-maroc.ma/",
  },
  {
    id: 4,
    title: "MR TECHNOLOGIES E-commerce Platform",
    des: "A sleek and modern eCommerce website offering high-performance laptops with an intuitive shopping experience.",
    img: "/mrtechnologies_website.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://mr-technologies.ma/",
    sourceCode: "https://mr-technologies.ma/",
  },
] as const;

export const testimonials = [
  {
    quote: `Working with ${links.ownerName} has been nothing short of inspiring. His ability to blend technical brilliance with creative design and strategic thinking makes him a rare gem in our industry. He’s not just a teammate—he’s a mentor to us all.`,
    name: "Yassine ELMOUSS",
    title: "Software Developer",
    profileImg: "/yassine.webp",
  },
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
    id: 10,
    name: "gk",
    nameImg: "/gk.png",
  },
  {
    id: 6,
    name: "quiz",
    nameImg: "/quiz.png",
  },
  {
    id: 7,
    name: "sbai",
    nameImg: "/msbai.svg",
  },
  {
    id: 8,
    name: "touzar",
    nameImg: "/touzar.webp",
  },
  {
    id: 9,
    name: "elam",
    nameImg: "/elam.png",
  },
  {
    id: 11,
    name: "vic",
    nameImg: "/vic.png",
  },
  {
    id: 12,
    name: "houssnijob",
    nameImg: "/houssnijob.png",
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
    title: "MERN Stack Trainer (Consultation - Freelance)",
    desc: "Delivered a 6-day MERN Stack training to 34+ students at HoussniJob Innovation from May 2024 to June 2024, collaborating with higher education institutions to enhance tech skills.",
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
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Node.js", "Tailwind CSS", "MongoDB"],
} as const;
