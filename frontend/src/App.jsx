import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Technologies from './pages/Technologies/Technologies';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Home />
        <About />
        <Projects />
        <Technologies />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;