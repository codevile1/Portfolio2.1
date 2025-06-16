import Header from '../pages/Header';
import Hero from '../pages/Hero';
import About from '../pages/About';
import Work from '../pages/Work';
import Contact from '../pages/Contact';
import MouseFollower from '../pages/Mousef';

const Applayout = () => {
  return (
    <> <MouseFollower/>
      <Header />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="work"><Work /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
};

export default Applayout;
