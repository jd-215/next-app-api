import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import NavbarButtons from "./@componenets/NavbarButtons";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next App",
	description: "Next App",
	keywords: "next app",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

	return (
		<html lang="en">
			<body className={inter.className}>
				<div>
					<div className="hidden md:hidden sm:hidden lg:block">
						<nav className="flex flex-grow flex-1 flex-row justify-end space-x-5 py-4 px-10 bg-gradient-to-r from-red-500 to-violet-700 shadow-slate-900">
							<div className="flex flex-1 w-20 text-center text-white text-lg font-bold self-center ">
								logo
							</div>
							<div className="p-2 text-white text-sm rounded-lg bg-transparent border-2 border-slate-300 transition duration-200 ease-in-out hover:shadow-black hover:text-blue-400 hover:border-blue-600 hover:drop-shadow-lg">
								<Link href="/">Home</Link>
							</div>
							<div className="p-2 text-white text-sm rounded-lg bg-transparent border-2 border-slate-300 transition duration-200 ease-in-out hover:shadow-black hover:text-blue-400 hover:border-blue-600 hover:drop-shadow-lg">
								<Link href="/users">Users</Link>
							</div>
							<div className="p-2 text-white text-sm rounded-lg bg-transparent border-2 border-slate-300 transition duration-200 ease-in-out hover:shadow-black hover:text-blue-400 hover:border-blue-600 hover:drop-shadow-lg">
								<Link href="/login">Login</Link>
							</div>
							<div className="p-2 text-white text-sm rounded-lg bg-transparent border-2 border-slate-300 transition duration-200 ease-in-out hover:shadow-black hover:text-blue-400 hover:border-blue-600 hover:drop-shadow-lg">
								<Link href="/signup">Signup</Link>
							</div>
						</nav>
					</div>

					<div className="hidden lg:hidden md:block  sm:hidden">
						<nav className="flex flex-grow flex-1 flex-row justify-end space-x-5 py-4 px-10 bg-gradient-to-r from-red-500 to-violet-700 shadow-slate-900">
							<div className="flex flex-1 w-20 text-center text-white text-lg font-bold self-center ">
								logo
							</div>
							<div className="p-2 text-white text-sm rounded-lg bg-transparent border-2 border-slate-300 transition duration-200 ease-in-out hover:shadow-black hover:text-blue-400 hover:border-blue-600 hover:drop-shadow-lg">
								<Link href="/">Home</Link>
							</div>
							<div className="p-2 text-white text-sm rounded-lg bg-transparent border-2 border-slate-300 transition duration-200 ease-in-out hover:shadow-black hover:text-blue-400 hover:border-blue-600 hover:drop-shadow-lg">
								<Link href="/users">Users</Link>
							</div>
							<div className="p-2 text-white text-sm rounded-lg bg-transparent border-2 border-slate-300 transition duration-200 ease-in-out hover:shadow-black hover:text-blue-400 hover:border-blue-600 hover:drop-shadow-lg">
								<Link href="/login">Login</Link>
							</div>
							<div className="p-2 text-white text-sm rounded-lg bg-transparent border-2 border-slate-300 transition duration-200 ease-in-out hover:shadow-black hover:text-blue-400 hover:border-blue-600 hover:drop-shadow-lg">
								<Link href="/signup">Signup</Link>
							</div>
						</nav>
					</div>
					<NavbarButtons />

					<div>{children}</div>
				</div>
			</body>
		</html>
	);
}

