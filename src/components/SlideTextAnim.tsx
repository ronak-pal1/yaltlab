
const SlidingText = ({
    text,
    delays = [],
    duration = 0.6,
    className = "",
    staticIndices = []
}: {
    text: string;
    delays?: number[];
    duration?: number;
    className?: string;
    staticIndices?: number[];
}) => {
    return (
        <span className={`inline-flex ${className}`}>
            {text.split('').map((char, index) => {
                const isStatic = staticIndices.includes(index);
                const characterDelay = delays[index] || 0;

                return (
                    <span
                        key={index}
                        className={`inline-block ${!isStatic ? 'overflow-hidden' : ''}`}
                        style={{
                            width: char === ' ' ? '0.5em' : 'auto',
                        }}
                    >
                        {!isStatic ? (
                            <span
                                className="inline-block"
                                style={{
                                    transform: 'translateX(100%)',
                                    animation: `slideFromRight ${duration}s ease-out ${characterDelay}s forwards`,
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ) : (
                            <span className="inline-block">
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        )}
                    </span>
                );
            })}
            <style jsx>{`
        @keyframes slideFromRight {
          to {
            transform: translateX(0);
          }
        }
      `}</style>
        </span>
    );
};

// Demo Component
// export default function App() {
//   // Different timing for each character in "HELLO WORLD"
//   const customDelays = [0, 0.2, 0.1, 0.3, 0.15, 0.4, 0.5, 0.25, 0.35, 0.45, 0.55];
//   // Make H, O, and D static (indices 0, 4, 10)
//   const staticChars = [0, 4, 10];

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center">
//       <SlidingText 
//         text="HELLO WORLD" 
//         className="text-2xl font-bold text-white tracking-wider"
//         delays={customDelays}
//         duration={0.5}
//         staticIndices={staticChars}
//       />
//     </div>
//   );
// }


export default SlidingText;