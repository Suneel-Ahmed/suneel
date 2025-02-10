import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';



import navbarData from '@/constants/navbar-data';

export default function FullPageMenu({ isOpen, closeMenu }) {
	const [scrollValue, setScrollValue] = useState(10);
	const menuButtonRef = useRef(null);
	const router = useRouter();
	const [animationStyle, setAnimationStyle] = useState({});
	const calculateClipPath = (open) => {
		const rect = menuButtonRef.current.getBoundingClientRect();
		const diagonal = Math.sqrt(
			window.innerWidth ** 2 + window.innerHeight ** 2
		);
		return `circle(${open ? `${diagonal}px` : '25px'} at ${
			rect.left + rect.width / 2
		}px ${rect.top + rect.height / 2}px)`;
	};

	useEffect(() => {
		if (menuButtonRef.current) {
			setAnimationStyle({
				clipPath: calculateClipPath(isOpen),
				transition: 'clip-path 0.6s ease-in-out',
			});
		}
		router.pathname === '/contact-us'
			? setScrollValue(40)
			: router.pathname === '/controls'
			? setScrollValue(60)
			: router.pathname === '/products-archive'
			? setScrollValue(80)
			: router.pathname === '/ecologi'
			? setScrollValue(100)
			: setScrollValue(10);
	}, [isOpen]);

	const toggleMenu = () => {
		// Start closing animation
		setAnimationStyle({
			...animationStyle,
			clipPath: calculateClipPath(false),
		});

		// Wait for the animation to complete before closing the menu
		setTimeout(() => {
			closeMenu();
		}, 600); // Duration of the animation
	};

	useEffect(() => {
		if (menuButtonRef.current) {
			const rect = menuButtonRef.current.getBoundingClientRect();
			const diagonal = Math.sqrt(
				window.innerWidth ** 2 + window.innerHeight ** 2
			);
			setAnimationStyle({
				clipPath: `circle(${isOpen ? `${diagonal}px` : '25px'} at ${
					rect.left + rect.width / 2
				}px ${rect.top + rect.height / 2}px)`,
				transition: 'clip-path 0.6s ease-in-out',
			});
		}
	}, [isOpen]);

	useEffect(() => {
		console.log('pathname: ', router.pathname);
	}, [router]);

	return (
		<div
			className={`flex flex-col fixed h-screen inset-0 bg-black z-50 text-white ${
				isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
			}`}
			style={animationStyle}
		>
			<nav className='navbar bg-transparent absolute top-0 left-0 right-0 px-[8vw] py-[4vh] flex place-items-center z-50 lg:z-40'>
				<div className='flex-1'>
				<a href="/" className="font-hvdTrialGraphit" >
           SUNEEL
          </a>
				</div>
				<button
					ref={menuButtonRef}
					className='relative z-[99999999999] hover:bg-transparent border-none'
					onClick={toggleMenu}
				>
					<svg
						id='cross'
						viewBox='0 0 101 101'
						className='w-10 hover:bg-transparent border-none'
						fill='#fff'
					>
						<path d='M83.9 17.1c-.9-.9-2.5-.9-3.4 0l-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l30-30 30 30c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4 0-3.4z'></path>
					</svg>
				</button>
			</nav>

			<div className='h-screen w-screen flex flex-col items-center justify-center'>
				{navbarData.links.map((link, idx) => (
					<a
						key={idx}
						href={link.path}
						className=' relative z-30 lg:z-[99999999]'
					>
						<span
							className={`menu-item cursor-pointer font-hvdTrialGraphit font-semibold leading-[150%] ${
								router.pathname === link.path
									? 'menu-item-fill-green text-[48px] sm:text-[48px] md:text-[64px] lg:text-[56px] xl:text-[72px] 2xl:text-[96px] 3xl:text-[128px]'
									: 'menu-item-fill-transparent text-[36px] sm:text-[36px] md:text-[48px] lg:text-[36px] xl:text-[56px] 2xl:text-[72px] 3xl:text-[96px] hover:text-greenSecondary2 hover:text-[48px] hover:sm:text-[48px] hover:md:text-[64px] hover:lg:text-[56px] hover:xl:text-[72px] hover:2xl:text-[96px] hover:3xl:text-[128px] '
							}`}
						>
							{link.name.toUpperCase()}
						</span>
					</a>
				))}
			</div>
		</div>
	);
}
