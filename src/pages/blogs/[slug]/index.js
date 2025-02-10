import React from "react";
import Image from "next/image";
import moment from "moment";
import bannerSmallCircle from "../../../../public/images/blogs/bannerSmallCircle.svg";
import Layout from "@/layout/layout";
import { useSelector } from "react-redux";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const blockComponents = {
  paragraph: ({ children }) => (
    <p className="text-base md:text-lg lg:text-xl mb-8">{children}</p>
  ),
  heading: ({ children, level }) => {
    const headingClasses = {
      1: "text-3xl md:text-4xl lg:text-5xl mb-8",
      2: "text-2xl md:text-3xl lg:text-4xl mb-8",
      3: "text-xl md:text-2xl lg:text-3xl mb-8",
      4: "text-lg md:text-xl lg:text-2xl mb-8",
      5: "text-md md:text-lg lg:text-xl mb-8",
      6: "text-sm md:text-md lg:text-lg mb-8",
    };
    const className = headingClasses[level] || headingClasses[1];
    const HeadingTag = `h${level}`;
    return <HeadingTag className={className}>{children}</HeadingTag>;
  },
  ul: ({ children }) => (
    <ul className="list-disc ml-5 text-base md:text-lg lg:text-xl mb-8">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal ml-5 text-base md:text-lg lg:text-xl mb-8">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="mb-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="italic border-l-4 border-gray-500 pl-4 text-base md:text-lg lg:text-xl mb-8">
      {children}
    </blockquote>
  ),
  link: ({ children, url }) => (
    <a href={url} className="text-blue-600 hover:text-blue-800 mb-8">
      {children}
    </a>
  ),
};

const NewsSingle = ({ singleBlogData }) => {
  const state = useSelector((state) => state.lang);
  return (
    <>
      <Layout>
        <div className="w-full overflow-visible min-h-screen  relative flex flex-col justify-center items-center   ">
          <div className="bg-gradient-to-b from-[#050e1d] w-full h-[200px] absolute top-0 z-20"></div>
          <div className="bg-gradient-to-t from-[#050e1d] w-full h-[400px] absolute bottom-0 z-30"></div>
          <div className="bg-gradient-to-t from-[#050e1d] w-full h-[100px] absolute -bottom-3 z-30"></div>
          <div className="bg-gradient-to-t from-[#050e1d] w-full h-[50px] absolute -bottom-1 z-30"></div>
          <div className=" z-40  w-[1120px] h-[1120px] fixed top-[177px] ">
            <Image
              src={bannerSmallCircle}
              width={1000}
              height={1000}
              alt="portfolio Banner"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="w-full h-full absolute   z-10 top-0 left-0">
            <Image
              src={`https://api.programantum.com${singleBlogData.data[0]?.attributes?.img?.data?.attributes?.url}`}
              width={1000}
              height={1000}
              alt="portfolio Banner"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="w-full z-20 h-full absolute top-0 bg-[#050e1d] opacity-[28%] left-0"></div>

          <div className=" text-center z-50 leading-[110px] max-lg:leading-[80px] Hitmo uppercase font-black relative">
            <h1 className="text-[110px] text-[#DBE600] max-3xl:text-[90px] max-xl:text-[80px] max-xl:px-[120px] max-sm:text-[40px] max-sm:px-[40px] max-sm:leading-[70px] max-md:text-[60px] max-md:px-[20px]  max-3xl:px-[100px] ourWork max-lg:text-[70px]">
              {state.value === "Eng"
                ? singleBlogData.data[0]?.attributes?.Heading_English
                : singleBlogData.data[0]?.attributes?.Heading_Spanish}
            </h1>
          </div>
          <div className="text-center z-[50] max-sm:mt-[30px] leading-[28.5px]  Hitmo uppercase font-black absolute bottom-20">
            <h1 className="text-white text-[19px] relative z-10 font-black">
              {" "}
              <span className="text-[#DBE600]">
                {" "}
                {moment(singleBlogData?.attributes?.createdAt).format(
                  "ll"
                )}{" "}
              </span>{" "}
              / Written By{" "}
              <span className="text-[#DBE600]">
                {" "}
                {/* {news?.attributes?.writtenBy}{" "} */}
              </span>{" "}
            </h1>
          </div>

          <div className="w-[600px] h-[600px] absolute top-[10%] left-1/2 transform -translate-x-1/2 bg-[#050e1d] rounded-full blur-[500px] z-40"></div>
        </div>

        {/* Description Section Start  */}
        <section className="mt-[144px]  max-md:px-[50px] max-xl:px-[100px]  px-[240px]">
          {state.value === "Eng" ? (
            <BlocksRenderer
              className="z-[999]"
              content={singleBlogData?.data[0]?.attributes?.blogs_para_English}
              blocks={blockComponents}
            />
          ) : (
            <BlocksRenderer
              className="z-[999]"
              content={singleBlogData?.data[0]?.attributes?.blogs_para_Spanish}
              blocks={blockComponents}
            />
          )}
        </section>

        {/* Hr Line Start  */}
        <div className="w-full mt-[134px] bg-[#DBE600]  h-[2px]" />
        {/* Hr Line End  */}
      </Layout>
    </>
  );
};

export default NewsSingle;

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/blogs?filters[slug][$eq]=${slug}&populate=*`
  );
  const singleBlogData = await data?.json();

  return {
    props: {
      singleBlogData: singleBlogData,
    },
  };
}
