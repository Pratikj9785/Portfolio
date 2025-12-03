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

import StarBackground from './components/StarBackground';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/portfolio');
        setData(response.data);
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
    </div>
  );
}

export default App;
