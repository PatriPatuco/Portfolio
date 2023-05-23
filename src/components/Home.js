function Home() {
return (
  <section className="home">
      <h3 className="home__subtitle">Hello, world! my name is</h3>
      <h1 className="home__title">PATRICIA BECERRRA</h1>
      <h3 className="home__subtitle">Graphic designer & Frontend developer</h3>
      <nav className="home__nav">
        <ul className="home__nav--menu">
          <li className="home__nav--menu--item">
            <a className="home__nav--menu--item--link" href="www.google.es">WORK</a> -
          </li>
          <li className="home__nav--menu--item">
            <a className="home__nav--menu--item--link" href="www.google.es">ABOUT</a> - 
          </li>
          <li className="home__nav--menu--item">
            <a className="home__nav--menu--item--link" href="www.google.es">CONTACT</a>
          </li>
        </ul>
      </nav>
  </section>
);
}

export default Home;