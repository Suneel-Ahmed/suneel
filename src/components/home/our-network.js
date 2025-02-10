import { FacebookIcon2, XIcon2, InstagramIcon2 } from '@/components/ui/socials';
import NetworkStat from '@/components/ui/network-stat';

import socialData from '@/constants/social-data';
import { useSelector } from 'react-redux';

export default function OurNetwork({ networkStats }) {

	const state = useSelector(state => state.lang);



	return (
		<section
			id='our-network'
			className='w-full h-fit  px-[8vw] lg:px-[clamp(40px,4vw,75px)] py-[4vh] relative flex flex-col lg:flex-row gap-[5vh] lg:gap-0'
		>
			<div className='w-[35%] min-w-fit relative'>
				<p className='text-[#efdcf9] text-[clamp(28px,2.2vw,42px)] text-left font-hvdTrialGraphit font-normal leading-[125%] uppercase '>
				 {state.value === "Eng" ? "Our Network" : "Nuestra Red" }	
				</p>
				<ul className='w-[15%] min-w-fit mt-[0.5vw] flex place-content-start place-items-start gap-4'>
					{socialData
						.filter(
							(social) =>
								social.name === 'Facebook' ||
								social.name === 'X' ||
								social.name === 'Instagram'
						)
						.map((social) => (
							<li
								key={social.name}
								className={
									social.name === 'Facebook'
										? 'order-1'
										: social.name === 'X'
										? 'order-2'
										: 'order-3'
								}
							>
								<a href={social.path}>
									{social.name === 'Facebook' ? (
										<FacebookIcon2 className='w-[clamp(40px,3vw,64px)]' />
									) : social.name === 'X' ? (
										<XIcon2 className='w-[clamp(40px,3vw,64px)]' />
									) : social.name === 'Instagram' ? (
										<InstagramIcon2 className='w-[clamp(40px,3vw,64px)]' />
									) : null}
								</a>
							</li>
						))}
				</ul>
			</div>
			<ul className='w-full lg:w-[65%] relative flex place-content-between place-items-start'>
			{state.value === "Eng" ? <>
				{networkStats?.map((stat, idx) => (
					<li key={stat + idx}>
						<NetworkStat
							text={stat?.attributes?.text_English}
							value={stat?.attributes?.value}
							symbol={stat?.attributes?.symbol}
						/>
					</li>
				))}
			</>
		:
		<>
			{networkStats?.map((stat, idx) => (
					<li key={stat + idx}>
						<NetworkStat
							text={stat?.attributes?.text_Spanish}
							value={stat?.attributes?.value}
							symbol={stat?.attributes?.symbol}
						/>
					</li>
				))}
		</>	
		
		}
			
			</ul>
		</section>
	);
}
