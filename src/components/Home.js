import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section className="home">
      <h3 className="home__subtitle">Hello, world! my name is</h3>
      <ul className="home__title">
        <li className="home__title--span ">&lt;</li>
        <li className="home__title--letter spaced">P</li>
        <li className="home__title--letter ghost">A</li>
        <li className="home__title--letter ghost">T</li>
        <li className="home__title--letter ghost">R</li>
        <li className="home__title--letter ghost">I</li>
        <li className="home__title--letter ghost">C</li>
        <li className="home__title--letter ghost">I</li>
        <li className="home__title--letter ghost">A</li>

        <li className="home__title--letter spaced">B</li>
        <li className="home__title--letter ghost">E</li>
        <li className="home__title--letter ghost">C</li>
        <li className="home__title--letter ghost">E</li>
        <li className="home__title--letter ghost">R</li>
        <li className="home__title--letter ghost">R</li>
        <li className="home__title--letter ghost">A</li>
        <li className="home__title--span spaced">/&gt;</li>
      </ul>
      <h3 className="home__subtitle">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2000)
              .changeDelay(90)
              .typeString("Frontend Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Graphic Designer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Frontend Developer & Graphic Designer")
              .start();
          }}
        />
      </h3>

      <nav className="home__nav">
        <ul className="home__nav--menu">
          <li className="home__nav--menu--item">
            <a className="home__nav--menu--item--link" href="#work">
              WORK
            </a>
            -
          </li>
          <li className="home__nav--menu--item">
            <a className="home__nav--menu--item--link" href="#about">
              ABOUT
            </a>
            -
          </li>
          <li className="home__nav--menu--item">
            <a className="home__nav--menu--item--link" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Home;
