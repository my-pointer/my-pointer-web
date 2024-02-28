import VipDiamondFillIcon from "remixicon-react/VipDiamondFillIcon";
import WalletFillIcon from "remixicon-react/WalletFillIcon";

interface IUserPoint {
	point?: number;
	balance?: number;
}
export default function UserPoint({ point = 0, balance = 0 }: IUserPoint) {
	const convertNumberToMoney = (balance: number) => {
		return Intl.NumberFormat("en-IN", {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(balance);
	};
	return (
		<main className="my-20 flex space-x-32">
			<div className="space-y-4">
				<h1 className="text-xl text-gray-500">แต้มของคุณ</h1>
				<h1 className="text-5xl font-bold flex items-baseline gap-5">
					<VipDiamondFillIcon size={24} className="fill-orange-400" /> {convertNumberToMoney(point)}
				</h1>
			</div>

			<div className="space-y-4">
				<h1 className="text-xl text-gray-500">วงเงินที่เหลือ</h1>
				<h1 className="text-5xl font-bold flex items-baseline gap-5">
					<WalletFillIcon size={24} className="fill-orange-400" /> {convertNumberToMoney(balance)}
					<span className="text-lg text-gray-400">/ 100,000</span>
				</h1>
			</div>
		</main>
	);
}

