import { useState } from 'react';
import Home from '../imports/Home';
import About from '../imports/About';
import ImpactJourney from '../imports/ImpactJourney';
import Projects from '../imports/Projects';
import ImpactDashboard from '../imports/ImpactDashboard';
import Collaborate from '../imports/Collaborate';
import ImpactInsight from '../imports/ImpactInsight';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'journey' | 'projects' | 'dashboard' | 'collaborate' | 'insight'>('home');

  return (
    <>
      {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
      {currentPage === 'about' && <About onNavigate={setCurrentPage} />}
      {currentPage === 'journey' && <ImpactJourney onNavigate={setCurrentPage} />}
      {currentPage === 'projects' && <Projects onNavigate={setCurrentPage} />}
      {currentPage === 'dashboard' && <ImpactDashboard onNavigate={setCurrentPage} />}
      {currentPage === 'collaborate' && <Collaborate onNavigate={setCurrentPage} />}
      {currentPage === 'insight' && <ImpactInsight onNavigate={setCurrentPage} />}
    </>
  );
}
