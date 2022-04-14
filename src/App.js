import AboutUs from "./AboutUs";
import Contact from "./Contact";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
          <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/qui-sommes-nous">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
      <footer className="footer padding-h-2 padding-v-2 large-flex">
        <div className="first-column">
          <div className="footer__main-logo">
            <img src="/images/logo/logo_white.png" alt="Logo Uptogo" />
          </div>
          <p>
            Startup créée par 2 passionnés d'automobiles. La première
            Marketplace Automobile Premium
          </p>
        </div>
        <div>
          <h3>Mieux nous connaitre</h3>
          <ul>
            <li>
              <a>- Qui sommes-nous ?</a>
            </li>
            <li>
              <a>- F.A.Q</a>
            </li>
            <li>
              <a>- Offres aux particuliers</a>
            </li>
            <li>
              <a>- Offres aux professionnels</a>
            </li>
            <li>
              <a>- Expertiser un vehicule</a>
            </li>
            <li>
              <a>- Contactez-nous</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Uptogo 2019</h3>
          <ul>
            <li>
              <a>- Mentions légales</a>
            </li>
            <li>
              <a>- Conditions générales d'utilisation</a>
            </li>
            <li>
              <a>- Politique de confidentialité</a>
            </li>
            <li>
              <a>- Conditions générales de vente</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Rejoignez-nous!</h3>
          <div>
            <ul className="footer__social-icons">
              <li className="footer__social-icon">
                <img src="/images/footer/icons/facebook.png" />
              </li>
              <li className="footer__social-icon">
                <img src="/images/footer/icons/instagram (1).png" />
              </li>
              <li>
                <img src="/images/footer/icons/youtube (1).png" />
              </li>
            </ul>
          </div>
          <div className="footer__logos">
            <img
              src="/images/footer/reseau-entreprendre.fw.png"
              className="footer__logo"
            />
            <img src="/images/footer/logo-bpifrance.png" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
