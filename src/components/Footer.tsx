

const SurfaceSvg = () => {
  return (
    <svg width="205" height="46" viewBox="0 0 205 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 22.6807C0 13.5346 7.09262 5.95545 16.2187 5.34958L93.4793 0.22031C100.195 -0.225557 106.939 0.00700772 113.608 0.914474L154.289 6.4498L192.238 11.6133C199.549 12.6081 205 18.8513 205 26.2293C205 33.5531 199.626 39.7678 192.379 40.8253L163.484 45.0414C161.165 45.3799 158.823 45.5498 156.479 45.5498H103.579L16.2704 40.0152C7.12264 39.4353 0 31.8468 0 22.6807Z" fill="#BEB0B0" fillOpacity="0.5" />
    </svg>

  )
}

const Footer = () => {
  return (
    <div className="w-full h-fit flex flex-col">

      <div className='w-full h-[200px] bg-white overflow-hidden relative'>
        <div className='w-[400px] bg-[#A4FFBC] h-[40px] absolute bottom-0 right-[80px]'>
        </div>
        <div className='w-[200px] bg-[#A4FFBC] h-[80px] absolute bottom-0 left-[40px]'>
        </div>
      </div>

      <footer className='w-full h-[900px] bg-[#A4FFBC]'>

        <div className='w-full h-full  flex flex-row flex-1'>

          <div className='flex-[0.4] w-full h-full flex flex-col items-center justify-center'>

            <div className="flex flex-col items-center justify-center">
              <img src="/footer-image.webp" alt="" className="w-[80%] object-contain" />

              <div className="w-fit h-fit -mt-12">
                <SurfaceSvg />
              </div>
            </div>


            <div className="w-full px-10 mt-8">

              <div className="w-full flex flex-row items-center gap-x-3">
                <input type="email" placeholder="Enter your email" className="w-full border-[0.5px] border-black placeholder:text-black/60 text-black text-sm px-3 py-3 outline-none" />


                <button className="w-fit bg-black text-white text-sm px-3 py-3">Subscribe</button>

              </div>

            </div>



          </div>

          <div className='flex-[0.6] w-full h-full'>

          </div>

        </div>

        <div>

        </div>


      </footer>
    </div>
  );
}


export default Footer;