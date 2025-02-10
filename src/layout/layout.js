import React from 'react';

import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export default function Layout({ children }) {
	return (
		<div className={`w-full min-h-screen relative overflow-hidden`}>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
