import { MutationCache, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: 1000 * 60 * 60 * 24, // 24 hours
			staleTime: 2000,
			retry: 0,
			networkMode: 'always',
		},
		mutations: {
			networkMode: 'always',
			retry: 0,
		},
	},
	// configure global cache callbacks to show toast notifications
	mutationCache: new MutationCache({
		onSuccess: (data: any) => {
			// toast.success(data.message);
		},
		onError: (error: any) => {
			// toast.error(error.message);
		},
	}),
});

export default queryClient;
