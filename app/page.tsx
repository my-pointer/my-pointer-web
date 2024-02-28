"use client";

import { useEffect, useState } from "react";
import CreditCard from "./components/CreditCard";
import UserPoint from "./components/UserPoint";
import useAuth from "./hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useUser from "./hooks/useUser";
import LogoutBoxRFillIcon from "remixicon-react/LogoutBoxRFillIcon";
import useCredit from "./hooks/useCredit";
import Loading from "./components/Loading";
import PayCard from "./components/PayCard";

export default function Home() {
	const { userData } = useUser();
	const router = useRouter();
	const { handleLogout } = useAuth();
	const { userCredit, creditIsLoading, userBalance, handleTriggerReload } = useCredit({ userId: userData!.id });
	const [isShowPayCard, setIsShowPayCard] = useState<boolean>(false);

	useEffect(() => {
		if (userData === null) {
			router.push("/login");
		}
	}, []);

	const handlePayCard = (isShow: boolean) => {
		setIsShowPayCard(isShow);
		handleTriggerReload(isShow);
	};
	return (
		<main>
			{creditIsLoading ? (
				<Loading />
			) : (
				<>
					<div className="flex justify-end">
						<Link href="/" onClick={handleLogout} className="flex hover:text-orange-700 mt-4">
							<LogoutBoxRFillIcon /> ออกจากระบบ
						</Link>
					</div>
					<section className="flex w-full justify-between mt-10">
						<div>
							<h1 className="text-4xl">
								สวัสดี <span className="text-6xl font-bold capitalize">{userData?.username}</span>
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
									onClick={() => handlePayCard(true)}
								>
									<span>จ่าย</span>
								</button>
							</div>
						</div>
						<CreditCard cardNumber={userCredit.cardNumber} cardHolderName={userCredit.cardHolderName} />
						{isShowPayCard && <PayCard handleClose={handlePayCard} />}
					</section>

					<section>
						<UserPoint point={userCredit.point} balance={userBalance.balance} />
					</section>
				</>
			)}
		</main>
	);
}

