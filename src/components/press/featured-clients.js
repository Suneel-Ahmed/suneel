import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import IndustryLeader from '@/components/ui/industry-leader';

import { useSelector } from 'react-redux';



export default function FeaturedClients({ featuredClients }) {
	const containerRef = useRef(null);
	const listRef = useRef(null);
	const state = useSelector(state => state.lang)
	useGSAP(
		() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: containerRef.current,
						start: 'center center',
						end: `+=${
							window.innerHeight * (window.innerWidth >= 1024 ? 1 : 3)
						}`,
						scrub: 1,
						pin: true,
						pinSpacing: true,
					},
				})
				.to(listRef.current, {
					x: (listRef.current.offsetWidth - window.innerWidth) * -1,
					ease: 'none',
				});
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			id='featured-clients'
			className='w-full h-fit relative'
		>
			<p className='text-[#DCE600] text-[clamp(28px,4.3vw,82px)] text-center font-leagueSpartan font-semibold leading-[125%] uppercase '>
			 {state.value === "Eng" ? "We've Featured Our Clients in:" : "Hemos destacado a nuestros clientes en"}	
			</p>
			<ul ref={listRef} className='w-fit p-[4vw] flex gap-[4vw]'>
				{featuredClients?.map((src, idx) => (
					<li
						key={src + idx}
						className='w-[clamp(200px,16vw,310px)] aspect-video'
					>
						<IndustryLeader src={src} unoptimized />
					</li>
				))}
				{featuredClients?.map((src, idx) => (
					<li
						key={src + idx + 'v2'}
						className='w-[clamp(200px,16vw,310px)] aspect-video'
					>
						<IndustryLeader src={src} unoptimized />
					</li>
				))}
			</ul>
		
		</section>
	);
}
