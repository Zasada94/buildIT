import Link from "next/link";
import Footer from "./Footer";

const Main = () => {
	return (
		<div className="content-wrapper">
			<section className="content-lines-wrapper">
				<div className="content-lines-inner">
					<div className="content-lines"></div>
				</div>
			</section>
			<section className="about section-padding">
				<div className="container">
					<div className="row">
						<div
							className="col-md-6 mb-30 animate-box"
							data-animate-effect="fadeInUp"
						>
							<h2 className="section-title">O nas</h2>
							<p>
								Jesteśmy firmą świadczącą usługi inżynieryjne w Warszawie i
								okolicach. Oferujemy wielopłaszczyznowe wsparcie w sektorze
								budowlanym: usługę inwestora zastępczego, nadzór inwestorski,
								odbiory techniczne oraz porównywarkę cen materiałów budowlanych.
							</p>
						</div>
						<div
							className="col-md-6 animate-box"
							data-animate-effect="fadeInUp"
						>
							<div className="about-img">
								<div className="img">
									<img src="img/about.jpg" className="img-fluid" alt="" />
								</div>
								{/* <div className="about-img-2 about-buro"></div> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="services section-padding">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2 className="section-title">
								Nasza <span>Oferta</span>
							</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="item">
								<Link href="/oferta">
									<a>
										<img src="/img/icons/icon-1.png" alt="" />
										<h5>Inwestor zastępczy</h5>
										<div className="line"></div>
										<p>
											Budowa domu nie jest łatwym przedsięwzięciem, zwłaszcza
											dla osób nieposiadających wystarczającej wiedzy
											technicznej. Skorzystanie z usługi inwestora zastępczego
											pozwala na zaoszczędzenie nie tylko pieniędzy, ale również
											czasu i frustracji.
										</p>
										<div className="numb">01</div>
									</a>
								</Link>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item">
								<Link href="/oferta">
									<a>
										<img src="img/icons/icon-2.png" alt="" />
										<h5>Nadzór inwestorski</h5>
										<div className="line"></div>
										<p>
											Zamierzasz zrealizować przedsięwzięcie budowlane i
											potrzebujesz kogoś, kto dopilnuje Twoich interesów? Dobrze
											trafiłeś! Ustanowiony przez inwestora inspektor nadzoru
											odpowiada za prawidłową realizację procesu budowlanego
											zgodnie z projektem.
										</p>
										<div className="numb">02</div>
									</a>
								</Link>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item">
								<Link href="/oferta">
									<a>
										<img src="img/icons/icon-3.png" alt="" />
										<h5>Odbiory techniczne</h5>
										<div className="line"></div>
										<p>
											Wkrótce odbierasz swój wymarzone mieszkanie lub dom i nie
											chcesz kupować kota w worku? Skorzystaj z pomocy
											profesjonalistów!
										</p>
										<div className="numb">03</div>
									</a>
								</Link>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item">
								<Link href="/oferta">
									<a>
										<img src="/img/icons/icon-4.png" alt="" />
										<h5>Pakiet przygotowujący do budowy</h5>
										<div className="line"></div>
										<p>
											Nasz kompletny pakiet zapewni pełne wsparcie na każdym
											etapie projektu, dzięki czemu osiągnięcie zamierzonych
											celów stanie się prostsze i bardziej efektywne.
										</p>
										<div className="numb">04</div>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Main;
