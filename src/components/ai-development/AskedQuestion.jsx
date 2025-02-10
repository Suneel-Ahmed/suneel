import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const AskedQuestion = ({ Questions }) => {
 const state = useSelector(state => state.lang) 
  const [activeFAQ, setActiveFAQ] = useState(-1);
  const [windowWidth, setWindowWidth] = useState(null);
  const handleFAQClick = (idx) => {
  
    setActiveFAQ((prevActiveFAQ) => (prevActiveFAQ !== idx ? idx : -1));
  };

  useEffect(() => {
    // Check if window is defined (i.e., running in the browser)
    if (typeof window !== "undefined") {
      // Access window properties here
      setWindowWidth(window.innerWidth);

      // Add event listener to update window width on resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section className="w-full min-h-screen mt-[10vh]  relative flex flex-col place-content-start place-items-center gap-[5vh] overflow-hidden">
      <p className="w-full  text-[#DBE600] text-[clamp(40px,6.2vw,82px)] font-leagueSpartan text-center font-semibold leading-normal">
        FREQUENTLY ASK QUESTIONS
      </p>

      <ul className="w-full px-[5vw]">
        {Questions?.map((faq, idx, arr) => (
          <li
            key={faq + idx}
            className="w-full py-[4vh] lg:py-[5.6vh] flex place-content-between place-items-start border-[#A1A1A278]"
            style={{ borderBottomWidth: idx < arr.length - 1 ? 1 : 0 }}
          >
            <p className="text-white text-[clamp(18px,5vw,50px)] font-semibold">
              {String(idx + 1).padStart(2, "0")}
            </p>
            <div className="max-w-[65%] lg:max-w-[30%] flex flex-col place-content-start place-items-center gap-[1vh]">
              <p className="w-full text-white text-[clamp(15px,4vw,33px)] text-left font-semibold leading-normal">
                {state.value === "Eng" ? faq.attributes.question_english : faq.attributes.question_spanish }
              </p>
              <p
                className="w-full lg:hidden text-[#888888] text-[clamp(11px,3vw,22px)] text-left font-normal leading-[1.8] will-change-contents"
                style={{
                  display:
                    windowWidth < 1024 && activeFAQ === idx ? "block" : "none",
                }}
              >
                {state.value === "Eng" ? faq.attributes.answer_english : faq.attributes.answer_spanish }
              </p>
            </div>
            <p className="max-w-[32.5%] hidden lg:block text-[#888888] text-[clamp(11px,3vw,22px)] text-left font-normal leading-[1.8] will-change-contents">
              {activeFAQ === idx ? (
                <>{state.value === "Eng" ? faq.attributes.answer_english : faq.attributes.answer_spanish }</>
              ) : (
                <>
                {state.value === "Eng" ? faq.attributes.answer_english
                    .split(" ")
                    .slice(0, 18)
                    .map((word) => word + " ") : faq.attributes.answer_spanish
                    .split(" ")
                    .slice(0, 18)
                    .map((word) => word + " ") }
                
                
                </>
              )}
            </p>
            <button
              onClick={() => {
                handleFAQClick(idx);
              }}
              className="w-[40px] lg:w-[96px] aspect-square lg:self-center relative flex place-content-center place-items-center border rounded-full transition-all"
              style={{
                borderColor: activeFAQ === idx ? "#BC13FE" : "white",
                backgroundColor: activeFAQ === idx ? "#BC13FE" : "transparent",
              }}
            >
              <svg
                viewBox="0 0 50 38"
                className="w-1/2 relative fill-white stroke-white stroke-[0.1px] transition-all duration-1000"
                style={{
                  fill: activeFAQ === idx ? "black" : "white",
                  stroke: activeFAQ === idx ? "black" : "white",
                  rotate: activeFAQ === idx ? "-30deg" : "0deg",
                }}
              >
                <path d="M2.59961 16.4995C1.2189 16.4995 0.0996097 17.6188 0.0996097 18.9995C0.0996097 20.3802 1.2189 21.4995 2.59961 21.4995L2.59961 16.4995ZM49.1674 20.7673C50.1437 19.791 50.1437 18.2081 49.1674 17.2317L33.2575 1.32184C32.2812 0.345534 30.6983 0.345534 29.722 1.32184C28.7456 2.29815 28.7456 3.88107 29.722 4.85738L43.8641 18.9995L29.722 33.1416C28.7456 34.118 28.7456 35.7009 29.722 36.6772C30.6983 37.6535 32.2812 37.6535 33.2575 36.6772L49.1674 20.7673ZM2.59961 21.4995L47.3996 21.4995V16.4995L2.59961 16.4995L2.59961 21.4995Z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AskedQuestion;
