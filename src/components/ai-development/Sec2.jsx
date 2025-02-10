import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const Sec2 = ({sec2Data}) => {
  const state = useSelector(state => state.lang)
  
  return (
    <section className="w-full relative px-[90px] max-lg:px-[50px] max-sm:px-[20px]  min-h-[70vh] max-md:h-[50vh] max-sm:py-[30px] py-[100px] flex ">
      <div className="gradient-circle top-[0%] -left-[10%]" />
      <div className="gradient-circle top-[0%] -right-[20%]" />
      <div className="w-1/2 max-xl:w-[60%]  max-md:w-[100%] max-lg:gap-[20px] flex flex-col my-auto">
        <h1 className="text-[clamp(40px,3.75vw,69px)]  uppercase max-sm:text-[40px] max-md:text-center max-sm:leading-[50px] max-xl:text-[60px] max-xl:leading-[62px] font-extrabold font-inter text-[#DBE600] leading-[83px] ">
          {state.value === "Eng" ? sec2Data?.attributes?.Heading_English : sec2Data?.attributes?.Heading_Spanish          } 
        </h1>
        <p className="text-[clamp(18px,1.55vw,29px)]  max-md:text-center  font-normal leading-[37px] text-poppins ">
        {state.value === "Eng" ? sec2Data?.attributes?.text_English : sec2Data?.attributes?.text_Spanish          } 
        </p>
      </div>
      <div className="w-1/2 max-xl:w-[40%] z-10 mt-[20px] max-md:hidden relative flex items-center justify-end ">
        <>
          <div className="absolute  ">
            <Image
              src={`https://api.programantum.com${sec2Data?.attributes?.image?.data?.attributes?.url}`}
              alt="mobile-phone"
              className=" w-[430px] floating-element2 h-auto"
              width={500}
              height={500}
              priority
            />
          </div>
        </>
      </div>
     
    </section>
  );
};

export default Sec2;
