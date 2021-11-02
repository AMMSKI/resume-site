import './StyleSheets/App.css';
import Hero from './Components/Hero';
import image from './Images/editedBackground.png'
import styled from 'styled-components';
import Navigation from './Components/Navbar';
import Projects from './Components/Projects';


function App() {
  return (
    <div className='App'>
        <Hero />
        <Projects />
      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default App;
