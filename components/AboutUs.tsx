import Footer from "./Footer";

const AboutUs = () => {
  return <div className="content-wrapper">
    <section className="content-lines-wrapper">
      <div className="content-lines-inner">
        <div className="content-lines"></div>
      </div>
    </section>

    <section
      className="banner-header banner-img valign bg-img bg-fixed"
      data-overlay-light="3"
      style={{backgroundImage: 'url(/img/banner.jpg)'}}
    ></section>

    <section className="about section-padding2">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 mb-30 animate-box"
            data-animate-effect="fadeInUp"
          >
            <h2 className="section-title">
              O <span>nas</span>
            </h2>
            <p>
              Jesteśmy firmą świadczącą usługi inżynieryjne w Warszawie i
              okolicach. Oferujemy wielopłaszczyznowe wsparcie w sektorze
              budowlanym: usługę inwestora zastępczego, nadzór inwestorski,
              odbiory techniczne oraz porównywarkę cen materiałów budowlanych.
            </p>
            <p>
              Naszym priorytetem jest wyjście naprzeciw potrzebom naszych
              klientów, dlatego każdemu zapewniamy indywidualne podejście oraz
              elastyczne warunki umowy. Wyróżnia nas dbałość o wysoką jakość
              usług oraz profesjonalizm. Doświadczona kadra Build it sprawia, że
              niestraszne są nam żadne wyzwania! Zadbamy o dopracowanie każdego
              szczegółu oraz sprawną realizacje wszystkich powierzonych nam
              zadań.
            </p>
          </div>
          <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
            <div className="about-img">
              <div className="img">
                <img src="/img/about.jpg" className="img-fluid" alt="" />
              </div>
              {/* <div className="about-img-2 about-buro">Obrazek</div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>;
};
export default AboutUs;
