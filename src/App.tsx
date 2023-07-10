import React, { Suspense } from 'react';
import DesktopMenu from './components/DesktopMenu';
import Loading from './components/Loading';
import Introduce from './pages/Introduce';
import AboutMe from './pages/AboutMe';
import Expirience from './pages/Expirience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <DesktopMenu />
      <MobileMenu />
      <div className='container'>
        <section id='home'>
          <Introduce />
        </section>
        <section id='about-me'>
          <AboutMe />
        </section>
        <section id='expirience'>
          <Expirience />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
