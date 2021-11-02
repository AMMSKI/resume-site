import './App.css';
import Hero from './Components/Hero';
import image from './Images/editedBackground.png'
import styled from 'styled-components';
import Navigation from './Components/Navbar';


function App() {
  return (
    <AppContainer className='App'>
      <div>
        <Navigation />
      </div>
      <div className='hero_container'>
        <Hero />
      </div>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: 'flex';
`


export default App;
