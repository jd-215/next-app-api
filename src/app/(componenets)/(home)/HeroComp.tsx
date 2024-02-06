"use client";

import Image from "next/image";

function HeroComp() {
	return (
		<div className='w-full h-[100vh] relative flex flex-1 flex-col items-center py-28 bg-[#e6e3ff] overflow-hidden'>
			
			<div className='relative translate-y-2/3 animate-pulse xxm:block  lg:hidden inset-0 -z-9  '>
				<Image
					src={"/logoicon/svgFour.svg"}
					className='static'
					width={100}
					height={100}
					alt='image'
				/>
			</div>

			<div className='relative bg-transparent'>
				<div className='flex flex-col justify-center text-center '>
					<div className='  text-sm font-bold text-[#02306A]  py-6 tracking-widest '> WEB DEVELOPER</div>
					<div className='xxm:text-3xl md:text-3xl lg:text-5xl font-bold text-[#02306A] max-w-2xl text-center tracking-wider '>
						Hello, My name is Jashabanta Das.
					</div>
					<div className='xxm:text-xs md:text-sm py-8 text-[#02306A] tracking-widest max-w-3xl px-16   text-center  '>
						I love design and coding . I work as a frontend developer and UX/UI developer. Some times i also work
						in backend as MERN stack developer.
					</div>
				</div>
				<div className='relative xxm:hidden  sm:hidden md:hidden lg:block translate-x-3/4 -translate-y-[100%] inset-0 z-10 animate-pulse'>
				<Image
					src={"/logoicon/svgFour.svg"}
					className='static'
					width={400}
					height={400}
					alt='image'
				/>
				{/* <Image
					src={"/logoicon/svgFour.svg"}
					className='static'
					width={500}
					height={500}
					alt='image'
				/> */}
			</div>
				<div className=' xxm:hidden sm:hidden md:block lg:block relative -translate-x-1/3  -translate-y-[180%]  inset-0 -z-9 flex flex-1 flex-row justify-end  animate-pulse'>
					<Image
						src={"/logoicon/svgFour.svg"}
						className='static'
						width={300}
						height={300}
						alt='image'
					/>
				</div>
				<div className=' xxm:block lg:hidden  relative inset-0 -z-9 flex flex-1 flex-row justify-end  animate-pulse'>
					<Image
						src={"/logoicon/svgFour.svg"}
						className='static'
						width={200}
						height={200}
						alt='image'
					/>
				</div>
			</div>
			{/* <Sketch children={undefined} /> */}
		</div>
	);
}

export default HeroComp;
