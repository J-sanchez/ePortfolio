import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/Home'; // Import HomePage
// import AboutPage from '../pages/About/About'; // Import AboutPage
import Education from '../pages/school/School';
import ProjectManagerExperience from '../pages/project/PM';
import Dev from '../pages/dev/SoftwareDev';

const AppRoutes = () => {
	return (
		<Routes>
			{' '}
			{/* Use Routes instead of Switch */}
			<Route path="/" element={<HomePage />} />{' '}
			{/* Use 'element' prop instead of 'component' */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
            
            <Route path="/education" element={<Education />} />
            <Route path="/project-management" element={<ProjectManagerExperience />} />
            <Route path="/software-dev" element={<Dev />} />
		</Routes>
	);
};

export default AppRoutes;
