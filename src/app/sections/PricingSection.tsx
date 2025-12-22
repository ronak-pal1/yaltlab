import { IoMdCheckmark } from "react-icons/io"



const PricingCard = ({ isMostPopular = false, isCustom = false }: { isMostPopular?: boolean, isCustom?: boolean }) => {

    const offerings = [
        "1 Website",
        "1 Domain",
        "1 Email",
        "1 SSL Certificate",
        "1 Year of Support",
    ]

    return (
        <div className={`w-[350px] h-[500px] border-[0.5px] border-black flex flex-col p-4 space-y-6 ${isMostPopular && !isCustom ? "bg-[#A4FFBC]" : "transparent"} ${!isMostPopular && isCustom ? "bg-black" : "transparent"}`}>
            <div className={`flex flex-col space-y-2 ${isCustom ? "text-white" : "text-black"}`}>
                <h2 className="font-bebas text-3xl">Launchpad</h2>
                <p className=" text-sm font-light">Perfect for small businesses and startups launching their first web presence</p>
            </div>


            <div className="flex flex-col gap-y-5">

                {
                    isCustom ? (
                        <p className="text-4xl font-bebas text-white">
                            Custom
                        </p>
                    ) : (
                        <div className="flex flex-row space-x-2">
                            <p className="text-xl text-black">$</p>
                            <p className="text-5xl font-bebas text-black">2,499</p>
                            <p className="text-sm text-black font-light flex items-end">(onetime)</p>
                        </div>
                    )
                }


                <div className="flex flex-row items-center justify-center">
                    <button className={`w-full h-fit py-2 text-lg font-bebas ${isCustom ? "bg-white text-black" : "bg-black text-white"}`}>Book A CALL</button>
                </div>
            </div>


            <div className="flex flex-col space-y-6">


                <div className="flex flex-row space-x-3 items-center">
                    <div className={`w-full h-[0.5px] ${isCustom ? "bg-white" : "bg-black"}`}></div>
                    <p className={`text-black text-sm ${isCustom ? "text-white" : "text-black"}`}>includes</p>
                    <div className={`w-full h-[0.5px] ${isCustom ? "bg-white" : "bg-black"}`}></div>

                </div>

                <div className="flex flex-col space-y-2">
                    {offerings.map((offering, index) => (
                        <div key={index} className={`flex items-center space-x-4 text-sm`}>
                            <IoMdCheckmark className={`text-black ${isCustom ? "text-white" : "text-black"}`} />
                            <p className={`${isCustom ? "text-white" : "text-black"}`}>{offering}</p>

                        </div>
                    ))}
                </div>

            </div>



        </div>
    )
}

const PricingSection = () => {
    return (
        <section className="w-full h-fit flex flex-1 overflow-hidden bg-white">
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
                        <p className="text-5xl text-black font-homevideo">Pricing</p>
                    </div>

                    <div className="w-full flex flex-1 h-full p-10 justify-evenly flex-wrap gap-7">
                        <PricingCard />
                        <PricingCard isMostPopular />
                        <PricingCard />
                        <PricingCard isCustom />

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


export default PricingSection;