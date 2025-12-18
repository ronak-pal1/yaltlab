import HeroCardScreen from "@/components/HeroCardScreen";
import Link from "next/link";
import ClientSection from "./sections/ClientSection";

const coloredBoxes = [
  { color: "#9C1DE0", row: 19, col: 1 },
  { color: "#B3ED7C", row: 16, col: 34 },
  { color: "#367BC9", row: 18, col: 33 },
  { color: "#127989", row: 19, col: 32 },
  { color: "#810709", row: 19, col: 34 },
  { color: "#3DBA9D", row: 15, col: 35 },
  { color: "#E38316", row: 14, col: 36 },

  { color: "#9C1DE0", row: 17, col: 4 },
  { color: "#B3ED7C", row: 16, col: 3 },
  { color: "#367BC9", row: 18, col: 6 },
  { color: "#127989", row: 19, col: 5 },
  { color: "#810709", row: 19, col: 3 },
  { color: "#3DBA9D", row: 15, col: 2 },
  { color: "#E38316", row: 14, col: 1 },
];

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 h-full w-full -z-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeOpacity="0.18"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            {coloredBoxes.map((box, i) => (
              <rect
                key={i}
                x={(box.col - 1) * 40}
                y={(box.row - 1) * 40}
                width="40"
                height="40"
                fill={box.color}
              />
            ))}
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="w-full h-full flex items-center -mt-28 justify-center z-10">
          <div className="w-full h-full flex items-center justify-center flex-col gap-y-3 text-[#A4FFBC]">
            <h1 className="text-6xl font-medium">Your Vision, Our Code</h1>
            <h2 className="text-6xl font-medium">
              {" "}
              Let’s Build Something Extraordinary.
            </h2>
          </div>
        </div>

        <div
          className="w-[650px] h-[180px] bg-white rounded-lg
        absolute -bottom-2 left-1/2 transform -translate-x-1/2  shadow-[0_-8px_150px_50px_rgba(164,255,188,0.27)]"
        >
          <HeroCardScreen />
        </div>
      </section>

      {/* clients section */}
      <ClientSection />
    </div>
  );
}
