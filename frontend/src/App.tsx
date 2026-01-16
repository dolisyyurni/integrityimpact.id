import { useState } from 'react';

import Home from './imports/Home';
import About from './imports/About';
import ImpactJourney from './imports/ImpactJourney';
import Projects from './imports/Projects';
import ImpactDashboard from './imports/ImpactDashboard';
import Collaborate from './imports/Collaborate';
import ImpactInsight from './imports/ImpactInsight';
import ImpactMap from './components/ImpactMap';

import DaftarPemuda from './imports/DaftarPemuda';
import BuatAkun from './imports/BuatAkun';
import BuatAkun2 from './imports/BuatAkun2';
import BuatAkun3 from './imports/BuatAkun3';
import ProfilDanDashboardPemuda from './imports/ProfildanDashboardPemuda';

import DaftarMentor from './imports/DaftarMentor';
import BuatAkunMentor from './imports/BuatAkunMentor';
import BuatAkunMentor2 from './imports/BuatAkunMentor2';
import ProfilDanDashboardMentor from './imports/ProfildanDashboardMentor';

type PageType =
  | 'home'
  | 'about'
  | 'journey'
  | 'projects'
  | 'dashboard'
  | 'collaborate'
  | 'insight'
  | 'daftar'
  | 'register'
  | 'register2'
  | 'register3'
  | 'profile'
  | 'daftarmentor'
  | 'registermentor'
  | 'registermentor2'
  | 'profilementor';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  return (
    <>
      {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
      {currentPage === 'about' && <About onNavigate={setCurrentPage} />}
      {currentPage === 'journey' && <ImpactJourney onNavigate={setCurrentPage} />}
      {currentPage === 'projects' && <Projects onNavigate={setCurrentPage} />}
      {currentPage === 'dashboard' && <ImpactDashboard onNavigate={setCurrentPage} />}
      {currentPage === 'collaborate' && <Collaborate onNavigate={setCurrentPage} />}
      {currentPage === 'insight' && <ImpactInsight onNavigate={setCurrentPage} />}

      {currentPage === 'daftar' && <DaftarPemuda onNavigate={setCurrentPage} />}
      {currentPage === 'register' && <BuatAkun onNavigate={setCurrentPage} />}
      {currentPage === 'register2' && <BuatAkun2 onNavigate={setCurrentPage} />}
      {currentPage === 'register3' && <BuatAkun3 onNavigate={setCurrentPage} />}
      {currentPage === 'profile' && <ProfilDanDashboardPemuda onNavigate={setCurrentPage} />}

      {currentPage === 'daftarmentor' && <DaftarMentor onNavigate={setCurrentPage} />}
      {currentPage === 'registermentor' && <BuatAkunMentor onNavigate={setCurrentPage} />}
      {currentPage === 'registermentor2' && <BuatAkunMentor2 onNavigate={setCurrentPage} />}
      {currentPage === 'profilementor' && <ProfilDanDashboardMentor onNavigate={setCurrentPage} />}
    </>
  );
}
