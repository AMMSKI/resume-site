import './StyleSheets/App.css';
import Hero from './Components/Hero';
import Navigation from './Components/Navbar';
import Projects from './Components/Projects';
import Tech from './Components/Tech';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';


function App() {
  return (
    <div className='App'>
        <Hero />
        <AboutMe />
        <Tech />
        <Projects />
        <Footer />
      
    </div>
  );
}

export default App;
