import Image from 'next/image';

export default function IndustryLeader({ src, unoptimized = false }) {
	return (
		<div className='w-full h-full relative border-[2px] border-[#DBE600] rounded-3xl bg-[#E3E3E30A] overflow-hidden'>
			<div className='w-[85%] h-full mx-auto relative overflow-hidden'>
				<Image
					src={src}
					alt={src}
					fill
					sizes='22vw'
					unoptimized={unoptimized}
					className='object-contain object-center'
					priority
				/>
			</div>
		</div>
	);
}
