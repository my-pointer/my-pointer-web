import VipDiamondFillIcon from "remixicon-react/VipDiamondFillIcon";
import WalletFillIcon from "remixicon-react/WalletFillIcon";

export default function UserPoint() {
	return (
		<main className="my-20 flex space-x-32">
			<div className="space-y-4">
				<h1 className="text-xl text-gray-500">แต้มของคุณ</h1>
				<h1 className="text-5xl font-bold flex items-baseline gap-5">
					<VipDiamondFillIcon size={24} className="fill-orange-400" /> 2,609
				</h1>
			</div>

			<div className="space-y-4">
				<h1 className="text-xl text-gray-500">วงเงินที่เหลือ</h1>
				<h1 className="text-5xl font-bold flex items-baseline gap-5">
					<WalletFillIcon size={24} className="fill-orange-400" /> 65,002{" "}
					<span className="text-lg text-gray-400">/ 100,000</span>
				</h1>
			</div>
		</main>
	);
}

