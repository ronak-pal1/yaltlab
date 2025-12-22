import Folder from "@/components/Folder";




const CuratedWorksSection = () => {
    return (
        <section className="w-full h-[1100px] flex flex-1 overflow-hidden bg-white">
            <div className="w-[80px] border-r-[0.5px] border-r-black flex flex-col">
                <div className="w-full h-[60px] border-b-[0.5px] border-b-black">

                </div>


                <div className="flex flex-1 flex-col">


                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-black">

                </div>
            </div>


            <div className="flex-1 flex flex-col overflow-hidden">

                <div className="w-full h-[60px] border-b-[0.5px] border-b-black">

                </div>


                <div className="flex flex-1 flex-col">
                    <div className="w-full h-[100px] flex flex-row border-b-[0.5px] border-b-black px-7 items-center ">
                        <p className="text-5xl text-black font-homevideo">Curated Works</p>
                    </div>

                    <div className="w-full h-full grid grid-cols-3 grid-rows-2 [&>*]:w-full [&>*]:h-full">
                        <div className="border-b-[0.5px] border-b-black border-r-[0.5px] border-r-black flex items-center justify-center">
                            <Folder title="Web Development" />
                        </div>
                        <div className="border-b-[0.5px] border-b-black border-r-[0.5px] border-r-black flex items-center justify-center">
                            <Folder title="App Development" />
                        </div>
                        <div className="border-b-[0.5px] border-b-black flex items-center justify-center">
                            <Folder title="Desktop App Development" />
                        </div>
                        <div className="border-r-[0.5px] border-r-black flex items-center justify-center">
                            <Folder title="UI/UX Design" />

                        </div>
                        <div className="border-r-[0.5px] border-r-black flex items-center justify-center ">
                            <Folder title="AI/ML" />

                        </div>
                        <div className="flex items-center justify-center">
                            <Folder title="Blockchain" />

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

                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-black">

                </div>
            </div>
        </section>
    )
}


export default CuratedWorksSection;