import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => (
  <main className="page-width about-page">
    <section className="about-hero">
      <p className="eyebrow">A little about us</p>
      <h1>Good tech should make everyday life <span>feel easier.</span></h1>
      <p>ModuMart is a small, focused collection of practical accessories for work, play, and the spaces in between.</p>
    </section>
    <section className="about-values">
      <article>
        <span>01</span>
        <h2>Useful by design</h2>
        <p>We look for everyday essentials that earn their place on your desk and in your bag.</p>
      </article>
      <article>
        <span>02</span>
        <h2>Prices made clear</h2>
        <p>Know what you’re paying for and see the full total before you check out.</p>
      </article>
      <article>
        <span>03</span>
        <h2>People come first</h2>
        <p>Good service matters. We’re here to make finding your next favourite accessory simple.</p>
      </article>
    </section>
    <section className="about-cta">
      <div>
        <p className="eyebrow">Ready when you are</p>
        <h2>Find your next everyday essential.</h2>
      </div>
      <Link className="button button-dark" to="/products">Shop ModuMart <ArrowRight className="button-icon" aria-hidden="true" /></Link>
    </section>
  </main>
);

export default About;
