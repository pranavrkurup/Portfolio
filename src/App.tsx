import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import PageOverlay from './components/PageOverlay';
import ScrollIndicator from './components/ScrollIndicator';
import FloatingSocials from './components/FloatingSocials';

import Cover from './components/Cover';
import AboutMe from './components/AboutMe';
import Interests from './components/Interests';
import Skills from './components/Skills';
import Workflow from './components/Workflow';
import Internship from './components/Internship';
import Projects from './components/Projects';
import GitHubSection from './components/GitHubSection';
import CurrentlyExploring from './components/CurrentlyExploring';
import Contact from './components/Contact';
import ThankYou from './components/ThankYou';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SmoothScroll>
      <PageOverlay />
      <CustomCursor />
      
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      
      {!isLoading && (
        <>
          <Navigation />
          <ScrollIndicator />
          <FloatingSocials />
        </>
      )}
      
      <main className={`${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'} transition-opacity duration-1000 ease-in-out relative z-10`}>
        <Cover />
        <AboutMe />
        <Interests />
        <Skills />
        <Workflow />
        <Internship />
        <Projects />
        <GitHubSection />
        <CurrentlyExploring />
        <Contact />
        <ThankYou />
      </main>
    </SmoothScroll>
  );
}

export default App;
