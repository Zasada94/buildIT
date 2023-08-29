import Link from "next/link";

const BigPicture = () => {
  return (
    <header className="header slider-fade">
      <div
        className="text-left item bg-img"
        style={{ backgroundImage: "url(/img/slider/1.jpg)" }}
        data-overlay-dark="3"
      >
        <div className="v-middle caption mt-30">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="o-hidden">
                  <h1>PROFESJONALNE USŁUGI INŻYNIERYJNE</h1>
                  <p>
                    Nadzorujemy, kontrolujemy, sprawdzamy. Na każdym kroku
                    dbając o satysfakcję klienta.
                  </p>
                  <div className="butn-light mt-30 mb-30">
                    <Link href="/kontakt">
                      <a>
                        <span>Skontaktuj się z nami</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BigPicture;
