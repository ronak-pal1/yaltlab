
import BoxPattern from "@/components/BoxPattern";
import CrossPattern from "@/components/CrossPattern";



const SectionBox = ({ heading, description }: { heading: string; description: string }) => {


    return (
        <div className="w-full h-full flex flex-1 flex-col">

            <div className="w-full h-full flex-[0.2] border-b-[0.5px] border-b-white/40 flex flex-col">

                <div className="w-full h-[20px] border-b-[0.5px] border-b-white/40 flex flex-row">
                    <BoxPattern width={20} height={20} color={"#ffffff"} opacity={0.4} />
                </div>


                <div className="flex w-full h-full flex-1 flex-row">



                    <div className="w-[20px] h-full border-r-[0.5px] border-r-white/40 flex flex-row">

                        <BoxPattern width={20} height={20} color={"#ffffff"} opacity={0.4} />


                    </div>


                    <div className="flex flex-1 flex-col items-center justify-center">

                        <p className="text-2xl text-white">{heading}</p>

                    </div>

                    <div className="w-[20px] h-full border-l-[0.5px] border-l-white/40 flex flex-row">

                        <BoxPattern width={20} height={20} color={"#ffffff"} opacity={0.4} />

                    </div>



                </div>

                <div className="w-full h-[20px] border-t-[0.5px] border-t-white/40 flex flex-row">
                    <BoxPattern width={20} height={20} color={"#ffffff"} opacity={0.4} />

                </div>

            </div>


            <div className="flex-[0.8] p-6 flex items-end">

                <p className="text-lg text-[#BCBCBC]">{description}</p>

            </div>

        </div>
    )
}


const BuildMVPSection = () => {
    return (
        <section className="w-full h-[900px] flex-1 flex">
            <div className="w-[80px] border-r-[0.5px] border-r-white/40 flex flex-col">
                <div className="w-full h-[60px] border-b-[0.5px] border-b-white/40">

                </div>


                <div className="flex flex-1 flex-col">

                    <div className="w-full flex-[0.45] border-b-[0.5px] border-b-white/40">

                    </div>

                    <div className="w-full flex-[0.55]">

                    </div>
                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-white/40">

                </div>
            </div>


            <div className="flex-1 flex flex-col">

                <div className="w-full h-[60px] border-b-[0.5px] border-b-white/40">

                </div>


                <div className="flex flex-1 flex-col">
                    <div className="w-full flex-[0.45] flex flex-row border-b-[0.5px] border-b-white/40">
                        <div className="flex-[0.7] border-r-[0.5px] border-r-white/40 p-10 space-y-12">

                            <div className="flex flex-col gap-y-3 font-homevideo">
                                <h2 className="text-5xl">Build MVP in 14 days with </h2>
                                <h2 className="text-5xl">CLEAN FUTURE PROOF CODE</h2>
                            </div>


                            <p className="text-[#BCBCBC]">Rapid MVP development with robust architecture and clean, maintainable code</p>


                        </div>

                        <div className="flex-[0.3] flex w-full h-full">

                            <CrossPattern width={20} height={20} color={"#ffffff"} opacity={0.4} />

                        </div>
                    </div>

                    <div className="w-full flex flex-row flex-[0.55] h-full">
                        <div className="w-full h-full grid grid-cols-3">
                            <div className="border-r-[0.5px] border-r-white/40 bg-[#181818]">
                                <SectionBox heading="Fast Development" description="Rapid MVP development with robust architecture and clean, maintainable code" />
                            </div>
                            <div className="border-r-[0.5px] border-r-white/40 bg-[#181818]">
                                <SectionBox heading="Fair Pricing" description="Pricing is very good. Rapid MVP development with robust architecture and clean, maintainable code" />
                            </div>
                            <div className="bg-[#181818]">

                                <SectionBox heading="Reliable Delivery" description="Rapid MVP development with robust architecture and clean, maintainable code" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-white/40">

                </div>

            </div>

            <div className="w-[80px] border-l-[0.5px] border-l-white/40 flex flex-col">
                <div className="w-full h-[60px] border-b-[0.5px] border-b-white/40">

                </div>


                <div className="flex flex-1 flex-col">
                    <div className="w-full flex-[0.45] border-b-[0.5px] border-b-white/40">

                    </div>

                    <div className="w-full flex-[0.55]">

                    </div>
                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-white/40">

                </div>
            </div>



        </section>
    )
}


export default BuildMVPSection;