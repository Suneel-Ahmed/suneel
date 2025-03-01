"use client"

import "react-step-progress-bar/styles.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from "react";
export default function Marketing({frontend , backend}) {
 const [field , setField] = useState("frontend")
  return (
    <section
      id="marketing"
      className="w-full min-h-screen  px-[8vw] lg:px-[clamp(40px,4vw,75px)]    relative flex flex-col place-content-start place-items-center gap-[60px] overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row place-content-between place-items-center gap-[10px] lg:gap-0">
        <p className="relative text-[#efdcf9] text-[clamp(30px,3.75vw,70px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase ">
          { "My Expertise"} 
        </p>
       
      </div>
      <div className="w-full h-full lg:h-auto pl-[8vw] pr-[4vw] relative flex flex-col lg:flex-row place-content-between place-items-center lg:place-items-center gap-[30px] lg:gap-[clamp(0px,12vw,200px)]">
       
        <div className="w-full lg:w-auto pb-[100px] lg:h-full relative flex flex-grow flex-col place-content-end">
         
          
         
      <div className="w-full flex pr-24 gap-[30px] justify-center" >
        <button onClick={()=>setField('frontend')} className="text-[2rem] px-20 py-2 border border-white hover:bg-white/10  rounded-[30px]" >FrontEnd</button>
        <button onClick={()=>setField('backend')} className="text-[2rem] px-20 py-2 border border-white rounded-[30px] hover:bg-white/10 " >Backend</button>
        
      </div>
          {
            field === "frontend" && (

            
            <div className="w-full  gap-[30px] gap-y-[130px] mt-48 place-items-center grid grid-cols-4" >
           {
            frontend.map((val)=>(

            
              <div key={val.id} className=" text-black w-full gap-[18px] flex flex-col items-center" >
                <div className="w-[40%]" >
                <CircularProgressbar  value={val.value} text={`${val.value}%`} />              

                </div>
                <h1 className="text-white text-center text-[2rem] " >{val.title_English}</h1>
              </div>
           ))
          }
            </div>
            )
          }  
           {
            field === "backend" && (

            
            <div className="w-full  gap-[30px] gap-y-[130px] mt-48 place-items-center grid grid-cols-4" >
           {
            backend.map((val)=>(

            
              <div key={val.id} className=" text-black w-full gap-[18px] flex flex-col items-center" >
                <div className="w-[40%]" >
                <CircularProgressbar  value={val.value} text={`${val.value}%`} />              

                </div>
                <h1 className="text-white text-center text-[2rem] " >{val.title_English}</h1>
              </div>
           ))
          }
            </div>
            )
          }  
     
        </div>
        
      </div>
    </section>
  );
}
