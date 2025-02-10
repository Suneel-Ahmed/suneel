import Image from 'next/image';

// import Button from '@/components/ui/button';

export default function CTACard({ number, title, text, image, link, alt }) {
	return (
		<div className='w-full h-full flex flex-col lg:flex-row place-content-center lg:place-content-between place-items-center'>
			<div className='w-full h-full absolute inset-0'>
				<div className='w-full h-full relative'>
					{alt ? (
						<div className='w-[90vw] lg:w-[62vw] aspect-square absolute top-1/2 left-0 lg:right-0 -translate-x-[75%] lg:translate-x-[75%] -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(219,230,0,0.2)_0%,rgba(181,24,131,0)_100%)] blur-[125px]' />
					) : (
						<div className='w-[90vw] lg:w-[62vw] aspect-square absolute top-1/2 left-0 -translate-x-[75%] -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(219,230,0,0.2)_0%,rgba(181,24,131,0)_100%)] blur-[125px]' />
					)}
				</div>
			</div>
			<div
				className='w-full lg:w-[clamp(0px,34.5vw,600px)] flex flex-col place-content-start place-items-start gap-[clamp(15px,1.5vw,30px)]'
				style={{ order: window.innerWidth >= 1024 ? (alt ? 2 : 1) : 2 }}
			>
				<p className='text-outlined text-[clamp(60px,8vw,140px)]  text-left font-hvdTrialGraphit font-bold leading-[100%]'>
					{number.toString().padStart(2, '0')}
				</p>
				<p className='text-[#DCE600] text-[clamp(40px,3.75vw,80px)] text-left font-leagueSpartan font-semibold leading-[100%] uppercase'>
					{title}
				</p>
				<p className='text-[#FFFFFF] text-[clamp(14px,1.2vw,20px)] text-left max-lg:leading-[115%] font-hvdTrialGraphit font-light leading-[125%] pr-8'>
					{text}
				</p>
	
			</div>
			<div
				className='w-[clamp(0px,100%,600px)] lg:w-[50vw] aspect-square relative flex place-content-center place-items-center'
				style={{ order: window.innerWidth >= 1024 ? (alt ? 1 : 2) : 1 }}
			>
				<Image
						src={'/images/Shape/shape.png'}
						alt={"shape"}
						fill
						// sizes='22vw'
						className='object-contain object-center my-auto h-full lg:max-h-[80vh]'
						priority
					/>
		
				<div className='cta-card-image  w-full h-full lg:h-[80vh] lg:flex lg:justify-center lg:items-center relative'>
					<Image
						src={image}
						alt={image}
						fill
						// sizes='22vw'
						className='object-contain object-center my-auto h-full lg:max-h-[70vh]'
						priority
					/>
				</div>
			</div>
		</div>
	);
}
