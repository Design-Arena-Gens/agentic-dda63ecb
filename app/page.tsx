import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Technology />
      <Contact />
      <Footer />
    </main>
  );
}
