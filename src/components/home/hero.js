import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useSelector } from 'react-redux';


export default function Hero({heroData}) {
	const containerRef = useRef(null);
	const state = useSelector(state => state.lang)
	const textRef = useRef(null);
	const symbolsRef = useRef(null);


	useGSAP(
		() => {
			gsap
				.timeline()
				.fromTo(
					textRef.current,
					{
						autoAlpha: 0,
					},
					{
						autoAlpha: 1,
					},
					'<'
				)
				.fromTo(
					symbolsRef.current,
					{
						autoAlpha: 0,
					},
					{
						autoAlpha: 1,
					},
					'<'
				);

			gsap
				.timeline({
					scrollTrigger: {
						trigger: containerRef.current,
						start: 'top top',
						end: `+=${window.innerHeight * 0.5}`,
						scrub: 1,
						pin: true,
						pinSpacing: false,
					},
				})
				.to(containerRef.current, {
					autoAlpha: 0,
					ease: 'power4.out',
				});
		},
		{ scope: containerRef }
	);
 


	return (
		<section ref={containerRef} id='hero' className='w-full h-screen relative'>
			<div className='w-full h-full absolute inset-0'>
				<video autoPlay muted loop className='w-full h-full object-cover'>
					<source src={`/videos/home/home3.mp4`} type='video/mp4' />
					Video not supported
				</video>
			</div>
			<div className='w-full h-full bg-black/60 absolute ' >

			</div>
			<div
				ref={textRef}
				className='w-full h-full relative flex flex-col place-content-center place-items-center gap-[2vh]'
			>
				<p className='text-[#efdcf9]  text-[clamp(30px,6vw,70px)] text-center font-inter font-extrabold leading-[10%]'>
			       FullStack
				</p>
				<p className='text-[#efdcf9]  text-[clamp(40px,6vw,120px)] text-center font-inter font-extrabold leading-[120%]'>
			       Web Development
				</p>
				<p className='text-[#FFFFFF]  max-md:w-[80%] w-[50%] text-[clamp(12px,1.2vw,23px)] text-center font-hvdTrialGraphit font-normal leading-[150%]'>

				Here, you'll discover custom tech solutions. I focus on software development and new services. These will elevate your project to new heights.
				
				</p>
			</div>
			<div
				ref={symbolsRef}
				className='w-full p-[2vw] z-20 absolute bottom-0 flex place-content-center place-items-end'
			>
				
				<span className='flex flex-col place-content-center place-items-center gap-[2vw] lg:gap-[0.5vw]'>
					<p className='text-[#FFFFFF] text-[clamp(10px,0.8vw,15px)] text-center font-light leading-[125%]'>
						SCROLL DOWN
					</p>
					<svg
						viewBox='0 0 28 60'
						fill='none'
						className='h-[clamp(32px,2.5vw,48px)]'
					>
						<g>
							<rect
								x='4.5'
								y='0.5'
								width='19'
								height='53'
								rx='9.5'
								stroke='#efdcf9'
							/>
							<path
								d='M28 45L27.9262 46.033C27.4043 53.3393 21.3248 59 14 59V59C6.67516 59 0.595662 53.3393 0.0737887 46.033L0 45'
								stroke='#efdcf9'
							>
								<animate
									attributeName='stroke'
									values='#efdcf9;white;#dbe60093'
									begin='0s'
									dur='2s'
									repeatCount='indefinite'
									fill='freeze'
									calcMode='linear'
									keyTimes='0;0.5;1'
								/>
								<animate
									attributeName='opacity'
									values='1;0.01;1'
									begin='0s'
									dur='2s'
									repeatCount='indefinite'
									fill='freeze'
									calcMode='linear'
									keyTimes='0;0.5;1'
								/>
							</path>
							<rect x='9' y='28' width='10' height='19' rx='5' fill='#efdcf9'>
								<animate
									attributeName='y'
									values='28;6;28'
									begin='0s'
									dur='2s'
									repeatCount='indefinite'
									fill='freeze'
									calcMode='linear'
									keyTimes='0;0.5;1'
								/>
							</rect>
						</g>
					</svg>
				</span>
             
			</div>
			
			<div className='absolute h-[300px] w-full top-0 bg-gradient-to-t from-[#00011c]/5 to-[#000000] z-10'/>
        <div className='absolute h-[100px] w-full top-0 bg-gradient-to-t from-[#00011c]/10 to-[#000000] z-10'/>

        <div className='absolute h-[300px] w-full bottom-0 bg-gradient-to-b from-[#00011c]/5 to-[#000000] z-10'/>
        <div className='absolute h-[100px] w-full bottom-0 bg-gradient-to-b from-[#00011c]/20 to-[#000000] z-10'/>
		</section>
	);
}




  