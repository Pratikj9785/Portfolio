import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import StarBackground from './components/StarBackground';

import Lenis from 'lenis';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 0.1, // Reduced from 1.2 for faster scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup not strictly necessary for root component but good practice
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use relative URL for Vercel deployment (handled by rewrites)
        // Or fallback to localhost for local dev if not proxied
        const apiUrl = import.meta.env.PROD ? '/api/portfolio' : 'http://localhost:5000/api/portfolio';
        const response = await axios.get(apiUrl);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Fallback data could be added here if needed
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-sky-400">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-400"></div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-sky-500/30">
      <StarBackground />
      <Navbar data={data} />
      <main>
        <Hero data={data?.intro} />
        <Experience data={data?.experience} />
        <Education data={data?.education} />
        <Skills data={data?.skills} />
        <Achievements data={data?.achievements} />
        <Projects data={data?.projects} />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
