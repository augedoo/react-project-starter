import { Route, Routes } from 'react-router-dom';
import GettingStartedPage from './pages/GettingStartedPage';
import PageNotFound from './pages/PageNotFound';
import RootLayout from '@/components/RootLayout';

function App() {
	return (
		<div id='app'>
			<Routes>
				<Route path='/' element={<RootLayout />}>
					<Route index element={<GettingStartedPage />} />

					<Route path='*' element={<PageNotFound />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
