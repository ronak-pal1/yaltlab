import DesignText from "@/components/DesignText";




const DesignSection = () => {
    return (
        <section className="w-full h-[1000px] bg-white flex flex-col flex-1 bg-gradient-to-b from-[#A4FFBC] from-[46%] to-[#E3FF84] to-100% relative">

            <div className="w-full h-fit flex flex-col items-center justify-center my-10 space-y-14">
                <DesignText />

                <button className="bg-transparent text-black border-[1px] border-black px-6 py-3 font-bebas text-xl">
                    Explore Our Designs
                </button>
            </div>


            <div className="w-full flex-1 overflow-hidden absolute bottom-0 ">

                <div className="flex flex-row gap-x-4 overflow-x-scroll scrollbar-hide">
                    <img src={"https://d2wx6rahy8yxgr.cloudfront.net/filters:format(webp)/3319fc12-3cb8-4365-94e1-6b543cc45e20-thumb.jpeg"} className="w-[680px] h-[500px] object-cover bg-slate-200" />

                    <img src={"https://framerusercontent.com/images/ivN1G6lysIlnydh50zJF6doPLk4.png?width=2560&height=2000"} className="w-[680px] h-[500px] object-cover bg-slate-200" />


                    <img src={"https://framerusercontent.com/images/xgjo6abS4mLzEgz47hkatvAa6M.webp?width=1790&height=1187"} className="w-[680px] h-[500px] object-cover bg-slate-200" />

                    <img src={"https://www.uivibes.com/wp-content/uploads/2024/10/hero-image-framer-com-uivibes-scaled.webp"} className="w-[680px] h-[500px] object-cover bg-slate-200" />



                </div>

            </div>

        </section>
    )
}


export default DesignSection;