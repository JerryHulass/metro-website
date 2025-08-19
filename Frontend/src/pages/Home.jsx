import Header from "../components/Header";
import Carousel from "../components/carousel";
import Footer from "../components/Footer";
import Banner from '../components/Banner';
import Aboutus from '../components/Aboutus';
import Offer from '../components/Offer';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">  
            <Header />
            <Banner />
            <main className="flex-grow bg-white text-gray-800 p-4">
             <Aboutus />
             <Offer />
             <Slider />
             <Carousel />
           </main>
           
            <Footer />
          </div>
  );
};