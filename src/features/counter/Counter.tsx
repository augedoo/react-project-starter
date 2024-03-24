import toast from 'react-hot-toast';
import { useCountStore } from './counterStore';

const Counter = () => {
	const { count, increment } = useCountStore();

	return (
		<button
			onClick={() => {
				increment();
				toast.success('Incremented by 1');
			}}
			className='my-10 bg-gray-600 px-4 py-2 border-indigo-500 border rounded-full'
		>
			count is {count}
		</button>
	);
};

export default Counter;
