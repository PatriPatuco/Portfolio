import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  useEffect(() => {
    const text = document.querySelector(".text");
    const letters = Array.from(text.querySelectorAll("li"));

    setTimeout(() => {
      text.classList.remove("hidden");
      letters[0].classList.add("typing-animation");
    }, 2000); // Ajusta el tiempo de espera según tus preferencias
  }, []);

  return (
    <section className="home">
      <h3 className="home__subtitle">Hello, world! my name is</h3>
      <ul className="home__title text hidden">
        <li className="home__span">&lt;</li>
        <li>P</li>
        <li className="ghost">A</li>
        <li className="ghost">T</li>
        <li className="ghost">R</li>
        <li className="ghost">I</li>
        <li className="ghost">C</li>
        <li className="ghost">I</li>
        <li className="ghost">A</li>
        <li className="spaced">B</li>
        <li className="ghost">E</li>
        <li className="ghost">C</li>
        <li className="ghost">E</li>
        <li className="ghost">R</li>
        <li className="ghost">R</li>
        <li className="ghost">A</li>
        <li className="home__span spaced">/&gt;</li>
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
