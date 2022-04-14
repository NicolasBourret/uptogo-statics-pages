import "./Contact.css";

const Contact = () => (
  <div className="contact">
    <nav className="nav">
      <div>
        <img src="/images/logo/logo_white.png" alt="Logo Uptogo" />
      </div>
      <div>
        <a href="#" className="nav__link">
          Connexion/Inscription
        </a>
      </div>
    </nav>
    <div className="intro">
      <h2>Besoin d'aide, d'un conseil ?</h2>
      <p>
        Nous vous remercions de remplir le formulaire ci-dessous, nous vous
        répondrons dans les meilleurs délais.
      </p>
    </div>
    <div className="contact__choices padding-h-2">
      <div className="contact__choice contact__choice--active">
        <img
          src="/images/contact/icons/chat.png"
          className="contact__choice__image"
        />
        <p>Pour une question</p>
      </div>
      <div className="contact__choice">
        <img
          src="/images/contact/icons/phone.png"
          className="contact__choice__image"
        />
        <p>Je souhaie être rappelé</p>
      </div>
      <div className="contact__choice">
        <img
          src="/images/contact/icons/briefcase.png"
          className="contact__choice__image"
        />
        <p>Nous rejoindre</p>
      </div>
      <div className="contact__choice">
        <img
          src="/images/contact/icons/browser.png"
          className="contact__choice__image"
        />
        <p>Contacter le webmaster</p>
      </div>
      <div className="contact__choice">
        <img
          src="/images/contact/icons/deal.png"
          className="contact__choice__image"
        />
        <p>Je suis professionnel</p>
      </div>
      <div className="contact__choice">
        <img
          src="/images/contact/icons/megaphone.png"
          className="contact__choice__image"
        />
        <p>Etablir un partenariat</p>
      </div>
    </div>
    <div className="">
      <form className="form">
        <h2>Nous contacter</h2>
        <div className="form__container padding-h-2 form__flex">
          <div className="flex-1">
            <div className="form__input">
              <label>Sujet</label>
              <input type={"text"} placeholder="Poser une question" />
            </div>
            <div className="form__input">
              <label>Nom</label>
              <input type={"text"} placeholder="Entrez votre Nom" />
            </div>
            <div className="form__input">
              <label>Pseudo</label>
              <input type={"text"} placeholder="Choisissez un pseudo" />
            </div>
            <div className="form__input">
              <label>Email</label>
              <input type={"email"} placeholder="Votre email" />
            </div>
          </div>
          <div className="flex-1">
            <div className="form__input">
              <label>Message</label>
              <textarea placeholder="Entrez votre message"></textarea>
            </div>
          </div>
        </div>
        <button>Envoyer</button>
      </form>
    </div>
    <div className="padding-h-2 margin-v-4">
      <h2>Publicité sur uptogo.fr</h2>
      <p>Notre régie publicitaire, le groupe média Horyzon, vous propose :</p>
      <ul>
        <li>
          Des formats publicitaires natifs et display IAB (Habillage, bannières,
          pavés, ...)
        </li>
        <li>Le sponsoring d'une partie du rédactionnel</li>
        <li>Le sponsoring Newsletter.</li>
      </ul>
      <hr />
    </div>
    <div className="padding-h-2 margin-v-4">
      <h2>Espace presse</h2>
      <p>
        Notre espace presse contient nos derniers communiqués, nos visuels et
        les coordonnées de notre service presse.
      </p>
      <hr />
    </div>
    <div className="padding-h-2 margin-v-4">
      <h2>Recrutement, offres d'emploi</h2>
      <p>Consultez nos offres d'emploi.</p>
    </div>
  </div>
);

export default Contact;
