"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Page: React.FC = () => {
	const [state, setState] = useState({
		email: "",
		password: "",
	});
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const onSignUp = async () => {
		// console.log("data sent to the server", state);
		try {
			setLoading(true);
			const response = await axios.post("http://localhost:3000/api/users/login", state);
			// console.log("data received from the server", response);
			// setLoading(false);
			router.push("/profile");
		} catch (err: any) {
			// console.log("loading failed", err.message);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		if (state.email.length > 0 && state.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [state]);

	return (
		<>
			<div className='w-full h-[100vh] bg-[#dbe3ff]'>
				<div className="grid xxm:grid-cols-1 lg:grid-cols-2">
					<div className=' xxm:hidden lg:block '>

					<div className=" animate-pulse">
						<Image src="/logoicon/svgFour.svg" width={600} height={600} alt="logo" />
					</div>
					<div className="animate-pulse translate-x-50 translate-y-50 ">

						<Image src="/logoicon/svgFour.svg" width={200} height={200} alt="logo" />
					</div>
					</div>
					<div className='flex flex-1 flex-col items-center py-28 '>
						<div className='flex flex-col xxm:w-fit md:w-96 bg-[#e6e3ff] border-y-slate-300 border-x-slate-300 border-2 shadow-xl shadow-slate-800 rounded-2xl px-8 py-6 place-items-center space-y-4'>
							<h1 className='m-2 py-4 text-2xl md:text-5xl text-slate-800 font-extrabold font-serif leading-tight'>
								{loading ? "Processing..." : "Log in"}
							</h1>
							<div className='flex flex-col place-items-start py-1 w-full'>
								{/* <label htmlFor="email" className="text-lg font-bold">Email</label> */}
								<input
									placeholder='Email'
									type='email'
									id='email'
									name='email'
									value={state.email}
									onChange={(e) =>
										setState({
											...state,
											email: e.target.value,
										})
									}
									className='border border-gray-400 px-3 py-2 w-full  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-transparent hover:bg-white text-text-slate-800 hover:text-black transition duration-200 ease-in-out '
								/>
							</div>
							<div className='flex flex-col place-items-start py-1 w-full'>
								{/* <label htmlFor="password" className="text-lg font-bold">Password</label> */}
								<input
									placeholder='Password'
									type='password'
									id='password'
									name='password'
									value={state.password}
									onChange={(e) =>
										setState({
											...state,
											password: e.target.value,
										})
									}
									className='border border-gray-400 px-3 py-2 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-transparent hover:bg-white  text-dark hover:text-black transition duration-200 ease-in-out'
								/>
							</div>
							<div className='w-full flex flex-grow flex-col py-4 px-6'>
								<button
									className=' flex-grow p-2 text-dark text-sm tracking-[0.5em] rounded-2xl bg-blue-400 transition duration-200 ease-in-out hover:shadow-white hover:bg-blue-500 hover:text-white hover:drop-shadow-lg'
									onClick={onSignUp}
								>
									SUBMIT
								</button>
							</div>
							<div className='flex flex-grow flex-col gap-4 py-4'>
								<div className='px-4 text-sm hover:text-blue-500 text-dark'>
									<Link href='/signup'>Create an account</Link>
								</div>
								<div className='px-4 text-sm hover:text-blue-500 text-dark'>
									<Link href='/login/recovery'>forgot password ?</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
