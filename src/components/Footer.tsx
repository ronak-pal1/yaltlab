

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

      <footer className='w-full h-fit pt-36 pb-16 px-10 bg-[#A4FFBC]'>

        <div className='w-full h-full  flex flex-row flex-1 justify-between'>

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

          <div className='flex-[0.5] w-full h-full flex flex-col items-center justify-center'>


            <div className="w-[50%] h-[60%] grid grid-cols-2 grid-rows-2 gap-20">

              <div className="text-black space-y-4">
                <h2 className="font-light">Services</h2>

                <div className="text-lg font-bold space-y-2">
                  <p>Web Development</p>
                  <p>IOS Development</p>
                  <p>Android Development</p>
                  <p>UI/UX Design</p>
                  <p>Desktop App</p>
                </div>
              </div>
              <div className="text-black space-y-4">
                <h2 className="font-light">Socials</h2>

                <div className="text-lg font-bold space-y-2">
                  <p>Instagram</p>
                  <p>Facebook</p>
                  <p>Twitter</p>
                  <p>Linkedin</p>
                  <p>Youtube</p>
                </div>
              </div>
              <div className="text-black space-y-4">
                <h2 className="font-light">Products</h2>

                <div className="text-lg font-bold space-y-2">
                  <p>Create Tall CLI</p>
                  <p>Tall UI</p>
                  <p>Portfolio Maker</p>
                </div>
              </div>
              <div className="text-black space-y-4">
                <h2 className="font-light">Others</h2>

                <div className="text-lg font-bold space-y-2">
                  <p>About</p>
                  <p>Portfolio</p>
                  <p>Blog</p>
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="flex flex-col space-y-4 w-full items-center justify-center mt-14">
          <p className='text-black text-3xl font-homevideo'>YALTLAB</p>
          <p className="text-black/70 text-xs">Copyright © 2025 YALTLAB. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


export default Footer;