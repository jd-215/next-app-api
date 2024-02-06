"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import Logout from './Logout';
import Image from "next/image";

const NavbarButtons = () => {
	const [state, setState] = useState<boolean>(true);
	const navigate = useRouter();
	const handleClick = () => {
		setState(!state);
		// console.log("button state", state);
	};
	return (
		<div className='block md:hidden lg:hidden'>
			<nav className='flex flex-grow flex-1 flex-row justify-end space-x-5 py-4 px-10 bg-slate-100 shadow-slate-900'>
				<div className='flex flex-1 w-20 text-center text-white text-lg font-bold self-center '>
					<div className='flex flex-row justify-start'>
						<div className='py-1'>
							<Image
								src={"/logoicon/logo.svg"}
								style={{ position: "static" }}
								width={40}
								height={40}
								alt='image'
							/>
						</div>
						<div className='text-[#02306A] px-5 py-[0.3rem] '>WELCOME</div>
					</div>
				</div>
				<div className='-mr-2 md:hidden flex flex-col flex-shrink-0'>
					<div>
						<button
							onClick={() => handleClick()}
							className='bg-transparent inline-flex items-center justify-center p-2 text-[#02306A] rounded-md hover:text-[#02306A] hover:ring-2 hover:bg-blue'
						>
							<svg
								className='h-6 w-6'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								aria-hidden='true'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'
								></path>
							</svg>
						</button>
					</div>
				</div>
			</nav>
			<nav>
				<div
					className={
						state
							? "block pt-2 pb-3 space-y-1 border-t-2 sm:px-3 px-6 bg-slate-100 shadow-slate-900"
							: "hidden"
					}
				>
					<div className=' flex flex-1 flex-row justify-evenly'>
						<div onClick={() => navigate.push("/")} className="p-2 text-[#02306A] scale-90 text-sm font-bold  rounded-full bg-blue-100 border-2 border-slate-300 px-3  transition duration-200 ease-in-out hover:shadow-black hover:scale-110 hover:text-white hover:bg-blue-500 hover:drop-shadow-lg">
							Home
						</div>
						<div onClick={() => navigate.push("/users")} className="p-2 text-[#02306A] scale-90 text-sm font-bold  rounded-full bg-blue-100 border-2 border-slate-300 px-3  transition duration-200 ease-in-out hover:shadow-black hover:scale-110 hover:text-white hover:bg-blue-500 hover:drop-shadow-lg">
							Users
						</div>
						<div onClick={() => navigate.push("/login")} className="p-2 text-[#02306A] scale-90 text-sm font-bold  rounded-full bg-blue-100 border-2 border-slate-300 px-3  transition duration-200 ease-in-out hover:shadow-black hover:scale-110 hover:text-white hover:bg-blue-500 hover:drop-shadow-lg">
							Login
						</div>
						<div onClick={() => navigate.push("/signup")} className="p-2 text-[#02306A] scale-90 text-sm font-bold  rounded-full bg-blue-100 border-2 border-slate-300 px-3  transition duration-200 ease-in-out hover:shadow-black hover:scale-110 hover:text-white hover:bg-blue-500 hover:drop-shadow-lg">
							Signup
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavbarButtons;
