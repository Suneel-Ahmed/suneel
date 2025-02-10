import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ScreenBand() {
	const containerRef = useRef(null);
	const bandRef = useRef(null);

	useGSAP(
		() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: containerRef.current,
						start: 'top bottom',
						end: 'bottom top',
						scrub: 1,
					},
				})
				.to(bandRef.current.children, {
					x: window.innerWidth >= 1024 ? '25vw' : '100vw',
				});
		},
		{ scope: containerRef }
	);

	return (
		<section ref={containerRef} id='screen-band' className='w-full'>
			<div className='w-full h-[250px] relative overflow-hidden'>
				<div className='w-[110vw] h-[clamp(57px,15vw,134px)] absolute inset-x-1/2 inset-y-0 -translate-x-1/2 translate-y-1/2 bg-[#E33AFF]' />
				<div
					ref={bandRef}
					className='w-full h-[clamp(57px,15vw,134px)] relative translate-y-1/2 flex place-content-center place-items-center gap-[3.4vw] bg-[#9B36FF] -rotate-2'
				>
					{[...Array(7)].map((_, idx) => (
						<span
							key={idx}
							className='flex place-content-start place-items-center gap-[30px]'
						>
							<svg
								viewBox='0 0 86 74'
								fill='none'
								className='h-[clamp(35px,3.7vw,70px)]'
							>
								<rect
									x='3.03074'
									y='5.25217'
									width='34.0416'
									height='42.7913'
									transform='rotate(-1.92026 3.03074 5.25217)'
									stroke='white'
									strokeWidth='4'
								/>
								<rect
									x='48.2925'
									y='26.9553'
									width='34.0416'
									height='42.7913'
									transform='rotate(-1.92026 48.2925 26.9553)'
									stroke='white'
									strokeWidth='4'
								/>
								<rect
									x='47.5151'
									y='3.75998'
									width='34.0416'
									height='12.7383'
									transform='rotate(-1.92026 47.5151 3.75998)'
									stroke='white'
									strokeWidth='4'
								/>
								<rect
									x='4.81394'
									y='58.4865'
									width='34.0416'
									height='12.7383'
									transform='rotate(-1.92026 4.81394 58.4865)'
									stroke='white'
									strokeWidth='4'
								/>
							</svg>
							<p className='text-[#FFFFFF] text-[clamp(25px,3.5vw,65px)] text-left text-nowrap font-inter font-semibold leading-[150%]'>
								Make Data-Driven Decisions
							</p>
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
