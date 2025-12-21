import HeroCardScreen from "@/components/HeroCardScreen";
import Link from "next/link";
import ClientSection from "./sections/ClientSection";
import BuildMVPSection from "./sections/BuildMVPSection";
import { IoIosArrowRoundForward } from "react-icons/io";
import LaunchFasterSection from "./sections/LaunchFasterSection";
import DesignSection from "./sections/DesignSection";
import OurWorksSection from "./sections/OurWorksSection";

const coloredBoxes = [
  // { color: "#9C1DE0", row: 19, col: 1 },
  // { color: "#B3ED7C", row: 16, col: 34 },
  // { color: "#367BC9", row: 18, col: 33 },
  // { color: "#127989", row: 19, col: 32 },
  // { color: "#810709", row: 19, col: 34 },
  // { color: "#3DBA9D", row: 15, col: 35 },
  // { color: "#E38316", row: 14, col: 36 },

  // { color: "#9C1DE0", row: 17, col: 4 },
  // { color: "#B3ED7C", row: 16, col: 3 },
  // { color: "#367BC9", row: 18, col: 6 },
  // { color: "#127989", row: 19, col: 5 },
  // { color: "#810709", row: 19, col: 3 },
  // { color: "#3DBA9D", row: 15, col: 2 },
  // { color: "#E38316", row: 14, col: 1 },
  { color: "#E38316", row: 14, col: 1 },
  { color: "#E38316", row: 15, col: 2 },
  { color: "#E38316", row: 16, col: 3 },
  { color: "#E38316", row: 17, col: 3 },
  { color: "#E38316", row: 18, col: 3 },
  { color: "#E38316", row: 19, col: 3 },
  { color: "#E38316", row: 15, col: 4 },
  { color: "#E38316", row: 14, col: 5 },


  { color: "#9C1DE0", row: 19, col: 5 },
  { color: "#9C1DE0", row: 18, col: 5 },
  { color: "#9C1DE0", row: 17, col: 5 },
  { color: "#9C1DE0", row: 16, col: 6 },
  { color: "#9C1DE0", row: 15, col: 7 },
  { color: "#9C1DE0", row: 14, col: 7 },
  { color: "#9C1DE0", row: 16, col: 8 },
  { color: "#9C1DE0", row: 17, col: 9 },
  { color: "#9C1DE0", row: 18, col: 9 },
  { color: "#9C1DE0", row: 19, col: 9 },
  { color: "#9C1DE0", row: 18, col: 8 },
  { color: "#9C1DE0", row: 18, col: 7 },
  { color: "#9C1DE0", row: 18, col: 6 },



  { color: "#127989", row: 19, col: 11 },
  { color: "#127989", row: 18, col: 11 },
  { color: "#127989", row: 17, col: 11 },
  { color: "#127989", row: 16, col: 11 },
  { color: "#127989", row: 15, col: 11 },
  { color: "#127989", row: 14, col: 11 },
  { color: "#127989", row: 19, col: 12 },
  { color: "#127989", row: 19, col: 13 },
  { color: "#127989", row: 19, col: 14 },


  { color: "#3DBA9D", row: 19, col: 16 },
  { color: "#3DBA9D", row: 18, col: 16 },
  { color: "#3DBA9D", row: 17, col: 16 },
  { color: "#3DBA9D", row: 16, col: 16 },
  { color: "#3DBA9D", row: 15, col: 16 },
  { color: "#3DBA9D", row: 14, col: 16 },
  { color: "#3DBA9D", row: 14, col: 17 },
  { color: "#3DBA9D", row: 14, col: 18 },
  { color: "#3DBA9D", row: 14, col: 15 },
  { color: "#3DBA9D", row: 14, col: 14 },


  { color: "#810709", row: 19, col: 20 },
  { color: "#810709", row: 18, col: 20 },
  { color: "#810709", row: 17, col: 20 },
  { color: "#810709", row: 16, col: 20 },
  { color: "#810709", row: 15, col: 20 },
  { color: "#810709", row: 14, col: 20 },
  { color: "#810709", row: 19, col: 21 },
  { color: "#810709", row: 19, col: 22 },
  { color: "#810709", row: 19, col: 23 },


  { color: "#9C1DE0", row: 19, col: 25 },
  { color: "#9C1DE0", row: 18, col: 25 },
  { color: "#9C1DE0", row: 17, col: 25 },
  { color: "#9C1DE0", row: 16, col: 26 },
  { color: "#9C1DE0", row: 15, col: 27 },
  { color: "#9C1DE0", row: 14, col: 27 },
  { color: "#9C1DE0", row: 16, col: 28 },
  { color: "#9C1DE0", row: 17, col: 29 },
  { color: "#9C1DE0", row: 18, col: 29 },
  { color: "#9C1DE0", row: 19, col: 29 },
  { color: "#9C1DE0", row: 18, col: 28 },
  { color: "#9C1DE0", row: 18, col: 27 },
  { color: "#9C1DE0", row: 18, col: 26 },




  { color: "#B3ED7C", row: 19, col: 31 },
  { color: "#B3ED7C", row: 18, col: 31 },
  { color: "#B3ED7C", row: 17, col: 31 },
  { color: "#B3ED7C", row: 16, col: 31 },
  { color: "#B3ED7C", row: 15, col: 31 },
  { color: "#B3ED7C", row: 14, col: 31 },
  { color: "#B3ED7C", row: 14, col: 32 },
  { color: "#B3ED7C", row: 14, col: 33 },
  { color: "#B3ED7C", row: 15, col: 34 },
  { color: "#B3ED7C", row: 16, col: 34 },
  { color: "#B3ED7C", row: 17, col: 33 },
  { color: "#B3ED7C", row: 17, col: 32 },
  { color: "#B3ED7C", row: 18, col: 34 },
  { color: "#B3ED7C", row: 19, col: 34 },
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

        <div className="w-full h-full flex flex-col items-center -mt-16 justify-center z-10 gap-y-12">
          <div className="w-full h-fit flex items-center justify-center flex-col gap-y-3 text-[#A4FFBC] font-bebas">
            <h1 className="text-7xl ">Your Vision, Our Code</h1>
            <h2 className="text-7xl">
              {" "}
              Let’s Build Something Extraordinary.
            </h2>
          </div>


          <div className="flex items-center gap-x-8">
            <button className='bg-white text-black  px-8 py-2 rounded-[37px] text-xl flex items-center space-x-4'> <p className="font-bebas">VIEW WORKS</p>

              <div className="w-[18px] h-[18px] rounded-sm bg-black flex items-center justify-center">
                <IoIosArrowRoundForward className="text-white -rotate-45" />
              </div></button>

            <button className='bg-white text-black px-8 py-2 rounded-[37px] text-xl flex items-center space-x-4 '>
              <p className="font-bebas">BOOK A CALL</p>

              <div className="w-[18px] h-[18px] rounded-sm bg-black flex items-center justify-center">
                <IoIosArrowRoundForward className="text-white -rotate-45" />
              </div>
            </button>
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

      {/* build mvp section */}
      <BuildMVPSection />

      {/* launch faster section */}
      <LaunchFasterSection />


      {/* design section */}
      <DesignSection />

      {/* Our works section */}
      <OurWorksSection />
    </div>
  );
}
