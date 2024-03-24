import Counter from '../features/counter/Counter';
import reactLogo from '../assets/react.svg';
import zustandLogo from '../assets/zustand.png';
import viteLogo from '/vite.svg';

const GettingStartedPage = () => {
	return (
		<div className='flex flex-col min-h-screen items-center justify-center'>
			<div className='flex items-center gap-4 mb-10'>
				<a className='flex w-20 h-20' href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} alt='Vite logo' />
				</a>
				<a className='flex w-20 h-20' href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='react' alt='React logo' />
				</a>
				<a className='flex w-20 h-20' href='https://zustand-demo.pmnd.rs/' target='_blank'>
					<img src={zustandLogo} className='zustand' alt='Zustand logo' />
				</a>
			</div>

			<h1 className='flex text-4xl'>Vite + React + Zustand</h1>

			<div className='flex items-center justify-center flex-col'>
				<Counter />

				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>

			<div>Click on the logos to learn more</div>
		</div>
	);
};

export default GettingStartedPage;
