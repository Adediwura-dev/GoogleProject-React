import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Introducing
          <br />
          Gemini 3.8 Flash
          <br />
          and 3.8 Flash Cyber
        </h1>

        <p>
          Our newest Gemini models deliver next-generation intelligence
          for agentic workflows and cybersecurity.
        </p>

        <a href="https://blog.google/" className="hero-button">
          Learn more
        </a>

      </div>

    </section>
  );
}

export default Hero;