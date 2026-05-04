import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Programs = lazy(() => import('./pages/Programs'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Advertise = lazy(() => import('./pages/Advertise'));

function App() {
  const location = useLocation();

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-dark-600 text-white font-body">
        <Navbar />
        <Suspense fallback={<main className="pt-28 pb-16 text-center text-white/50">Loading...</main>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/advertise" element={<Advertise />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
