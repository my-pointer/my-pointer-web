"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const router = useRouter();

	const handleLogin = async () => {
		try {
			const response = await axios.post(`http://localhost:5001/api/v1/auth/login`, { username, password });
			const { data } = await response;
			localStorage.setItem("accessToken", data.data.accessToken);
			router.push("/");
		} catch (error) {
			toast.error("Login fail.");
		}
	};

	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="bg-white border border-gray-500 rounded-lg p-10 min-w-[400px] min-h-[400px]  drop-shadow-xl">
				<div className="mb-14">
					<h1 className="font-semibold text-xl text-center">My Pointer</h1>
				</div>

				<div className="space-y-4">
					<div>
						<input
							type="text"
							className="border border-gray-400 rounded-md w-full py-3 px-4 focus:outline-orange-500"
							placeholder="Username"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div>
						<input
							type="password"
							className="border border-gray-400 rounded-md w-full py-3 px-4 focus:outline-orange-500 0"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div>
						<button
							type="button"
							className="w-full rounded-lg bg-orange-400 py-4 text-white hover:bg-orange-500"
							onClick={() => handleLogin()}
						>
							ตกลง
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

