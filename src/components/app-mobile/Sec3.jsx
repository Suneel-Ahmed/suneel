import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
const Sec3 = ({
  leftMobile,
  rightMobile,
  heading,
  Heading_Spanish,
  paraSpanish,
  para2_spanish,
  para,
  para2,
  IncredibleWebsites_Img,
}) => {

  const state = useSelector(state => state.lang)

  return (
    <section className=" secHeight  w-full relative px-[90px] max-lg:px-[50px] max-sm:px-[20px]  min-h-[90vh] max-sm:py-[50px] py-[100px] flex ">
      <div className="gradient-circle top-[0%] -left-[10%]" />
      <div className="gradient-circle top-[0%] -right-[20%]" />
      <div className="w-1/2 max-xl:w-[60%]  max-md:w-[100%] max-lg:gap-[20px] flex flex-col my-auto">
        <h1 className=" text-[clamp(20px,2.55vw,69px)]  max-md:text-center     font-extrabold font-inter text-[#DBE600] leading-[130%] ">
       {state.value === "Eng" ? heading : Heading_Spanish}
        </h1>
        {!para2 ? (
          <p className="text-[clamp(16px,1.55vw,29px)]  max-md:text-center  font-normal leading-[140%] text-poppins ">
             {state.value === "Eng" ? para : paraSpanish}
          </p>
        ) : (
          <>
            <p className=" text-[clamp(16px,1.55vw,29px)] mt-[44px]  max-md:text-center  font-normal leading-[37px] text-poppins ">
            {state.value === "Eng" ? para : paraSpanish}
            </p>
            <p className="text-[clamp(16px,1.55vw,29px)] mt-[30px]  max-md:text-center  font-normal leading-[37px] text-poppins ">
            {state.value === "Eng" ? para2 : para2_spanish}
            </p>
          </>
        )}
      </div>
      <div className="w-1/2 max-xl:w-[40%] mt-[20px] max-md:hidden relative flex items-center justify-end ">
        {!IncredibleWebsites_Img ? (
          <>
            <div className="absolute rotate-[-10deg] z-20   ">
              <Image
                src={leftMobile}
                alt="mobile-phone"
                className=" w-[430px] floating-element2 h-auto"
                width={500}
                height={500}
                priority
              />
            </div>
            <div className="absolute top-[5%]  z-10 right-[25%]  ">
              <Image
                src={rightMobile}
                alt="mobile-phone"
                className=" w-[430px] floating-element h-auto"
                width={500}
                height={500}
                priority
              />
            </div>
          </>
        ) : (
          <div className="w-full flex justify-center">
            <Image
              src={IncredibleWebsites_Img}
              alt="Incredible Websites"
              className=" max-2xl:w-[400px] max-w-[575px] floating-element2 h-auto"
              width={500}
              height={500}
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Sec3;
