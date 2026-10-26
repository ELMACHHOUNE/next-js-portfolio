import { links } from "@/config";

export const navItems = [
  { name: "About", link: "/#about" },
  { name: "Projects", link: "/#projects" },
  { name: "Contact", link: "/#contact" },
  { name: "Achivements", link: "/achivements" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "About me",
    className:
      "lg:col-span-3 md:col-span-6 lg:row-span-2 lg:min-h-[55vh]",
    imgClassName: "w-full h-full object-right opacity-90",
    titleClassName: "justify-end items-start",
    img: "/gotodev.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Remote-first, impact-driven full-stack developer",
    description: "What drives me",
    className: "lg:col-span-2 md:col-span-3 lg:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center items-center text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-5 md:col-span-6 md:min-h-56",
    imgClassName: "",
    titleClassName: "justify-center items-center text-center",
    img: "",
    spareImg: "",
  },

  {
    id: 5,
    title: "Software Engineer • Graphic Designer • Instructor & Consultant • Auto-Entrepreneur",
    description: "The Inside Scoop",
    className: "lg:col-span-5 md:col-span-6 lg:min-h-[45vh]",
    imgClassName: "absolute right-6 bottom-6 w-56 md:w-96 opacity-80",
    titleClassName: "justify-end items-start",
    img: "/b5.webp",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 7,
    title: "ABAT Consulting Website",
    des: "A full-stack corporate website for ABAT Consulting, a Rabat-based firm for consulting, professional training & coaching — bilingual FR/EN, services, programs and contact.",
    img: "/projects/abat-website.png",
    iconLists: ["/technologies/next.svg", "/technologies/tail.svg", "/technologies/ts.svg", "/technologies/nodejs.svg"],
    link: "https://abat-consulting.ma/",
    sourceCode: "https://abat-consulting.ma/",
  },
  {
    id: 1,
    title: "Quiz-GoToDev Platform",
    des: "A quiz platform for university students to master Microeconomics and other topics.",
    img: "/projects/quiz_website.png",
    iconLists: ["/technologies/re.svg", "/technologies/tail.svg", "/technologies/ts.svg", "/technologies/nodejs.svg", "/technologies/express.svg"],
    link: "https://www.quiz-gotodev.tech/",
    sourceCode: "https://www.quiz-gotodev.tech/",
  },
  {
    id: 2,
    title: "GoToDev Digital Solutions",
    des: "A platform offering web, mobile app development, UX/UI design, and more.",
    img: "/projects/gotodev_website.png",
    iconLists: ["/technologies/next.svg", "/technologies/tail.svg", "/technologies/ts.svg", ],
    link: "https://gotodev.ma",
    sourceCode: "https://gotodev.ma",
  },
  {
    id: 3,
    title: "G.K Maroc E-commerce Platform",
    des: "An elegant eCommerce website showcasing high-end, customizable bags and accessories.",
    img: "/projects/gk_website.png",
    iconLists: ["/technologies/re.svg", "/technologies/tail.svg", "/technologies/js.png", "/technologies/nodejs.svg", "/technologies/express.svg"],
    link: "https://gk-maroc.ma/",
    sourceCode: "https://gk-maroc.ma/",
  },
  {
    id: 4,
    title: "MR TECHNOLOGIES E-commerce Platform",
    des: "A sleek and modern eCommerce website offering high-performance laptops with an intuitive shopping experience.",
    img: "/projects/mrtechnologies_website.png",
    iconLists: ["/technologies/next.svg", "/technologies/tail.svg", "/technologies/ts.svg","/technologies/nodejs.svg", "/technologies/express.svg"],
    link: "https://mr-technologies.ma/",
    sourceCode: "https://mr-technologies.ma/",
  },
  {
    id: 5,
    title: "NLIVRILIK Delivery Platform",
    des: "A modern and efficient delivery platform that connects users with trusted couriers, offering a seamless experience for managing deliveries and tracking orders in real time.",
    img: "/projects/nlivrilik_website.png",
    iconLists: ["/technologies/re.svg", "/technologies/tail.svg", "/technologies/js.png", "/technologies/nodejs.svg", "/technologies/express.svg"],
    link: "https://nlivrilik.ma/",
    sourceCode: "https://nlivrilik.ma/",
  },
  {
    id: 6,
    title: "Toolkit Hub",
    des: "A fully client-side platform built with React and Tailwind CSS, providing developers with an all-in-one toolkit for UI inspiration, productivity resources, and design components — all without a backend.",
    img: "/projects/toolkithub.png",
    iconLists: ["/technologies/re.svg", "/technologies/tail.svg", "/technologies/ts.svg"],
    link: "https://toolkit-hub.gotodev.ma/",
    sourceCode: "https://toolkit-hub.gotodev.ma/",
  },
  
] as const;

