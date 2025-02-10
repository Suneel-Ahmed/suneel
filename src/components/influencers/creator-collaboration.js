import { useState } from 'react';

import CreatorCard from '@/components/ui/creator-card';

export default function CreatorCollaboration({ creatorData }) {
	const [selectedKey, setSelectedKey] = useState(0);
	const [paginationValue, setPaginationValue] = useState(0);

	return (
		<section
			id='creator-collaboration'
			className='w-full h-fit lg:h-fit px-[8vw] lg:px-[clamp(40px,4vw,75px)] py-[14vh] lg:py-[4vw] relative flex flex-col place-content-start'
		>
			<div className='w-full h-full absolute inset-0'>
				<div className='w-full h-full relative'>
					<div className='w-[90vw] lg:w-[46vw] aspect-square absolute top-1/2 left-0 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(155,54,255,0.35)_0%,rgba(155,54,255,0)_100%)] blur-[300px]' />
				</div>
			</div>
			<p className='relative text-transparent text-[clamp(40px,3.75vw,70px)] text-center font-inter font-extrabold leading-[125%] uppercase bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#9B36FF]'>
				{window.innerWidth >= 1024 ? (
					<>
						Collaborate with
						<br />
						qualified creators
					</>
				) : (
					<>Collaborate with qualified creators</>
				)}
			</p>
			<div className='mt-[8vh] relative flex place-content-between place-items-start gap-[7vw]'>
				<div className='h-[62.5vw] lg:h-[27.5vw] flex flex-col gap-[25px]'>
					{creatorData.map((key, idx) => (
						<span
							key={key + idx}
							className='flex place-content-start place-items-center gap-[10px]'
						>
							<svg
								viewBox='0 0 28 16'
								fill='none'
								className={`w-[4vw] lg:w-[1.25vw] ${
									idx === selectedKey ? '' : 'invisible'
								}`}
							>
								<path
									d='M27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM0 9H27V7H0V9Z'
									fill='#9B36FF'
								/>
							</svg>
							<button
								onClick={() => {
									setSelectedKey(idx);
									setPaginationValue(0);
								}}
								className='text-[clamp(14px,1.1vw,20px)] text-left font-poppins leading-[125%] tracking-widest uppercase'
								style={{
									color: idx === selectedKey ? '#9B36FF' : '#FFFFFF',
									fontWeight: idx === selectedKey ? '500' : '300',
								}}
							>
								{key.name}
							</button>
						</span>
					))}
					<ul className='mt-auto pl-0 lg:pl-[1.25vw] flex gap-[1.5vw] lg:gap-[0.5vw]'>
						{creatorData.length > 0 &&
							[
								...Array(
									Math.ceil(
										creatorData[selectedKey].creators.length /
											(window.innerWidth >= 1024 ? 3 : 1)
									)
								),
							].map((_, idx) => (
								<li
									key={idx}
									onClick={() => {
										setPaginationValue(idx);
									}}
									className={`w-[clamp(13px,1.1vw,20px)] aspect-square border-[1px] border-[#9B36FF] rounded-full hover:cursor-pointer ${
										idx === paginationValue ? 'bg-[#9B36FF]' : 'bg-transparent'
									}`}
								/>
							))}
					</ul>
				</div>
				<div className='h-[62.5vw] lg:h-[31.25vw] relative flex-grow'>
					{creatorData.map((key, idx) => (
						<div
							key={key + idx}
							className={`w-full absolute top-0 right-0 flex gap-[40px] ${
								idx === selectedKey ? '' : 'invisible'
							}`}
						>
							{key.creators
								.slice(
									paginationValue * (window.innerWidth >= 1024 ? 3 : 1),
									paginationValue * (window.innerWidth >= 1024 ? 3 : 1) +
										(window.innerWidth >= 1024 ? 3 : 1)
								)
								.map((creator, idx) => (
									<div
										key={creator + idx}
										className='w-[50vw] lg:w-[25vw] h-[60vw] lg:h-[27.5vw]'
									>
										<CreatorCard
											name={creator.name}
											title={creator.title}
											image={creator.image}
											socials={creator.socials}
											unoptimized
										/>
									</div>
								))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
