
import "react-step-progress-bar/styles.css";
import { ProgressBar , Step } from "react-step-progress-bar";



export default function Marketing({marketing}) {
 
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
         
          
         
            
              <div
                
                className={`pt-[4vw] absolute inset-0  grid grid-cols-2 gap-y-[50px] max-md:grid-cols-1  gap-[30px] `}
              >
                {marketing.map((item, idx) => (
              <div key={item.title_English + idx} className=" flex justify-center flex-col items-center" >
              <p className="relative  text-outlined text-transparent  text-[clamp(30px,3.75vw,50px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase ">
             
              {item?.title_English}
        </p>
                  
                
                <p className="w-full py-[30px] max-w-none lg:max-w-[clamp(0px,45vw,850px)] relative text-[#000] text-[clamp(14px,1.55vw,29px)] text-center lg:text-left font-poppins font-normal leading-[150%]">
                <ProgressBar
                
  percent={98}
  filledBackground="#efdcf9"
  unfilledBackground="#000000"
  height={20}
 
  text = {"98%"}
>
</ProgressBar>
                </p>
              </div>
            ))}  
              </div>
            
            
          
     
        </div>
        
      </div>
    </section>
  );
}
