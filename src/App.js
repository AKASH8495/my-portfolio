
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {

  
  return (
    <div className='max-w-[1130px] mx-auto' >
      <Navbar/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Footer/>
      <Toaster position="bottom-right"
  reverseOrder={false}/>
    </div>
  );
}

export default App;
