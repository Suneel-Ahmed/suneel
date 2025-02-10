import Image from 'next/image';

import affiliateProgramData from '@/constants/affiliate-program-data';

export default function AffiliateUnlocks() {
	return (
		<section
			id='affiliate-unlocks'
			className='w-full min-h-screen px-[8vw] lg:px-[clamp(40px,4vw,75px)] py-[4vw] relative'
		>
			<div className='w-full relative'>
				<div className='w-full h-screen absolute inset-0'>
					<div className='w-full h-full relative'>
						<div className='w-[90vw] lg:w-[46vw] aspect-square absolute top-1/3 left-0 -translate-x-1/4 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(155,54,255,0.35)_0%,rgba(155,54,255,0)_100%)] blur-[300px]' />
					</div>
				</div>
				<p className='relative text-transparent text-[clamp(50px,6.35vw,120px)] text-center font-leagueSpartan font-bold leading-[100%] uppercase bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#9B36FF]'>
					Become a partner and unlock
				</p>
			</div>
			{affiliateProgramData.data.map((service, idx) => (
				<div
					key={idx}
					className='w-full h-[65vh] lg:h-[75vh] relative flex flex-col lg:flex-row place-content-center lg:place-content-between place-items-center gap-x-[50px] gap-y-20'
				>
					<div
						className='flex flex-col palce gap-[25px]'
						style={{
							width:
								window.innerWidth >= 1024
									? idx % 2 === 0
										? '50%'
										: '40%'
									: '100%',
							order: window.innerWidth >= 1024 ? (idx % 2 === 0 ? 2 : 1) : 1,
						}}
					>
						<p className='relative text-transparent text-[clamp(45px,6vw,111px)] text-center lg:text-left font-leagueSpartan font-bold leading-[100%] uppercase bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#9B36FF]'>
							{service.name}
						</p>
						<p className='relative w-full lg:max-w-[85%] text-[#FFFFFF] text-[clamp(14px,1.4vw,26px)] text-center lg:text-left font-poppins font-normal leading-[150%]'>
							{service.text}
						</p>
					</div>
					<div
						className='h-1/3 lg:h-full mx-[4vw] relative'
						style={{
							width:
								window.innerWidth >= 1024
									? idx % 2 === 0
										? '33%'
										: '40%'
									: '60%',
							order: window.innerWidth >= 1024 ? (idx % 2 === 0 ? 1 : 2) : 2,
						}}
					>
						<div
							className={`w-[100vw] lg:w-[46vw] aspect-square absolute top-1/2 ${
								idx % 2 === 0
									? 'right-0 translate-x-1/4'
									: 'left-0 -translate-x-1/4'
							} -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(155,54,255,0.35)_0%,rgba(155,54,255,0)_100%)] blur-[150px] lg:blur-[300px]`}
							style={{}}
						/>

						<Image
							src={service.image}
							alt={service.image}
							fill
							sizes='40vw'
							className='object-contain object-center w-full h-full lg:max-h-[365px] 3xl:max-h-[529px] my-auto'
							priority
						/>
					</div>
				</div>
			))}
		</section>
	);
}
