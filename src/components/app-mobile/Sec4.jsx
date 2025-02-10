import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
const Sec4 = ({ sec4, iphone12, sec4Right, WebsiteMaintenance }) => {

  const state = useSelector(state => state.lang)
  return (
    <section className="w-full px-[90px] max-xl:px-[50px] max-sm:mt-[50px]  min-h-[90vh] relative pb-[157px]  flex justify-center items-center">
      {/* border circles  */}
      <div className="gradient-circle z-10" />

      <div className="absolute  opacity-[0.3]  max-lg:w-full max-lg:h-full max-lg:flex max-lg:justify-center max-lg:items-center -z-10  ">
        <div className="w-[1005.64px] max-lg:w-[600px] max-lg:h-[600px] max-sm:w-[400px] max-sm:h-[400px] overflow-hidden gradient-border flex justify-center items-center h-[1023.61px]  border-[1.3px]">
          <div className="w-[771.81px] max-lg:w-[500px] max-lg:h-[500px] max-sm:w-[300px] max-sm:h-[300px] gradient-border flex justify-center items-center h-[788.07px]  border-[1.3px]">
            <div className="w-[571.81px] gradient-border max-lg:w-[200px] max-lg:h-[200px] max-sm:w-[100px] max-sm:h-[100px] flex justify-center items-center h-[588.07px]  border-[1.3px]"></div>
          </div>
        </div>
      </div>

      <div className="w-full flex max-md:justify-center max-lg:items-start max-md:flex-col items-center relative z-50 justify-between">
        <div className="flex w-[483px] max-md:w-full max-lg:w-[420px] gap-[57px] items-start justify-start flex-col">
          {sec4?.map((val) => (
            <div key={val.id} className="flex px-3 flex-col gap-[20px]">
              <div className="flex items-center gap-[26px]">
              <Image
                src={`https://api.programantum.com${val?.attributes?.icon?.data?.attributes?.url}`}
                alt="icon"
                className="max-w-[60px]  h-auto"
                width={500}
                height={500}
                priority
              />
                <h1 className=" text-[clamp(20px,2.55vw,30px)]  leading-[140%]  font-extrabold font-inter uppercase  text-[#DBE600]">
                  {state.value === "Eng" ? val?.attributes.Title_English : val?.attributes.Title_Spanish}
                </h1>
              </div>
              <p className="text-[clamp(16px,1.60vw,22px)] leading-[140%] px-2  font-normal text-poppins">
              {state.value === "Eng" ? val?.attributes.para_english : val?.attributes.para_spanish}
              </p>
            </div>
          ))}
        </div>
        <div className="max-lg:hidden">
          {!WebsiteMaintenance ? (
            <Image
              className="w-[395px] h-auto"
              src={iphone12}
              width={500}
              height={500}
              alt="iphone 12"
              priority
            />
          ) : (
            <Image
              className=" max--w-[576px] h-auto"
              src={WebsiteMaintenance}
              width={500}
              height={500}
              alt="iphone 12"
              priority
            />
          )}
        </div>
        <div className="flex w-[483px] gap-[57px] max-md:w-full max-lg:w-[420px] max-md:mt-[57px] max-lg:items-start items-end  justify-start flex-col">
          {sec4Right?.map((val) => (
            <div
              key={val.id}
              className="flex flex-col px-3 max-lg:items-start  gap-[20px]"
            >
              <div className="flex items-center max-md:me-auto   md:ms-auto gap-[20px]">
                <div className="md:hidden"> <Image
                src={`https://api.programantum.com${val?.attributes?.icon?.data?.attributes?.url}`}
                alt="icon"
                className="max-w-[60px]  h-auto"
                width={500}
                height={500}
                priority
              /></div>
                <h1 className=" text-[clamp(20px,2.55vw,30px)] max-lg:text-left text-right   leading-[140%] font-extrabold font-inter uppercase  text-[#DBE600]">
                {state.value === "Eng" ? val?.attributes.Title_English : val?.attributes.Title_Spanish}
                </h1>
                <div className="max-md:hidden"> <Image
                src={`https://api.programantum.com${val?.attributes?.icon?.data?.attributes?.url}`}
                alt="icon"
                className="max-w-[60px]  h-auto"
                width={500}
                height={500}
                priority
              /></div>
              </div>
              <p className="text-[clamp(16px,1.60vw,22px)] leading-[140%] px-2 max-md:text-left  text-right  font-normal text-poppins">
              {state.value === "Eng" ? val?.attributes.para_english : val?.attributes.para_spanish}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sec4;
