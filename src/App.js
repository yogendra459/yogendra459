import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import SkillSection from './components/SkillSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <Education/>
      <SkillSection/>
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
      <Footer />
      
    </div>
  );
}

export default App;
