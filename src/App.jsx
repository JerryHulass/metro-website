import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Gallery from './components/Gallery';
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
         <Gallery />
       </main>
        <Footer />
      </div>
    </>
  )
}

export default App
