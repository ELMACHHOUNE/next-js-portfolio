"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

type StudentCard = {
  category: string;
  title: string;
  src: string;
  content?: React.ReactNode;
};

const Caption = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 rounded-3xl">
    <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-sans max-w-3xl mx-auto text-center">
      {children}
    </p>
  </div>
);

const studentCards: StudentCard[] = [
    {
        category: "Students",
        title: "MERN Stack Bootcamp — Nouaceur Wings Tech",
        src: "https://media.licdn.com/dms/image/v2/D4D22AQEHHILhptKRzQ/feedshare-shrink_1280/B4DZgZHH4IHwAo-/0/1752767955229?e=1762992000&v=beta&t=qRXGVNBq2281kTL5hV4omoCz2X2mXRIPRdrKSQU6SQg",
        content: <Caption>I had the pleasure of mentoring a talented group of students during the Software Developer Bootcamp organized by Nouaceur Wings Tech, in partnership with Jadara Foundation, GoMyCode, INDH, and local authorities in Nouaceur.</Caption>,
      },
      {
        category: "Students",
        title: "Web Development Workshop — Casablanca Technopark",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQHFHMHohK1uZQ/feedshare-shrink_1280/B4EZarxkGAHcAk-/0/1746638622857?e=1762992000&v=beta&t=xECZlYBGdLkjWBQMHMjviBHbbUCmVRp74DQORBZHdm0",
        content: <Caption>As part of the GIZ Morocco program with HoussniJob Innovation, I led a training session on May 5, 2025, at Casablanca Technopark for first-year students of OMNIA School of Business and Technology.</Caption>,
      },
      {
        category: "Students",
        title: "Final Project Defense — JADARA x GoMyCode Bootcamp",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQF9Puy1h9MUPQ/feedshare-shrink_2048_1536/B4EZZLUoRPHkAo-/0/1745020422609?e=1762992000&v=beta&t=yAWgJ5c2ALTWg63Zo756drTNJwiv47IQ8rIrmDPZrUM",
        content: <Caption>My students successfully completed their software development training under the JADARA Foundation in collaboration with GoMyCode.</Caption>,
      },
      {
        category: "Students",
        title: "Full Stack Development Training — Casablanca Technopark",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQFNLftHKiHNmQ/feedshare-shrink_2048_1536/B4EZXdx0NHHMAo-/0/1743182606811?e=1762992000&v=beta&t=acq_5v8OVmfsJuMkOmuq3F4T4pX0bqeC6o9HBnbc-Ts",
        content: <Caption>As a trainer, I had the pleasure of leading a 3-day Full Stack Development workshop at Technopark Casablanca (MITC) with HoussniJob Innovation.</Caption>,
      },
      {
        category: "Students",
        title: "Frontend Development Training — Casablanca Technopark",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQGwuyDVm_97FA/feedshare-shrink_2048_1536/B4EZW.3.3BHgAo-/0/1742664122168?e=1762992000&v=beta&t=hCiNtzfTfr6DFWukfTNe6V0jvmhl7-FN0hiRaEoV1uM",
        content: <Caption>As a trainer, I had the pleasure of leading a 4-day Frontend Development workshop at Technopark Casablanca (MITC) with HoussniJob Innovation.</Caption>,
      },
      {
        category: "Students",
        title: "Professional Training — Technopark Casablanca",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQGoVcczSd9fkA/feedshare-shrink_2048_1536/B4EZVtjKWcGgA0-/0/1741299713982?e=1762992000&v=beta&t=ohnTffgkzOamoU79ibqBc2B9Xv3klF52lFHciStCt5g",
        content: <Caption>I led an intensive professional training at Technopark Casablanca with HoussniJob Innovation, under the Tamheen Program by GIZ Morocco.</Caption>,
      },
      {
        category: "Event",
        title: "GoToDev.ma at the Professional Excellence Forum — Ibn Tofail University",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQFoYQAkU1CqTQ/feedshare-shrink_2048_1536/B4EZOybccKHkAs-/0/1733865365018?e=1762992000&v=beta&t=qjOIBnSXiqXSUu5J1WUOKVPgmQhCpZTTznEYRqxUvaU",
        content: <Caption>Proud to represent GoToDev.ma at the Professional Excellence Forum (UIT Job Fair) on December 4–5, 2024, after winning the first edition of the Hack@UIT Hackathon.</Caption>,
      },
      {
        category: "Students",
        title: "MERN Stack Consultation — Casablanca",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQFDaP64ORHOvA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719091080648?e=1762992000&v=beta&t=o1C3Y0cTodURuGB1OUR_aFi2Em6nRI1DJmvXFNF3wgI",
        content: <Caption>I had the pleasure of leading a 6-day MERN Stack consultation in Casablanca with Keltoum Houssni and HoussniJob Innovation.
Trained over 34 students.</Caption>,
      },
      {
        category: "Students",
        title: "Graduation — Web Development Essentials & Full-Stack JS",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQEcgjxwMNlqUg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1715519963575?e=1762992000&v=beta&t=zx03rilQe0ZXwa395ItqWXoRmPd1Ov41D7VCAWq8Ke0",
        content: <Caption>Celebrating the graduation of my talented students after five months of intensive Web Development training at GoMyCode!</Caption>,
      },
      {
        category: "Hackathon",
        title: "Hackathon — e-Tofoula Programming Competition",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQEZbqLSuVulJQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1710256710190?e=1762992000&v=beta&t=da3QeqcacI5vpmklPnmO8YlBp-XzL__5h064ffXgnPs",
        content: <Caption>Honored to represent GoMyCode at the first e-Tofoula Programming Competition, organized by the National Observatory for Children’s Rights and Université Internationale de Rabat (Feb 14–16/2024).</Caption>,
      },
      {
        category: "Students",
        title: "Graduation — Web, UX/UI & Graphic Design Programs",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQGO8sE87kGO7Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1710161189395?e=1762992000&v=beta&t=-z_K6z24QP5LJM-W65pbCExy5MCMwtm2AqQoWl3X30g",
        content: <Caption>Celebrating the success of my students at GoMyCode who completed Introduction to Web Development, UX/UI Design, and Graphic Design courses!</Caption>,
      },
      {
        category: "Students",
        title: "Graduation — 3-Month Training at GoMyCode Rabat",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQHOaZTorqGdUw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1703957472109?e=1762992000&v=beta&t=XihUKz1loValUeIdZshpeJ_R-zaHrFTGJ0J4A8qmjes",
        content: <Caption>Thrilled to celebrate the completion of a three-month training with an amazing group of students at GoMyCode Rabat!</Caption>,
      },
      {
        category: "Workshop",
        title: "Workshop — Soft Skills & CV Writing at GoMyCode Rabat",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQGkMIJGU8SGZg/feedshare-shrink_1280/feedshare-shrink_1280/0/1699104868767?e=1762992000&v=beta&t=dDiOMX_1e7MVbRUpMcbO5ryidiwu5WO7GhkYt0I0spc",
        content: <Caption>Grateful to GoMyCode Rabat for the opportunity to lead a Soft Skills and CV Writing workshop on November 3rd (2023)</Caption>,
      },
      {
        category: "Workshop",
        title: "Workshop — Mastering LinkedIn for Career Growth",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQFy9yE3DJkXrA/feedshare-shrink_800/feedshare-shrink_800/0/1697908330880?e=1762992000&v=beta&t=_TzgmvwLCN9jyDQv3N8Yy1Q3rJVsCfcDI74Zp6_zSWQ",
        content: <Caption>Wrapped up a successful LinkedIn Workshop where I shared strategies for optimizing profiles, networking effectively, and landing dream jobs.</Caption>,
      },
      {
        category: "Workshop",
        title: "Workshop — Build Your First Web Page (HTML/CSS/JS) — GoMyCode Rabat",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQFhSYBdzgPw0w/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1694247161049?e=1762992000&v=beta&t=8wlFFxuGYEhhNQ_vw9mOrWBOpU209KGazSDF6-LAy3o",
        content: <Caption>Grateful to GoMyCode Hackerspace Rabat for the opportunity to lead the free workshop “Build Your First Web Page with HTML/CSS/JS” on September 6th.</Caption>,
      },
      
];

export function StudentsGallery() {
  const cards = studentCards.map((card, index) => (
    <Card key={card.src} card={card} index={index} aspect="landscape" />
  ));

  return (
    <div className="w-full h-full py-16">
      <Carousel items={cards} />
    </div>
  );
}
