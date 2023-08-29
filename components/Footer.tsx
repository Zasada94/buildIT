import Link from "next/link";

const Footer = () => {
  return (
    <footer className="main-footer dark">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-30">
            <div className="item fotcont">
              <div className="fothead">
                <h6>Telefon</h6>
              </div>
              <a href="tel:+48535142310">+48 535 142 310</a>
            </div>
          </div>
          <div className="col-md-4 mb-30">
            <div className="item fotcont">
              <div className="fothead">
                <h6>Email</h6>
              </div>
              <a href="mailto:biuro@buildit-warszawa.pl">
                biuro@buildit-warszawa.pl
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="text-left">
                <p>© 2021 Build it. All right reserved.</p>
              </div>
            </div>
            <div className="col-md-4 abot">
              <div className="social-icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100075555580677"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ti-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/build._it/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ti-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <p className="right">
                <Link href="/polityka-prywatnosci">
                  <a>Polityka prywatności</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
