import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Button from '@/components/ui/button';

import influencerData from '@/constants/influencer-data';

export default function Hero() {
	const containerRef = useRef(null);
	const imagesRef = useRef(null);
	const shadowsRef = useRef(null);

	let tl;

	const animateImageSelection = (idx) => {
		const images = Array.from(imagesRef.current.children);

		if (!idx) {
			gsap
				.timeline()
				.to(images, {
					autoAlpha: 1,
					duration: 0.25,
					stagger: 0,
				})
				.to(
					shadowsRef.current.children[0],
					{
						opacity: 1,
						duration: 0.25,
					},
					'<'
				)
				.to(
					shadowsRef.current.children[1],
					{
						opacity: 1,
						duration: 0.25,
					},
					'<'
				);

			tl.play();
		} else {
			gsap
				.timeline()
				.to(
					images.filter((_, i) => i !== idx),
					{
						autoAlpha: 0.2,
						duration: 0.25,
					}
				)
				.to(
					shadowsRef.current.children[0],
					{
						opacity: 0,
						duration: 0.25,
					},
					'<'
				)
				.to(
					shadowsRef.current.children[1],
					{
						opacity: 0,
						duration: 0.25,
					},
					'<'
				);

			tl.pause();
		}
	};

	useGSAP(
		() => {
			const images = Array.from(imagesRef.current.children);

			tl = gsap.timeline({
				repeat: -1,
				repeatDelay: 0.5,
				yoyo: true,
			});

			images
				.slice(0, 6)
				.concat(images.slice(12, 18))
				.map((image, idx) => {
					tl.to(
						image,
						{
							y: '-75vh',
							ease: 'power1.inOut',
							duration: 10,
						},
						'<'
					);
				});

			images
				.slice(6, 12)
				.concat(images.slice(18, 24))
				.map((image, idx) => {
					tl.to(
						image,
						{
							y: '-50vh',
							ease: 'power1.inOut',
							duration: 10,
						},
						'<'
					);
				});
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			id='hero'
			className='w-full h-screen px-[8vw] lg:px-[clamp(40px,4vw,75px)] py-[4vw] relative flex flex-col place-content-center place-items-start gap-[clamp(20px,2vw,40px)] overflow-hidden'
		>
			<div
				ref={imagesRef}
				className='w-full lg:w-[75vw] min-h-full pt-[10px] pr-[20px] absolute top-0 right-0 grid grid-flow-col grid-rows-[repeat(18,calc(25vh-22px))] lg:grid-rows-[repeat(9,calc(25vh-22px))] grid-cols-2 lg:grid-cols-4 gap-[22px]'
			>
				{[...Array(24)].map((_, idx) => (
					<span
						key={idx}
						onMouseEnter={() => {
							if (idx > 12) animateImageSelection(idx);
						}}
						onMouseLeave={() => {
							if (idx > 12) animateImageSelection();
						}}
						className='w-[calc((100vw/2)-22px)] lg:w-[calc((75vw/4)-22px)] relative rounded-[13px] lg:rounded-[27px] overflow-hidden'
						style={{
							height: `calc(${idx % 2 == 0 ? 25 : 50}vh-22px)`,
							gridRow: `span ${idx % 2 == 0 ? 1 : 2}`,
							translate: `0 ${Math.floor(idx / 6) % 2 == 1 ? '-100vh' : 0}`,
						}}
					>
						<Image
							// src={
							// 	idx % 2 == 0
							// 		? influencerData.images[0]
							// 		: Math.floor((idx - 1) / 6) % 2 == 0
							// 		? influencerData.images[1]
							// 		: influencerData.images[2]
							// }
							// alt={
							// 	idx % 2 == 0
							// 		? influencerData.images[0]
							// 		: Math.floor((idx - 1) / 6) % 2 == 0
							// 		? influencerData.images[1]
							// 		: influencerData.images[2]
							// }
							src={influencerData.images[idx]}
							alt={influencerData.images[idx]}
							fill
							sizes='20vw'
							className='object-cover object-center'
							priority
						/>
					</span>
				))}
			</div>
			<div className='w-full h-full absolute inset-0 pointer-events-none'>
				<div ref={shadowsRef} className='w-full h-full relative'>
					<div className='w-full h-full absolute inset-0 bg-[linear-gradient(266.53deg,rgba(6,3,36,0)_8.44%,rgba(2,3,30,0.87)_43.74%,#02031E_63.03%)]' />
					<div className='w-full h-full absolute inset-0 bg-[linear-gradient(177.61deg,rgba(1,2,29,0)_12.91%,#00011C_100%)]' />
					<div className='w-[90vw] lg:w-[46vw] aspect-square absolute top-1/2 left-0 -translate-x-[25%] -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(155,54,255,0.35)_0%,rgba(155,54,255,0)_100%)] blur-[300px]' />
				</div>
			</div>
			<p className='relative text-transparent text-[clamp(40px,3.75vw,60px)] text-left font-inter font-extrabold leading-[125%] uppercase bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#E33AFF]'>
				{window.innerWidth >= 1024 ? (
					<>
						Elevate Your Presence
						<br />
						with Our Influencer
						<br />
						Network
					</>
				) : (
					<>Elevate Your Presence with Our Influencer Network</>
				)}
			</p>
			<p className='relative w-full lg:max-w-[clamp(0px,46vw,934px)] text-[#FFFFFF] text-[clamp(14px,1.45vw,24px)] text-left font-poppins font-normal leading-[150%]'>
				Unlock the power of our vast network, featuring over 5,000 influencers
				from more than 100 countries, to elevate your brand. By amplifying your
				presence, engaging with diverse global audiences, and driving
				significant, measurable results, we help you make a lasting impact.
			</p>
			<Button
				link={influencerData.ctaLink}
				className='w-fit h-[clamp(36px,4vw,64px)]'
			>
				Book a Call
			</Button>
		</section>
	);
}
