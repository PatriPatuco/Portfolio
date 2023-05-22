function Contact() {
  return (
    <section className="contact">
      <aside className="contact__aside menu-right">Contact</aside>
      <h2 className="contact__title">Let's talk!</h2>
      <p className="about__resume regular-text">
        I am currently looking for a job. I would love to join a project that
        allows me to expand and sharpen my skills as a developer and help the
        team to develop their product. Want to get in touch with me? You can
        reach me through my social media or email.
      </p>

      <div className="contact__social">
        <div className="contact__social--item">
          <a href="mailto:patricia.beco.dg@gmail.com">
            <img src="" alt="" />
            <p>patricia.beco.dg@gmail.com</p>
          </a>
        </div>
        <div className="contact__social--item">
          <a href="https://linkedin.com/in/patriciabecerracorbacho/">
            <img src="" alt="" />
            <p>linkedin.com/in/patriciabecerracorbacho/</p>
          </a>
        </div>
        <div className="contact__social--item">
          <a href="https://twitter.com/PatuDev">
            <img src="" alt="" />
            <p>twitter.com/PatuDev/</p>
          </a>
        </div>
        <div className="contact__social--item">
          <a href="https://github.com/PatriPatuco">
            <img src="" alt="" />
            <p>github.com/PatriPatuco</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
