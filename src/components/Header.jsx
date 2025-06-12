export default function Header() {
  return (
    <div className="bg-black text-white pt-0 sm:pb-24 px-2 items-center text-center sm:grid sm:grid-cols-2">
      {/* Logo and address: appears first on mobile, second on desktop */}
      <div className="flex flex-col items-center sm:col-start-2 sm:row-start-1 order-1 sm:order-2">
        <img
          src="/assets/metro-body-logo.svg"
          alt="Metro Body & Fender Logo"
          className="w-full max-w-xs sm:max-w-sm"
        />
        <h1 className="text-xl days-one-regular md:text-3xl bg-black/70 px-4 py-2 rounded mt-4 w-full text-center">
          619 Midland Ave, Garfield, NJ 07026
        </h1>
      </div>
      {/* Text and buttons: appears second on mobile, first on desktop */}
      <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left sm:col-start-1 sm:row-start-1 order-2 sm:order-1 md:pl-32 md:pt-32">
        <div id="text-header">
          <h1 className="text-3xl font-bold days-one-regular pt-10">Expert Car Repair Services</h1>
          <p className="text-xl pt-5 dm-sans-regular px-4 sm:px-0">
            We offering well-trained mechanics and excellent customer service, all at competitive prices of vehicle repairs at your home or place of work.
          </p>
        </div>
        <div className="py-8 days-one-regular flex space-x-4">
          <button className="group relative h-12 overflow-hidden bg-blue-600 px-6 text-neutral-50 transition">
            <span>✉️ Contact Us</span>
            <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
          </button>
          <button
            role="link"
            className="relative bg-[linear-gradient(#262626,#262626),linear-gradient(#3b82f6,#3b82f6)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#3b82f6]"
          >
            📞 201-398-0300
          </button>
        </div>
      </div>
    </div>
  );
}
