import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/routes';
import Header from './pages/Header/Header';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div>
				<Header />
				<AppRoutes />
			</div>
		</Router>
	);
}

export default App;
