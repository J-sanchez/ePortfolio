import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-bg/85 backdrop-blur-sm border-b border-border">
			<nav>
				<div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
					{/* Logo Section */}
					<div>
						<Link to="/" className="group inline-block leading-none">
							<span className="block font-display font-semibold text-2xl md:text-3xl text-text group-hover:text-accent transition-colors duration-300">
								Jonathan Sanchez
							</span>
							<span className="field-stamp block text-[10px] text-text-muted mt-1">
								Product Owner, Project Lead, & [TBD]
							</span>
						</Link>
					</div>

					{/* Navigation Links */}
					<ul className="flex items-center space-x-8">
						<li>
							<Link
								to="/"
								className="field-stamp text-xs text-text-muted hover:text-accent border-b border-transparent hover:border-accent transition-colors duration-200 pb-1"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/education"
								className="field-stamp text-xs text-text-muted hover:text-accent border-b border-transparent hover:border-accent transition-colors duration-200 pb-1"
							>
								Education
							</Link>
						</li>
						<li>
							<Link
								to="/resume"
								className="field-stamp text-xs text-text-muted hover:text-accent border-b border-transparent hover:border-accent transition-colors duration-200 pb-1"
							>
								Résumé
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
