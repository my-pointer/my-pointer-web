import CreditCard from "./components/CreditCard";
import UserPoint from "./components/UserPoint";

export default function Home() {
	return (
		<main>
			<section className="flex w-full justify-between mt-20">
				<div>
					<h1 className="text-4xl">
						สวัสดี <span className="text-6xl font-bold capitalize">Lorem</span>
					</h1>

					<div className="mt-5 space-x-4">
						<button
							type="button"
							className="border border-gray-600 min-w-[200px] px-10 py-3 rounded-full text-center hover:bg-gray-600 hover:text-white"
						>
							<span>แลกแต้ม</span>
						</button>

						<button
							type="button"
							className="border border-orange-500 bg-orange-500 text-white min-w-[200px] px-10 py-3 rounded-full text-center hover:text-white hover:bg-orange-600 hover:border-orange-300"
						>
							<span>จ่าย</span>
						</button>
					</div>
				</div>
				<CreditCard />
			</section>

			<section>
				<UserPoint />
			</section>
		</main>
	);
}

