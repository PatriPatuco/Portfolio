import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section className="home">
      <h3 className="home__subtitle hello">Hello, world! my name is</h3>
      <h1 className="home__title">PATRICIA BECERRA</h1>
      <h3 className="home__subtitle">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
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
