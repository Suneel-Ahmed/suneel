"use client"

import "react-step-progress-bar/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";
import 'react-circular-progressbar/dist/styles.css';
import { useState } from "react";
import Image from "next/image";
export default function Marketing({frontend , backend}) {
 const [field , setField] = useState("frontend")
  return (
    <section
      id="marketing"
      className="w-full min-h-screen  px-[8vw] lg:px-[clamp(40px,4vw,75px)] relative    flex flex-col place-content-start place-items-center gap-[60px] overflow-hidden"
    >
      <div className="w-full h-full  -z-10 absolute inset-0">
      <div className="w-full h-full relative">
  <div className="w-[90vw] lg:w-[26vw] aspect-square absolute top-1/2 left-1/2 -translate-x-[25%] -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(239,220,249,0.35)_0%,rgba(239,220,249,0)_100%)] blur-[300px]" />
</div>

      </div>
      <div className="flex flex-col lg:flex-row place-content-between place-items-center gap-[10px] lg:gap-0">
        <p className="relative text-[#efdcf9] text-[clamp(30px,3.75vw,70px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase ">
          { "My Expertise"} 
        </p>
       
      </div>
      <div className="w-full flex justify-center  gap-5" >
    <button className = "bg-white/10 text-xl hover:bg-white font-bold hover:text-black rounded-md px-10 py-2 cursor-pointer" onClick={()=>setField('frontend')}>Frontend</button>
    <button className="bg-white/10 text-xl hover:bg-white font-bold hover:text-black rounded-md px-10 py-2 cursor-pointer " onClick={()=>setField('backend')} >Backend</button>
      </div>

    {
      field === "frontend" && (
 <div className="w-full  flex flex-wrap justify-center gap-[30px] p-[100px] min-h-[50vh]" >
      {
        frontend.map((item , index) => (
<div className="w-[400px] h-[500px] bg-white/5 hover:bg-white/10 flex flex-col py-[30px] px-[10px] items-center justify-center rounded-[20px] backdrop-blur-sm" >
               
           <div className="w-full min-h-[320px] " >
            <Image className = "w-full h-full object-contain object-center" src={item.img} width = {500} height = {500} alt = "Skill Logo" />
            </div>
          <div className="w-full min-h-[30px]  mt-auto mb-[30px]" >
              <div className="mb-4" >
              <h1 className="mb-2" >{item.subHeading1}</h1>
              <ProgressBar completed={item.value1} />
              </div>
              <div className="mb-4" >
              <h1 className="mb-2" >{item.subHeading2}</h1>
              <ProgressBar completed={item.value2} />
              </div>
              
            </div>   
      </div>

        ))
      }
      
    </div>
      )
    }
 {
      field === "backend" && (
 <div className="w-full  flex flex-wrap justify-center gap-[30px] p-[100px] min-h-[50vh]" >
      {
        backend.map((item , index) => (
<div className="w-[400px] h-[500px] bg-white/5 hover:bg-white/10 flex flex-col py-[30px] px-[10px] items-center justify-center rounded-[20px] backdrop-blur-sm" >
               
           <div className="w-full min-h-[320px] " >
            <Image className = "w-full h-full object-contain object-center" src={item.img} width = {500} height = {500} alt = "Skill Logo" />
            </div>
          <div className="w-full min-h-[30px]  mt-auto mb-[30px]" >
              <div className="mb-4" >
              <h1 className="mb-2" >{item.subHeading1}</h1>
              <ProgressBar completed={item.value1} />
              </div>
              <div className="mb-4" >
             {item.subHeading2 && (<h1 className="mb-2" >{item.subHeading2}</h1>)} 
             {item.value2 && (<ProgressBar completed={item.value2} />)} 
              </div>
              
            </div>   
      </div>

        ))
      }
      
    </div>
      )
    }
   
    </section>
  );
}
