import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CTAText() {
	const containerRef = useRef(null);
	const textRef = useRef(null);

	useGSAP(
		() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: containerRef.current,
						start: 'top center',
						end: 'bottom center',
						scrub: 1,
					},
				})
				.to(textRef.current.children, {
					opacity: 1,
					stagger: 0.25,
				});
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			id='cta-text'
			className='w-full h-fit lg:h-screen my-[20vh] lg:my-0 relative flex flex-col place-content-center place-items-center gap-[30px]'
		>
			<div className='w-full h-full absolute inset-0'>
				<div className='w-full h-full relative'>
					<div className='w-[90vw] lg:w-[56vw] aspect-square absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(155,54,255,0.35)_0%,rgba(155,54,255,0)_100%)] blur-[300px]' />
				</div>
			</div>
			<p className='relative text-transparent text-[clamp(20px,1.8vw,34px)] text-center font-inter font-extrabold leading-[125%] uppercase bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#9B36FF]'>
				User-generated content to use wherever you like
			</p>
			<p
				ref={textRef}
				className='relative w-[90vw] lg:max-w-[82vw] text-[#FFFFFF] text-[clamp(30px,3.75vw,71px)] text-center font-poppins font-normal leading-[150%]'
			>
				<span className='text-[#9B36FF]'>Tell your Brand</span>{' '}
				<span className='opacity-25'>
					story with content by Creator advocates. As a proven tactic,
				</span>{' '}
				<span className='opacity-25'>
					UGC can be used on any marketing channel to surge sales through the
					relatable,
				</span>{' '}
				<span className='opacity-25'>
					credible, and authentic promotion of your products or services.
				</span>
			</p>
		</section>
	);
}
