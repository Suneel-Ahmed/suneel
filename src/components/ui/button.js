export default function Button({
	link,
	onClick,
	padding,
	borderColor,
	className,
	children,
}) {
	return link ? (
		<a
			href={link}
			className={`${className} px-[clamp(25px,2.25vw,50px)] flex place-content-center hover:bg-[#efdcf9]/20 place-items-center text-[#FFFFFF] text-[clamp(16px,1.45vw,28px)] text-center font-leagueSpartan font-semibold leading-[100%] border-[1px] border-[#FFFFFF40] hover:border-[#efdcf9] rounded-full drop-shadow-[4px_7px_15px_#0000001A] shadow-[inset_0_0_50px_0px_#FFFFFF1A] hover:shadow-[inset_0_0_75px_0px_#efdcf9] backdrop-blur-3xl transition-all`}
			style={{ padding: padding, borderColor: borderColor }}
		>
			{children}
		</a>
	) : (
		<button
			onClick={onClick}
			className={`${className} px-[clamp(25px,2.25vw,50px)] flex place-content-center place-items-center text-[#FFFFFF] text-[clamp(16px,1.45vw,28px)] text-center font-leagueSpartan font-semibold leading-[100%] border-[1px] border-[#FFFFFF40] hover:border-[#efdcf9] hover:bg-[#efdcf9]/20 rounded-full drop-shadow-[4px_7px_15px_#0000001A] shadow-[inset_0_0_50px_0px_#FFFFFF1A] hover:shadow-[inset_0_0_75px_0px_#efdcf9]  backdrop-blur-xl bg-white/15 transition-all`}
			style={{ padding: padding, borderColor: borderColor }}
		>
			{children}
		</button>
	);
}
