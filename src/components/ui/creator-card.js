import Image from 'next/image';

import { InstagramIcon3, TikTokIcon } from '@/components/ui/socials';

export default function CreatorCard({
	name,
	title,
	image,
	socials,
	unoptimized,
}) {
	return (
		<div className='w-full h-full p-[3vw] lg:p-[1.5vw] relative flex place-content-between place-items-end rounded-[13px] lg:rounded-[26px] overflow-hidden'>
			<Image
				src={image}
				alt={image}
				fill
				sizes='30vw'
				unoptimized={unoptimized}
				className='absolute inset-0 object-cover object-top'
				priority
			/>
			<div
				className='w-full h-full absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0)_64.84%,rgba(0,0,0,0.608)_86.04%,rgba(0,0,0,0.8)_100.53%)]
'
			/>
			<div className='w-full flex place-content-between place-items-center'>
				<div className='relative'>
					<span className='mb-[7px] flex place-content-start place-items-center gap-[7px]'>
						<p className='text-[#FFFFFF] text-[clamp(14px,1.45vw,27px)] text-left font-inter font-semibold leading-[125%]'>
							{name}
						</p>
						<svg
							viewBox='0 0 19 19'
							fill='none'
							className='w-[10px] lg:w-[19px]'
						>
							<path
								d='M6.80768 17.8125L5.30352 15.2792L2.45352 14.6458L2.7306 11.7167L0.791016 9.5L2.7306 7.28333L2.45352 4.35417L5.30352 3.72083L6.80768 1.1875L9.49935 2.33542L12.191 1.1875L13.6952 3.72083L16.5452 4.35417L16.2681 7.28333L18.2077 9.5L16.2681 11.7167L16.5452 14.6458L13.6952 15.2792L12.191 17.8125L9.49935 16.6646L6.80768 17.8125ZM8.6681 12.3104L13.141 7.8375L12.0327 6.68958L8.6681 10.0542L6.96602 8.39167L5.85768 9.5L8.6681 12.3104Z'
								fill='#1C9DEB'
							/>
						</svg>
					</span>
					<p className='text-[#FFFFFF] text-[clamp(10px,1.1vw,20px)] text-left font-poppins font-normal leading-[125%]'>
						{title}
					</p>
				</div>
				<div className='flex'>
					{socials.map(({ title, link }, idx) => (
						<a key={idx} href={link} className='relative'>
							{title === 'Instagram' ? (
								<InstagramIcon3 className='w-[clamp(30px,4.2vw,80px)]' />
							) : title === 'TikTok' ? (
								<TikTokIcon className='w-[clamp(30px,4.2vw,80px)]' />
							) : (
								<></>
							)}
						</a>
					))}
				</div>
				<div className='absolute top-[1vw] right-[1vw] flex gap-[10px]'>
					{socials.map(({ following }, idx) => (
						<p
							key={idx}
							className='px-[1.5vw] py-[0.5vw] text-[#FFFFFF] text-[clamp(12px,1.2vw,23px)] text-left font-poppins font-medium leading-[125%] rounded-full bg-[#FFFFFF]/[0.16] backdrop-blur-[10px] drop-shadow-[0px_4px_10px_rgba(0,0,0,0.12)]'
						>
							{following}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
