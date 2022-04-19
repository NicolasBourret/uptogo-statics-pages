import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "./AboutUs.css";
import "swiper/css";
import "swiper/css/pagination";

const AboutUs = () => (
  <div className="about">
    <nav>
      <div className="nav">
        <div className="container nav--flex">
          <div>
            <img src="/images/logo/logo_white.png" alt="Logo Uptogo" />
          </div>
          <div>
            <a href="#" className="nav__link">
              Connexion/Inscription
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div className="banner__background"></div>
    <div className="padding-h-2 margin-v-4 intro">
      <div className="container">
        <h2 className="margin-top-2 halfwidth">
          Amaury & Didier ont souhaité bouleverser le monde des sites d’annonces
          automobiles.
        </h2>
        <p className="halfwidth">
          Uptogo permet à plus de 2 millions de visiteurs de trouver la perle
          rare. Uptogo exploite les technologies modernes à travers un astucieux
          système de filtres et un mode vidéo ludique pour mettre en avant une
          navigation plus convivial et plus pratique.
        </p>
      </div>
    </div>
    <div className="padding-h-2 margin-v-4">
      <div className="container">
        <h2 className="uppercase margin-top-2">Comment tout à commencé</h2>
        <p>
          Vous souvenez vous de votre chambre d’adolescent dont les murs sont
          recouverts de posters de la Ford Mustang de Steve Mc Queen dans
          Bullitt, de la Ferrari 308 GTS de Magnum, de la FALCON GTB de Mad Max
          ou encore l’Aston Martin DB5 de James Bond !<br />
          Au milieu des cassettes VHS de vos films préférés, vous vous
          imaginiez, parcourant le monde au volant d’un des ces beaux bolides,
          en vous chamaillant avec vos copains pour savoir quelle était le
          meilleure voiture au monde.
          <br />
          Celle qui vous faisait rêver avec vos yeux d’adolescent et qui
          s’adaptait à votre personnalité : la puissance d’une Américaine, la
          mélodie d’une Italienne, le savoir-faire d’une Allemande, les courbes
          d’une Anglaise…
        </p>
        <p>
          Ces rêves sont certainement ceux de votre enfance, comme ceux d’Amaury
          et Didier, que la passion de l’automobile n’a jamais quitté.
          <br />
          Ces deux amis ont toujours eu l’amour des belles mécaniques et le
          souci du détail.
        </p>
        <p>
          Ainsi, et après de longues recherches restées vaines sur les sites
          d’annonces traditionnels, ils décidèrent de créer une réelle
          plateforme détaillée, conçue pour les puristes et passionnés
          d’automobiles dans le même état d’esprit qu’eux.
        </p>
        <p>
          De l’idée à la concrétisation, ils ont créé une marketplace
          d’annonces-vidéos dédiée aux véhicules Premium et Sportifs, innovante
          et facile d’utilisation, réservée à une communauté de passionnés.
        </p>
      </div>
    </div>
    <div className="padding-h-2 margin-v-4">
      <div className="container">
        <h2 className="uppercase margin-top-2">Nos engagements</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="engagement">
              <div className="engagement__header">
                <img
                  src="/images/about_us/icons/about-confidential.png"
                  className="engagement__logo"
                />
                <h3 className="engagement__title">Confidentialité</h3>
              </div>
              <p>
                UPTOGO est simple d’utilisation. Néanmoins, toutes les données
                des passionnés utilisateurs sont confidentielles. Toutes
                diffusion, publication, totale ou partielle ou divulgation de
                ces données sous quelque forme que ce soit non expressément
                autorisées sont proscrites.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="engagement">
              <div className="engagement__header">
                <img
                  src="/images/about_us/icons/about-security.png"
                  className="engagement__logo"
                />
                <h3 className="engagement__title">Sécurité</h3>
              </div>
              <p>
                L’expérience est unique et ludique tout en respectant une
                sécurité maximale des données personnelles des utilisateurs.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="engagement">
              <div className="engagement__header">
                <img
                  src="/images/about_us/icons/about-philo.png"
                  className="engagement__logo"
                />
                <h3 className="engagement__title">Philosophie</h3>
              </div>
              <p>
                La marketplace UPTOGO.fr a toujours en quête d’apporter à ses
                passionnés de l’émotion, des sensations et de l’unique. UPTOGO
                rassemble et fédère une communauté de passionnés d’automobiles
                Premium et Sportives, particuliers comme professionnels.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div className="founders margin-v-4">
      <div className="padding-h-2 padding-v-2">
        <div className="container">
          <h2 className="uppercase margin-top-2">Fondateurs</h2>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <h3>Amaury PEYROT</h3>
                <p>
                  A titre personnel, ces dix dernières années, je me suis fait
                  plaisir avec de belles voitures, trois Mustangs dont une GT500
                  (540 ch), un grand Cherokee SRT (468ch), une Audi RS4 B8
                  (450ch), et la dernière en date une Audi RS6 C7 de 560ch.
                </p>
                <p>
                  Lorsque j’achetais une voiture d’occasion, j’ai été trop
                  souvent confronté à la même problématique ! Je souhaitais
                  trouver la perle rare incluant certaines options
                  indispensables pour moi comme le pack carbone, des sièges
                  baquets, des échappements sport, une caméra 360°…
                </p>
                <p>
                  J’ai consacré parfois plusieurs mois, avant de dénicher la
                  bonne. Et malheureusement, souvent, il manquait une option !
                </p>
                <p>
                  Que de temps et d’énergie perdus et que de déceptions vécues !
                  Aujourd’hui, tout cela est du passé, avec l’arrivée de la
                  plateforme UPTOGO.fr
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h3>Didier LE QUEMENER</h3>
                <p>
                  Fan depuis toujours des voitures de Sport et Premium, j’ai eu
                  la chance d’en posséder quelques-unes ! Amaury et moi
                  travaillons quotidiennement depuis douze ans ensemble. Outre
                  le plaisir de collaborer ensemble, Amaury m’a également
                  transmis le goût des belles voitures américaines ! Après une
                  Ford Mustang GT V8, me voilà désormais au volant d’une Ford
                  Mustang RTR (édition lim. à 500 ex). Mais que de soucis pour
                  trouver ma perle rare…
                </p>
                <p>
                  Mais tout cela est maintenant derrière ! L’alliance de nos
                  expériences passées, principalement en développement de
                  projets marketing et la création et l’innovation de UPTOGO va,
                  je suis persuadé, constituer un cocktail détonnant !
                </p>
                <p>
                  Amateurs de belles mécaniques, cette marketplace a été conçue
                  et réalisée pour vous !
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    <div className="padding-h-2 margin-v-4">
      <div className="container">
        <h2 className="uppercase margin-top-2">Chiffres clés</h2>
        <p>
          250 000 annonces / 125k membres / 3 pays / 6,5 millions de visiteurs
          uniques chaque mois / 30 millions de pages vues.
        </p>
      </div>
    </div>
    <div className="padding-h-2 margin-v-4">
      <div className="container">
        <h2 className="margin-top-2">
          Merci à l’ensemble de nos collaborateurs, investisseurs, & membres
          d’Uptogo !
        </h2>
        <p>
          Alain F., Alexandre P., Alexandre V., Benjamin C., Carlos D.,
          Christophe B., Christophe C., Daniel P., Dimitri T., Dominique B.,
          Elodie C., Erwan L., Erwan G., Florian., Francesca C., Gaëlle L.,
          Giovanni T., Guillaume., Isabelle B., José D., Joël T., Jules V.,
          Kevin Z., Laurent L., Loïc G., Maxime S., Michel L., Pascal V., Serge
          M., Thomas B., Vincent G., Yannick A.
        </p>
      </div>
    </div>
    <div className="padding-h-2 margin-v-4">
      <div className="container large-flex">
        <p>
          Vous connaissez à présent l’équipe et la marketplace !<br />
          Souhaitez-vous rejoindre notre communauté ?<br />
          Restez informé(e) en adhérant à nos réseaux sociaux pour connaître les
          dernières actualités.
        </p>
        <div>
          <img src="/images/about_us/icons/about-social-icons.png" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
