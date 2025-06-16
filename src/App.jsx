import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ScrollToTop from './pages/ScrollToTop';
import Applayout from './layout/Applayout';
import Preloader from './pages/Preloader';
import MoreAbout from './pages/MoreAbout';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // 👇 Lock scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  // 👇 Preloader timeout
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  // 👇 Scroll to hash
  useEffect(() => {
    if (!isLoading && location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location, isLoading]);

  if (isLoading) return <Preloader />;

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Applayout />} />
         <Route path="/more-about" element={<MoreAbout/>} />
      </Routes>
    </>
  );
}

export default App;
