import Image from 'next/image';

export default function CustomerReview({
	name,
	image,
	review,
	unoptimized = false,
}) {
	const ProfileImage = `${image}`
	return (
		<div className='w-full h-full py-[2vw] flex flex-col place-content-between place-items-center border-[2px] border-[#efdcf9] rounded-[20px] bg-[#efdcf9]/10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-xl overflow-hidden'>
			<div className='flex flex-col place-content-center place-items-center gap-[0.5vw]'>
				<span className='w-[clamp(72px,5vw,96px)] aspect-square relative rounded-[100px] overflow-hidden'>
					<Image
						src={ProfileImage}
						alt={"Profile"}
						fill
						sizes='5vw'
						unoptimized={unoptimized}
						className='object-center'
						priority
					/>
				</span>
				<p className='text-[#FFFFFF] text-[clamp(18px,1.25vw,24px)] text-center font-hvdTrialGraphit font-semibold leading-[125%]'>
					{name}
				</p>
			</div>
			<p className='w-[75%] text-[#FFFFFFCC] text-[clamp(12px,1vw,18px)] text-center font-hvdTrialGraphit font-normal leading-[150%]'>
				{review}
			</p>
			<a
				
				className='flex place-content-center place-items-center gap-[clamp(5px,0.25vw,20px)]'
			>
				
			</a>
		</div>
	);
}
