'use client'

// import CalenderPage from "@/components/calenderCompo/CalenderPage";
import { InlineWidget } from "react-calendly";


export default function BookCall() {
 
  return (
    <section
      id="book-a-call"
      className="book-call-section w-full my-[20px] max-md:mt-[10vh]  lg:mb-[200px]   h-auto lg:h-screen px-[8vw] lg:px-[clamp(40px,4vw,75px)] lg:pt-[16vh] relative flex flex-col place-content-center place-items-center z-[50]"
    >
      <p className="mb-4 lg:mb-0  text-[clamp(40px,5.5vw,103px)] text-center font-leagueSpartan font-semibold leading-[100%] uppercase text-[#efdcf9]">
     Schedule Call
      </p>
      <div className="block w-full  max-sm:mt-[20px] mt-[50px] ">
       <section
                
                id="book-a-call"
                className="book-call-section mx-auto max-xl:w-full py-[30px]  flex justify-center gap-[40px] mt-[3vh]  min-h-[80vh] w-[80%]"
                >
    <div className="w-[70%] max-sm:w-[100%] max-xl:w-[100%]  min-h-screen overflow-hidden relative">
        <InlineWidget
          url="https://calendly.com/sunailahmad7/meeting"
          className="w-full h-full"
          styles={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            backgroundColor: "transparent",
            overflow: "hidden",
          }}
        />
      </div>
      {/* <div className='flex justify-center  rounded-[50px] overflow-hidden  w-full gap-[40px] border ' >
      <CalenderPage/>
     
      </div> */}
    </section>
      </div>

    
    </section>
  );
}
