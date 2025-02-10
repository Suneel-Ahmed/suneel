import Button from "@/components/ui/button";
import {
  HealthWellness,
  FashionBeauty,
  Fitness,
  Lifestyle,
  Entertainment,
} from "@/components/ui/icons";

export default function Marketing() {
  return (
    <section
      id="marketing"
      className="w-full px-[8vw] lg:px-[clamp(40px,4vw,75px)] py-[4vw] relative"
    >
      <div className="w-full h-full absolute inset-0">
        <div className="w-full h-full relative">
          <div className="w-[90vw] lg:w-[46vw] aspect-square absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(155,54,255,0.35)_0%,rgba(155,54,255,0)_100%)] blur-[300px]" />
        </div>
      </div>
      <p className="relative text-transparent text-[clamp(40px,3.75vw,70px)] text-center font-inter font-extrabold leading-[125%] uppercase bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#9B36FF]">
        Influencer marketing for all industries
      </p>
      <div className="w-[90%] mx-auto mt-[10vh] relative flex lg:flex-wrap flex-col lg:flex-row place-content-start lg:place-content-between place-items-center lg:place-items-start gap-y-[50px]">
        <CustomButton title="Health & Wellness" lin="/" className="w-full lg:w-[41%]" />
        <CustomButton title="Fashion & Beauty" lin="/" className="w-full lg:w-[53%]" />
        <CustomButton title="Fitness" lin="/" className="w-full lg:w-auto" />
        <CustomButton title="Lifestyle" lin="/" className="w-full lg:w-auto" />
        <CustomButton title="Entertainment" lin="/" className="w-full lg:w-auto" />
      </div>
    </section>
  );
}

function CustomButton({ title, link, className }) {
  return (
    <Button
      link={link}
      className={className}
      padding={`${window.innerWidth >= 1024 ? 2 : 5}vw clamp(50px,4.5vw,100px)`}
      borderColor="#9B36FF"
    >
      <span className="w-full flex justify-center items-center gap-8">
        {title === "Health & Wellness" ? (
          <HealthWellness className="w-[clamp(30px,3.5vw,60px)]" />
        ) : title === "Fashion & Beauty" ? (
          <FashionBeauty className="w-[clamp(30px,4.5vw,60px)]" />
        ) : title === "Fitness" ? (
          <Fitness className="w-[clamp(30px,3.5vw,60px)]" />
        ) : title === "Lifestyle" ? (
          <Lifestyle className="w-[clamp(30px,3.5vw,60px)]" />
        ) : title === "Entertainment" ? (
          <Entertainment className="w-[clamp(30px,3.5vw,60px)]" />
        ) : (
          ""
        )}
        <p className="w-fit text-[#FFFFFF] text-[clamp(18px,2vw,48px)] text-left text-nowrap font-poppins font-normal leading-[125%]">
          {title}
        </p>
      </span>
    </Button>
  );
}
