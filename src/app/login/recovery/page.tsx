
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

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
			const response = await axios.post("http://localhost:3000/api/users/recovery", state)
			// console.log("data received from the server", response.data);
			// setLoading(false);
			// router.push("/profile");
		}
		catch (err: any ) {
			// console.log("loading failed", err.message);
		}finally{
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
		<div>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
				<h1 className="m-4 text-2xl md:text-4xl text-gray-800 font-extrabold font-serif leading-tight">
					{
						loading ? "Processing..." : "Enter Recovery Email Address"		
					}
				</h1>
				<div className="m-4 p-4 space-x-8 bg-white rounded-md">
					<label htmlFor="email" className="text-lg font-bold">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={state.email}
						onChange={(e) =>
							setState({ ...state, email: e.target.value })
						}
                        className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>
			
				<div>
					<button className="m-4 p-2 bg-blue-300 outline outline-offset-2 outline-1 rounded-md hover:bg-blue-400" onClick={onSignUp}>Submit</button>
				</div>
                <div>
                    <Link href="/signup">visit signup page</Link>
                   
                </div>
			</div>
		</div>
	);
};

export default Page;
