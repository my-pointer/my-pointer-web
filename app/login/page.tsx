export default function Login() {
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
						/>
					</div>
					<div>
						<input
							type="password"
							className="border border-gray-400 rounded-md w-full py-3 px-4 focus:outline-orange-500 0"
							placeholder="Password"
						/>
					</div>
					<div>
						<button type="button" className="w-full rounded-lg bg-orange-400 py-4 text-white hover:bg-orange-500">
							ตกลง
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

