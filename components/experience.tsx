  import Image from "next/image";

  import { Button } from "@/components/ui/moving-borders";
  import { workExperience } from "@/data";

  // `workExperience` is stored oldest → newest; display it newest → oldest.
  const orderedExperience = [...workExperience].reverse();

  const durations = orderedExperience.map(() =>
    Math.floor(Math.random() * 10000 + 10000)
  );

  export const Experience = () => {
    return (
      <section id="experience" className="py-20" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="heading">
          My <span className="text-purple">work experience</span>
        </h2>

        <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
          {orderedExperience.map((experience, index) => (
            <Button
              key={experience.id}
              borderRadius="1.75rem"
              className="flex-1 border-neutral-200 text-white dark:border-slate-800"
              duration={durations[index]}
            >
              <div className="flex w-full flex-col gap-4 p-3 py-6 md:p-5 lg:p-10">
                {(() => {
                  const exp = experience as typeof experience & {
                    logos?: readonly string[];
                    partnerLogos?: readonly string[];
                  };
                  const logos = exp.logos ?? [exp.thumbnail];
                  const partnerLogos = exp.partnerLogos ?? [];
                  return (
                    <>
                      <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
                        <div className="flex shrink-0 flex-col items-center gap-2 lg:gap-3">
                          {logos.map((logo, i) => (
                            <Image
                              key={`${experience.id}-logo-${i}`}
                              width={128}
                              height={80}
                              src={logo}
                              alt={`${experience.title} logo ${i + 1}`}
                              className="h-auto w-20 object-contain md:w-24 lg:w-28"
                            />
                          ))}
                        </div>

                        <div className="lg:ms-5">
                          <h3 className="text-start text-xl font-bold md:text-2xl">
                            {experience.title}
                          </h3>

                          <div className="mt-3 text-start font-semibold text-white-100">
                            {Array.isArray(experience.desc) ? (
                              <ul className="list-disc space-y-2 ps-5">
                                {experience.desc.map((point, index) => (
                                  <li key={index}>{point}</li>
                                ))}
                              </ul>
                            ) : (
                              <p>{experience.desc}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {partnerLogos.length > 0 && (
                        <div className="flex flex-wrap items-center gap-3 border-t border-slate-800/80 pt-3">
                          <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-white-100/60">
                            In partnership with
                          </span>
                          <div className="flex items-center gap-2">
                            {partnerLogos.map((logo, i) => (
                              <span
                                key={`${experience.id}-partner-${i}`}
                                className="flex h-9 items-center justify-center rounded-lg bg-white/95 px-2"
                              >
                                <Image
                                  width={96}
                                  height={48}
                                  src={logo}
                                  alt={`${experience.title} partner logo ${i + 1}`}
                                  className="h-6 w-auto max-w-[92px] object-contain md:h-7"
                                />
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            </Button>
          ))}
        </div>
      </section>
    );
  };
