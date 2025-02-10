import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image.js";
import Button from "@/components/ui/button";
import FullPageMenu from "@/components/ui/full-page-menu";
import navbarData from "@/constants/navbar-data";
import {spanishNavData} from "@/constants/navbar-data";
import ScrollToPlugin from "../../../public/js/ScrollToPlugin.min.js";
import { useRouter } from "next/router";
import { useSelector , useDispatch } from "react-redux";
import { lang } from "@/redux/Slices/langSlice.js";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const dispatch = useDispatch()
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const router = useRouter();
 



  useGSAP(
    () => {
      gsap.timeline().fromTo(
        containerRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        },
        "+=4.15"
      );
    },
    { scope: containerRef }
  );

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const heroSection = document.getElementById("hero-section");

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setHidden(true);
    } else {
      // Scrolling up
      setHidden(false);
    }

    // Show navbar if user is in the hero section
    if (heroSection && currentScrollY <= heroSection.offsetHeight) {
      setHidden(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollToSection = () => {
    const hash = router.asPath.split("#")[1];
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        gsap.to(window, {
          duration: 0.1,
          scrollTo: {
            y: section,
            offsetY:
              navbarData.links.find((l) => l.path === `#${hash}`)?.offsetY || 0,
          },
        });
      }
    }
  };

  useEffect(() => {
    handleScrollToSection();
    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookACallRedirect = () => {
    // const section = document.getElementById("book-a-call");
    // if (section) {
    //   section.scrollIntoView({ behavior: "smooth" });
    // }
    window.location.href = "/#book-a-call";
  };

 const handleDirectNavigation = (path) => {
  window.location.href = path;
  };
 
  return (
    <header
      ref={containerRef}
      className={`w-full py-[4.5vh] fixed top-0 flex place-content-center place-items-center z-[100] transform transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="w-full h-[clamp(40px,5vw,90px)] flex place-content-center place-items-center gap-[1rem]">
      <div className="w-full lg:w-fit h-full px-[4vw] lg:px-[clamp(40px,4vw,50px)] flex place-content-between lg:place-content-center place-items-center lg:gap-[60px] xl:gap-[150px] text-[#FFFFFF] text-[clamp(12px,1.45vw,28px)] text-center font-leagueSpartan font-semibold leading-[100%] lg:border-[1px] lg:border-[#FFFFFF40] lg:rounded-full lg:backdrop-blur-xl lg:bg-[#efdcf9]/5">
          <a href="/" className="font-hvdTrialGraphit" >
           SUNEEL
          </a>
          
        

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
          >
            <svg viewBox="0 0 53 13" fill="none" className="w-[40px]">
              <path
                d="M52.5 1C40.1667 1 15.2 1 14 1"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M53 11.5L0 11.5" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        


          <ul className="hidden lg:flex gap-[50px]">
           
              {navbarData.links.map((link, index) => (
                <li key={link.name}>
                  <a onClick={(e) => {
                   
                    handleDirectNavigation(link.path); // Handle navigation
                  }}   href={link.path}>{link.name}</a>
                </li>
              ))}
             
          </ul>
        </div>

        <Button
          className="h-full  hidden lg:flex"
          onClick={handleBookACallRedirect}
        >
          {navbarData.cta.name}
        </Button>
       <FullPageMenu
          isOpen={isMenuOpen}
          closeMenu={() => setIsMenuOpen(false)}
        />
      </nav>
    </header>
  );
}
