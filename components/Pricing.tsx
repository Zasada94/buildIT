import Footer from "./Footer";

const Pricing = () => {
  return (
    <div className="content-wrapper">
      <section className="content-lines-wrapper">
        <div className="content-lines-inner">
          <div className="content-lines"></div>
        </div>
      </section>

      <section
        className="banner-header banner-img valign bg-img bg-fixed"
        data-overlay-light="3"
        style={{backgroundImage: "url(/img/banner.jpg)"}}
      ></section>

      <section className="section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title">Cennik</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="pricing-card">
                <p className="pricing-card-name">
                  Inwestor zastępczy i nadzór inwestorski
                </p>

                <div className="pricing-card-bottom">
                  <p>
                    Ze względu na różnorodność oraz elastyczne podejście do
                    klienta usługa inwestora zastępczego oraz nadzór inwestorski
                    wyceniane są indywidualnie.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card">
                <p className="pricing-card-name">Odbiory techniczne</p>
                <div className="pricing-card-bottom">
                  <p>Mieszkania [cena brutto]</p>
                  <ul className="bullet-list">
                    <li>
                      do 45m<sup>2</sup>  - 350 PLN
                    </li>
                    <li>
                      46m<sup>2</sup> - 70m<sup>2</sup>  - 550 PLN
                    </li>
                    <li>
                      powyżej 71m<sup>2</sup>  - 700 PLN
                    </li>
                  </ul>
                  <p>Domy [cena brutto]</p>
                  <ul className="bullet-list">
                    <li>
                      do 100m<sup>2</sup>  - 550 PLN
                    </li>
                    <li>
                      101m<sup>2</sup> - 150m<sup>2</sup>  - 750 PLN
                    </li>
                    <li>
                      151m<sup>2</sup> - 250m<sup>2</sup>  - 900 PLN
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card">
                <p className="pricing-card-name">
                  Pakiet przygotowujący do budowy
                </p>
                <div className="pricing-card-bottom">
                <ul className="bullet-list">
                    <li>
                      do 200m<sup>2</sup> - 4500 PLN
                    </li>
                    <li>
                      201m<sup>2</sup> - 300m<sup>2</sup> - 5500 PLN
                    </li>
                    <li>
                      powyżej 301m<sup>2</sup> - indywidualna wycena
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
