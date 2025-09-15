import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Reservasi from './components/Reservasi/Reservasi';
import './index.css';
import Galeri from './components/Galeri/Galeri';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reservasi />
      <Galeri />
      <Footer />
    </>
  )
}

export default App
