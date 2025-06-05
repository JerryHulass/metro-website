import { Carousel } from "@material-tailwind/react";


export default function Offer() {
    return (
        <div className="bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-8">
                <div className="pt-5 pb-1 flex gap-1">
                    <img src="/src/assets/separator-carsblue.svg" alt="seperator icon" />
                    <p className="dm-sans-regular capitalize text-blue-600 font-bold">WHAT WE OFFER</p>
                </div>
                <h2 className="text-2xl days-one-regular mb-4">Explore Our Services</h2>
              <div className="max-w-4xl mx-auto">
                <Carousel className="rounded-xl">
                    <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" alt="Service 1" className="h-64 w-full object-cover"/>
                    <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" alt="Service 2" className="h-64 w-full object-cover"/>
                    <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Service 3" className="h-64 w-full object-cover"/>
                </Carousel>
              </div>
            </div>
        </div>
    );
}