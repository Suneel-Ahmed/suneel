import React from "react";
import Layout from "@/layout/layout";
import Image from "next/image";
import Sec2 from "@/components/app-mobile/Sec2";
import Sec3 from "@/components/app-mobile/Sec3";
import Sec4 from "@/components/app-mobile/Sec4";
import Sec6 from "@/components/app-mobile/Sec6";
import Button from '@/components/ui/button';
import { useSelector } from "react-redux";

// Images
import leftMobile from "../../../public/images/app-mobile/mobileLeft.png";
import rightMobile from "../../../public/images/app-mobile/mobileRight.png";


import rich_Icon from "../../../public/images/app-mobile/rich_Icon.svg";
import thumb_Icon from "../../../public/images/app-mobile/thumb_Icon.svg";
import security_Icon from "../../../public/images/app-mobile/security_Icon.svg";
import feedback_Icon from "../../../public/images/app-mobile/feedback_Icon.svg";
import lastSecLogoBg from "../../../public/images/app-mobile/lastSecLogoBg.png";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const index = ({heroData , sec2Data , sec3Data , sec4Data_Image , sec4Data , sec5Data }) => {
  useDocumentTitle("Mobile Apps");
const state = useSelector(state => state.lang)



  return (
    <Layout>
      <section className="w-full h-screen  relative max-sm:px-[20px] px-[100px] flex justify-center items-center">
        <div className="gradient-circle  -top-[30%] -left-[30%]" />
        <div className="gradient-circle -top-[30%] -right-[30%]" />
        <div className="gradient-circle z-20 w-[1005.64px] h-[1005.64px]" />
        <div className="flex z-30 flex-col  items-center gap-[40px]">
          <h1 className="text-[67px]  font-inter max-sm:text-[40px] max-sm:leading-[50px] max-md:text-[50px] max-lg:text-[58px] max-w-[1122px] text-center font-extrabold leading-[81px]  text-[#DBE600]">
            {state.value === "Eng" ? heroData?.data?.attributes?.Heading_English : heroData?.data?.attributes?.Heading_Spanish }
          </h1>

          <Button
            link="/#book-a-call"
            className="w-fit h-[clamp(36px,4vw,64px)]"
          >
            Book a Call
          </Button>
        </div>

        <div className="absolute">
          <div className="w-[1005.64px] opacity-[0.3] gradient-border flex justify-center items-center h-[1023.61px]  border-[1.3px]">
            <div className="w-[771.81px] gradient-border flex justify-center items-center h-[788.07px]  border-[1.3px]">
              <div className="w-[571.81px] gradient-border flex justify-center items-center h-[588.07px]  border-[1.3px]"></div>
            </div>
          </div>
         
        </div>

        <div className="absolute max-lg:hidden   max-xl:left-0 max-2xl:left-[5%] left-[15%] top-[40%]">
          <Image
            src={rightMobile}
            alt="mobile-phone"
            className="max-w-[349.32px] floating-element h-auto"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="absolute right-[15%] max-lg:hidden max-xl:right-0 max-2xl:right-[5%] top-[40%]">
          <Image
            src={leftMobile}
            alt="mobile-phone"
            className="max-w-[350px] floating-element2 h-auto"
            width={500}
            height={500}
            priority
          />
        </div>
      </section>

      <Sec2
        
        leftMobile={leftMobile}
        rightMobile={rightMobile}
        brandStrategy={sec2Data.data}
      />

      <Sec3
      heading={sec3Data?.data?.attributes?.Heading_English}
      Heading_Spanish={sec3Data?.data?.attributes?.Heading_Spanish}
      para={sec3Data?.data?.attributes?.para}
      paraSpanish={sec3Data?.data?.attributes?.paraSpanish}
     
        leftMobile={leftMobile}
        rightMobile={rightMobile}
      />

      <Sec4  sec4={sec4Data?.data?.slice(0, 3)}
        sec4Right={sec4Data?.data?.slice(3, 6)} iphone12={`https://api.programantum.com${sec4Data_Image?.data?.attributes?.image?.data?.attributes?.url}`} />

      <section className="w-full flex  flex-col max-sm:px-[20px] max-xl:px-[50px] relative py-[100px] gap-[116px] px-[100px]">
        <h1 className="text-[clamp(24px,10vw,80px)] text-center    font-inter font-extrabold text-[#DBE600] uppercase">
          SOME OF THE BEST FEATURES
        </h1>
        <div className="gradient-circle top-[20%] -left-[10%]" />
        <div className="flex flex-wrap  justify-between max-lg:justify-center gap-y-[109px]">
          {sec5Data.data?.map((val) => (
            <div
              key={val?.id}
              className="flex max-lg:justify-center max-lg:w-full max-xl:w-[460px] max-2xl:w-[530px]   max-w-[660px] items-center max-2xl:gap-[20px] gap-[50px]"
            >
              <div className="gradient-IconBox max-lg:hidden  max-md:w-[200px] max-sm:w-[100px] max-sm:h-[100px] w-[153px] flex justify-center items-center h-[170px] rounded-[23px] relative overflow-hidden">
                <div className="content  p-[15px]">
                  <Image
                    src={`https://api.programantum.com${val?.attributes?.icon?.data?.attributes?.url}`}
                    width={200}
                    className="  w-full h-auto"
                    height={200}
                    alt="icon"
                    priority
                  />
                </div>
              </div>
              <div className="flex max-lg:w-full ps-[20px] w-[573px]  flex-col gap-[23px]">
                <h2 className="text-[#DBE600]  flex  items-center gap-x-3  font-inter text-[clamp(20px,2.55vw,34px)] leading-[140%] uppercase font-extrabold">
                  <div className="gradient-IconBox lg:hidden  max-lg:w-[80px] max-lg:h-[80px]  w-[153px] flex justify-center items-center h-[170px] rounded-[23px] relative overflow-hidden">
                    <div className="content  p-[15px]">
                      <Image
                       src={`https://api.programantum.com${val?.attributes?.icon?.data?.attributes?.url}`}
                        width={200}
                        className="  w-full h-auto"
                        height={200}
                        alt="icon"
                        priority
                      />
                    </div>
                  </div>
                  {state.value === "Eng" ? val?.attributes?.Title_English : val?.attributes?.Title_Spanish}
                  
                </h2>
                <p className="text-[clamp(16px,1.55vw,20px)] leading-[140%]  font-normal text-poppins ">
                {state.value === "Eng" ? val?.attributes?.text_English : val?.attributes?.text_Spanish}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Sec6  />
    </Layout>
  );
};

export default index;

export async function getServerSideProps() {
	// Define the URLs for the APIs you want to fetch
	const urls = [
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/app-mobile-hero?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/brand-strategy-app-developments?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/app-development-sec3?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/mob-app-development-sec4?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/brand-strategy-app-development-sec4s?populate=*`,
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/app-development-sec5s?populate=*`,
	  
	  
	];
  
	// Use Promise.all to fetch all APIs concurrently
	const responses = await Promise.all(urls.map(url => fetch(url)));
	
	// Convert the responses to JSON
	const data = await Promise.all(responses.map(res => res.json()));
	
	return {
	  props: {
		heroData: data[0],  
		sec2Data: data[1], 
		sec3Data: data[2], 
		sec4Data_Image: data[3], 
		sec4Data: data[4], 
		sec5Data: data[5], 
		
	  }
	};
  }