import { useId } from "react";




const CrossPattern = ({ width, height, color, opacity }: { width: number; height: number; color: string; opacity: number }) => {

    const id = useId();
    const patternId = `angled-cross-${id}`;

    return (
        <svg className="w-full h-full">
            <defs>
                <pattern id={patternId} x="0" y="0" width={width} height={height} patternUnits="userSpaceOnUse">
                    <path d={`M0,0 L${width},${height} M${width},0 L0,${height}`} stroke={color} strokeWidth="0.5" strokeOpacity={opacity} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
    )
}


export default CrossPattern