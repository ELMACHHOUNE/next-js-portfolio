import React from "react";

type ContributionGridProps = {
  weeks?: number; // number of columns
  size?: number;  // tile size in px
  gap?: number;   // gap in px
  seed?: number;  // random seed for repeatable layout
  className?: string;
  palette?: "github" | "brand" | "theme";
  animate?: boolean;
};

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const githubPalette = [
  "bg-[#ebedf0] dark:bg-[#161b22]",
  "bg-[#9be9a8] dark:bg-[#0e4429]",
  "bg-[#40c463] dark:bg-[#006d32]",
  "bg-[#30a14e] dark:bg-[#26a641]",
  "bg-[#216e39] dark:bg-[#39d353]",
];

const brandPalette = [
  "bg-black/10 dark:bg-white/10",
  "bg-blue-200/80 dark:bg-blue-900/70",
  "bg-blue-400/80 dark:bg-blue-700/80",
  "bg-indigo-500/80 dark:bg-indigo-600/80",
  "bg-fuchsia-500/80 dark:bg-fuchsia-600/80",
];

// theme palette settings based on #CBACF9 accent
const ACCENT_RGB = { r: 203, g: 172, b: 249 };
const THEME_ALPHAS = [0, 0.22, 0.45, 0.65, 0.9];

export const ContributionGrid: React.FC<ContributionGridProps> = ({
  weeks = 50,
  size = 12,
  gap = 4,
  seed = 7,
  className = "",
  palette = "github",
  animate = true,
}) => {
  const rand = mulberry32(seed);
  const levels = Array.from({ length: weeks * 7 }, () => Math.floor(rand() * 5));

  return (
    <div
      aria-hidden
      className={`relative ${className}`}
      style={{
        display: "flex",
        gap,
        alignItems: "center",
      }}
    >
      {Array.from({ length: weeks }).map((_, w) => (
        <div key={w} style={{ display: "flex", flexDirection: "column", gap }}>
          {Array.from({ length: 7 }).map((_, d) => {
            const level = levels[w * 7 + d];

            if (palette === "theme") {
              const alpha = THEME_ALPHAS[level];
              const tileStyle =
                level === 0
                  ? undefined
                  : {
                      backgroundColor: `rgba(${ACCENT_RGB.r}, ${ACCENT_RGB.g}, ${ACCENT_RGB.b}, ${alpha})`,
                    };

              return (
                <div
                  key={d}
                  className={`rounded-[3px] ${level === 0 ? "bg-black/[0.06] dark:bg-white/[0.08]" : ""} ${animate ? "transition-colors duration-500 hover:opacity-90" : ""}`}
                  style={{
                    width: size,
                    height: size,
                    ...tileStyle,
                  }}
                />
              );
            }

            const levelClasses =
              palette === "brand" ? brandPalette : githubPalette;

            return (
              <div
                key={d}
                className={`${levelClasses[level]} rounded-[3px] ${
                  animate ? "transition-colors duration-500 hover:opacity-90" : ""
                }`}
                style={{
                  width: size,
                  height: size,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
