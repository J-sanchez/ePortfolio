import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="bg-gradient-to-b from-neutral-900 to-transparent text-white p-6 fixed top-0 left-0 w-full z-10">
			<nav>
				<div className="max-w-7xl mx-auto flex justify-between items-center">
					{/* Logo Section */}
					<div className="text-2xl font-bold">
						<Link
							to="/"
							className="text-white hover:text-emerald-400 transition duration-300 ease-in-out"
						>
							Jonathan Sanchez
						</Link>
					</div>

					{/* Navigation Links */}
					<ul className="flex space-x-8">
						<li>
							<Link
								to="/"
								className="text-white hover:text-emerald-400 transition duration-200 ease-in-out text-xl"
							>
								Home
							</Link>
						</li>
						<li>
							{/* <Link
								to="/about"
								className="text-white hover:text-emerald-400 transition duration-200 ease-in-out text-lg"
							>
								About
							</Link> */}
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
