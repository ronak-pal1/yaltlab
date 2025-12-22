import BookText from "@/components/BookText"


const TestimonialCard = () => {
    return (
        <div className="h-full w-[400px] bg-[#181818] shrink-0">

        </div>
    )
}


const TestimonialSection = () => {
    return (
        <section className="w-full h-[1300px] flex flex-1 overflow-hidden">
            <div className="w-[80px] border-r-[0.5px] border-r-white/40 flex flex-col">
                <div className="w-full h-[60px] border-b-[0.5px] border-b-white/40">

                </div>


                <div className="flex flex-1 flex-col">


                </div>

                <div className="w-full h-[150px] border-t-[0.5px] border-t-white/40">

                </div>

                <div className="w-full h-[350px] border-t-[0.5px] border-t-white/40">

                </div>
            </div>


            <div className="flex-1 flex flex-col overflow-hidden">

                <div className="w-full h-[60px] border-b-[0.5px] border-b-white/40">

                </div>


                <div className="flex flex-1 flex-col">
                    <div className="w-full h-[200px] flex flex-col border-b-[0.5px] border-b-white/40 px-7 justify-center space-y-5 ">
                        <p className="text-5xl text-white font-homevideo">CLIENTS LOVE US</p>
                        <p className="text-base text-[#BCBCBC]">Here are the some reviews of clients from different domains. All are happy  ❤️</p>
                    </div>

                    <div className="w-full flex flex-1 h-full overflow-x-scroll scrollbar-hide">

                        <div className="flex flex-1 w-full h-full gap-x-6">
                            <TestimonialCard />

                            <TestimonialCard />

                            <TestimonialCard />
                            <TestimonialCard />
                        </div>




                    </div>
                </div>


                <div className="w-full h-[150px] border-t-[0.5px] border-t-white/40 flex items-center justify-center">

                    <button className="w-fit px-20 h-fit py-2 bg-white text-black text-xl font-bebas">Book A Call</button>
                </div>

                <div className="w-full h-[350px] border-t-[0.5px] border-t-white/40 relative overflow-hidden">
                    <div className="w-fit h-fit absolute -bottom-14 left-1/2 -translate-x-1/2 ">
                        <BookText />
                    </div>
                </div>

            </div>


            <div className="w-[80px] border-l-[0.5px] border-l-white/40 flex flex-col">
                <div className="w-full h-[60px] border-b-[0.5px] border-b-white/40">

                </div>


                <div className="flex flex-1 flex-col">

                </div>

                <div className="w-full h-[150px] border-t-[0.5px] border-t-white/40">

                </div>

                <div className="w-full h-[350px] border-t-[0.5px] border-t-white/40">

                </div>
            </div>
        </section>
    )
}



export default TestimonialSection