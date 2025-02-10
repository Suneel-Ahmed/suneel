import React from "react";
import Image from "next/image";
import Button from '@/components/ui/button';

const Sec6 = () => {
  return (
    <section className="w-full px-[100px] max-md:px-[20px]   flex flex-col gap-[79px] justify-center items-center relative  max-sm:mb-[200px] h-[90vh]">
      <div className="gradient-circle " />

   
      <h1 className="text-[160px] max-md:text-[55px] max-md:leading-[61px] max-lg:text-[100px] max-lg:leading-[100px] max-xl:text-[120px] max-xl:leading-[150px]   font-bold text-center leading-[180px] text-[#DBE600] league-spartan m-0 p-0 ">
        BRING YOUR PROJECT TO LIFE
      </h1>

      <Button link="/#book-a-call" className="w-fit h-[clamp(36px,4vw,64px)]">
        Book a Call
      </Button>
    </section>
  );
};

export default Sec6;
