import React, { useState } from "react";
import Image from "next/image";

const PortfolioCards = ({ data }) => {
  const [showExtraInfo, setShowExtraInfo] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = (toggle) => {
    
    navigator.clipboard
    .writeText(data?.portfolioCode)
    .then(() => {
      console.log("Portfolio Code copied to clipboard");
      if (showExtraInfo !== true) {
        setShowPopup(toggle);
      } else {
        if (toggle !== false) {
          setShowPopup(toggle);
        } else {
          setShowPopup(false);
        }
      }

      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    })
    .catch((error) => {
      console.error("Error copying to clipboard:", error);
    });
  
  };

  return (
    <>
    <section className="relative">

    <div className={`absolute  ${showExtraInfo ? ' w-[80%] max-lg:w-[90%]' : showPopup ? 'w-full max-md:w-[90%]' :  'w-fit'}   max-md:top-30 top-20 left-6 z-[9999]   `}>
            <div onClick={()=>{setShowExtraInfo(!showExtraInfo); handleCardClick(false) }} className="text-black mt-[25px] z-[999999]  w-[48px] h-[48px]  rounded-full Hitmo   flex justify-center items-center bg-[#FFFFFF]">
              ?
            </div>
            {
              showExtraInfo  && (

              
         <div className=" w-full  z-20 max-md:bg-[#000000]/[60%] max-md:backdrop-blur-md  py-[10px]    max-lg:rounded-[20px] max-md:px-[10px]  absolute top-[70px] px-[43px] left-0 ">
           
            <div className="max-w-[654px] rounded-[10px] md:backdrop-blur-sm     mt-[12px] flex items-center  px-[27px] md:bg-black/[60%] h-[84px]">
              <p className="text-[#ffffff] text-[17px] font-normal Hitmo leading-[25px]">
                {data?.extraInfo}
              </p>
            </div>
            
             
          </div>
          ) 
        }

{showPopup && 
           <div className=" w-[80%]  z-20 max-md:bg-[#000000]/[60%] max-md:backdrop-blur-md  py-[5px]    max-lg:rounded-[20px] max-md:px-[10px]  absolute top-[70px] px-[43px] left-0 ">

          <div className="max-w-[654px] rounded-[10px] md:backdrop-blur-sm     mt-[12px] flex items-center  px-[27px] md:bg-black/[60%] h-[84px]">
              <p className="text-[#ffffff] text-[17px] font-normal Hitmo leading-[25px]">
                Code Copied
              </p>
            </div>
            </div>
             }

          </div>
          
    <div
     onClick={() => {handleCardClick(true)}}
      className="max-w-[838px] max-lg:w-full max-xl:w-[440px]  max-2xl:w-[570px]  max-3xl:w-[650px] hover:cursor-pointer relative   h-[532px] flex flex-col"
    >
     

      
      <div className="max-w-[835px] relative mt-[26px] h-[468px] flex rounded-[20px]">
         
      
        <div
          onClick={() => {
            handleCardClick(true);
          }}
          className="max-w-[838px] hover:cursor-pointer relative  max-3xl:mx-auto h-[532px] flex flex-col"
        >
          <h1 className="text-[30px] text-[#E53641] Hitmo font-black leading-[45px]">
            {data?.title}
          </h1>
          <div className="max-w-[835px] relative mt-[26px] h-[468px] flex rounded-[20px]">
            <div className="w-full z-10 h-full absolute top-0 left-0 ">
              {data?.background && (
                <Image
                  src={"#"}
                  width={500}
                  height={500}
                  className={`w-full h-full object-cover object-center  rounded-[20px] ${
                    showExtraInfo ? "brightness-50" : "brightness-100"
                  }`}
                  alt={data?.title}
                />
              )}
            </div>

            <div
              className={`mt-auto relative z-10 px-[43px] py-[40px]  ${
                showExtraInfo ? "brightness-50" : "brightness-100"
              }`}
            >
              <p className="mb-[64px] text-[#ffffff] text-[21px] Hitmo line-clamp-3 leading-[31.5px]">
                {data?.description}
              </p>
              <div className="flex flex-wrap justify-between items-center">
                <p className="text-[21px] text-[#ffffff] Hitmo leading-[31.5px] ">
                  {data?.portfolioCode}
                </p>
                <div className="flex max-md:mt-[10px] items-center">
                  {data?.Logos?.map((logo, index) => (
                    <Image
                      key={index}
                      src={getImage(logo?.logo)}
                      width={500}
                      height={500}
                      className="w-[176px] h-auto"
                      alt={data?.title}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>
    </>
  )
};

export default PortfolioCards;
