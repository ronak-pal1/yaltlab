"use client";

import { useState } from "react";

const Folder = ({ title }: { title: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="relative h-[300px] w-[280px] cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ perspective: "1000px" }}
        >
            {/* back side */}
            <div className="absolute top-0 left-0 z-0">
                <svg width="280" height="183" viewBox="0 0 580 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 35C0 15.6701 15.67 1.93574e-05 35 1.93574e-05H205.305C214.408 1.93574e-05 223.153 3.54696 229.685 9.88828L260.815 40.1118C267.347 46.4531 276.092 50 285.195 50H545C564.33 50 580 65.6701 580 85V118C580 137.33 564.33 153 545 153H35C15.67 153 0 137.33 0 118V35Z" fill="#6AD0C3" />
                </svg>
            </div>

            {/* front side */}
            <div
                className="w-[280px] h-[180px] bg-[#98F0E5] rounded-2xl absolute top-[80px] left-0 z-10 transition-all duration-500 ease-out shadow-lg"
                style={{
                    transformOrigin: "bottom center",
                    transform: isHovered ? "rotateX(-30deg) translateY(-20px)" : "rotateX(0deg) translateY(0px)",
                }}
            >
            </div>

            {/* paper/sheet coming out */}
            <div
                className="w-[200px] h-[200px] bg-[#DAFFDA] rounded-lg absolute top-[20px] left-[40px] z-0 transition-all duration-300 ease-out shadow-xl"
                style={{
                    transformOrigin: "bottom center",
                    transform: isHovered
                        ? "rotateX(10deg) rotateZ(-5deg) translateY(-40px) translateX(20px)"
                        : "rotateX(0deg) rotateZ(0deg) translateY(20px) translateX(0px)",
                    opacity: isHovered ? 1 : 0,
                }}
            >
                <div className="p-4 space-y-2">
                    <p className="text-black/40 font-bebas text-2xl">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Folder;