const HeroCardScreen = () => {
    return (
        <div className="w-full h-full">
            <div className=" py-3 px-3 border-b-[0.5px] border-b-black">
                <div className="flex items-center gap-x-1">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#EF6E6E]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#352828] opacity-[67%]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#69FA94]"></div>
                </div>
            </div>
        </div>
    );
};

export default HeroCardScreen;
