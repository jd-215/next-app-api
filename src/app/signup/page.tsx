"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const Page: React.FC = () => {
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({
		email: "",
		username: "",
		password: "",
	});
	const router = useRouter();
	const onSignUp = async () => {
		// console.log("data sent to the server", state);
		// router.push("/login");
		try {
			setLoading(true);
			const response = await axios.post(
				"http://localhost:3000/api/users/signup",
				state
			);
			// console.log("data received from the server", response.data);
			setLoading(false);
			router.push("/login");
		} catch (err) {
			// console.log(err);
			// setLoading(false);
		}
	};

	useEffect(() => {
		if (
			state.username.length > 0 &&
			state.password.length > 0 &&
			state.email.length > 0
		) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [state]);

	return (
		<>
		<div className="container">
		<div className="flex flex-1 flex-col items-center py-28 bg-gradient-to-r from-red-700 to-violet-900">
		<div  className="flex flex-col w-96 bg-transparent border-y-slate-300 border-x-slate-300 border-2 shadow-xl shadow-slate-800 rounded-2xl px-8 py-6 place-items-center space-y-4">
			<h1  className="m-2 py-4 text-2xl md:text-5xl text-white font-extrabold font-serif leading-tight">
			
				{loading ? "Processing...": " Sign up "
				}
				
					</h1>
				<div className="flex flex-col place-items-start py-1 w-full">
					{/* <label
						htmlFor="username"
						className="text-lg font-bold"
					>
						Username
					</label> */}
					<input
						placeholder="Username"
						type="text"
						id="username"
						name="username"
						value={state.username}
						onChange={(e) =>
							setState({ ...state, username: e.target.value })
						}
						className="border border-gray-400 px-3 py-2 w-full  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-transparent hover:bg-white text-white hover:text-black transition duration-200 ease-in-out "
					/>
				</div>
				<div className="flex flex-col place-items-start py-1 w-full">
					
					<input
						placeholder="Email"
						type="email"
						id="email"
						name="email"
						value={state.email}
						onChange={(e) =>
							setState({ ...state, email: e.target.value })
						}
						className="border border-gray-400 px-3 py-2 w-full  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-transparent hover:bg-white text-white hover:text-black transition duration-200 ease-in-out "
					/>
				</div>
				<div className="flex flex-col place-items-start py-1 w-full">
						

					
					<input
						placeholder="Password"
						type="password"
						id="password"
						name="password"
						value={state.password}
						onChange={(e) =>
							setState({ ...state, password: e.target.value })
						}
						className="border border-gray-400 px-3 py-2 w-full  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-transparent hover:bg-white text-white hover:text-black transition duration-200 ease-in-out "
					/>
						</div>
				<div  className="w-full flex flex-grow flex-col py-4 px-6">
					<button
						className=" flex-grow p-2 text-white text-sm tracking-[0.5em] rounded-2xl bg-transparent border-2 border-slate-300 transition duration-200 ease-in-out hover:shadow-black hover:text-blue-500 hover:border-blue-500 hover:drop-shadow-lg"
						onClick={onSignUp}
						disabled={buttonDisabled}
					>
						{buttonDisabled ? "Not Available" : "Submit"}
					</button>
				</div>
				<div className="px-4 text-sm hover:text-blue-500 text-white">
					<Link href="/login">visit log in page</Link>
				</div>
					</div>
			</div>
		</div>
						</>
	);
};

export default Page;
