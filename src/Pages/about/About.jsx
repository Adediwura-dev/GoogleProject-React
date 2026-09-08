import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import ContentCard from "../../Components/ContentCard/ContentCard";
import Footer from "../../Components/Footer/Footer";

import "./About.css";

function About() {
  return (
    <div className="about-page">
      <Navbar />

      <main>
        <Hero />

        <section className="quick-links">
          <div className="quick-link-card">
            <img
              src="/src/assets/about-homepage-3up-exploreproducts-1.webp"
              alt="Explore Google products"
            />

            <a href="#products">
              <span>
                Explore our products and features across Search, Google
                Workspace, and more
              </span>
              <span>→</span>
            </a>
          </div>

          <div className="quick-link-card">
            <img src="/src/assets/about-3up-gdm.webp" alt="Google AI models" />

            <a href="#ai">
              <span>
                Learn all about our leading AI models — and discover their
                capabilities
              </span>
              <span>→</span>
            </a>
          </div>

          <div className="quick-link-card">
            <img
              src="/src/assets/about-homepage-3up-research.png"
              alt="Google research"
            />

            <a href="#research">
              <span>
                See how we’re tackling some of the most challenging problems in
                computer science
              </span>

              <span>→</span>
            </a>
          </div>
        </section>

        <ContentCard
          id="ai"
          title="AlphaGenome Atlas: a high-resolution map of human DNA"
          description="This AI-powered database maps all 9 billion genetic variants across the human genome to help scientists make biological discoveries faster."
          buttonText="Check it out"
          image="/src/assets/alphagenome-atlas-hero-social.webp"
        />

        <section className="globe-section">
          <div className="globe-placeholder">G</div>

          <div>
            <h2>Google around the globe</h2>

            <p>Learn about Google's work and impact around the world.</p>

            <a href="#">
              Explore <span>→</span>
            </a>
          </div>
        </section>

        <section className="newsletter">
          <h2>Get the latest news from Google in your inbox</h2>

          <p>
            Sign up to receive top stories from the week — from product
            announcements, to everyday tips.
          </p>

          <a href="#">
            Subscribe <span>→</span>
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