export const testimonials = [
  {
    quote: `${links.ownerName}’s versatility is unparalleled. Whether it's crafting seamless user experiences, building robust applications, or pitching ideas to clients, he excels in every role. He inspires the team to push boundaries and achieve greatness.`,
    name: "Issam EL JAOUHARI",
    title: "Mobile & Full-stack Web Developer",
    profileImg: "/profiles/issam.jpg",
  },
  {
    quote: `${links.ownerName} is a powerhouse of skills—his expertise in Full Stack Development and UX/UI design sets him apart. His ability to manage projects with precision and deliver innovative solutions makes working with him a truly enriching experience.`,
    name: "Azeddine Ait TAAKAT",
    title: "ISTQB & Full-stack Web Developer",
    profileImg: "/profiles/azeddine.jpg",
  },
  {
    quote: `${links.ownerName}’s ability to seamlessly combine technical expertise, marketing strategies, and outstanding design is nothing short of remarkable. His charisma and vision inspire confidence, and he always finds innovative ways to bring value to both the team and our clients.`,
    name: "Reda EL MACHHOUNE",
    title: "Teacher of English & Digital Marketer",
    profileImg: "/profiles/reda.jpg",
  },
  {
    quote: `${links.ownerName} is the definition of a multi-talented professional. From designing intuitive interfaces to developing scalable systems, he does it all with exceptional skill and a keen eye for detail. His leadership and marketing acumen have significantly propelled GoToDev forward.`,
    name: "Oussama EZITOUNI",
    title: "Data Scientist & Software Engineer",
    profileImg: "/profiles/oussama.png",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "mrtechnologies",
    nameImg: "/companies/mrtechnologies.webp",
  },
  {
    id: 2,
    name: "uit",
    nameImg: "/companies/uit.png",
  },
  {
    id: 3,
    name: "paylik",
    nameImg: "/companies/paylik.webp",
  },
  {
    id: 4,
    name: "gotodev",
    nameImg: "/companies/gotodev2.png",
  },
  {
    id: 5,
    name: "ecoimpact",
    nameImg: "/companies/ecoimpact.svg",
  },
  {
    id: 6,
    name: "quiz",
    nameImg: "/companies/quiz.png",
  },
  {
    id: 7,
    name: "gk",
    nameImg: "/companies/gk.png",
  },
  {
    id: 8,
    name: "Najm",
    nameImg: "/companies/najm-foundation.png",
  },
  {
    id: 9,
    name: "Najm Digital Academy",
    nameImg: "/companies/najm-digital-academy.png",
  },
  {
    id: 10,
    name: "houssnijob",
    nameImg: "/companies/houssnijob.png",
  },
  {
    id: 11,
    name: "GMC school of technology",
    nameImg: "/companies/gmc.png",
  },
  {
    id: 19,
    name: "Woolf",
    nameImg: "/companies/woolf.jpg",
  },
  {
    id: 12,
    name: "Jadara",
    nameImg: "/companies/jadara.png",
  },
  {
    id: 18,
    name: "GON Wings Tech",
    nameImg: "/companies/gon-wings-tech.png",
  },
  {
    id: 17,
    name: "Nouaceur Wings Tech",
    nameImg: "/companies/nouaceur-wings-tech.png",
  },
  {
    id: 13,
    name: "GoMyCode",
    nameImg: "/companies/gmc.jpg",
  },
  {
    id: 14,
    name: "Aksam assurance",
    nameImg: "/companies/aksam.png",
  },
  {
    id: 15,
    name: "nlivrilik",
    nameImg: "/companies/nlivrilik.png",
  },
  {
    id: 16,
    name: "MDSSUP",
    nameImg: "/companies/mdssup.png",
  },
    {
    id: 20,
    name: "Akkar Chark",
    nameImg: "/companies/akkar-chark.webp",
  },
  {
    id: 21,
    name: "ONSSA",
    nameImg: "/companies/onssa.png",
  },
  {
    id: 22,
    name: "Actway Consulting",
    nameImg: "/companies/actway.jpg",
  },
  {
    id: 23,
    name: "ABAT",
    nameImg: "/companies/abat.svg",
  },


] as const;

