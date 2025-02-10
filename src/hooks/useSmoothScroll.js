"use client"
import Lenis from "@studio-freight/lenis";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
const useSmoothScroll = () => {
  const [lenis, setLenis] = useState();

  const reqIdRef = useRef();

  useEffect(() => {
    const animate = (time) => {
      lenis?.raf(time);
      lenis?.on("scroll", () => ScrollTrigger.update());
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, [lenis]);

  useIsomorphicLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => t * (2 - t),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 4,
    });
    setLenis(lenis);

    // lenis.on('scroll', () => ScrollTrigger.update())

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);
};

export default useSmoothScroll;
