import useScrollPosition from "hooks/useScrollPosition";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

const Header = () => {
	const { pathname } = useRouter();
	const scrollY = useScrollPosition();
	const navbar = useRef<any>();
	// const [navbarClass, setNavbarClass] = useState("");

	const baseClassNames = `nav-link${pathname !== "/" ? " nav-color" : ""}`;

	const handleNavbarTogglerClick = () => {
		const { classList, style } = navbar.current!;
		if (classList.contains("collapsing")) return;
		classList.remove("collapse");
		classList.add("collapsing");
		if (classList.contains("show")) {
			style.height = "265px";
			setTimeout(() => {
				style.height = "0px";
			});
			setTimeout(function () {
				classList.remove("collapsing");
				classList.remove("show");
				classList.add("collapse");
			}, 350);
		} else {
			setTimeout(() => {
				style.height = "265px";
			});
			setTimeout(function () {
				style.height = "";
				classList.add("collapse", "show");
				classList.remove("collapsing");
			}, 350);
		}
	};

	return (
		<>
			{/* <div id="preloader"></div> */}
			<div className="progress-wrap cursor-pointer">
				<svg
					className="progress-circle svg-content"
					width="100%"
					height="100%"
					viewBox="-1 -1 102 102"
				>
					<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
				</svg>
			</div>
			<nav
				className={`navbar navbar-expand-lg${
					scrollY > 75 ? " nav-scroll" : ""
				}`}
			>
				<div className="container">
					<Link href="/">
						<a
							className="section-title logo"
							style={{ width: "auto", marginBottom: 0 }}
						>
							<span>Build it</span>
						</a>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						onClick={handleNavbarTogglerClick}
					>
						<span className="icon-bar">
							<i className="ti-line-double"></i>
						</span>
					</button>
					<div
						className={`collapse navbar-collapse`}
						ref={navbar}
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link href="/">
									<a
										className={`${baseClassNames}${
											pathname === "/" ? " active" : ""
										}`}
									>
										Strona główna
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/o-nas">
									<a
										className={`${baseClassNames}${
											pathname === "/o-nas" ? " active" : ""
										}`}
										href="o-nas.html"
									>
										O nas
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/oferta">
									<a
										className={`${baseClassNames}${
											pathname === "/oferta" ? " active" : ""
										}`}
									>
										Oferta
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/cennik">
									<a
										className={`${baseClassNames}${
											pathname === "/cennik" ? " active" : ""
										}`}
									>
										Cennik
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/galeria">
									<a
										className={`${baseClassNames}${
											pathname === "/galeria" ? " active" : ""
										}`}
									>
										Nasze realizacje
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/kontakt">
									<a
										className={`${baseClassNames}${
											pathname === "/kontakt" ? " active" : ""
										}`}
									>
										Kontakt
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