export const workExperience = [
  {
    id: 1,
    title: "Full-stack Developer at IR4LAB (Anapec Contract)",
    desc: "Contributed to innovative projects as a Full-stack Developer at IR4LAB from August 2023 to November 2023, leveraging modern technologies in a hybrid work setup to deliver impactful solutions.",
    className: "md:col-span-2",
    thumbnail: "/companies/IR4LAB.png",
  },
  {
    id: 2,
    title: "UX/UI & Graphic Design instructor at GoMyCode (Freelance)",
    desc: "Thrilled to join GoMyCode as a part-time instructor, teaching Graphic Design & UX/UI Design since July 2023.",
    className: "md:col-span-2",
    thumbnail: "/companies/gmc.jpg",
  },
  {
    id: 3,
    title: "Full Stack Web instructor at GoMyCode (Freelance)",
    desc: "Thrilled to join GoMyCode as a part-time Web Development instructor, teaching the MERN Stack since August 2023.",
    className: "md:col-span-2",
    thumbnail: "/companies/gmc.jpg",
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
    thumbnail: "/companies/houssnijob.png",
  },
  {
    id: 5,
    title: "Instructor – MSc Software Engineering at GMC School of Technology x Woolf (Freelance)",
    desc: [
      "Jan 2025 – Present (Remote, Morocco): Instructor in the 18-month MSc Software Engineering – MSc Computer Science: Software Engineering – at GMC School of Technology, a Woolf member college.",
      "Woolf is a Malta-based, MFHEA-licensed higher-education institution in the European Higher Education Area (collegiate model); program MFHEA Level 7 – 90 ECTS, internationally recognized.",
    ],
    className: "md:col-span-2",
    thumbnail: "/companies/gmc.png",
    logos: ["/companies/gmc.png", "/companies/woolf.jpg"],
  },
  
  {
    id: 6,
    title: "Technical Assistant in Web Development at Jadara Foundation – GON Wings Tech School",
    desc: [
      "Sep – Dec 2025: Assisted the 'GON Wings Tech School' project within Jadara Foundation’s Second Chance Schools program.",
      "Delivered remote Full Stack Web Development training (frontend & backend) via the ALX platform for NEET youth in Guelmim-Oued Noun.",
    ],
    className: "md:col-span-2",
    thumbnail: "/companies/jadara.png",
    logos: ["/companies/jadara.png", "/companies/gon-wings-tech.png"],
  },
  {
    id: 7,
    title: "AI Instructor at HoussniJob Innovation (Freelance)",
    desc: [
      "Sep 22 – Oct 9, 2025 (CTPES Casablanca): Delivered an AI training program with HoussniJob Innovation under the GIZ program.",
      "Guided students in workflow automation using n8n and API integrations.",
    ],
    className: "md:col-span-2",
    thumbnail: "/companies/houssnijob.png",
  },
  {
    id: 9,
    title: "Full Stack MERN Bootcamp Instructor (Freelance) at Jadara Foundation – Nouaceur Wings Tech",
    desc: [
      "Dec 2025 – Jun 2026 (6 months, On-site, Bouskoura – Casablanca): Intensive Full Stack Web Development bootcamp – MERN Stack.",
      "Nouaceur Wings Tech project by Jadara Foundation – presentiel training focused on hands-on projects & employability.",
    ],
    className: "md:col-span-2",
    thumbnail: "/companies/jadara.png",
    logos: ["/companies/jadara.png", "/companies/nouaceur-wings-tech.png"],
  },
  {
    id: 8,
    title: "IT Development Instructor (Freelance) at MDSSUP – Mohammedia",
    desc: [
      "Feb – Jul 2026 (On-site, Freelance): IT Development for 1st & 2nd year Bac+2.",
      "MDSSUP — accredited private institution where innovation comes to life; hands-on, project-based & employability-focused programs.",
    ],
    className: "md:col-span-2",
    thumbnail: "/companies/mdssup.png",
  },
  {
    id: 10,
    title: "Full Stack MERN + Generative AI Instructor (Freelance) at Jadara Foundation – Wings By Digital",
    desc: [
      "May – Nov 2026 (6 months, On-site, Bouskoura – Casablanca, Presentiel): Formation Full Stack MERN + Generative AI.",
      "Wings By Digital project by Jadara Foundation – presentiel bootcamp focused on hands-on projects & employability.",
    ],
    className: "md:col-span-2",
    thumbnail: "/companies/jadara.png",
  },
  {
    id: 11,
    title: "AI Trainer & Consultant (Freelance) at Actway Consulting – ONSSA",
    desc: [
      "Oct 20–21, 2026 (2 days, On-site, Tangier–Tetouan–Al Hoceima): Delivered an Artificial Intelligence training for the staff of ONSSA, the National Office for Food Safety, at its Regional Directorate.",
      "Focus: AI in public administration — integrating practical AI tools into daily tasks, improving productivity & workflows, and adopting AI in a responsible way.",
    ],
    className: "md:col-span-2",
    thumbnail: "/companies/actway.jpg",
    logos: ["/companies/actway.jpg", "/companies/onssa.png"],
  },
  
  
  
  
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/socialMedia/git.svg",
    link: "https://github.com/ELMACHHOUNE",
  },
  {
    name: "Facebook",
    img: "/socialMedia/face.svg",
    link: "https://web.facebook.com/m.elmachhoune/",
  },
  {
    name: "LinkedIn",
    img: "/socialMedia/link.svg",
    link: "https://www.linkedin.com/in/mohamed-el-machhoune",
  },
  {
    name: "Whatsapp",
    img: "/socialMedia/whatsapp.svg",
    link: "https://wa.me/+212649455082",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Node.js", "Tailwind CSS", "MongoDB"],
} as const;
