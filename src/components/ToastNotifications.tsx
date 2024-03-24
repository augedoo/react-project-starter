import toast, { ToastBar, Toaster, resolveValue } from 'react-hot-toast';
import { FiLoader, FiCheckCircle } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';
import { LuAlertOctagon } from 'react-icons/lu';

const ToastNotifications = () => {
	const { pathname } = useLocation();

	return (
		<Toaster
			toastOptions={{
				style: {
					borderBottom: '4px solid #ccc',
				},
				success: {
					icon: <FiCheckCircle className='h-7 w-7 text-[#62d346]' />,
					style: {
						borderBottomColor: '#62d346',
					},
				},
				loading: {
					icon: <FiLoader className='h-7 w-7 animate-spin text-[#919dad]' />,
					style: {
						borderBottomColor: '#919dad',
					},
				},
				error: {
					icon: <LuAlertOctagon className='h-7 w-7 text-red-500' />,
					style: {
						borderBottomColor: '#ef4444',
					},
				},
			}}
			position={!pathname.includes('/app') ? 'top-right' : 'top-center'}
			containerStyle={{ borderRadius: '5px' }}
		>
			{(t) => (
				<ToastBar toast={t}>
					{({ icon, message }) => {
						const { type, id } = t;

						return (
							<div className={`with-scrollbar flex w-full gap-1 overflow-x-auto overflow-y-hidden ${t.type === 'loading' ? 'items-center' : 'items-start'}`}>
								<span className={`${type !== 'loading' ? 'mt-2' : ''} text-4xl`}>{icon}</span>

								<p className='!my-1 text-[15px]'>{resolveValue(message, t)}</p>
								{t.type !== 'loading' && (
									<button
										title='Close'
										onClick={() => {
											toast.dismiss(id);
										}}
										className={`mt-2 flex items-center justify-center rounded-full border bg-gray-100 p-1 text-lg text-ash duration-200 hover:bg-red-500 hover:text-white`}
									>
										<VscClose />
									</button>
								)}
							</div>
						);
					}}
				</ToastBar>
			)}
		</Toaster>
	);
};

export default ToastNotifications;
