import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Banner from '../components/Banner';
import Aboutus from '../components/Aboutus';
import Offer from '../components/Offer';
import Slider from '../components/Slider';
import TeslaBanner from "../components/TeslaBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">  
      <Header />
      <Banner />
      <main className="flex-grow bg-white text-gray-800 p-4">
        <Aboutus />
        <TeslaBanner />
        <Offer />
        <Slider />
        <Carousel />
      </main>
      <Footer />
    </div>
  );
};