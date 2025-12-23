import BookText from "@/components/BookText"



const testimonals = [
    {
        image: "",
        name: "",
        position: "",
        review: ""
    },
    {
        image: "",
        name: "",
        position: "",
        review: ""
    },
    {
        image: "",
        name: "",
        position: "",
        review: ""
    },
    {
        image: "",
        name: "",
        position: "",
        review: ""
    },
]

const TestimonialCard = ({ index }: { index: number }) => {
    return (
        <div className={`h-full w-[400px] bg-[#181818] shrink-0 border-x-[0.5px] border-x-white/40`}>

            <div className="flex flex-row flex-1  w-full h-full">
                <div className="w-[20px] border-r-[0.5px] border-r-white/40 flex flex-col">
                    <div className="w-full h-[20px] border-b-[0.5px] border-b-white/40">

                    </div>


                    <div className="flex flex-1 flex-col">


                    </div>

                    <div className="w-full h-[20px] border-t-[0.5px] border-t-white/40">

                    </div>
                </div>


                <div className="flex-1 flex flex-col overflow-hidden">

                    <div className="w-full h-[20px] border-b-[0.5px] border-b-white/40">

                    </div>


                    <div className="flex flex-1 flex-col p-5 justify-between">
                        <div className="flex flex-row space-x-7">
                            <div>
                                <img src={"https://avatars.githubusercontent.com/u/98758085?v=4"} alt="client image" className="w-[80px] h-[80px] object-cover" />
                            </div>


                            <div className="flex flex-col">
                                <p className="text-[#BCBCBC] font-bold text-lg">Ronak Paul</p>
                                <p className="text-[#BCBCBC] font-light text-sm">CEO, Yaltlab</p>
                            </div>

                        </div>


                        <div>
                            <p className="text-base text-[#BCBCBC]/70">Rapid MVP development with robust architecture and clean, maintainable code. Rapid MVP development with robust architecture and clean, maintainable code. Rapid MVP development with robust architecture and clean, maintainable code. Rapid MVP development with robust architecture and clean ❤️🔥</p>
                        </div>
                    </div>

                    <div className="w-full h-[20px] border-t-[0.5px] border-t-white/40">

                    </div>

                </div>


                <div className="w-[20px] border-l-[0.5px] border-l-white/40 flex flex-col">
                    <div className="w-full h-[20px] border-b-[0.5px] border-b-white/40">

                    </div>


                    <div className="flex flex-1 flex-col">

                    </div>

                    <div className="w-full h-[20px] border-t-[0.5px] border-t-white/40">

                    </div>
                </div>
            </div>


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

                        <div className="flex flex-1 w-full h-full gap-x-6 ml-7">
                            {
                                testimonals.map((testimonial, index) => (
                                    <TestimonialCard key={index} index={index} />
                                ))
                            }
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