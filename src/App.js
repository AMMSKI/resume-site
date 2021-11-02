import './StyleSheets/App.css';
import Hero from './Components/Hero';
import image from './Images/editedBackground.png'
import styled from 'styled-components';
import Navigation from './Components/Navbar';
import Projects from './Components/Projects';
import Tech from './Components/Tech';


function App() {
  return (
    <div className='App'>
        <Hero />
        <Projects />
        <Tech />
      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default App;
