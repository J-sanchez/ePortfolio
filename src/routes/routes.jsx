import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/Home';
import Education from '../pages/school/School';
import CaseStudy from '../pages/CaseStudy/CaseStudy';
import Resume from '../pages/Resume/Resume';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/education" element={<Education />} />
			<Route path="/work/:slug" element={<CaseStudy />} />
			<Route path="/resume" element={<Resume />} />
		</Routes>
	);
};

export default AppRoutes;
