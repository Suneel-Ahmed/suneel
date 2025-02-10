import React from "react";
import Layout from "@/layout/layout";
import Image from "next/image";
import Sec2 from "@/components/app-mobile/Sec2";
import Sec3 from "@/components/app-mobile/Sec3";
import Sec4 from "@/components/app-mobile/Sec4";
import Sec6 from "@/components/app-mobile/Sec6";
import Button from '@/components/ui/button';



import useDocumentTitle from "@/hooks/useDocumentTitle";
import { useSelector } from "react-redux";
const index = ({heroData , sec2Data_Image , sec2Data , sec3Data , sec4Data_Image , sec4Data }) => {
const state = useSelector(state => state.lang)
 
  useDocumentTitle("Innovative Websites");


  return (
    <Layout>
      <section className="w-full  min-h-screen relative max-sm:px-[20px] px-[100px] flex justify-center items-center">
        <div className="gradient-circle -top-[50%] -left-[30%]" />
        <div className="gradient-circle -top-[30%] -right-[30%]" />
        <div className="flex  gap-[20px] w-full justify-between items-center">
          <div className="flex  max-lg:items-center max-sm:mt-[150px] z-30 flex-col gap-[20px]">
            <h1 className="text-[clamp(40px,3.75vw,69px)]  max-lg:text-center   max-w-[972px] text-left font-extrabold leading-[120%] text-[#DBE600]">
              {state.value === "Eng" ? heroData?.data?.attributes?.Title_English : heroData?.data?.attributes?.Title_Spanish }
            </h1>
            <p className=" text-[clamp(14px,1.45vw,27px)] leading-[150%] max-w-[972px]  max-lg:text-center  text-poppins font-normal  text-[#FFFFFF] ">
            {
              state.value === "Eng" ? heroData?.data?.attributes?.text_English : heroData?.data?.attributes?.text_Spanish
            }
            </p>

            <Button
              link="/#book-a-call"
              className="w-fit h-[clamp(36px,4vw,64px)]"
            >
              Book a Call
            </Button>
          </div>

          <div className=" ">
            <div className="absolute  opacity-[0.3]  max-lg:w-full max-lg:h-full max-lg:flex max-lg:justify-center max-lg:items-center -z-10 -right-[7%]  top-0 ">
              <div className="w-[1005.64px] max-lg:w-[600px] max-lg:h-[600px] max-sm:w-[400px] max-sm:h-[400px] overflow-hidden gradient-border flex justify-center items-center h-[1023.61px]  border-[1.3px]">
                <div className="w-[771.81px] max-lg:w-[500px] max-lg:h-[500px] max-sm:w-[300px] max-sm:h-[300px] gradient-border flex justify-center items-center h-[788.07px]  border-[1.3px]">
                  <div className="w-[571.81px] gradient-border max-lg:w-[200px] max-lg:h-[200px] max-sm:w-[100px] max-sm:h-[100px] flex justify-center items-center h-[588.07px]  border-[1.3px]"></div>
                </div>
              </div>
            </div>
            <Image
              className="z-50  max-lg:hidden max-xl:w-[300px] h-auto max-w-[592px] "
              src={`https://api.programantum.com${heroData?.data?.attributes?.image?.data?.attributes?.url}`}
              width={500}
              height={500}
              alt="image"
              priority
            />
          </div>
        </div>
      </section>

      <Sec2  page2={`https://api.programantum.com${sec2Data_Image?.data?.attributes?.image?.data?.attributes?.url}`} brandStrategy={sec2Data.data} />

      <Sec3
        heading={sec3Data?.data?.attributes?.heading_english}
        Heading_Spanish={sec3Data?.data?.attributes?.Heading_Spanish}
        para={sec3Data?.data?.attributes?.para_english}
        paraSpanish={sec3Data?.data?.attributes?.para_spanish}
        para2={sec3Data?.data?.attributes?.para2_english}
        para2_spanish={sec3Data?.data?.attributes?.para2_spanish}
        IncredibleWebsites_Img={`https://api.programantum.com${sec3Data?.data?.attributes?.IncredibleWebsites_Img?.data?.attributes?.url}`}
      />

      <Sec4
        sec4={sec4Data?.data?.slice(0, 3)}
        sec4Right={sec4Data?.data?.slice(3, 6)}
        WebsiteMaintenance={`https://api.programantum.com${sec4Data_Image?.data?.attributes?.image?.data?.attributes?.url}`}
      />

      <Sec6  />
    </Layout>
  );
};

export default index;

export async function getServerSideProps() {
	// Define the URLs for the APIs you want to fetch
	const urls = [
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/software-dev-hero?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/software-development-sec-2?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/brand-strategy-software-developments?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/software-development-sec-3?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/brandstrategy-software-development-sec4?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/brand-strategy-software-development-sec4s?populate=*`,
	  
	];
  
	// Use Promise.all to fetch all APIs concurrently
	const responses = await Promise.all(urls.map(url => fetch(url)));
	
	// Convert the responses to JSON
	const data = await Promise.all(responses.map(res => res.json()));
	
	return {
	  props: {
		heroData: data[0], 
		sec2Data_Image: data[1], 
		sec2Data: data[2], 
		sec3Data: data[3], 
		sec4Data_Image: data[4], 
		sec4Data: data[5], 
	  }
	};
  }