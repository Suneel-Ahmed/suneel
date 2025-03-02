import Layout from '@/layout/layout';

import Loader from '@/components/ui/loader';
import Hero from '@/components/outdoor-advertising/hero';

import useAssetsLoader from '@/hooks/useAssetsLoader';
import useDocumentTitle from '@/hooks/useDocumentTitle';



export default function OutdoorAdvertising() {

	useDocumentTitle('Projects');
	const { areImagesLoaded, areFontsLoaded, areVideosLoaded } = useAssetsLoader(
		[],
		[
			'normal 100px Inter',
			'normal 200px Inter',
			'normal 300px Inter',
			'normal 400px Inter',
			'normal 500px Inter',
			'normal 600px Inter',
			'normal 700px Inter',
			'normal 800px Inter',
			'normal 900px Inter',
			'normal 100px LeagueSpartan',
			'normal 200px LeagueSpartan',
			'normal 300px LeagueSpartan',
			'normal 400px LeagueSpartan',
			'normal 500px LeagueSpartan',
			'normal 600px LeagueSpartan',
			'normal 700px LeagueSpartan',
			'normal 800px LeagueSpartan',
			'normal 900px LeagueSpartan',
			'normal 100px HvDTrialGraphit',
			'normal 200px HvDTrialGraphit',
			'normal 300px HvDTrialGraphit',
			'normal 400px HvDTrialGraphit',
			'normal 500px HvDTrialGraphit',
			'normal 600px HvDTrialGraphit',
			'normal 700px HvDTrialGraphit',
			'normal 800px HvDTrialGraphit',
			'normal 900px HvDTrialGraphit',
			'normal 100px Poppins',
			'normal 200px Poppins',
			'normal 300px Poppins',
			'normal 400px Poppins',
			'normal 500px Poppins',
			'normal 600px Poppins',
			'normal 700px Poppins',
			'normal 800px Poppins',
			'normal 900px Poppins',
		],
		[]
	);

	if (!areImagesLoaded || !areFontsLoaded || !areVideosLoaded) {
		return (
			<div
				className='spinner-container'
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: 9999,
				}}
			>
				<Loader />
			</div>
		);
	}

	return (
		<Layout>
			<Hero  />
		</Layout>
	);
}
