import Image from 'next/image';

import {
	InstagramIcon,
	XIcon,
	WhatsAppIcon,
	FacebookIcon,
	LinkedInIcon,
} from '@/components/ui/socials';

import footerData from '@/constants/footer-data';
import socialData from '@/constants/social-data';
import { useSelector } from 'react-redux';

export default function Footer() {
	const state = useSelector(state => state.lang)

	return (
		<footer className='w-full min-h-[50vh] max-sm:pb-[40px] lg:h-[75vh] px-[8vw] lg:px-[clamp(40px,4vw,75px)] relative flex flex-wrap place-content-end place-items-center'>
			<div className='w-max h-fit max-h-full absolute left-1/2 bottom-0 lg:inset-1/2 -translate-x-1/2 lg:-translate-y-1/2 grid grid-rows-3 grid-cols-7 place-items-end gap-[2vw] opacity-20 mix-blend-plus-lighter'>
				{footerData.images.map((image, idx) => (
					<div
						key={image + idx}
						className='w-[40vh] aspect-video relative opacity-20'
						style={{
							transform: `translate(${
								idx / 7 >= 0
									? idx / 7 >= 1
										? idx / 7 >= 2
											? '-15vw'
											: '-10vw'
										: '-5vw'
									: 0
							}, 0)`,
						}}
					>
						<Image
							src={image}
							alt={image}
							fill
							sizes='40vh'
							className='object-cover object-top rounded-[0.5vw] overflow-hidden'
						/>
					</div>
				))}
			</div>
			<div className='w-full  lg:w-[42.5%] relative flex flex-col gap-[clamp(30px,5vw,100px)]'>
				{/* <Logo className='w-[192px] lg:w-[clamp(0px,20vw,384px)]' /> */}
				<Image src={'/images/logo/whitelogo.png'} className='w-[100px] lg:w-[clamp(0px,25vw,484px)]' width={500} height={500} alt='nebulanest' />
			
			</div>
			<div className='mt-[10vh] lg:mt-0 relative flex flex-grow place-content-between place-items-start'>
				{footerData.lists.map((list) => (
					<div
						key={list.name}
						className='flex flex-col gap-[clamp(25px,3.5vw,70px)]'
					>
						<p className='text-[#FFFFFF] text-[clamp(18px,2vw,38px)] text-left font-hvdTrialGraphit font-normal leading-[100%]'>
						 	{ state.value === "Eng" ?  list.name : list.spanishName }
						</p>
						<ul className='flex flex-col gap-[clamp(20px,1.75vw,35px)] text-[#FFFFFF] text-[clamp(12px,1.45vw,28px)] text-left font-hvdTrialGraphit font-thin leading-[100%]'>
							{list.links.map((link) => (
								<li key={link.name}>
									<a href={link.path}>{ state.value === "Eng" ?  link.name : link.spanishName }</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className='w-full h-[15%] max-sm:mt-[2vh] lg:h-1/3 relative flex place-content-center place-items-center'>
				<ul className='flex gap-[clamp(30px,3vw,60px)]'>
					{socialData.map((social) => (
						<li key={social.name}>
							<a href={social.path}>
								{social.name === 'Instagram' && (
									<InstagramIcon className='h-[clamp(20px,2vw,38px)]' />
								)}
								{social.name === 'X' && (
									<XIcon className='h-[clamp(20px,2vw,38px)]' />
								)}
								{social.name === 'WhatsApp' && (
									<WhatsAppIcon className='h-[clamp(20px,2vw,38px)]' />
								)}
								{social.name === 'Facebook' && (
									<FacebookIcon className='h-[clamp(20px,2vw,38px)]' />
								)}
								{social.name === 'LinkedIn' && (
									<LinkedInIcon className='h-[clamp(20px,2vw,38px)]' />
								)}
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}
