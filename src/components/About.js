import patri from "../images/profile-picture.png"

function About() {
  return (
    <section className="about">
      <aside className="about__aside menu-right">About</aside>
      <img src={patri} alt="Patricia Becerra portrait" className="about__img"/>
      <p className="about__resume regular-text">
        Hey! I'm Patricia, passionate about graphic design and web development.
        I have been in the design world for over 5 years, but thanks to my
        previous job, I started to be very interested in web development. That
        is the reason why I dig more into the technology world. I consider
        myself a resourceful and committed person who loves team work. In
        addition, my experience as a designer has taught me how to work under
        pressure and deliver the best results in difficult situations. Outside
        of work, I enjoy my free time playing video games, watching some series,
        and spending time with my friends.
      </p>

      <p className="about__info">Experience:</p>
      <div className="about__companies">
        Streamloots
        Kaiju Entertainment
        Gestor.ex
        MonoGrafica
      </div>

      <p className="about__info">Education:</p>
      <div className="about__companies">
        Adalab
        EASDM
      </div>

      <button>
        <img src="" alt="" />
        <p>Download CV</p>
      </button>
    </section>
  );
}

export default About;
