import CrossPattern from "@/components/CrossPattern"



const clients = [
    {
        name: "Aries",
        logo: "https://via.placeholder.com/150",
    },
    {
        name: "Fact Finder",
        logo: "https://via.placeholder.com/150",
    },
    {
        name: "CaveMiniplex",
        logo: "https://via.placeholder.com/150",
    },
    {
        name: "Jonaki Vibes",
        logo: "https://via.placeholder.com/150",
    },
    {
        name: "Jonaki Vibes",
        logo: "https://via.placeholder.com/150",
    },
]

const ClientBox = ({ name }: { name: string }) => {
    return (
        <div className="w-[300px] h-[220px] border-r-[0.5px] border-black shrink-0 flex flex-col">
            <div className="w-full h-[20px] border-b-[0.5px] border-b-black flex flex-row">
                {
                    Array.from({ length: 300 / 20 }).map((_, index) => (
                        <div key={index} className="w-[20px] h-[20px] border-r-[0.5px] border-r-black"></div>
                    ))
                }
            </div>


            <div className="flex-1 flex flex-row">

                <div className="w-[20px] h-full border-r-[0.5px] border-r-black flex flex-col">

                    {
                        Array.from({ length: 180 / 20 }).map((_, index) => (
                            <div key={index} className="w-[20px] h-[20px] border-b-[0.5px] border-b-black"></div>
                        ))
                    }

                </div>


                <div className="flex-1 flex items-center justify-center">

                    <p className=" text-black text-xl">{name}</p>
                </div>

                <div className="w-[20px] h-full border-l-[0.5px] border-l-black flex flex-col">
                    {
                        Array.from({ length: 180 / 20 }).map((_, index) => (
                            <div key={index} className="w-[20px] h-[20px] border-b-[0.5px] border-b-black"></div>
                        ))
                    }
                </div>
            </div>

            <div className="w-full h-[20px] border-t-[0.5px] border-t-black flex flex-row">
                {
                    Array.from({ length: 300 / 20 }).map((_, index) => (
                        <div key={index} className="w-[20px] h-[20px] border-r-[0.5px] border-r-black"></div>
                    ))
                }
            </div>
        </div>
    )
}


const ClientSection = () => {
    return (
        <section className="w-full bg-white h-[460px] border-t-[0.5px] border-t-black/20 flex flex-1">

            <div className="w-[80px] border-r-[0.5px] border-r-black flex flex-col">
                <div className="w-full h-[60px] border-b-[0.5px] border-b-black">

                </div>


                <div className="flex-1">
                    <CrossPattern width={20} height={20} color={"#000"} opacity={1} />
                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-black">

                </div>
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">

                <div className="w-full h-[60px] border-b-[0.5px] border-b-black">

                </div>


                <div className="flex-1 flex flex-col">
                    <div className="w-full h-[90px] border-b-[0.5px] border-b-black flex items-center justify-center">
                        <p className="font-bebas text-black text-4xl">CLIENTS WE WORKED WITH</p>
                    </div>


                    <div className="flex-1 w-full overflow-x-scroll scrollbar-hide">
                        <div className="h-full flex">
                            {
                                clients.map((client, index) => (
                                    <ClientBox key={index} name={client.name} />
                                ))
                            }
                        </div>
                    </div>

                    <div className="w-full h-[30px] border-t-[0.5px] border-t-black">

                    </div>
                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-black">

                </div>

            </div>

            <div className="w-[80px] border-l-[0.5px] border-l-black flex flex-col">
                <div className="w-full h-[60px] border-b-[0.5px] border-b-black">

                </div>


                <div className="flex-1">
                    <CrossPattern width={20} height={20} color={"#000"} opacity={1} />

                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-black">

                </div>
            </div>
        </section>
    )
}

export default ClientSection
