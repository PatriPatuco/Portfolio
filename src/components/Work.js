function Work() {
  return (
    <section className="work" id="work">
      <aside className="work__aside menu-left">
        <div className="menu-line"></div>
        <p>Work</p>
      </aside>
      <article className="work__project">
        <h2 className="work__project--title">Harry Potter wiki</h2>
        <p className="work__project--languages">React - SCSS - HTML - HP Api</p>
        <p className="work__project--description">
          Wiki project dedicated to Harry Potter Saga. You can do the following
          things on the site: Filter by gender, Hogwarts house, and character
          name. Check the entire list of characters. Visit the details page and
          discover more info about each character.
        </p>
      </article>
      <article className="work__project">
        <h2 className="work__project--title">Proyectos Canelo</h2>
        <p className="work__project--languages">React - SCSS - HTML - MySQL</p>
      </article>
      <article className="work__project">
        <h2 className="work__project--title">Guess the number</h2>
        <p className="work__project--languages">JavaScritp - SCSS - HTML</p>
      </article>
      <article className="work__project">
        <h2 className="work__project--title">Cocktail Hunt</h2>
        <p className="work__project--languages">JavaScript - SCSS - HTML</p>
      </article>
    </section>
  );
}
export default Work;
