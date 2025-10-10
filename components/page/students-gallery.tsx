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
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQFhSYBdzgPw0w/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1694247161049?e=1762992000&v=beta&t=8wlFFxuGYEhhNQ_vw9mOrWBOpU209KGazSDF6-LAy3o",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQFy9yE3DJkXrA/feedshare-shrink_800/feedshare-shrink_800/0/1697908330880?e=1762992000&v=beta&t=_TzgmvwLCN9jyDQv3N8Yy1Q3rJVsCfcDI74Zp6_zSWQ",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQGkMIJGU8SGZg/feedshare-shrink_1280/feedshare-shrink_1280/0/1699104868767?e=1762992000&v=beta&t=dDiOMX_1e7MVbRUpMcbO5ryidiwu5WO7GhkYt0I0spc",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQHOaZTorqGdUw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1703957472109?e=1762992000&v=beta&t=XihUKz1loValUeIdZshpeJ_R-zaHrFTGJ0J4A8qmjes",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQGO8sE87kGO7Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1710161189395?e=1762992000&v=beta&t=-z_K6z24QP5LJM-W65pbCExy5MCMwtm2AqQoWl3X30g",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQEZbqLSuVulJQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1710256710190?e=1762992000&v=beta&t=da3QeqcacI5vpmklPnmO8YlBp-XzL__5h064ffXgnPs",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQEcgjxwMNlqUg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1715519963575?e=1762992000&v=beta&t=zx03rilQe0ZXwa395ItqWXoRmPd1Ov41D7VCAWq8Ke0",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQFDaP64ORHOvA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719091080648?e=1762992000&v=beta&t=o1C3Y0cTodURuGB1OUR_aFi2Em6nRI1DJmvXFNF3wgI",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQFoYQAkU1CqTQ/feedshare-shrink_2048_1536/B4EZOybccKHkAs-/0/1733865365018?e=1762992000&v=beta&t=qjOIBnSXiqXSUu5J1WUOKVPgmQhCpZTTznEYRqxUvaU",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQGoVcczSd9fkA/feedshare-shrink_2048_1536/B4EZVtjKWcGgA0-/0/1741299713982?e=1762992000&v=beta&t=ohnTffgkzOamoU79ibqBc2B9Xv3klF52lFHciStCt5g",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQGwuyDVm_97FA/feedshare-shrink_2048_1536/B4EZW.3.3BHgAo-/0/1742664122168?e=1762992000&v=beta&t=hCiNtzfTfr6DFWukfTNe6V0jvmhl7-FN0hiRaEoV1uM",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQFNLftHKiHNmQ/feedshare-shrink_2048_1536/B4EZXdx0NHHMAo-/0/1743182606811?e=1762992000&v=beta&t=acq_5v8OVmfsJuMkOmuq3F4T4pX0bqeC6o9HBnbc-Ts",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQF9Puy1h9MUPQ/feedshare-shrink_2048_1536/B4EZZLUoRPHkAo-/0/1745020422609?e=1762992000&v=beta&t=yAWgJ5c2ALTWg63Zo756drTNJwiv47IQ8rIrmDPZrUM",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4E22AQHFHMHohK1uZQ/feedshare-shrink_1280/B4EZarxkGAHcAk-/0/1746638622857?e=1762992000&v=beta&t=xECZlYBGdLkjWBQMHMjviBHbbUCmVRp74DQORBZHdm0",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
  },
  {
    category: "Students",
    title: "Workshop — Web Dev",
    src: "https://media.licdn.com/dms/image/v2/D4D22AQEHHILhptKRzQ/feedshare-shrink_1280/B4DZgZHH4IHwAo-/0/1752767955229?e=1762992000&v=beta&t=qRXGVNBq2281kTL5hV4omoCz2X2mXRIPRdrKSQU6SQg",
    content: <Caption>Hands-on session building responsive UIs.</Caption>,
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
