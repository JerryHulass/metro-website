export default function Header() {
  return (
    <section className="bg-black text-white pt-0 p-4 items-center text-center">
      
      <div id= "logo-address" className="flex flex-col items-center">
        <img src="/src/assets/metro-body-logo.svg" alt="Metro Body & Fender Logo" className=""/>
        <h1 className="text-2xl pt-0 pb-20 days-one-regular font-bold">619 Midland Ave, Garfield, NJ 07026</h1>
      </div>

      <div id="text-buttons" className="">
        <div id="text-header">
          <h1 className="text-5xl font-bold days-one-regular leading-tight">Expert Car Repair Services </h1>
          <p className="text-xl pt-10 dm-sans-regular">We offering well-trained mechanics and excellent customer service, all at competitive prices of vehicle repairs at your home or place of work.</p>
        </div>

        <div className="pt-8 days-one-regular"> 
          <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">✉️ Contact Us</button>
          <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">📞 201-398-0300</button>
        </div>

      </div>

    </section>
  );
}
