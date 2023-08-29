import Link from "next/link";
import Footer from "./Footer";

const Polityka = () => {
  return (
    <div className="content-wrapper">
      <section
        className="banner-header banner-img valign bg-img bg-fixed"
        data-overlay-light="3"
        style={{ backgroundImage: "url(img/banner.jpg)" }}
      ></section>
      <section className="about section-padding2">
        <div className="container">
          <h2 className="section-title">
            POLITYKA PRYWATNOŚCI <span>BUILD IT SP. Z O.O.</span>
          </h2>
          <p>
            Build it Spółka z ograniczoną odpowiedzialnością przetwarza dane
            osobowe zgodnie z treścią przepisów Rozporządzenia Parlamentu
            Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
            sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
            osobowych i w sprawie swobodnego przepływu takich danych oraz
            uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie
            danych, dalej: <strong>Rozporządzenie</strong> lub{" "}
            <strong>RODO</strong>). Zachęcamy Cię do zapoznania się z poniższą
            informacją, w której staramy się przedstawić najważniejsze
            informacje w tym zakresie.
          </p>
          <h4 className="section-title2 center">
            Kto jest Administratorem Twoich danych osobowych?
          </h4>
          <p>
            Administratorem Twoich danych osobowych jest Build It spółka z
            ograniczoną odpowiedzialnością z siedzibą w Warszawie. Nasze
            szczegółowe dane: Build it spółka z ograniczoną odpowiedzialnością z
            siedzibą w Warszawie, adres: Aleja Jana Pawła II 43A/37B, 01-001
            Warszawa, wpisana do Rejestr Przedsiębiorców Krajowego Rejestru
            Sądowego prowadzonego przez Sąd Rejonowy dla m.st. Warszawy w
            Warszawie, XII Wydział Gospodarczy Krajowego Rejestru Sądowego pod
            numerem KRS: 0000931564, NIP: 5272977415, REGON: 52044309, kapitał
            zakładowy: 5.000 zł.
          </p>
          <h4 className="section-title2 center">
            Jak możesz skontaktować się z Administratorem?
          </h4>
          <p>Kontakt z Administratorem możliwy jest za pośrednictwem:</p>
          <ul>
            <li>
              • formularza kontaktowego znajdującego się pod adresem:
              <Link href="/kontakt">
                <a>
                  <u>https://buildit-warszawa.pl/kontakt</u>
                </a>
              </Link>
            </li>
            <li>
              • pocztą elektroniczną pod adresem:
              <a href="mailto:biuro@buildit-warszawa.pl">
                <u>biuro@buildit-warszawa.pl</u>
              </a>
            </li>
            <li>
              • listownie, poprzez wysłanie przesyłki na adres: Build it sp. z
              o.o., Aleja Jana Pawła II 43A/37B, 01-001 Warszawa
            </li>
            <li>• telefonicznie pod numerem: 535 142 310.</li>
          </ul>
          <h4 className="section-title2 center">
            Na jakiej podstawie przetwarzamy Twoje dane osobowe?
          </h4>
          <p>
            Prawna podstawa przetwarzania danych osobowych różni się w
            zależności od sytuacji opisanych poniżej:
          </p>
          <table>
            <tbody>
              <tr>
                <td className="column1">
                  <h5>
                    Jeżeli odwiedzasz stronę internetową buildit-warszawa.pl
                  </h5>
                </td>
                <td>
                  <p>Przetwarzamy Twoje dane osobowe w celach:</p>
                  <ul>
                    <li>
                      • zapewnienia prawidłowego działania strony
                      buildit-warszawa.pl
                    </li>
                    <li>
                      • ewentualnego przeciwdziałania działaniom niezgodnym z
                      powszechnie obowiązującymi przepisami prawa.
                    </li>
                  </ul>
                  <p>
                    Dane te zapisujemy w szczególności w ramach plików cookie
                    oraz logów dotyczących odwiedzin strony internetowej. Prawną
                    podstawą do przetwarzania danych w tym zakresie jest przepis
                    art. 6 ust. 1 lit. f) Rozporządzenia, umożliwiający
                    przetwarzanie danych w sytuacji gdy jest to niezbędne do
                    realizacji celów wynikających z prawnie uzasadnionych
                    interesów realizowanych przez administratora lub przez
                    stronę trzecią, przy czym prawnie uzasadnionym interesem
                    administratora w tym przypadku jest zapewnienie prawidłowego
                    działania strony oraz przeciwdziałanie oszustwom i
                    naruszeniom przepisów prawa.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="column1">
                  <h5>
                    Jeżeli:
                    <ul>
                      <li>• korzystasz z formularza kontaktowego,</li>
                      <li>• wysyłasz nam wiadomość e-mail,</li>
                      <li>• kontaktujesz się z nami listownie,</li>
                      <li>• kontaktujesz się z nami telefonicznie</li>
                    </ul>
                  </h5>
                </td>
                <td>
                  <p>
                    Przetwarzamy Twoje dane osobowe w celu kontaktowania się z
                    Tobą i wymiany wiadomości.
                  </p>
                  <p>
                    Prawną podstawą do przetwarzania danych w tym zakresie jest
                    przepis art. 6 ust. 1 lit. f) Rozporządzenia, umożliwiający
                    przetwarzanie danych w sytuacji, gdy jest to niezbędne do
                    realizacji celów wynikających z prawnie uzasadnionych
                    interesów realizowanych przez administratora lub przez
                    stronę trzecią. Prawnie uzasadnionym interesem
                    administratora w tym przypadku jest konieczność
                    przetwarzania danych w celu kontaktu z osobami i udzielenia
                    im odpowiedzi na zadane pytania.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="column1">
                  <h5>
                    Jeżeli jesteś naszym Klientem lub współpracujesz z nami jako
                    nasz Dostawca lub Kontrahent
                  </h5>
                </td>
                <td>
                  <p>Przetwarzamy Twoje dane osobowe w następujących celach:</p>
                  <ul>
                    <li>
                      • <u>zawarcia oraz wykonania postanowień naszej umowy</u> –
                      prawną podstawą do przetwarzania danych w tym zakresie
                      jest przepis art. 6 ust. 1 lit. b) Rozporządzenia
                      umożliwiający przetwarzanie danych w sytuacji gdy jest to
                      niezbędne zawarcia oraz do wykonania umowy, której stroną
                      jest osoba, której dane dotyczą, lub do podjęcia działań
                      na żądanie osoby, której dane dotyczą, przed zawarciem
                      umowy,
                    </li>
                    <li>
                      • <u>
                        realizacji obowiązków nałożonych na nas na podstawie
                        przepisów prawa
                      </u>
                      , w tym w szczególności w zakresie przepisów podatkowych –
                      prawną podstawą do przetwarzania danych w tym zakresie
                      jest przepis art. 6 ust. 1 lit. c) Rozporządzenia
                      umożliwiający przetwarzanie danych w sytuacji, gdy jest to
                      niezbędne do wypełnienia obowiązku prawnego ciążącego na
                      administratorze,
                    </li>
                    <li>
                      • <u>dochodzenia roszczeń lub obrony przed roszczeniami</u>
                      – stanowi to prawnie uzasadniony interes administratora, a
                      tym samym dane osobowe przetwarzane są na podstawie
                      przepisu art. 6 ust. 1 lit. f) Rozporządzenia,
                      umożliwiającego przetwarzanie danych w sytuacji, gdy jest
                      to niezbędne do realizacji celów wynikających z prawnie
                      uzasadnionych interesów realizowanych przez administratora
                      lub przez stronę trzecią.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="column1">
                  <h5>
                    Jeśli jesteś osobą, która kontaktuje się z nami w imieniu
                    naszego Klienta, Dostawcy lub Kontrahenta (czyli podmiotu,
                    który zawarł z nami umowę) i działasz jako jego
                    przedstawiciel (np. jako członek zarządu, pracownik lub
                    współpracownik)
                  </h5>
                </td>
                <td>
                  <p>
                    Przetwarzamy Twoje dane osobowe w celu zawarcia oraz
                    wykonania umowy pomiędzy nami a naszym Klientem, Dostawcą
                    lub Kontrahentem – w takim przypadku prawną podstawą do
                    przetwarzania danych jest przepis art. 6 ust. 1 lit. f)
                    Rozporządzenia, który wskazuje, że przetwarzanie danych jest
                    dopuszczalne w sytuacji, gdy jest to niezbędne do realizacji
                    celów wynikających z prawnie uzasadnionych interesów
                    realizowanych przez administratora lub przez stronę trzecią.
                    Naszym prawnie uzasadnionym interesem w tym przypadku jest
                    właśnie wykonanie umowy pomiędzy nami a naszym Klientem,
                    Dostawcą lub Kontrahentem, co wymaga kontaktowania się z
                    przedstawicielami Klienta, Dostawcy lub Kontrahenta.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <h4 className="section-title2 center">
            Komu mogą zostać udostępnione Twoje dane osobowe?
          </h4>
          <p>
            W celu prawidłowego świadczenia przez nas usług korzystamy z pomocy
            niektórych podmiotów trzecich. Dlatego podane przez Ciebie dane
            osobowe mogą zostać przekazane:
          </p>
          <ul>
            <li>
              • podmiotowi świadczącemu na naszą rzecz usługi hostingowe –
              Vercel Inc. z siedzibą w Walnut, Kalifornii, USA - dane w tym
              zakresie mogą być przekazywane na podstawie Standardowych Klauzul
              Umownych, zatwierdzonych przez Komisję Europejską,
            </li>
            <li>• dostawcy poczty elektronicznej - gmail</li>
            <li>
              • biuru rachunkowemu - TAX-RZESZOW SP. Z O.O., 35-060 Rzeszów, ul.
              Słowackiego 24/105, NIP 8133744034 REGON: 367112520 mail:
              biuro@taxrzeszow.pl
            </li>
          </ul>
          <h4 className="section-title2 center">
            Jak długo przechowujemy Twoje dane osobowe?
          </h4>
          <p>
            Dokładamy starań, by przechowywać Twoje dane osobowe tylko tak
            długo, jak długo są one rzeczywiście niezbędne, a po tym czasie je
            usuwamy. Czas przechowywania Twoich danych osobowych zależy od tego,
            w jaką interakcję z nami wchodzisz:
          </p>
          <ul>
            <li>
              • Jeżeli jesteś osobą, która weszła na naszą stronę internetową,
              przetwarzamy Twoje dane osobowe tak długo, jak długo korzystasz ze
              strony oraz przez okres do 14 miesięcy po jej opuszczeniu,
            </li>
            <li>
              • W przypadku skontaktowania się z nami za pomocą formularza
              kontaktowego lub za pomocą poczty elektronicznej, poczty zwykłej
              lub telefonicznie – przetwarzamy Twoje dane osobowe tak długo, jak
              długo trwa kontakt pomiędzy nami oraz przez okres 3 kolejnych
              miesięcy,
            </li>
            <li>
              • Dane przetwarzane w celu obrony przed roszczeniami i dochodzenia
              roszczeń, a także realizacji postanowień umowy będą przechowywane
              przez okres do upływu terminu przedawnienia roszczeń (do 6 lat od
              końca roku, w którym została zakończona współpraca),
            </li>
            <li>
              • Dane przetwarzane w celu wypełnienia obowiązków rachunkowych i
              podatkowych będą przetwarzane przez okres 5 lat od końca roku
              podatkowego, w którym upłynął termin płatności zobowiązania
              podatkowego.
            </li>
          </ul>
          <h4 className="section-title2 center">
            Jakie prawa przysługują Ci w związku z przetwarzaniem danych
            osobowych?
          </h4>
          <p>
            W związku z przetwarzaniem Twoich danych osobowych, przysługują Ci
            następujące prawa:
          </p>
          <table>
            <tr>
              <td className="column1">
                <h5>Prawo dostępu do danych</h5>
              </td>
              <td>
                Możesz żądać od nas potwierdzenia, że Twoje dane osobowe są
                przetwarzane oraz uzyskania stosownych informacji na ten temat,
                w tym informacji jakie dane są przetwarzane i w jakim celu.
              </td>
            </tr>
            <tr>
              <td className="column1">
                <h5>Prawo do sprostowania danych</h5>
              </td>
              <td>
                Masz prawo żądać niezwłocznego sprostowania nieprawidłowych
                danych osobowych lub uzupełnienia niekompletnych danych
                osobowych.
              </td>
            </tr>
            <tr>
              <td className="column1">
                <h5>Prawo do usunięcia danych</h5>
              </td>
              <td>
                <p>
                  Masz prawo żądać niezwłocznego usunięcia danych osobowych,
                  jeżeli zachodzi jedna z następujących okoliczności:
                </p>
                <ul>
                  <li>
                    • dane osobowe nie są już niezbędne do celów, w których
                    zostały zebrane lub w inny sposób przetwarzane;
                  </li>
                  <li>
                    • cofniesz zgodę (jeśli na niej opiera się przetwarzanie) i
                    nie ma innej podstawy prawnej przetwarzania;
                  </li>
                  <li>
                    • wniosłaś/wniosłeś sprzeciw wobec przetwarzania i nie
                    występują nadrzędne prawnie uzasadnione podstawy
                    przetwarzania;
                  </li>
                  <li>• dane osobowe były przetwarzane niezgodnie z prawem;</li>
                  <li>
                    • dane osobowe muszą zostać usunięte w celu wywiązania się z
                    obowiązku prawnego
                  </li>
                  <li>
                    • dane osobowe zostały zebrane w związku z oferowaniem usług
                    społeczeństwa informacyjnego dziecku.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="column1">
                <h5>Prawo do ograniczenia przetwarzania</h5>
              </td>
              <td>
                <p>
                  Masz prawo żądać ograniczenia przetwarzania danych osobowych,
                  jeśli:
                </p>
                <ul>
                  <li>• kwestionujesz prawidłowość danych osobowych;</li>
                  <li>
                    • przetwarzanie jest niezgodne z prawem, ale sprzeciwiasz
                    się usunięciu danych osobowych, żądając w zamian
                    ograniczenia ich wykorzystywania;
                  </li>
                  <li>
                    • nie potrzebujemy już danych osobowych do celów
                    przetwarzania, ale są one potrzebne Tobie do ustalenia,
                    dochodzenia lub obrony roszczeń;
                  </li>
                  <li>
                    • wniosłaś/wniosłeś sprzeciw wobec przetwarzania danych.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="column1">
                <h5>Prawo żądania przeniesienia danych</h5>
              </td>
              <td>
                <p>
                  Masz prawo otrzymać w ustrukturyzowanym, powszechnie używanym
                  formacie nadającym się do odczytu maszynowego dane osobowe
                  Ciebie dotyczące oraz przesłać te dane osobowe innemu
                  administratorowi, jeżeli przetwarzanie odbywa się na podstawie
                  zgody lub na podstawie umowy oraz w sposób zautomatyzowany.
                </p>
                <p>
                  Masz też prawo żądania, by dane te zostały przesłane przez nas
                  bezpośrednio innemu administratorowi, o ile jest to
                  technicznie możliwe.
                </p>
              </td>
            </tr>
            <tr>
              <td className="column1">
                <h5>Prawo do wniesienia skargi</h5>
              </td>
              <td>
                <p>
                  Masz prawo do wniesienia skargi na niezgodne z prawem
                  przetwarzanie danych osobowych do organu nadzorczego – Prezesa
                  Urzędu Ochrony Danych Osobowych (na adres Urzędu Ochrony
                  Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).
                </p>
              </td>
            </tr>
            <tr>
              <td className="column1">
                <h5>Prawo do cofnięcia zgody</h5>
              </td>
              <td>
                <p>
                  Masz prawo do cofnięcia zgody w dowolnym momencie bez wpływu
                  na zgodność z prawem przetwarzania, którego dokonano na
                  podstawie zgody przed jej cofnięciem.
                </p>
              </td>
            </tr>
          </table>
          <p>
            <strong>
              Poza powyższymi prawami przysługuje Ci{" "}
              <b>PRAWO DO WYRAŻENIA SPRZECIWU</b> – masz prawo w dowolnym
              momencie wnieść sprzeciw, z przyczyn związanych z Twoją szczególną
              sytuacją, wobec przetwarzania dotyczącego Twoich danych osobowych,
              które odbywa się na podstawie naszego prawnie uzasadnionego
              interesu.
            </strong>
          </p>
          <h4 className="section-title2 center">
            O czym jeszcze warto wiedzieć?
          </h4>
          <p>
            Twoje dane osobowe nie będą wykorzystywane w celu zautomatyzowanego
            podejmowania decyzji, w tym profilowania, o którym mowa w art. 22
            ust. 1 i 4 Rozporządzenia.
          </p>
          <p>
            Podanie danych osobowych jest dobrowolne, lecz w przypadku
            przetwarzania danych w celu zawarcia lub wykonywania z nami umowy
            brak podania danych może skutkować niemożnością świadczenia przez
            nas usług.
          </p>
          <h4 className="section-title2 center">Pliki Cookie</h4>
          <p>
            Pliki cookie to małe pliki, umożliwiające lub ułatwiające
            korzystanie z niektórych funkcji strony internetowej. Mogą być
            zapisywane na Twoim urządzeniu bezpośrednio przez nas lub przez
            podmioty trzecie, z którymi współpracujemy. W ramach korzystania z
            plików cookie możemy przetwarzać dane osobowe, w szczególności takie
            jak adres IP, historia korzystania ze strony internetowej, czy też
            informacje o używanym urządzeniu lub oprogramowaniu. Stosowane przez
            nas pliki cookie są związane z funkcjonowaniem naszej strony
            internetowej, służą do kontroli ruchu na stronie, zapobieganiu
            błędom i usterkom technicznym, zapewnieniu bezpieczeństwa strony czy
            też zapobieganiu nadużyciom i naruszeniom prawa.
          </p>
          <p>Wyróżnia się następujące pliki cookie:</p>
          <p>
            <b>Cookie sesyjne:</b> są przechowywane na urządzeniu w czasie, w
            którym korzystasz z naszej strony internetowej (są usuwane po
            zamknięciu przeglądarki). Cookie sesyjne umożliwiają prawidłowe
            korzystanie z naszej strony internetowej. Ich zablokowanie może
            skutkować wystąpieniem błędów lub uniemożliwieniem skorzystania ze
            strony.
          </p>
          <p>
            <b>Cookie trwałe:</b> są przechowywane na Twoim urządzeniu do
            momentu ich skasowania lub do momentu ich wygaśnięcia.
          </p>
          <p>
            Wykorzystanie plików cookie opiera się o Twoją zgodę, wyrażoną
            stosownie do treści przepisu art. 173 § 1 ustawy Prawo
            Telekomunikacyjne. Wskazujemy, że brak takiej zgody lub późniejsze
            usunięcie plików cookie może skutkować niemożnością skorzystania z
            funkcjonalności strony.
          </p>
          <p>
            Istnieje możliwość ograniczenia lub wyłączenia plików cookie w
            ramach Twojego urządzenia, za pomocą ustawień przeglądarki
            internetowej. Przeglądarki internetowe umożliwiają wyłączenie
            wszystkich plików cookie lub ich części (np. pochodzącej od
            podmiotów trzecich). W przypadku wyłączenia plików cookie w części,
            na Twoim urządzeniu mogą zostać zapisane pliki cookie generowane
            przez naszą stronę, umożliwiające prawidłowe działanie strony. W
            przypadku ograniczenia stosowania plików cookie, korzystanie z
            naszych poszczególnych usług świadczonych może mieć jednak charakter
            ograniczony, a w niektórych wypadkach może okazać się niemożliwe.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Polityka;
