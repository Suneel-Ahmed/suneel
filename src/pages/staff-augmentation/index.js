import React from "react";
import Layout from "@/layout/layout";
import Hero from "@/components/ai-development/Hero";
import Sec2 from "@/components/ai-development/Sec2";
import Sec3 from "@/components/ai-development/Sec3";
import OurNetwork from "@/components/home/our-network";
import AskedQuestion from "@/components/ai-development/AskedQuestion";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const index = ({ network_Data , heroData , sec2Data , sec3Data , QuestionsAnswer}) => {
  useDocumentTitle("AI Development");

  return (
    <Layout>
      <Hero heroData = {heroData} />
      <Sec2 sec2Data = {sec2Data} />
      <Sec3 sec3Data = {sec3Data}  />
      <OurNetwork networkStats={network_Data} />
      <AskedQuestion Questions={QuestionsAnswer} />
    </Layout>
  );
};


export default index;


export async function getServerSideProps() {
	// Define the URLs for the APIs you want to fetch
	const urls = [
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/staff-augmentation-hero?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/staff-augmentation-sec2?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/data-networks?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/staff-augmentation-sec3?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/frequently-ask-questions?populate=*`,

	];
  
	// Use Promise.all to fetch all APIs concurrently
	const responses = await Promise.all(urls.map(url => fetch(url)));
	
	// Convert the responses to JSON
	const data = await Promise.all(responses.map(res => res.json()));
	
	return {
	  props: {
		heroData: data[0], 
		sec2Data: data[1]?.data, 
		network_Data: data[2].data,
		sec3Data: data[3].data,
		QuestionsAnswer: data[4].data,

	  },
	};
  }