import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.scss';
import queryClient from './util/reactQueryClient.ts';

const persister = createSyncStoragePersister({
	storage: window.localStorage,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
			<BrowserRouter>
				<App />
			</BrowserRouter>

			<ReactQueryDevtools initialIsOpen={false} />
		</PersistQueryClientProvider>
	</React.StrictMode>
);
