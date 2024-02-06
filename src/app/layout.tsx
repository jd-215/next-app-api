import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import NavbarButtons from "./(componenets)/NavbarButtonsAdded";
import Image from "next/image";
import FooterComp from "./(componenets)/FooterComp";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "Next App",
// 	description: "Next App",
// 	keywords: "next app",
// }

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div>
					<div className='hidden md:hidden sm:hidden lg:block z-10 relative'>
						<nav className='flex flex-grow flex-1 flex-row justify-end space-x-5 py-4 px-10 bg-slate-100 shadow-slate-300 drop-shadow shadow-sm'>
							<div className='flex flex-1 w-20 text-center text-white text-lg font-bold self-center '>
								<div className='flex flex-row justify-around'>
									<div>
										<Image
											src={"/logoicon/logo.svg"}
											style={{ position: "static" }}
											width={50}
											height={50}
											alt='image'
										/>
									</div>
									<div className='text-[#02306A] px-5 py-[0.3rem] '>WELCOME</div>
								</div>
							</div>
							<div className='p-2 text-[#02306A] text-sm font-bold  tracking-wide  rounded-full bg-blue-100 border-2 border-slate-300 px-10  transition duration-200 ease-in-out hover:shadow-black hover:scale-110 hover:text-white hover:bg-blue-500 hover:drop-shadow-lg'>
								<Link href='/'>Home</Link>
							</div>
							<div className='p-2 text-[#02306A] text-sm font-bold  tracking-wide rounded-full bg-blue-100 border-2 border-slate-300 px-10  transition duration-200 ease-in-out hover:shadow-black hover:scale-110 hover:text-white hover:bg-blue-500 hover:drop-shadow-lg'>
								<Link href='/users'>Users</Link>
							</div>
							<div className='p-2 text-[#02306A] text-sm font-bold  tracking-wide rounded-full bg-blue-100 border-2 border-slate-300 px-10  transition duration-200 ease-in-out hover:shadow-black hover:scale-110 hover:text-white hover:bg-blue-500 hover:drop-shadow-lg'>
								<Link href='/login'>Login</Link>
							</div>
							<div className='p-2 text-[#02306A] text-sm font-bold  tracking-wide rounded-full bg-blue-100 border-2 border-slate-300 px-10  transition duration-200 ease-in-out hover:shadow-black hover:scale-110 hover:text-white hover:bg-blue-500 hover:drop-shadow-lg'>
								<Link href='/signup'>Signup</Link>
							</div>
						</nav>
					</div>

					<div className='hidden lg:hidden md:block  sm:hidden '>
						<nav className='flex flex-grow flex-1 flex-row justify-end space-x-5 py-4 px-10 bg-slate-100 shadow-slate-300 drop-shadow shadow-sm'>
							<div className='flex flex-1 w-20 text-center text-white text-lg font-bold self-center '>
								<div className='flex flex-row justify-around'>
									<div>
										<Image
											src={"/logoicon/logo.svg"}
											style={{ position: "static" }}
											width={50}
											height={50}
											alt='image'
										/>
									</div>
									<div className='text-[#02306A] px-5 py-[0.3rem] '>WELCOME</div>
								</div>
							</div>
							<div className=' flex flex-1 flex-row justify-end'>
								<div className='p-2 text-[#02306A] scale-90 text-sm font-bold   rounded-full bg-blue-100 border-2 border-slate-300 px-5  transition duration-200 ease-in-out hover:shadow-black hover:scale-110 hover:text-white hover:bg-blue-500 hover:drop-shadow-lg'>
									<Link href='/'>Home</Link>
								</div>
								<div className='p-2 text-[#02306A] scale-90 text-sm font-bold  rounded-full bg-blue-100 border-2 border-slate-300 px-5  transition duration-200 ease-in-out hover:shadow-black hover:scale-110 hover:text-white hover:bg-blue-500 hover:drop-shadow-lg'>
									<Link href='/users'>Users</Link>
								</div>
								<div className='p-2 text-[#02306A] scale-90 text-sm font-bold  rounded-full bg-blue-100 border-2 border-slate-300 px-5  transition duration-200 ease-in-out hover:shadow-black hover:scale-110 hover:text-white hover:bg-blue-500 hover:drop-shadow-lg'>
									<Link href='/login'>Login</Link>
								</div>
								<div className='p-2 text-[#02306A] scale-90 text-sm font-bold  rounded-full bg-blue-100 border-2 border-slate-300 px-5  transition duration-200 ease-in-out hover:shadow-black hover:scale-110 hover:text-white hover:bg-blue-500 hover:drop-shadow-lg'>
									<Link href='/signup'>Signup</Link>
								</div>
							</div>
						</nav>
					</div>
					<NavbarButtons />
					<div>{children}</div>
					<FooterComp />
				</div>
			</body>
		</html>
	);
}

