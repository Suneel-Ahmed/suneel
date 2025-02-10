import Image from 'next/image';

export default function RealTimeReports() {
	return (
		<section
			id='real-time-reports'
			className='w-full px-[8vw] lg:px-[clamp(40px,4vw,75px)] py-[4vw] relative flex flex-col lg:flex-row place-content-center place-items-center gap-[clamp(40px,7vw,124px)]'
		>
			<div className='w-[80vw] lg:w-[35vw] aspect-video relative'>
				<Image
					src='/images/misc/laptop.png'
					alt='/images/misc/laptop.png'
					fill
					sizes='100vw'
					priority
					className='object-contain object-center'
				/>
			</div>
			<div className='flex flex-col gap-[30px]'>
				<p className='relative text-transparent text-[clamp(40px,3.75vw,70px)] text-left font-inter font-extrabold leading-[125%] uppercase bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#9B36FF]'>
					get real-time reports
				</p>
				<p className='relative w-full lg:max-w-[clamp(0px,46vw,934px)] text-[#FFFFFF] text-[clamp(14px,1.45vw,27px)] text-left font-poppins font-normal leading-[150%]'>
					Enhance decision-makin with real-time reports for you and your team.
					Each report provides a campaign performance summary that includes
					total spend, cost per impression, total likes, and countless other
					metrics. Harness these reports to make adjustements as needed, or
					archive them for your records.
				</p>
			</div>
		</section>
	);
}
