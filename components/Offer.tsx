import Footer from "./Footer";

const Offer = () => {
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
				style={{ backgroundImage: "url(/img/banner.jpg)" }}
			></section>

			<section className="services section-padding2">
				<div className="container">
					<div className="row">
						<div
							className="col-md-12 animate-box"
							data-animate-effect="fadeInUp"
						>
							<h2 className="section-title">
								Nasze <span>Usługi</span>
							</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="item">
								<a href="#">
									<img src="/img/icons/icon-1.png" alt="" />
									<h5>Inwestor zastępczy</h5>
									<div className="line"></div>
									<p>
										Budowa domu nie jest łatwym przedsięwzięciem, zwłaszcza dla
										osób nieposiadających wystarczającej wiedzy technicznej.
										Skorzystanie z usługi inwestora zastępczego pozwala na
										zaoszczędzenie nie tylko pieniędzy, ale również czasu i
										frustracji. Nasza profesjonalna kadra zadba o to, aby
										powstający budynek dokładnie odpowiadał projektowi.
										Dostrzeże również potencjalne błędy i niedociągnięcia, które
										w przyszłości mogłyby wymagać kosztownych poprawek, a
										których nie wyłapałoby niewprawne oko. Zajmiemy się także
										wszelkimi spędzającymi sen z oczu formalnościami. Z nami
										możesz spać spokojnie ze świadomością, że budowa Twojego
										domu jest w dobrych rękach!
									</p>
									<p>
										Specjalizujemy się w budownictwie jednorodzinnym w zabudowie
										wolnostojącej, bliźniaczej i szeregowej.
									</p>
									<p>Korzyści:</p>
									<ul className="bullet-list">
										<li>oszczędność czasu</li>
										<li>dbałość o jakość realizowanych usług</li>
										<li>brak konieczności nadzorowania procesu budowy</li>
									</ul>
									<div className="numb">01</div>
								</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item">
								<a href="#">
									<img src="/img/icons/icon-2.png" alt="" />
									<h5>Nadzór inwestorski</h5>
									<div className="line"></div>
									<p>
										Zamierzasz zrealizować przedsięwzięcie budowlane i
										potrzebujesz kogoś, kto dopilnuje Twoich interesów? Dobrze
										trafiłeś! Ustanowiony przez inwestora inspektor nadzoru
										odpowiada za prawidłową realizację procesu budowlanego
										zgodnie z projektem.
									</p>
									<p>Obowiązki inwestora nadzoru:</p>
									<ul className="bullet-list">
										<li>odbiór robót budowlanych ulegających zakryciu;</li>
										<li>
											kontrola realizacji inwestycji zgodnie z projektem
											budowlanym i pozwoleniem na budowę, a także zasadami
											wiedzy technicznej i obowiązującymi normami;
										</li>
										<li>przeprowadzanie odbiorów częściowych i końcowych;</li>
										<li>wykonanie obliczeń ilościowych wykonanych prac;</li>
										<li>kontrola jakości wykonywanych robót budowlanych.</li>
									</ul>
									<div className="numb">02</div>
								</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item">
								<a href="#">
									<img src="/img/icons/icon-3.png" alt="" />
									<h5>Odbiory techniczne</h5>
									<div className="line"></div>
									<p>
										Wkrótce odbierasz swój wymarzone mieszkanie lub dom i nie
										chcesz kupować kota w worku? Skorzystaj z pomocy
										profesjonalistów! Ukryte błędy wykonawcze potrafią
										skutecznie zatruć życie ich mieszkańcom. Nasi specjaliści
										sprawdzą poprawność wykonania lokali zgodnie z zawarta umową
										oraz obowiązującymi normami. Skorzystanie z pomocy
										doświadczonych inżynierów z Build it przy odbiorze
										mieszkania to zaoszczędzone pieniądze i czas oraz pewność,
										że życia w nowym mieszkaniu nie zakłócą żadne nieprzyjemne
										niespodzianki. Podczas odbiorów wykonujemy badanie kamerą
										termowizyjną, pozwalające wykryć wady niewidoczne gołym
										okiem.
									</p>
									<div className="numb">03</div>
								</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item">
								<a href="#">
									<img src="/img/icons/icon-4.png" alt="" />
									<h5>Pakiet przygotowujący do budowy</h5>
									<div className="line"></div>
									<p>
										Nasz kompletny pakiet zapewni pełne wsparcie na każdym
										etapie projektu, dzięki czemu osiągnięcie zamierzonych celów
										stanie się prostsze i bardziej efektywne.
									</p>
									<p id="co_zawiera">Co zawiera taki pakiet:</p>
									<ol id="pakiet">
										<li className="pakiet_item">
											<span>1. Kosztorys: </span> Dokładnie opracowany kosztorys
											pomoże zrozumieć wszystkie wydatki związane z projektem
											budowlanym.
										</li>
										<li className="pakiet_item">
											<span>2. Harmonogram: </span> W pełni zindywidualizowany
											harmonogram budowy, który pomoże w planowaniu i
											monitorowaniu postępu prac. Uwzględnia on kamienie milowe,
											w tym kluczowe etapy związane z zbieraniem ofert od
											dostawców oraz zamawianiem niezbędnych usług i materiałów.
										</li>
										<li className="pakiet_item">
											<span>3. Cashflow: </span> Skrupulatnie opracowany
											cashflow pomoże zaplanować przepływy środków finansowych w
											czasie trwania projektu.
										</li>
										<li className="pakiet_item">
											<span>4. Checklisty Przed Budową: </span> pomogą w
											odpowiednim przygotowaniu się do rozpoczęcia projektu.
										</li>
										<li className="pakiet_item">
											<span>5. Checklisty dla każdego etapu budowy: </span> Nasz
											pakiet zawiera kompleksowe checklisty dla każdego etapu
											budowy.
										</li>
										<li className="pakiet_item">
											<span>6. Checklisty do ustalania z wykonawcą: </span>{" "}
											Zapewniamy Państwu także szczegółowe checklisty, które
											pomogą w komunikacji i ustaleniach z wykonawcą na każdym
											etapie projektu.
										</li>
										<li className="pakiet_item">
											<span>7. Checklisty po zakończeniu budowy: </span> są
											równie ważne, ponieważ zapewniają kompletność i
											skrupulatność na zakończenie budowy.
										</li>
										<li className="pakiet_item">
											<span>8. Wskazówki do umowy z wykonawcą: </span> wszystkie
											ważne punkty które powinny się znaleźć w umowie z
											wykonawca danego zakresu prac, aby jak najlepiej
											zabezpieczyć swój interes.
										</li>
									</ol>

									<div className="numb">04</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Offer;
