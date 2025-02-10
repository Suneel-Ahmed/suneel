import React from "react";
import Image from "next/image";
import moment from "moment";

const BlogsCards = ({ id, img, heading, date, slug }) => {
  return (
    <a href={`/blogs/${slug}`}>
      <div
        className="max-w-[511px] hover:cursor-pointer h-[540px] rounded-[20px] "
      >
        <div className="w-full h-[335px] overflow-hidden">
          <Image
            src={img}
            width={500}
            height={500}
            className="w-full h-auto  max-md:h-full max-md:w-auto object-cover object-center rounded-[20px]"
            alt={heading}
          />
        </div>
        <div className="mt-[21px]">
          <h1 className="text-[30px] Hitmo leading-[45px] uppercase text-[#ffffff] font-normal ">
            {heading}
          </h1>
          <p className="text-[19px] Hitmo mt-[20px] leading-[28.5px] text-[#ffffff] uppercase font-normal">
            {moment(date).format("LL")}
          </p>
        </div>
      </div>
    </a>
  );
};

export default BlogsCards;
