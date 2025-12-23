


const LaunchFasterCard = () => {
    return (
        <div className="w-full h-full flex flex-1">
            <div className="w-[30px] flex flex-col">
                <div className="w-full h-[30px] bg-slate-100">

                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L30 30" stroke="black" strokeWidth="0.5" />
                    </svg>

                </div>


                <div className="flex flex-1 flex-col bg-slate-100">


                </div>

                <div className="w-full h-[30px] bg-slate-100">


                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 30L30 0" stroke="black" strokeWidth="0.5" />
                    </svg>

                </div>
            </div>


            <div className="flex-1 flex flex-col overflow-hidden">

                <div className="w-full h-[30px] border-b-[0.5px] border-b-black bg-slate-100">

                </div>


                <div className="flex flex-1 flex-col border-x-[0.5px] border-x-black p-7 items-center justify-between">


                    <h2 className="text-black font-bebas text-3xl">Web Development</h2>


                    <p className="text-[#BCBCBC] text-center">Rapid MVP development with robust architecture and clean, maintainable code</p>

                </div>

                <div className="w-full h-[30px] border-t-[0.5px] border-t-black bg-slate-100">

                </div>

            </div>


            <div className="w-[30px] flex flex-col">
                <div className="w-full h-[30px] bg-slate-100">

                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 30L30 0" stroke="black" strokeWidth="0.5" />
                    </svg>

                </div>


                <div className="flex flex-1 flex-col bg-slate-100">

                </div>

                <div className="w-full h-[30px] bg-slate-100">

                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L30 30" stroke="black" strokeWidth="0.5" />
                    </svg>

                </div>
            </div>
        </div>
    )
}


const LaunchFasterSection = () => {
    return (
        <section className="w-full h-[800px] bg-white flex flex-1">

            <div className="w-[80px] border-r-[0.5px] border-r-black flex flex-col">
                <div className="w-full h-[60px] border-b-[0.5px] border-b-black">

                </div>


                <div className="flex flex-1 flex-col">

                    <div className="w-full flex-[0.45] border-b-[0.5px] border-b-black">

                    </div>

                    <div className="w-full flex-[0.55]">

                    </div>
                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-black">

                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="w-full h-[60px] border-b-[0.5px] border-b-black">

                </div>


                <div className="flex flex-1 flex-col">
                    <div className="w-full flex-[0.45] flex flex-row border-b-[0.5px] border-b-black items-center justify-center">


                        <div className="flex flex-col items-center justify-center gap-y-10">

                            <h2 className="text-5xl font-homevideo text-black">LAUNCH FASTER WITH US</h2>

                            <p className="text-black">Rapid MVP development with robust architecture and clean, maintainable code</p>

                        </div>

                    </div>

                    <div className="w-full flex flex-row flex-[0.55] h-full">
                        <div className="w-full h-full grid grid-cols-3">
                            <div className="border-r-[0.5px] border-r-black">

                                <LaunchFasterCard />

                            </div>
                            <div className="border-r-[0.5px] border-r-black">
                                <LaunchFasterCard />

                            </div>
                            <div className="">

                                <LaunchFasterCard />

                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-black">

                </div>
            </div>



            <div className="w-[80px] border-l-[0.5px] border-l-black flex flex-col">
                <div className="w-full h-[60px] border-b-[0.5px] border-b-black">

                </div>


                <div className="flex flex-1 flex-col">
                    <div className="w-full flex-[0.45] border-b-[0.5px] border-b-black">

                    </div>

                    <div className="w-full flex-[0.55]">

                    </div>
                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-black">

                </div>
            </div>



        </section>
    )
}


export default LaunchFasterSection