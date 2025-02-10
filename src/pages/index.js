import Layout from '@/layout/layout';

import Loader from '@/components/ui/loader';
import Hero from '@/components/home/hero';
import IndustryLeaders from '@/components/home/industry-leaders';
import OurServices from '@/components/home/our-services';
import OurNetwork from '@/components/home/our-network';
import OurCustomers from '@/components/home/our-customers';
import CTA from '@/components/home/cta';
import BookCall from '@/components/home/book-call';
import { customer } from '@/constants/customer';
import useAssetsLoader from '@/hooks/useAssetsLoader';
import useDocumentTitle from '@/hooks/useDocumentTitle';

import industryLeaderData from '@/constants/industry-leader-data';
import footerData from '@/constants/footer-data';


export default function Home({heroData , customerReview , network_Data , services_Data , Cta_Data}) {
	useDocumentTitle('Home ');
	const { areImagesLoaded, areFontsLoaded, areVideosLoaded } = useAssetsLoader(
		[
			...industryLeaderData,		...footerData.images,
			
		],
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
		],
		[
			
		]
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
			<Hero heroData = {heroData} />
			<OurCustomers customerReview ={customer}  />
			<OurServices  services_Data = {services_Data} />
			<IndustryLeaders industryLeaders={industryLeaderData} />
			<CTA Cta_Data = {Cta_Data} />
			<OurNetwork networkStats={network_Data} />
			<BookCall />
		</Layout>
	);
}



  export async function getServerSideProps() {
	// Define the URLs for the APIs you want to fetch
	const urls = [
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/home-banner?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/customer-reviews?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/data-networks?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/services?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/ctas?populate=*`,
	];
  
	// Use Promise.all to fetch all APIs concurrently
	const responses = await Promise.all(urls.map(url => fetch(url)));
	
	// Convert the responses to JSON
	const data = await Promise.all(responses.map(res => res.json()));
	
	return {
	  props: {
		heroData: data[0], 
		customerReview: data[1]?.data, 
		network_Data: data[2].data,
		services_Data: data[3].data,
		Cta_Data: data[4].data,
	  },
	};
  }