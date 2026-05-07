import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeslaBanner from '../components/TeslaBanner';

export default function GeoLandingPage() {
  const { city } = useParams();
  
  // Convert URL-friendly city name (saddle-brook) to Display format (Saddle Brook)
  const formattedCity = city
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Dynamic Local Banner */}
      <section className="bg-blue-600 text-white p-10 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold days-one-regular capitalize">
          Expert Auto Body & Collision Repair in {formattedCity}, NJ
        </h1>
        <p className="mt-4 text-xl dm-sans-regular">
          Serving the {formattedCity} community with honest pricing, custom work, and guaranteed repairs.
        </p>
      </section>

      <main className="flex-grow bg-white text-gray-800 p-6 sm:p-12 max-w-5xl mx-auto">
        
        {/* The "Why Us" Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/separator-carsblue.svg" alt="separator" className="h-6" />
            <p className="dm-sans-regular capitalize text-blue-600 font-bold">WHY CHOOSE US</p>
          </div>
          
          <h2 className="text-3xl font-bold days-one-regular mb-6">More Than Just a Shop. We're Family.</h2>
          
          <div className="text-lg leading-relaxed space-y-4">
            <p>
              When you bring your car to Metro Body and Fender, you aren't just another repair ticket. We pride ourselves on treating every single customer like family. Since opening our doors in 1999, our reputation in {formattedCity} and the surrounding areas has been built on fairness, transparency, and a genuine love for what we do.
            </p>
            <p>
              Bobby doesn't just run a shop; he shares a lifelong passion for cars with everyone who walks through the door. Whether you need a stressful post-collision repair handled smoothly or you're looking for meticulous custom paint and suspension work, Bobby and the team ensure you get a top-tier experience. 
            </p>
            <p className="font-bold text-blue-600">
              Fair pricing, expert craftsmanship, and a team that actually cares about your car. That is the Metro Body and Fender guarantee.
            </p>
          </div>
        </div>

        <TeslaBanner />

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gray-100 p-8 rounded-xl shadow-inner">
          <h3 className="text-2xl font-bold mb-4">Need an Estimate in {formattedCity}?</h3>
          <p className="mb-6">Give us a call today or stop by the shop. We handle the insurance headaches so you don't have to.</p>
          <a
            href="tel:2013980300"
            className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded hover:bg-blue-700 transition shadow-lg"
          >
            Call 201-398-0300
          </a>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}