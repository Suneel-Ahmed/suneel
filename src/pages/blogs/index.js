
import Layout from "@/layout/layout";
import BlogsCards from "@/components/ui/blogsCards";
import bannerImage from "../../../public/images/3d-Animation/bannerImg.png";
import Image from "next/image";

import { useSelector } from "react-redux";

const Blogs = (blogs_Data ) => {
  const state = useSelector(state => state.lang)



  return (
    <Layout>
      <div className="w-full overflow-hidden   min-h-screen  relative flex justify-center items-center   ">
        <div className="bg-gradient-to-b from-[#050e1d] w-full h-[200px] absolute top-0 z-20"></div>
        <div className="bg-gradient-to-t from-[#050e1d] w-full h-[400px] absolute bottom-0 z-30"></div>
        <div className="bg-gradient-to-t from-[#050e1d] w-full h-[100px] absolute -bottom-3 z-30"></div>
        <div className="bg-gradient-to-t from-[#050e1d] w-full h-[50px] absolute -bottom-1 z-30"></div>
        
        <div className="w-full h-full absolute   z-10 top-0 left-0">
          <Image
            src={bannerImage}
            width={1000}
            height={1000}
            alt="portfolio Banner"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full z-20 h-full absolute top-0 bg-[#404040] opacity-[28%] left-0"></div>
        <div className=" text-center z-50 leading-[150px] max-lg:leading-[80px] Hitmo uppercase font-black relative">
          <h1 className="text-[150px] z-50 ourWork max-lg:text-[130px] max-md:text-[80px] text-[#DBE600]">
           {state.value === "Eng" ? "latest" : "el último"} 
          </h1>
          <h2 className="text-[#DBE600] z-50 ourWork max-lg:text-[130px] max-md:text-[80px] text-[150px]">
            {state.value === "Eng" ? "Blogs" : "Blogs"} 
          </h2>
        </div>

        <div className="w-[800px] h-[800px] absolute top-1/2 bg-[#E53641] rounded-full blur-[500px] z-20"></div>
      </div>

      <div className="-mt-[250px] flex gap-y-[80px] max-3xl:gap-x-[40px] gap-x-[110px] flex-wrap justify-center w-full px-4 lg:px-12 relative z-40">
       
       {
        state.value === "Eng" ? <>
        {blogs_Data?.blogs_Data?.map((news) => (
            <BlogsCards
              key={news?.id}
              id={news?.id}
              img={`https://api.programantum.com${news?.attributes?.img?.data?.attributes?.url}`}
              heading={news?.attributes?.Heading_English}
              date={news?.attributes?.updatedAt}
              slug={news?.attributes?.slug}
            />
          ))}
        </>:
        <>
        {blogs_Data?.blogs_Data?.map((news) => (
            <BlogsCards
            key={news?.id}
            id={news?.id}
            img={`https://api.programantum.com${news?.attributes?.img?.data?.attributes?.url}`}
            heading={news?.attributes?.Heading_Spanish}
            date={news?.attributes?.updatedAt}
            slug={news?.attributes?.slug}
            />
          ))}
        </>
       }
       
        
      </div>
      

     
    </Layout>
  );
};

export default Blogs;

export async function getServerSideProps() {
	// Define the URLs for the APIs you want to fetch
	const urls = [
	  `${process.env.NEXT_PUBLIC_BACKEND_API}/blogs?populate=*`,
	];
  
	// Use Promise.all to fetch all APIs concurrently
	const responses = await Promise.all(urls.map(url => fetch(url)));
	
	// Convert the responses to JSON
	const data = await Promise.all(responses.map(res => res.json()));
	
	return {
	  props: {
		blogs_Data : data[0].data, 
	  },
	};
  }