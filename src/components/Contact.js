function Contact() {
  return (
    <section className="contact" id="contact">
      <aside className="contact__aside contact__aside--desktop">
        <div className="menu-line"></div>
        <p>Contact</p>
      </aside>
      <article className="contact__info">
        <h2 className="contact__info--title">Let's talk!</h2>
        <p className="about__info--resume regular-text">
          I am currently looking for a job. I would love to join a project that
          allows me to expand and sharpen my skills as a developer and help the
          team to develop their product.
        </p>
        <p className="about__info--resume regular-text">
          Want to get in touch with me? You can reach me through my social media
          or email.
        </p>
      </article>

      <div className="contact__social">
        <div className="contact__social--item">
          <a href="mailto:patricia.beco.dg@gmail.com" target="blank">
            <i class="fa-solid fa-square-envelope"></i>
            <p className="regular-text">patricia.beco.dg@gmail.com</p>
          </a>
        </div>
        <div className="contact__social--item">
          <a
            href="https://linkedin.com/in/patriciabecerracorbacho/"
            target="blank"
          >
            <i class="fa-brands fa-linkedin"></i>
            <p className="regular-text">linkedin.com/in/patriciabecerracorbacho/</p>
          </a>
        </div>
        <div className="contact__social--item">
          <a href="https://twitter.com/PatuDev" target="blank">
            <i class="fa-brands fa-square-twitter"></i>
            <p className="regular-text">twitter.com/PatuDev/</p>
          </a>
        </div>
        <div className="contact__social--item">
          <a href="https://github.com/PatriPatuco" target="blank">
            <i class="fa-brands fa-square-github"></i>
            <p className="regular-text">github.com/PatriPatuco</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
