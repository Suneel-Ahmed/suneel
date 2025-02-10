
import '@/styles/globals.css';

import useSmoothScroll from '@/hooks/useSmoothScroll';
import { Provider } from 'react-redux';
import { store , persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
export default function App({ Component, pageProps }) {
	useSmoothScroll();

	return <Provider store={store} >
<PersistGate loading={null} persistor={persistor}>
	<Component {...pageProps} />
</PersistGate>
	</Provider>;
}
