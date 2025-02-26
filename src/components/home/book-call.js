// import CalenderPage from "../calenderCompo/CalenderPage";



export default function BookCall() {
 
  return (
    <section
      id="book-a-call"
      className="book-call-section w-full my-[100px] lg:min-h-[1080px] h-auto lg:h-screen px-[8vw] lg:px-[clamp(40px,4vw,75px)] lg:pt-[16vh] relative flex flex-col place-content-center place-items-center z-[50]"
    >
      <p className="mb-4 lg:mb-0  text-[clamp(40px,5.5vw,103px)] text-center font-leagueSpartan font-semibold leading-[100%] uppercase text-[#efdcf9]">
     Schedule Call 
      </p>

      <div className="block w-full max-sm:mt-[20px] mt-[50px] ">
       {/* <CalenderPage/> */}
       <section
                
      id="book-a-call"
      className="book-call-section opacity-0 mx-auto  py-[30px] flex justify-center gap-[40px] mt-[3vh] min-h-fit w-[80%]"
    >
      <div className='flex justify-center rounded-[50px] overflow-hidden  w-full gap-[40px] border ' >
      <iframe
      src='https://calendly.com/alexctlr-pro/30min'
      width={"100%"}
      height={"700px"}
      frameBorder={"0"}
      
/>
      </div>
    </section>
      </div>

    
    </section>
  );
}
