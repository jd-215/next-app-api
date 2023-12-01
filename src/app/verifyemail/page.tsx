"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function VerifyEmailPage() {
	const [token, setToken] = useState<string>("");
	const [verify, setVerify] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const verifyUserEmail = async () => {
		try {
			const response = await axios.post(
				`http://localhost:3000/api/users/verifyemail`,
				{ token: token }
			);
			console.log(response.data);
			setVerify(true);
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

	return (
		<div>
			{error ? (
				<h1 className="m-4 text-2xl md:text-6xl text-gray-800 font-extrabold font-serif leading-tight">
					Email verification failed
				</h1>
			) : (
				<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
					<h1 className="m-4 p-4 text-4xl space-x-8 bg-white rounded-md">
						Email Verification Status
					</h1>
					{verify ? (
						<h1 className="m-4 text-2xl md:text-4xl text-gray-800 font-extrabold font-serif leading-tight">
							Email Verified
						</h1>
					) : (
						<div>
							<h1 className="m-4 text-2xl md:text-4xl text-gray-800 font-extrabold font-serif leading-tight">
								Email Not Verified
							</h1>
							<div className="m-4 p-4 space-x-8 bg-white rounded-md">
								<Link href="/login">Login</Link>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
