import React from "react";
import { useSelector } from "react-redux";

const Sec3 = ({sec3Data}) => {
  const state = useSelector(state => state.lang)

  return (
    <section className="w-full max-sm:mt-[100px] relative px-[90px] max-lg:px-[50px] max-sm:px-[20px]  min-h-[90vh] max-sm:py-[50px] py-[100px] flex flex-col">
      <div className="flex z-30 flex-col  items-center gap-[40px]  ">
        <h1 className=" text-[clamp(40px,3.75vw,77px)]  font-inter max-sm:text-[40px] max-sm:leading-[50px]  max-lg:leading-[75px] max-md:leading-[65px] max-md:text-[60px] max-lg:text-[70px] px-[0px] text-center font-extrabold leading-[85px] uppercase  text-[#DBE600]">
        {state.value === "Eng" ? sec3Data?.attributes?.Heading_English : sec3Data?.attributes?.Heading_Spanish          } 
        </h1>
        <p className="text-[clamp(18px,1.55vw,29px)] font-normal leading-[140%] text-center text-[#ffffff] text-poppins max-w-[1607px]">
        {state.value === "Eng" ? sec3Data?.attributes?.text_English : sec3Data?.attributes?.text_Spanish          } 
        </p>
      </div>

    </section>
  );
};

export default Sec3;
