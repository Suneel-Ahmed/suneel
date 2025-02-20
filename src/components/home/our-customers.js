import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import CustomerReview from "@/components/ui/customer-review";

export default function OurCustomers({ customerReview, alt = false }) {
  const containerRef = useRef(null);

  const titleRef = useRef(null);
  const reviewListRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      const reviews = Array.from(reviewListRef.current.children);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${
            window.innerHeight * (window.innerWidth >= 1024 ? 6 : 2.5)
          }`, // Further reduced scroll distance
          scrub: 0.5, // Faster scrub for quicker interaction
          pin: true,
          pinSpacing: true,
        },
      });

      reviews.forEach((review) => {
        tl.fromTo(
          review,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.2, // Faster fade-in
          },
          "<"
        );
      });

      reviews.forEach((review, idx) => {
        tl.fromTo(
          review,
          {
            y: "-100vh",
            rotateZ: `${(reviews.length - 1 - idx) * -7}deg`,
            transformOrigin: "center",
          },
          {
            y: 0,
            duration: 0.3, // Faster vertical movement
          },
          "+=0.2" // Further shortened delay
        );
      });

      reviews.forEach((review, idx) => {
        tl.to(
          review,
          {
            rotateZ: 0,
            duration: 0.2, // Faster rotation to zero
          },
          idx === 0 ? "+=0.2" : "<" // Shortened initial delay
        );
      });

      tl.to(
        buttonRef.current,
        {
          autoAlpha: 1,
          duration: 0.2, // Faster button reveal
        },
        "<"
      );

      if (window.innerWidth >= 1024) {
        tl.to(
          buttonRef.current,
          {
            autoAlpha: 0,
            duration: 0.2, // Faster button fade-out
          },
          "+=0.3" // Shortened delay
        ).to(
          titleRef.current,
          {
            y: "-40%",
            scale: 0.8,
            duration: 0.3, // Faster title movement and scaling
          },
          "<"
        );

        reviews.forEach((review, idx) => {
          tl.to(
            review,
            {
              left: `${idx * 25}%`,
              xPercent: 0,
              x: `${(window.innerWidth * 0.25 - review.offsetWidth) / 2}px`,
              y: "50%",
              scale: window.innerWidth >= 1200 ? 0.8 : 0.7,
              duration: 0.25, // Faster review positioning
            },
            "<"
          );
        });
      }

      tl.to(titleRef.current, {
        autoAlpha: 1,
        duration: 0.15, // Even faster title reveal
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="our-customers"
      className="w-full h-screen relative flex place-content-center place-items-center"
    >
      <div className="w-full  h-full absolute inset-0">
        <div className="w-full h-full relative">
          <div className="w-[75vw] lg:w-[55vw] aspect-square absolute top-[80%] left-[-10%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(239,220,249,0.35)_0%,rgba(239,220,249,0)_100%)] blur-[125px]" />

          <div className="w-[75vw] lg:w-[55vw] aspect-square absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(239,220,249,0.15)_0%,rgba(239,220,249,0)_100%)] blur-[125px]" />

          <div className="w-[75vw] lg:w-[55vw] aspect-square absolute top-0 right-[-10%] translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(239,220,249,0.35)_0%,rgba(239,220,249,0)_100%)] blur-[125px]" />
        </div>
      </div>
      <p
        ref={titleRef}
        className="mb-[60vh]  relative lg:mb-0  text-[clamp(50px,10vw,192px)] text-center font-leagueSpartan font-semibold leading-[100%] uppercase text-[#efdcf9]"
      >
        <>
          Our customers
          <br />
          speak for us
        </>
      </p>
      <div className="w-full h-full absolute inset-0">
        {
          <ul ref={reviewListRef} className="w-full h-full relative">
            {customerReview?.slice(0, 4).map((customer, idx) => (
              <li
                key={customer + idx}
                className="w-[clamp(300px,65vw,400px)] lg:w-[clamp(350px,26.25vw,510px)] aspect-square absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <CustomerReview
                  name={customer?.attributes?.Name}
                  image={customer?.attributes?.Profile_Pic}
                  review={customer?.attributes?.Comment_English}
                  unoptimized
                />
              </li>
            ))}
          </ul>
        }
      </div>
    </section>
  );
}
