import { Outlet } from 'react-router-dom';
import ToastNotifications from './ToastNotifications';

const RootLayout = () => {
	return (
		<div className='h-full w-full'>
			<ToastNotifications />

			<Outlet />
		</div>
	);
};

export default RootLayout;
