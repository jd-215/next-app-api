"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VerifyEmailPage() {
	const [token, setToken] = useState<string>("");
	const [verify, setVerify] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const [pasword, setPassword] = useState("");

	const verifyUserEmail = async () => {
		try {
			const response = await axios.post(
				`http://localhost:3000/api/users/recovery/verify`,
				{ token: token }
			);
			console.log("",response.data);

			if (response.data.prop === "reset") {
				setVerify(true);
			}
		} catch (err: any) {
			setError(true);
			console.log(err.response.data);
		}
	};
	useEffect(() => {
		const urlToken = window.location.search.split("=")[1];
		console.log(urlToken);
		setToken(urlToken || "");
		if (token.length > 0 && verify === false) {
			verifyUserEmail();
		}
	}, [verify, token]);

	//if verification success then enter new password to update profile page

	const router = useRouter();
	const onSubmit = async () => {
		try {
			const response = await axios.post(
				`http://localhost:3000/api/users/recovery/resetpassword`,
				{token: token, password: pasword }
			);
			console.log(response.data);
			
			router.push("/login");
		} catch (err: any) {
			setError(true);
			console.log(err.response.data);
		}

		console.log("password to update -", pasword);
	};

	return (
		<>
			<div>
				{verify ? (
					<div>
						<h1 className="m-4 text-2xl md:text-2xl text-gray-800 font-extrabold font-serif leading-tight">
							Password Reset
						</h1>
						<div className="m-4 p-4 space-x-8 bg-white rounded-md">
							<label
								htmlFor="password"
								className="text-lg font-bold"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								value={pasword}
								onChange={(e) =>
									setPassword(e.target.value)
								}
								className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
						<div>
							<button
								className="m-4 p-2 bg-blue-300 outline outline-offset-2 outline-1 rounded-md hover:bg-blue-400"
								onClick={onSubmit}
							>
								Submit
							</button>
						</div>
					</div>
				) : (
					<div>
						<h1 className="m-4 text-2xl md:text-2xl text-gray-800 font-extrabold font-serif leading-tight">
							Password verification on Progress...
						</h1>
					</div>
				)}
			</div>
		</>
	);
}
