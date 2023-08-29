import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    fetch("https://api.buildit-warszawa.pl/contact", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }), // body data type must match "Content-Type" header
    }).then(function (response) {
      alert("Dziękujemy za kontakt! Odpowiemy najszybciej jak się da!");
      router.push("/");
    });
  };

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
        style={{ backgroundImage: "url(img/banner.jpg)" }}
      ></section>

      <section className="section-padding2">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 animate-box"
              data-animate-effect="fadeInUp"
            >
              <h2 className="section-title">Kontakt</h2>
            </div>
          </div>
          <div className="row mb-90">
            <div
              className="col-md-4 mb-30 animate-box"
              data-animate-effect="fadeInUp"
            >
              <p>
                <b>Build it Sp. z o.o.</b>
              </p>
              <p>
                <b>NIP:</b> 5272977415
              </p>
            </div>
            <div
              className="col-md-4 mb-30 animate-box"
              data-animate-effect="fadeInUp"
            >
              <p>
                <b>Dane kontaktowe</b>
              </p>
              <p>
                <b>Telefon:</b> <a href="tel:+48535142310">+48 535 142 310</a>
              </p>
              <p>
                <b>E-mail:</b>
                <a href="mailto:biuro@buildit-warszawa.pl">
                  biuro@buildit-warszawa.pl
                </a>
              </p>
            </div>
            <div
              className="col-md-4 animate-box"
              data-animate-effect="fadeInUp"
            >
              <p>
                <b>Formularz kontaktowy</b>
              </p>
              <form id="contact_form" className="row" onSubmit={handleSubmit}>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Imię Nazwisko"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Adres e-mail"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="tel"
                    id="tel"
                    placeholder="Numer telefonu"
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    name="message"
                    id="message"
                    cols={40}
                    rows={4}
                    placeholder="Wiadomość"
                    onChange={(event) => setMessage(event.target.value)}
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button className="butn-dark mt-15" type="submit">
                    <span>Wyślij</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
