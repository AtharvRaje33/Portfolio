import './App.css';
import Header from './components/Header';
import Education from './sections/Education';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import ContactUs from './sections/Contact';
import Footer from './components/Footer';
import AboutMe from './sections/About';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}

export default App;