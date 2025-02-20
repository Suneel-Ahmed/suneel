
import '@/styles/globals.css';

import useSmoothScroll from '@/hooks/useSmoothScroll';

export default function App({ Component, pageProps }) {
	useSmoothScroll();

	return 	<Component {...pageProps} />;

}
