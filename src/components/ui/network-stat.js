import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function NetworkStat({ text, value, symbol }) {



	const containerRef = useRef(null);
	const [animatedValue, setAnimatedValue] = useState(0);

	useGSAP(
		() => {
			const obj = { val: 0 };

			gsap
				.timeline({
					scrollTrigger: {
						trigger: containerRef.current,
						start: 'top 70%',
						end: 'top 30%',
					},
				})
				.to(obj, {
					val: value,
					ease: 'power2.in',
					duration: 1,
					onUpdate: () => {
						setAnimatedValue(`${Math.floor(obj.val)}${symbol}`);
					},
				});
		},
		{ scope: containerRef, dependencies: [value, symbol] }
	);

	return (
		<span
			ref={containerRef}
			className='w-fit min-w-[clamp(0px,17.2vw,330px)] flex flex-col border-t-[1px] border-[#efdcf9]'
		>
			<p className='py-[clamp(0px,1.5vw,30px)] text-[#efdcf9] text-[clamp(0px,5vw,90px)] text-left font-leagueSpartan font-semibold leading-[100%] '>
				{animatedValue}
			</p>
			<p className={`text-[#efdcf9]  text-[clamp(10px,1.45vw,27px)]  text-left font-hvdTrialGraphit font-normal leading-[125%]`}>
				{text}
			</p>
		</span>
	);
}
