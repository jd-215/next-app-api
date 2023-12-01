'use client';
import React, { useState } from 'react'
import Link from 'next/link'


const NavbarButtons = () => {
    const [state, setState] = useState<boolean>(false);
	const handleClick = () => {
		setState(!state);
		// console.log("button state", state);
	};
  return (
    <div className="block md:hidden lg:hidden">
						<nav className="flex flex-grow flex-1 flex-row justify-end space-x-5 py-4 px-10 bg-gradient-to-r from-red-500 to-violet-700 shadow-slate-900">
							<div className="flex flex-1 w-20 text-center text-white text-lg font-bold self-center ">
								logo
							</div>
							<div className="-mr-2 md:hidden flex flex-col flex-shrink-0">
								<div>
									<button
										onClick={handleClick}
										type="button"
										className="bg-transparent inline-flex items-center justify-center p-2 text-white rounded-md hover:ring-white hover:ring-2 hover:bg-blue"
									>
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M4 6h16M4 12h16M4 18h16"
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
										? "block pt-2 pb-3 space-y-1 sm:px-3 px-6 bg-gradient-to-r from-red-500 to-violet-700 shadow-slate-900"
										: "hidden"
								}
							>
								<div className="flex flex-row justify-center space-x-5 text-center text-white text-lg font-bold self-center">
									<div className="p-2 text-white text-sm rounded-lg bg-transparent border-2 border-slate-300 transition duration-200 ease-in-out hover:shadow-black hover:text-blue-400 hover:border-blue-600 hover:drop-shadow-lg">
										<Link href="/">Home</Link>
									</div>
									<div className="p-2 text-white text-sm rounded-lg bg-transparent border-2 border-slate-300 transition duration-200 ease-in-out hover:shadow-black hover:text-blue-400 hover:border-blue-600 hover:drop-shadow-lg">
										<Link href="/users">
											Users
										</Link>
									</div>
									<div className="p-2 text-white text-sm rounded-lg bg-transparent border-2 border-slate-300 transition duration-200 ease-in-out hover:shadow-black hover:text-blue-400 hover:border-blue-600 hover:drop-shadow-lg">
										<Link href="/login">
											Login
										</Link>
									</div>
									<div className="p-2 text-white text-sm rounded-lg bg-transparent border-2 border-slate-300 transition duration-200 ease-in-out hover:shadow-black hover:text-blue-400 hover:border-blue-600 hover:drop-shadow-lg">
										<Link href="/signup">
											Signup
										</Link>
									</div>
								</div>
							</div>
						</nav>
					</div>
  )
}

export default NavbarButtons