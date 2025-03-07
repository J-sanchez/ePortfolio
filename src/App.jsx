import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/routes';
import Hero from './components/Hero';
import Header from './pages/Header/Header';

function App() {
	return (
		<Router>
			{' '}
			{/* BrowserRouter should wrap everything */}
            <div>
                <Header />
				<AppRoutes />
			</div>
		</Router>
	);
}

export default App;
