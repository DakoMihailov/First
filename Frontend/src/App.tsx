import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import Landing from './routes/Landing';
import Dashboard from './routes/Dashboard';
import { client } from './api';
import { store } from './store';

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<ApolloProvider client={client}>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>
				</ApolloProvider>
			</Provider>
		</BrowserRouter>
	);
}

export default App;
