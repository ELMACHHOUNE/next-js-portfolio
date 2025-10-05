import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 p-4">
        {projects.map(({ id, des, iconLists, img, link, sourceCode, title }) => (
          <div
            key={id}
            className="flex h-[27rem] w-[80vw] items-center justify-center sm:h-[34rem] sm:w-[500px] lg:min-h-[28rem]"
          >
            <PinContainer title="Visit" href={link}>
              <div className="relative mb-8 flex h-[26vh] w-[70vw] items-center justify-center overflow-hidden sm:h-[34vh] sm:w-[500px]">
                <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                  <Image
                    height={280}
                    width={480}
                    src="/bg.png"
                    alt="bg-img"
                    className="object-cover opacity-80"
                  />
                </div>

                <Image
                  height={260}
                  width={420}
                  src={img}
                  alt={title}
                  className="absolute bottom-0 z-10"
                />
              </div>

              <h1 className="line-clamp-1 text-base font-bold md:text-lg lg:text-xl">
                {title}
              </h1>

              <p className="line-clamp-2 text-xs font-light lg:text-lg lg:font-normal">
                {des}
              </p>

              <div className="mb-2 mt-5 flex items-center justify-between">
                {/* Tech icons */}
                <div className="flex items-center">
                  {iconLists.map((icon, i) => (
                    <div
                      key={icon}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black lg:h-8 lg:w-8"
                      style={{
                        transform: `translateX(-${4 * i * 2}px)`,
                      }}
                    >
                      <Image
                        height={30}
                        width={30}
                        src={icon}
                        alt={icon}
                        className="p-1"
                      />
                    </div>
                  ))}
                </div>

                {/* Source code link */}
                <div className="flex items-center justify-center">
                  <Link
                    href={sourceCode}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex text-xs text-purple md:text-sm lg:text-lg hover:underline"
                  >
                    Source Code
                  </Link>
                  <FaLocationArrow className="ms-2" color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};
