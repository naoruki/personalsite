import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
	const location = useLocation();
	return (
		<>
			<div className="md:flex flex-col md:justify-between md:flex-row lg:justify-between lg:flex-row ">
				<div className="flex justify-center ">
					<img src="/images/Cornelia1.png" className="w-64 md:w-64 lg:w-64" />
				</div>
				<nav className="flex justify-center m-0.5 pt-9 md:pt-0">
					<ul>
						<li>
							<Link
								to="/"
								className={location.pathname === "/" ? "active" : ""}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								className={location.pathname === "/about" ? "active" : ""}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="/project"
								className={location.pathname === "/project" ? "active" : ""}
							>
								Project
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className={location.pathname === "/contact" ? "active" : ""}
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default NavBar;
