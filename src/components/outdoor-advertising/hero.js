import Image from 'next/image';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import outdoorAdvertisingData from '@/constants/outdoor-advertising-data';
import Link from 'next/link';


export default function Hero() {
	const outdoorAdvertisingDatas = outdoorAdvertisingData.data;
	const containerRef = useRef(null);
	const backgroundImagesRef = useRef(null);
	const textsRef = useRef(null);
	const imagesRef = useRef(null);
	const lineRef = useRef(null);

	const [currentSlide, setCurrentSlide] = useState(0);

	const handleScroll = (direction) => {
		let newSlide = currentSlide + (direction === 'forward' ? 1 : -1);
		newSlide = Math.max(
			0,
			Math.min(newSlide, outdoorAdvertisingDatas.length - 1)
		);
		setCurrentSlide(newSlide);

		const scrollDistance =
			containerRef.current.offsetTop +
			newSlide * (window.innerHeight * (window.innerWidth >= 1024 ? 2 : 0.5));

		gsap.to(window, {
			duration: 0.5,
			scrollTo: scrollDistance,
		});
	};

	useGSAP(() => {
		const backgroundImages = Array.from(backgroundImagesRef.current.children);
		const texts = Array.from(textsRef.current.children);
	
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top top',
				end: `+=${window.innerHeight * outdoorAdvertisingDatas.length * (window.innerWidth >= 1024 ? 1.5 : 0.4)}`, // Reduced scroll length
				scrub: 0.8, // Faster scrub
				pin: true,
				pinSpacing: true,
			},
		});
	
		for (let i = 1; i < outdoorAdvertisingDatas.length; i++) {
			tl.to(
				backgroundImages[i - 1],
				{
					autoAlpha: 0,
					ease: 'power2.out', // Faster easing curve
					duration: 0.3, // Reduced duration
				},
				'+=0.3' // Shortened delay
			)
				.to(
					texts[i - 1],
					{
						autoAlpha: 0,
						ease: 'power2.out', // Faster easing
						duration: 0.3, // Reduced duration
					},
					'<'
				)
				.to(
					backgroundImages[i],
					{
						autoAlpha: 1,
						ease: 'power2.in', // Faster easing
						duration: 0.3, // Reduced duration
					},
					'<'
				)
				.to(
					texts[i],
					{
						autoAlpha: 1,
						ease: 'power2.in', // Faster easing
						duration: 0.3, // Reduced duration
					},
					'<'
				)
				.to(
					imagesRef.current,
					{
						x:
							((window.innerWidth >= 1024 ? -16.2 : -60) *
								(window.innerWidth / 100) -
								50) *
							(i + 1),
						ease: 'power2.inOut', // Quicker easing
						duration: 0.5, // Faster movement
					},
					'<'
				)
				.to(
					lineRef.current,
					{
						scaleX: (i + 1) / outdoorAdvertisingDatas.length,
						ease: 'power2.inOut', // Faster easing
						duration: 0.5, // Reduced duration
						onComplete: () => {
							const slide = Math.round(
								tl.progress() * outdoorAdvertisingDatas.length
							);
							setCurrentSlide(
								slide < outdoorAdvertisingDatas.length - 1
									? slide
									: slide - 1
							);
						},
					},
					'<'
				)
				.to(containerRef.current, {
					autoAlpha: 1,
					duration: 0.3, // Reduced fade duration
				});
		}
	
		tl.to(containerRef.current, {
			autoAlpha: 0,
			duration: 0.3, // Reduced fade out duration
		});
	}, { scope: containerRef });
	

	return (
		<section
			ref={containerRef}
			id='hero'
			className='w-full h-screen pl-[8vw] pr-[4vw] lg:pt-[12vw] relative flex flex-col lg:flex-row place-content-start lg:place-content-between place-items-start lg:place-items-center'
		>
			<div ref={backgroundImagesRef} className='w-full h-full absolute inset-0'>
				{outdoorAdvertisingDatas?.map((item, idx) => (
					<Image
						key={idx}
						src={item.image}
						alt={"case studies images"}
						fill
						sizes='100vw'
						className={`object-cover object-center ${
							idx === 0 ? '' : 'invisible'
						}`}
						priority
					/>
				))}
			</div>
			<div className='w-full h-full absolute inset-0 bg-[#00011C99]' />
			<div
				ref={textsRef}
				className='w-full lg:w-1/2 h-[55%] lg:min-h-[600px] relative'
			>
				 <>
				{outdoorAdvertisingDatas?.map((item, idx) => (
					<div
						key={idx}
						className={`absolute top-1/2 lg:top-0 -translate-y-1/2 lg:translate-y-0 flex flex-col place-items-center lg:place-items-start gap-[30px] ${
							idx === 0 ? '' : 'invisible'
						}`}
					>
						<p className='lg:max-w-[35vw] relative text-[#efdcf9] text-[clamp(45px,4.2vw,80px)] text-center lg:text-left font-inter font-extrabold leading-[100%] uppercase '>
							{item?.title}
						</p>
						<p className='lg:max-w-[23vw] relative text-[#FFFFFFCC] text-[clamp(14px,0.95vw,18px)] text-center lg:text-left font-inter font-normal leading-[125%]'>
						{item?.text}
						</p>
						<Link href = {item.link} target='_blank' className='px-8 py-2 border border-white rounded-3xl' >Check The Site</Link>

					</div>
				))}	
					</> 
				
			</div>
			<div className='w-full lg:w-1/2 lg:h-[55%] lg:min-h-[600px] relative flex flex-col place-content-between gap-[75px]'>
				<div className='w-fit relative overflow-hidden'>
					<div
						ref={imagesRef}
						className='w-fit h-fit flex gap-[50px] -translate-x-[calc(60vw+50px)] lg:-translate-x-[calc(16.2vw+50px)]'
					>
						{outdoorAdvertisingDatas.map((item, idx) => (
							<div
								key={idx}
								className='w-[60vw] lg:w-[16.2vw] h-[65vw] lg:h-[22.4vw] relative border-[3px] border-[#efdcf9] rounded-[1.6vh] lg:rounded-[1.2vw] overflow-hidden'
							>
								<Image
									key={idx}
									src={item.image}
									alt={"case studies images"}
									fill
									sizes='100vw'
									className='object-cover object-center'
									priority
								/>
							</div>
						))}
			</div>
				</div>
				<div className='w-full relative flex place-content-start place-items-center'>
					<button onClick={() => handleScroll('backward')}>
						<svg
							viewBox='0 0 103 105'
							fill='none'
							className='h-[clamp(50px,3.8vw,75px)]'
						>
							<g opacity='0.9' filter='url(#filter0_bdiii_358_4167)'>
								<rect
									x='11'
									y='8'
									width='73'
									height='75'
									rx='36.5'
									fill='#efdcf9'
									fillOpacity='0.04'
									shapeRendering='crispEdges'
								/>
								<rect
									x='11.5'
									y='8.5'
									width='72'
									height='74'
									rx='36'
									stroke='white'
									strokeOpacity='0.27'
									shapeRendering='crispEdges'
								/>
							</g>
							<path d='M50 35L39 46L50 57' stroke='white' strokeWidth='2' />
							<defs>
								<filter
									id='filter0_bdiii_358_4167'
									x='-69'
									y='-72'
									width='233'
									height='235'
									filterUnits='userSpaceOnUse'
									colorInterpolationFilters='sRGB'
								>
									<feFlood floodOpacity='0' result='BackgroundImageFix' />
									<feGaussianBlur in='BackgroundImageFix' stdDeviation='40' />
									<feComposite
										in2='SourceAlpha'
										operator='in'
										result='effect1_backgroundBlur_358_4167'
									/>
									<feColorMatrix
										in='SourceAlpha'
										type='matrix'
										values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
										result='hardAlpha'
									/>
									<feOffset dx='4' dy='7' />
									<feGaussianBlur stdDeviation='7.5' />
									<feComposite in2='hardAlpha' operator='out' />
									<feColorMatrix
										type='matrix'
										values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'
									/>
									<feBlend
										mode='normal'
										in2='effect1_backgroundBlur_358_4167'
										result='effect2_dropShadow_358_4167'
									/>
									<feBlend
										mode='normal'
										in='SourceGraphic'
										in2='effect2_dropShadow_358_4167'
										result='shape'
									/>
									<feColorMatrix
										in='SourceAlpha'
										type='matrix'
										values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
										result='hardAlpha'
									/>
									<feOffset dx='5' dy='-5' />
									<feGaussianBlur stdDeviation='6' />
									<feComposite
										in2='hardAlpha'
										operator='arithmetic'
										k2='-1'
										k3='1'
									/>
									<feColorMatrix
										type='matrix'
										values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0'
									/>
									<feBlend
										mode='normal'
										in2='shape'
										result='effect3_innerShadow_358_4167'
									/>
									<feColorMatrix
										in='SourceAlpha'
										type='matrix'
										values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
										result='hardAlpha'
									/>
									<feOffset dx='-5' dy='5' />
									<feGaussianBlur stdDeviation='6' />
									<feComposite
										in2='hardAlpha'
										operator='arithmetic'
										k2='-1'
										k3='1'
									/>
									<feColorMatrix
										type='matrix'
										values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0'
									/>
									<feBlend
										mode='normal'
										in2='effect3_innerShadow_358_4167'
										result='effect4_innerShadow_358_4167'
									/>
									<feColorMatrix
										in='SourceAlpha'
										type='matrix'
										values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
										result='hardAlpha'
									/>
									<feOffset dx='-1' />
									<feGaussianBlur stdDeviation='1' />
									<feComposite
										in2='hardAlpha'
										operator='arithmetic'
										k2='-1'
										k3='1'
									/>
									<feColorMatrix
										type='matrix'
										values='0 0 0 0 0.788235 0 0 0 0 0.788235 0 0 0 0 0.788235 0 0 0 0.1 0'
									/>
									<feBlend
										mode='normal'
										in2='effect4_innerShadow_358_4167'
										result='effect5_innerShadow_358_4167'
									/>
								</filter>
							</defs>
						</svg>
					</button>
					<button onClick={() => handleScroll('forward')}>
						<svg
							viewBox='0 0 103 105'
							fill='none'
							className='h-[clamp(50px,3.8vw,75px)]'
						>
							<g opacity='0.9' filter='url(#filter0_bdiii_358_4170)'>
								<rect
									x='11'
									y='8'
									width='73'
									height='75'
									rx='36.5'
									fill='#efdcf9'
									fillOpacity='0.04'
									shapeRendering='crispEdges'
								/>
								<rect
									x='11.5'
									y='8.5'
									width='72'
									height='74'
									rx='36'
									stroke='white'
									strokeOpacity='0.27'
									shapeRendering='crispEdges'
								/>
							</g>
							<path d='M42 57L53 46L42 35' stroke='white' strokeWidth='2' />
							<defs>
								<filter
									id='filter0_bdiii_358_4170'
									x='-69'
									y='-72'
									width='233'
									height='235'
									filterUnits='userSpaceOnUse'
									colorInterpolationFilters='sRGB'
								>
									<feFlood floodOpacity='0' result='BackgroundImageFix' />
									<feGaussianBlur in='BackgroundImageFix' stdDeviation='40' />
									<feComposite
										in2='SourceAlpha'
										operator='in'
										result='effect1_backgroundBlur_358_4170'
									/>
									<feColorMatrix
										in='SourceAlpha'
										type='matrix'
										values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
										result='hardAlpha'
									/>
									<feOffset dx='4' dy='7' />
									<feGaussianBlur stdDeviation='7.5' />
									<feComposite in2='hardAlpha' operator='out' />
									<feColorMatrix
										type='matrix'
										values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'
									/>
									<feBlend
										mode='normal'
										in2='effect1_backgroundBlur_358_4170'
										result='effect2_dropShadow_358_4170'
									/>
									<feBlend
										mode='normal'
										in='SourceGraphic'
										in2='effect2_dropShadow_358_4170'
										result='shape'
									/>
									<feColorMatrix
										in='SourceAlpha'
										type='matrix'
										values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
										result='hardAlpha'
									/>
									<feOffset dx='5' dy='-5' />
									<feGaussianBlur stdDeviation='6' />
									<feComposite
										in2='hardAlpha'
										operator='arithmetic'
										k2='-1'
										k3='1'
									/>
									<feColorMatrix
										type='matrix'
										values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0'
									/>
									<feBlend
										mode='normal'
										in2='shape'
										result='effect3_innerShadow_358_4170'
									/>
									<feColorMatrix
										in='SourceAlpha'
										type='matrix'
										values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
										result='hardAlpha'
									/>
									<feOffset dx='-5' dy='5' />
									<feGaussianBlur stdDeviation='6' />
									<feComposite
										in2='hardAlpha'
										operator='arithmetic'
										k2='-1'
										k3='1'
									/>
									<feColorMatrix
										type='matrix'
										values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0'
									/>
									<feBlend
										mode='normal'
										in2='effect3_innerShadow_358_4170'
										result='effect4_innerShadow_358_4170'
									/>
									<feColorMatrix
										in='SourceAlpha'
										type='matrix'
										values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
										result='hardAlpha'
									/>
									<feOffset dx='-1' />
									<feGaussianBlur stdDeviation='1' />
									<feComposite
										in2='hardAlpha'
										operator='arithmetic'
										k2='-1'
										k3='1'
									/>
									<feColorMatrix
										type='matrix'
										values='0 0 0 0 0.788235 0 0 0 0 0.788235 0 0 0 0 0.788235 0 0 0 0.1 0'
									/>
									<feBlend
										mode='normal'
										in2='effect4_innerShadow_358_4170'
										result='effect5_innerShadow_358_4170'
									/>
								</filter>
							</defs>
						</svg>
					</button>
					<div className='h-[2px] ml-[50px] -translate-y-[6px] relative flex-grow bg-[#FFFFFF4D]'>
						<div
							ref={lineRef}
							className={`w-full h-full absolute inset-0 origin-left scale-x-[calc(1/5)] bg-[#efdcf9]`}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
