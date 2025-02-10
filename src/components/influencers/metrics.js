import metricsData from '@/constants/metrics-data';
import {
	EvaluateSuccess,
	MeasurePerformance,
	TrackSpending,
} from '@/components/ui/icons';

export default function Metrics() {
	return (
		<section
			id='metrics'
			className='w-full min-h-screen px-[8vw] lg:px-[clamp(40px,4vw,75px)] py-[4vw] relative flex flex-col place-content-center place-items-center gap-[30px]'
		>
			<div className='w-full h-full absolute inset-0'>
				<div className='w-full h-full relative'>
					<div className='w-[90vw] lg:w-[46vw] aspect-square absolute top-1/2 left-0 -translate-x-[25%] -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(155,54,255,0.35)_0%,rgba(155,54,255,0)_100%)] blur-[300px]' />
					<div className='w-[90vw] lg:w-[46vw] aspect-square absolute top-3/4 right-0 translate-x-[25%] -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(155,54,255,0.35)_0%,rgba(155,54,255,0)_100%)] blur-[300px]' />
				</div>
			</div>
			<p className='relative text-transparent text-[clamp(40px,3.75vw,70px)] text-center font-inter font-extrabold leading-[125%] uppercase bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#9B36FF]'>
				{window.innerWidth >= 1024 ? (
					<>
						Evaluate performance metrics,
						<br />
						and elevate future campaigns
					</>
				) : (
					<>Evaluate performance metrics, and elevate future campaigns</>
				)}
			</p>
			<p className='relative w-full lg:max-w-[clamp(0px,60vw,1230px)] text-[#FFFFFF] text-[clamp(14px,1.45vw,27px)] text-center font-poppins font-normal leading-[150%]'>
				Never lose sight of how well your campaings perform. From historic
				metrics to live analytics, track progress towards your brand goals and
				set new benchmarks with comprensive insights.
			</p>
			<div className='mt-[30px] relative flex flex-col lg:flex-row place-content-between gap-[clamp(0px,7vw,124px)]'>
				{metricsData.data.map((metric, idx) => (
					<div
						key={metric + idx}
						className='w-[45vw] lg:w-[17.5vw] h-[49vw] lg:h-[19vw] flex flex-col place-content-center place-items-center gap-[40px] border-[1px] lg:border-[3px] border-[#943EFF] rounded-[14px] lg:rounded-[23px] bg-[#E4E4E41C]'
					>
						{metric === 'Measure Performance' ? (
							<MeasurePerformance className='w-[clamp(75px,8vw,150px)]' />
						) : metric === 'Track Spending' ? (
							<TrackSpending className='w-[clamp(75px,8vw,150px)]' />
						) : metric === 'Evaluate Success' ? (
							<EvaluateSuccess className='w-[clamp(75px,8vw,150px)]' />
						) : null}
						<p className='w-2/3 text-[#FFFFFF] text-[clamp(18px,2vw,32px)] text-center font-poppins font-normal leading-[125%]'>
							{metric}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
