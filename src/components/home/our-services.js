import Image from "next/image";



export default function OurServices({services_Data}) {


  return (
    < >
  

      <div
      id="our-services"
        className="w-full min-h-screen lg:pt-[16vh] inset-0 origin-top-right flex flex-col place-content-center place-items-center lg:place-content-start gap-[30px]"
      >
        <p
          className={
            "text-[#efdcf9] text-[clamp(48px,6vw,110px)] text-center font-leagueSpartan font-semibold leading-[100%] uppercase "
          }
        >
          {"Services"}
        </p>
        {
          
        <ul className="w-fit grid grid-rows-2 lg:grid-rows-2 grid-cols-2 lg:grid-cols-4 mt-[10vh] place-content-center place-items-center gap-[clamp(0px,4vw,25px)]">
          {services_Data
            .filter((service) => !service.exclude)
            .slice(0, 8)
            .map((service, idx) => (
              <a href={service?.attributes?.link} className='cursor-pointer'>
                <li key={service + idx}>
                  <span className="w-[clamp(0px,35vw,250px)] lg:w-[clamp(0px,20vw,310px)] aspect-video relative block rounded-3xl overflow-hidden">
                  
                      <Image
                        src={`/images/Shape/shape.png`}
                        alt={"services Image"}
                        fill
                        sizes="22vw"
                        className="object-center"
                      />
                   
                  </span>
                  <p className="mt-[10px] text-[#FFFFFF] text-[clamp(14px,1.75vw,32px)] text-center font-normal leading-[150%]">
                    {service?.attributes?.Title_English}
                  </p>
                </li>
              </a>
            ))}
        </ul>

         

        }
      </div>
    </>
  );
}
