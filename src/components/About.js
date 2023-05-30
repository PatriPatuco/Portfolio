import patri from "../images/profile-picture.png";
import Streamloots from "../images/Streamloots.png";
import Kaiju from "../images/Kaiju.png";
import Gestorex from "../images/Gestorex.png";
import MonoGrafica from "../images/MonoGrafica.png";
import Adalab from "../images/Adalab.png";
import EASDM from "../images/EASDM.png";

function About() {
  return (
    <section className="about" id="about">
      <aside className="about__aside menu-right">
        <p>About</p>
        <div className="menu-line"></div>
      </aside>
      <article className="about__resume">
        <img
          src={patri}
          alt="Patricia Becerra portrait"
          className="about__resume--img"
        />
        <p className="regular-text">
          Hey! I'm Patricia, passionate about graphic design and web
          development.
          <p className="regular-text">
            I have been in the design world for over 5 years, but thanks to my
            previous job, I started to be very interested in web development.
            That is the reason why I dig more into the technology world.
          </p>
          <p className="regular-text">
            I consider myself a resourceful and committed person who loves team
            work. In addition, my experience as a designer has taught me how to
            work under pressure and deliver the best results in difficult
            situations
          </p>
          <p className="regular-text">
            Outside of work, I enjoy my free time playing video games, watching
            some series, and spending time with my friends.
          </p>
        </p>
      </article>

      <article className="about__info">
        <p className="about__info--title">Experience:</p>
        <div className="about__companies">
          <img
            src={Streamloots}
            alt="Streamloots logotype"
            className="about__companies--logo"
          ></img>
          <img
            src={Kaiju}
            alt="Kaiju logotype"
            className="about__companies--logo kaiju"
          ></img>
          <img
            src={Gestorex}
            alt="Gestorex logotype"
            className="about__companies--logo"
          ></img>
          <img
            src={MonoGrafica}
            alt="MonoGrafica logotype"
            className="about__companies--logo"
          ></img>
        </div>

        <p className="about__info--title">Education:</p>
        <div className="about__companies">
          <img
            src={Adalab}
            alt="Adalab logotype"
            className="about__companies--logo adalab"
          ></img>
          <img
            src={EASDM}
            alt="EASDM logotype"
            className="about__companies--logo"
          ></img>
        </div>
      </article>

      <a className="about__button" href="./Patricia-Becerra-Corbacho-CV.pdf" download>
        <i class="fa-solid fa-arrow-down"></i>
        <p>Download CV</p>
      </a>
    </section>
  );
}

export default About;
