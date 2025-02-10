import Logo from '@/components/ui/logo';
import Button from '@/components/ui/button';

import affiliateProgramData from '@/constants/affiliate-program-data';

export default function Hero() {
	return (
		<section
			id='hero'
			className='w-full h-screen px-[8vw] lg:px-[clamp(40px,4vw,75px)] py-[4vw] relative flex flex-col place-content-center place-items-center gap-x-[25px] gap-y-12 my-auto'
		>
			<div className='w-full h-full absolute inset-0'>
				<div className='w-full h-full relative'>
					<div className='w-full lg:w-[46vw] aspect-square absolute top-0 left-0 lg:-translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(155,54,255,0.35)_0%,rgba(155,54,255,0)_100%)] blur-[300px]' />
					<div className='w-full lg:w-[46vw] aspect-square absolute top-full lg:top-1/3 right-0 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(155,54,255,0.35)_0%,rgba(155,54,255,0)_100%)] blur-[300px]' />
					<Logo
						alt
						className='w-[135vw] lg:w-[110vw] absolute top-[40%] lg:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2'
					/>
				</div>
			</div>
			<p className='relative text-transparent text-[clamp(75px,8.5vw,163px)] text-center font-leagueSpartan font-bold leading-[100%] uppercase bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#9B36FF]'>
				Affiliate Program
			</p>
			<p className='relative w-full lg:max-w-[clamp(0px,65vw,1232px)] text-[#FFFFFF] text-[clamp(14px,1.55vw,29px)] text-center font-poppins font-normal leading-[150%]'>
				Unlock the potential of your network by joining our Affiliate Program.
				Take advantage of our competitive commission rates, the flexibility to
				work from anywhere, and dedicated support from our experienced team.
				Engage with us in a partnership that fuels your passion and boosts your
				earning potential
			</p>
			<Button
				link={affiliateProgramData.ctaLink}
				className='w-fit h-[clamp(36px,4vw,64px)]'
			>
				Book a call
			</Button>
		</section>
	);
}
