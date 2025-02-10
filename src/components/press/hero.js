import Button from "@/components/ui/button";
import { useSelector } from "react-redux";

export default function Hero({heroData}) {
  const state = useSelector((state) => state.lang);

  return (
    <section
      id="hero"
      className="w-full h-screen px-[8vw] lg:px-[clamp(40px,4vw,75px)] py-[4vw] relative flex flex-col lg:flex-row place-content-center lg:place-content-between place-items-center gap-[60px] lg:gap-[0px]"
    >
      <div className="w-full h-full absolute inset-0">
        <div className="w-full h-full relative">
          <div className="w-[90vw] lg:w-[56vw] aspect-square absolute top-1/2 left-0 -translate-x-[25%] -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(220,230,0,0.35)_0%,rgba(220,230,0,0)_100%)] blur-[300px]" />
        </div>
      </div>
      <div className="flex flex-col place-items-center lg:place-items-start gap-[50px]">
        <span>
          <p className="relative text-[#DCE600] text-[clamp(14px,1.8vw,34px)] text-center lg:text-left font-inter font-extrabold leading-[275%] uppercase  ">
            {state.value === "Eng"
              ? heroData?.attributes?.small_Heading_English
              : heroData?.attributes?.small_Heading_Spanish
			  }
          </p>
          <p className="relative text-[#DCE600] text-[clamp(35px,6.3vw,120px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase ">
            {state.value === "Eng" ? heroData?.attributes?.second_Heading_English : heroData?.attributes?.second_Heading_Spanish}
          </p>
          <p className="relative text-[#DCE600] text-[clamp(16px,2.7vw,50px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase ">
            {state.value === "Eng"
              ? heroData?.attributes?.Third_Heading_English
              : heroData?.attributes?.Third_Heading_Spanish
			  }
          </p>
        </span>
        <p className="relative w-full lg:max-w-[clamp(0px,46vw,934px)] text-[#FFFFFF] text-[clamp(14px,1.55vw,29px)] text-center lg:text-left font-poppins font-normal leading-[150%]">
          {state.value === "Eng"
            ? heroData?.attributes?.Paragraph_English
            : heroData?.attributes?.Paragraph_Spanish 
			}
        </p>
        <Button link="/book-a-call" className="w-fit h-[clamp(36px,4vw,64px)]">
          {state.value === "Eng" ? "Book a Call" : "Reservar una llamada"}
        </Button>
      </div>
      <div className="w-[75vw] max-w-[500px]  lg:max-w-none lg:w-[35.5vw] aspect-[4/3] relative  overflow-hidden">
        <span className={`absolute   flex justify-center inset-0 `}>
          <video autoPlay loop muted className="h-full">
            <source src="/videos/about/globe.mp4" />
          </video>
        </span>
      </div>
    </section>
  );
}
