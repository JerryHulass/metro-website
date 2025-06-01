export default function Header() {
  return (
    <section className="bg-black text-white pt-0 p-4 items-center text-center flex sm:flex-row-reverse flex-col">
      
      <div id= "logo-address" className="flex flex-col items-center">
        <img src="/src/assets/metro-body-logo.svg" alt="Metro Body & Fender Logo" className="sm:w-5xl"/>
        <h1 className="text-2xl pt-0 pb-20 days-one-regular font-bold sm:text-4xl">619 Midland Ave, Garfield, NJ 07026</h1>
      </div>

      <div id="text-buttons" className="">
        <div id="text-header">
          <h1 className="text-4xl font-bold days-one-regular leading-tight">Expert Car Repair Services </h1>
          <p className="text-xl pt-10 dm-sans-regular">We offering well-trained mechanics and excellent customer service, all at competitive prices of vehicle repairs at your home or place of work.</p>
        </div>

        <div className="pt-8 pb-8 days-one-regular flex space-x-4"> 
          <button className="group relative h-12 overflow-hidden bg-blue-600 px-6 text-neutral-50 transition"><span>✉️ Contact Us</span><div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div></button>

          <button role="link" className="relative bg-[linear-gradient(#262626,#262626),linear-gradient(#3b82f6,#3b82f6)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#3b82f6]">📞 201-398-0300</button>
        </div>

      </div>

    </section>
  );
}
