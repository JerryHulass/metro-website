import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Offer from './components/Offer';
import Footer from './components/Footer';
import Home from './pages/Home';
import Banner from './components/Banner';
import Aboutus from './components/Aboutus';


function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">  
        <Header />
        <Banner />
        <main className="flex-grow bg-white text-gray-800 p-4">
         <Aboutus />
         <Offer />
       </main>
        <Footer />
      </div>
    </>
  )
}

export default App
