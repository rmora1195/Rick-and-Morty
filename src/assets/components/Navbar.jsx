import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			if (prevScrollPos > currentScrollPos) {
				setShowNavbar(true);
			} else {
				setShowNavbar(false);
			}
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);

	return (
		<nav
			className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}
		>
			<div className="navbar-container">
				<div className="logo">
					<img
						className="navbar__container-img"
						src="https://img.icons8.com/?size=100&id=udMvpkRHbzzS&format=png&color=000000"
						alt="Rick"
					/>
				</div>
				<div className="navbar-links">
					<a href="/">Home</a>
					<a href="#search-bar">Universe</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
