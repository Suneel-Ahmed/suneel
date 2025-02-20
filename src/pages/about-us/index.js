

import Layout from "@/layout/layout"; 

import Loader from "@/components/ui/loader";
import Hero from "@/components/press/hero";
import FeaturedClients from "@/components/press/featured-clients";
import Marketing from "@/components/press/marketing";

import useAssetsLoader from "@/hooks/useAssetsLoader";
import useDocumentTitle from "@/hooks/useDocumentTitle";

import industryLeaderData from '@/constants/industry-leader-data';

import { marketing } from "@/constants/marketingData";
export default function Press({heroData }) {
  useDocumentTitle("About Us");
  
  const { areImagesLoaded, areFontsLoaded, areVideosLoaded } = useAssetsLoader(
    [
      ...industryLeaderData,
     
    ],
    [
      "normal 100px Inter",
      "normal 200px Inter",
      "normal 300px Inter",
      "normal 400px Inter",
      "normal 500px Inter",
      "normal 600px Inter",
      "normal 700px Inter",
      "normal 800px Inter",
      "normal 900px Inter",
      "normal 100px LeagueSpartan",
      "normal 200px LeagueSpartan",
      "normal 300px LeagueSpartan",
      "normal 400px LeagueSpartan",
      "normal 500px LeagueSpartan",
      "normal 600px LeagueSpartan",
      "normal 700px LeagueSpartan",
      "normal 800px LeagueSpartan",
      "normal 900px LeagueSpartan",
      "normal 100px HvDTrialGraphit",
      "normal 200px HvDTrialGraphit",
      "normal 300px HvDTrialGraphit",
      "normal 400px HvDTrialGraphit",
      "normal 500px HvDTrialGraphit",
      "normal 600px HvDTrialGraphit",
      "normal 700px HvDTrialGraphit",
      "normal 800px HvDTrialGraphit",
      "normal 900px HvDTrialGraphit",
      "normal 100px Poppins",
      "normal 200px Poppins",
      "normal 300px Poppins",
      "normal 400px Poppins",
      "normal 500px Poppins",
      "normal 600px Poppins",
      "normal 700px Poppins",
      "normal 800px Poppins",
      "normal 900px Poppins",
    ],
    []
  );

  if (!areImagesLoaded || !areFontsLoaded || !areVideosLoaded) {
    return (
      <div
        className="spinner-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <Layout>
      <Hero heroData ={heroData} />
      <Marketing  marketing = {marketing} />
    </Layout>
  );
}


export async function getServerSideProps() {
	// Define the URLs for the APIs you want to fetch
	const urls = [
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/about-hero?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/marketings?populate=*`,
	];
  
	// Use Promise.all to fetch all APIs concurrently
	const responses = await Promise.all(urls.map(url => fetch(url)));
	
	// Convert the responses to JSON
	const data = await Promise.all(responses.map(res => res.json()));

	return {
	  props: {
		heroData: data[0].data,
    marketing : data[1].data 
	  },
	};
  }