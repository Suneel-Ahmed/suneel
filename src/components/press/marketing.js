import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";



export default function Marketing({marketing}) {
  const containerRef = useRef(null);
  const imagesRef = useRef(null);
  const textsRef = useRef(null);
  const numbersRef = useRef(null);
  const state = useSelector(state => state.lang)

  useGSAP(() => {
    const images = Array.from(imagesRef.current.children);
    const texts = Array.from(textsRef.current.children);
    const numbers = Array.from(numbersRef.current.children);
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * marketing.length * (window.innerWidth >= 1024 ? 1 : 0.2)}`, // Maximum reduction in scroll distance
        scrub: 0.3, // Super fast scrub
        pin: true,
        pinSpacing: true,
      },
    });
  
    for (let i = 1; i < marketing.length; i++) {
      tl.to(
        texts[i - 1],
        {
          autoAlpha: 0,
          ease: "power1.out", // Quickest easing
          duration: 0.1, // Minimal duration
        },
        "+=0.1" // Minimal delay
      )
        .to(
          numbers[i - 1].children[0],
          {
            color: "#DCE600",
            fontWeight: 400,
            ease: "power1.out", // Quick easing
            duration: 0.1, // Minimal duration
          },
          "<"
        )
        .to(
          numbers[i - 1].children[1],
          {
            autoAlpha: 0,
            ease: "power1.out", // Quick easing
            duration: 0.1, // Minimal duration
          },
          "<"
        )
        .to(
          texts[i],
          {
            autoAlpha: 1,
            ease: "power1.in", // Fastest easing
            duration: 0.1, // Minimal duration
          },
          "<"
        )
        .to(
          numbers[i].children[0],
          {
            color: "#DCE600",
            fontWeight: 500,
            ease: "power1.in", // Fastest easing
            duration: 0.1, // Minimal duration
          },
          "<"
        )
        .to(
          numbers[i].children[1],
          {
            autoAlpha: 1,
            ease: "power1.in", // Fastest easing
            duration: 0.1, // Minimal duration
          },
          "<"
        )
        .to(
          images[i],
          {
            y: 0,
            ease: "power1.in", // Fastest easing
            duration: 0.15, // Fast but smooth image transition
          },
          "<"
        )
        .to(containerRef.current, {
          autoAlpha: 1,
          duration: 0.15, // Quick container fade-in
        });
    }
  }, { scope: containerRef });
  

  return (
    <section
      ref={containerRef}
      id="marketing"
      className="w-full h-screen px-[8vw] lg:px-[clamp(40px,4vw,75px)] pt-[12vh] lg:py-[4vw] relative flex flex-col place-content-start lg:place-content-center place-items-center gap-[60px] overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row place-content-between place-items-center gap-[10px] lg:gap-0">
        <p className="relative text-[#DCE600] text-[clamp(30px,3.75vw,70px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase ">
          {state.value === "Eng" ? "Marketing that gets results" : "Marketing que obtiene resultados"} 
        </p>
        <p className="w-full lg:max-w-[clamp(0px,37.5vw,715px)] relative text-[#FFFFFF] text-[clamp(14px,1.55vw,29px)] text-center lg:text-left font-poppins font-normal leading-[150%]">
          {
            state.value === "Eng" ? "Boost your online presence with higher search rankings and more buyers to your site!" : "¡Impulse su presencia en línea con clasificaciones de búsqueda más altas y más compradores en su sitio!"
          }
          
        </p>
      </div>
      <div className="w-full h-full lg:h-auto pl-[8vw] pr-[4vw] relative flex flex-col lg:flex-row place-content-between place-items-center lg:place-items-center gap-[30px] lg:gap-[clamp(0px,12vw,200px)]">
        <div
          ref={imagesRef}
          className="h-[40vw] lg:h-[32vw] aspect-[9/10] relative"
        >
          {
            state.value === "Eng" ? <>
          {marketing.map((item, idx) => (
            <span
              key={idx}
              className={`w-full h-full absolute inset-0 rounded-[11px] lg:rounded-[21px] overflow-hidden ${
                idx === marketing.length - 1 ? "scale-125" : 'bg-[#D9D9D9]'
              }`}
              style={{
                rotate: `-${(idx + 1) * 3}deg`,
                translate: `0 ${idx === 0 ? "" : "-150vh"}`,
              }}
            >
              <Image
                src={`https://api.programantum.com${item?.attributes?.image?.data?.attributes?.url}`}
                alt={"marketing image"}
                fill
                sizes='100vw'
                priority
                className={"object-cover object-center bg-[#D9D9D9]"}
              />
            </span>
          ))}  
            </>
            :
            <>
            {marketing.map((item, idx) => (
            <span
              key={idx}
              className={`w-full h-full absolute inset-0 rounded-[11px] lg:rounded-[21px] overflow-hidden ${
                idx === marketing.length - 1 ? "scale-125" : 'bg-[#D9D9D9]'
              }`}
              style={{
                rotate: `-${(idx + 1) * 3}deg`,
                translate: `0 ${idx === 0 ? "" : "-150vh"}`,
              }}
            >
              <Image
                src={`https://api.programantum.com${item?.attributes?.image?.data?.attributes?.url}`}
                alt={"marketing image"}
                fill
                sizes='100vw'
                priority
                className={"object-cover object-center bg-[#D9D9D9]"}
              />
            </span>
          ))}
            
            </>
          }
          
        </div>
        <div className="w-full lg:w-auto lg:h-full relative flex flex-grow flex-col place-content-end">
         
          <div ref={textsRef}>
            {
              state.value === "Eng" ? <>
            {marketing.map((item, idx) => (
              <div
                key={item.title + idx}
                className={`pt-[4vw] absolute inset-0 flex flex-col gap-[30px] ${
                  idx === 0 ? "" : "invisible"
                }`}
              >
                <p className="relative text-[#DCE600] text-[clamp(30px,3.75vw,70px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase ">
                  {item?.attributes?.title_English}
                </p>
                <p className="w-full max-w-none lg:max-w-[clamp(0px,45vw,850px)] relative text-[#FFFFFF] text-[clamp(14px,1.55vw,29px)] text-center lg:text-left font-poppins font-normal leading-[150%]">
                  {item.attributes?.text_English}
                </p>
              </div>
            ))}  
              </>
              :
              <>
              {marketing.map((item, idx) => (
              <div
                key={item.title + idx}
                className={`pt-[4vw] absolute inset-0 flex flex-col gap-[30px] ${
                  idx === 0 ? "" : "invisible"
                }`}
              >
                <p className="relative text-[#DCE600] text-[clamp(30px,3.75vw,70px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase ">
                {item?.attributes?.title_Spanish}

                </p>
                <p className="w-full max-w-none lg:max-w-[clamp(0px,45vw,850px)] relative text-[#FFFFFF] text-[clamp(14px,1.55vw,29px)] text-center lg:text-left font-poppins font-normal leading-[150%]">
                {item.attributes?.text_Spanish}
                </p>
              </div>
            ))}
              </>
            }
            
          </div>
     
        </div>
        <div className="w-full h-full absolute inset-0">
          <div className="w-full h-full relative">
            <ul
              ref={numbersRef}
              className="absolute top-1/4 lg:top-1/2 left-0 -translate-y-1/2 flex flex-col place-content-between place-items-start gap-[clamp(10px,1vw,20px)]"
            >
              {
                state.value === "Eng" ? <>
              {marketing.map((market, idx) => (
                <li
                  key={market?.attributes?.text_English + idx}
                  className="flex place-content-center place-items-center gap-[clamp(5px,0.5vw,10px)]"
                >
                  <p
                    className={`${
                      idx === 0 ? "text-[#DCE600]" : "text-[#767676]"
                    } text-[clamp(14px,1.1vw,20px)] text-left font-hvdTrialGraphit ${
                      idx === 0 ? "font-medium" : "font-normal"
                    } leading-[125%]`}
                  >
                    {idx + 1}
                  </p>
                  <svg
                    viewBox="0 0 30 6"
                    fill="none"
                    className={`w-[clamp(15px,1.75vw,35px)] ${
                      idx === 0 ? "" : "invisible"
                    }`}
                  >
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3.5H30V2.5H3V3.5Z"
                      fill="#DCE600"
                    />
                  </svg>
                </li>
              ))}  
                
                </>
                :
                <>
                {marketing.map((market, idx) => (
                <li
                  key={market?.attributes?.text_English + idx}
                  className="flex place-content-center place-items-center gap-[clamp(5px,0.5vw,10px)]"
                >
                  <p
                    className={`${
                      idx === 0 ? "text-[#DCE600]" : "text-[#767676]"
                    } text-[clamp(14px,1.1vw,20px)] text-left font-hvdTrialGraphit ${
                      idx === 0 ? "font-medium" : "font-normal"
                    } leading-[125%]`}
                  >
                    {idx + 1}
                  </p>
                  <svg
                    viewBox="0 0 30 6"
                    fill="none"
                    className={`w-[clamp(15px,1.75vw,35px)] ${
                      idx === 0 ? "" : "invisible"
                    }`}
                  >
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3.5H30V2.5H3V3.5Z"
                      fill="#DCE600"
                    />
                  </svg>
                </li>
              ))}
                </>
              }
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
