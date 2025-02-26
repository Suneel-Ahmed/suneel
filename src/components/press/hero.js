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
      <div className="flex flex-col place-items-center lg:place-items-start gap-[50px]">
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
        𝘊𝘳𝘢𝘧𝘵𝘪𝘯𝘨 𝘤𝘰𝘥𝘦 𝘸𝘪𝘵𝘩 𝘤𝘳𝘦𝘢𝘵𝘪𝘷𝘪𝘵𝘺 𝘢𝘯𝘥 𝘱𝘳𝘦𝘤𝘪𝘴𝘪𝘰𝘯, 𝘐 𝘣𝘳𝘪𝘯𝘨 𝘥𝘪𝘨𝘪𝘵𝘢𝘭 𝘥𝘳𝘦𝘢𝘮𝘴 𝘵𝘰 𝘭𝘪𝘧𝘦 𝘵𝘩𝘳𝘰𝘶𝘨𝘩 𝑭𝒖𝒍𝒍𝑺𝒕𝒂𝒄𝒌 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝘮𝘢𝘴𝘵𝘦𝘳𝘺. <br/>
🅵🆄🅻🅻 🆂🆃🅰🅲🅺 🅳🅴🆅🅴🅻🅾🅿🅴🆁
<br/>
Look no further! I am a skilled and experienced in 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱 | 𝗯𝗮𝗰𝗸𝗲𝗻𝗱 and fullstack web 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 with 𝗠𝗘𝗥𝗡 𝘀𝘁𝗮𝗰𝗸 | 𝑭𝒖𝒍𝒍𝑺𝒕𝒂𝒄𝒌 𝘄𝗲𝗯 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 ,
 proficient in a wide range of technologies. 

pixel-perfect designs, I can create stunning custom websites that create to your specific needs
        </p>
        <Button link="/book-a-call" className="w-fit h-[clamp(36px,4vw,64px)]">
          { "Book a Call"}
        </Button>
      </div>
      <div className="w-[75vw] max-w-[500px]  lg:max-w-none lg:w-[35.5vw] aspect-[4/3] relative  overflow-hidden">
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
