import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Labs from '../components/Labs';
import CaseStudies from '../components/CaseStudies';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import {
  personal,
  skills,
  certifications,
  labProgress,
  caseStudies,
  timeline,
} from '../data/portfolio';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sumit Kumar | Cybersecurity Analyst & Penetration Tester</title>
      </Head>

      {/* Background layers */}
      <div className="grid-bg" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar resumeLink={personal.resume} />

      <main className="relative z-10">
        <Hero personal={personal} />
        <About personal={personal} timeline={timeline} />
        <Skills skills={skills} />
        <Certifications certifications={certifications} />
        <Labs labProgress={labProgress} />
        <CaseStudies caseStudies={caseStudies} />
        <Resume personal={personal} />
        <Contact personal={personal} />
      </main>

      <Footer personal={personal} />
    </>
  );
}
