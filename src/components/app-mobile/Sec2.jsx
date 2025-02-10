import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const Sec2 = ({  leftMobile, rightMobile, brandStrategy, page2 }) => {
  const state = useSelector(state => state.lang)

  return (
    <section className="w-full max-sm:mt-[100px] mt-[130px] py-[100px] max-sm:px-[40px] max-lg:px-[100px] max-xl:px-[20px] px-[100px]  min-h-screen  relative ">
      <div className="gradient-circle top-[0%] -left-[20%]" />
      <div className="gradient-circle top-[0%] -right-[10%]" />
   
      <div className="flex gap-[100px] max-2xl:gap-[50px] min-h-fit ">
        <div className="w-1/2 max-xl:w-[40%] max-lg:hidden  relative flex items-center justify-end ">
          {!page2 ? (
            <>
              <div className="absolute  rotate-[-10deg]  ">
                <Image
                  src={leftMobile}
                  alt="mobile-phone"
                  className=" w-[430px]  h-auto"
                  width={500}
                  height={500}
                  priority
                />
              </div>
              <div className="absolute  max-xl:top-[20%] top-[5%]  right-[25%]  ">
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
            <div className="flex justify-center w-full">
              <Image
                src={page2}
                alt="Nexus"
                className="max-w-[676px]  h-auto"
                width={500}
                height={500}
                priority
              />
            </div>
          )}
        </div>
        <div className="w-1/2 max-xl:w-[60%] max-lg:w-[100%] gap-[66px] flex flex-col">
          {brandStrategy?.map((val) => (
            <div
              key={val.id}
              className="flex max-w-[814px] gap-[18px] flex-col"
            >
              <h3 className="flex items-center max-sm:gap-[10px] text-[clamp(24px,1.55vw,34px)]  font-inter font-extrabold  text-[#DBE600] uppercase gap-[21px] ">
                {" "}
                <Image
                src={`https://api.programantum.com${val?.attributes?.icon?.data?.attributes?.url}`}
                alt="icon"
                className="max-w-[60px]  h-auto"
                width={500}
                height={500}
                priority
              />
                 {state.value === "Eng" ? val?.attributes?.title : val?.attributes?.title } 
              </h3>
              <p className=" text-[clamp(16px,1.55vw,26px)]   font-normal text-poppins">
              {state.value === "Eng" ? val?.attributes?.para_english : val?.attributes?.para_spanish } 
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sec2;
