import Button from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  

  return (
    <section
      id="hero"
      className="w-full mt-[100px] h-screen px-[8vw] lg:px-[clamp(40px,4vw,75px)] py-[4vw] relative flex flex-col lg:flex-row place-content-center lg:place-content-between place-items-center gap-[60px] lg:gap-[0px]"
    >
      <div className="w-full h-full absolute inset-0">
      <div className="w-full h-full relative">
  <div className="w-[90vw] lg:w-[56vw] aspect-square absolute top-1/2 left-0 -translate-x-[25%] -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(239,220,249,0.35)_0%,rgba(239,220,249,0)_100%)] blur-[300px]" />
</div>

      </div>
      <div className="flex flex-col max-sm:order-2 place-items-center lg:place-items-start gap-[50px]">
        <span>
          <p className="relative text-[#efdcf9] text-[clamp(14px,1.8vw,34px)] text-center lg:text-left font-inter font-extrabold leading-[275%] uppercase  ">
             About us
          </p>
          <p className="relative text-[#efdcf9] text-[clamp(35px,6.3vw,120px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase ">
           Suneel Ahmed
          </p>
          <p className="relative text-[#efdcf9] text-[clamp(16px,2.7vw,50px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase ">
           
          </p>
        </span>
        <p className="relative w-full lg:max-w-[clamp(0px,46vw,934px)] text-[#efdcf9ce] text-[clamp(14px,1.55vw,29px)] text-center lg:text-left font-poppins font-normal leading-[150%]">
      I’m a <strong> Full-Stack Web Developer </strong> specializing in the <strong> MERN stack </strong>. Skilled in both <strong> frontend </strong> and <strong> backend development</strong>, I create responsive, user-friendly, and high-performance websites. With a focus on pixel-perfect design and clean code, I turn ideas into powerful digital solutions.
        <br/>
        
       Book A Call to discuss your project and see how I can help bring your vision to life.
        </p>
        <Button link="/book-a-call" className="w-fit h-[clamp(36px,4vw,64px)]">
          { "Book a Call"}
        </Button>
      </div>
      <div className="w-[75vw] max-sm:order-1 max-w-[500px]  lg:max-w-none lg:w-[35.5vw] aspect-[4/3] relative  overflow-hidden">
        <span className={`absolute   flex justify-center inset-0 `}>

          <Image
          src={"/videos/about/1.png"}
          width={500}
          height={500}
          className="h-full w-auto"
          />
       
        </span>
      </div>
    </section>
  );
}
