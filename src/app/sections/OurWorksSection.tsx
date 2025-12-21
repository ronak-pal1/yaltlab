import "../craousel.animation.css"



const CraouselAnimation = () => {
    return (
        <div className="carousel">
            <div className="panel left overflow-hidden">
                <div className="slider slider1">
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27cbe6b05e7c389afa_blockchain-archives.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27c727376b84e9912e_any-file-over-100kb.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa1dbeb08c598a6a29ac_website.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27cbe6b05e7c389afa_blockchain-archives.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27c727376b84e9912e_any-file-over-100kb.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa1dbeb08c598a6a29ac_website.avif" />
                </div>
            </div>

            <div className="panel center">
                <div className="slider slider2">
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27cbe6b05e7c389afa_blockchain-archives.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27c727376b84e9912e_any-file-over-100kb.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa1dbeb08c598a6a29ac_website.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27cbe6b05e7c389afa_blockchain-archives.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27c727376b84e9912e_any-file-over-100kb.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa1dbeb08c598a6a29ac_website.avif" />

                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27cbe6b05e7c389afa_blockchain-archives.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27c727376b84e9912e_any-file-over-100kb.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa1dbeb08c598a6a29ac_website.avif" />
                </div>
            </div>

            <div className="panel right overflow-hidden">
                <div className="slider slider3">
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27cbe6b05e7c389afa_blockchain-archives.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27c727376b84e9912e_any-file-over-100kb.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa1dbeb08c598a6a29ac_website.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27cbe6b05e7c389afa_blockchain-archives.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa27c727376b84e9912e_any-file-over-100kb.avif" />
                    <img src="https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b5aa1dbeb08c598a6a29ac_website.avif" />
                </div>
            </div>
        </div>
    )
}


const OurWorksSection = () => {
    return (
        <section className="w-full h-[800px] flex flex-1 overflow-hidden">
            <div className="w-[80px] border-r-[0.5px] border-r-white/40 flex flex-col">
                <div className="w-full h-[60px] border-b-[0.5px] border-b-white/40">

                </div>


                <div className="flex flex-1 flex-col">


                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-white/40">

                </div>
            </div>


            <div className="flex-1 flex flex-col overflow-hidden">

                <div className="w-full h-[60px] border-b-[0.5px] border-b-white/40">

                </div>


                <div className="flex flex-1 flex-col">
                    <div className="w-full h-[100px] flex flex-row border-b-[0.5px] border-b-white/40 px-7 items-center ">
                        <p className="text-5xl text-white font-homevideo">Our Works</p>
                    </div>

                    <div className="w-full flex flex-1 h-full overflow-hidden items-center justify-center">

                        <CraouselAnimation />

                    </div>
                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-white/40">

                </div>

            </div>


            <div className="w-[80px] border-l-[0.5px] border-l-white/40 flex flex-col">
                <div className="w-full h-[60px] border-b-[0.5px] border-b-white/40">

                </div>


                <div className="flex flex-1 flex-col">

                </div>

                <div className="w-full h-[60px] border-t-[0.5px] border-t-white/40">

                </div>
            </div>
        </section>
    )
}


export default OurWorksSection;