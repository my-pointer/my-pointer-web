import axios from "axios";
import useUser from "../hooks/useUser";
import toast from "react-hot-toast";

interface IExchangeCard {
	handleClose: (value: boolean) => void;
	credit: number;
}
const ExChangeCard = ({ handleClose, credit }: IExchangeCard) => {
	const convertNumberToMoney = (balance: number) => {
		return Intl.NumberFormat("en-IN", {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(balance);
	};

	const { userData } = useUser();

	const handleExchangeCard = (value: boolean) => {
		handleClose(value);
	};

	const handleExchange = async () => {
		const accessToken = localStorage.getItem("accessToken");
		try {
			const response = await axios.post(
				"http://localhost:5002/api/v1/credit/exchange-point",
				{
					customerId: userData!.id,
				},
				{ headers: { Authorization: `Bearer ${accessToken}` } }
			);
			handleClose(false);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	return (
		<main className="w-4/12 h-screen fixed z-10 top-0 right-0 bg-white shadow-2xl p-12 transition-all">
			<div className="flex flex-col h-full justify-between w-full ">
				<div>
					<h1 className="text-4xl font-bold text-orange-600">แลกแต้มทั้งหมด</h1>
				</div>

				<div className="h-full mt-5">
					<div className="flex justify-between">
						<div>แต้ม</div>
						<div>{convertNumberToMoney(credit)}</div>
					</div>
				</div>
				<div className="text-center">
					<button
						type="button"
						className="bg-orange-500 hover:bg-orange-600 w-full py-3 rounded-full text-white"
						onClick={() => handleExchange()}
					>
						แลกเลย
					</button>

					<button
						type="button"
						className="w-fit mt-2 text-gray-500"
						onClick={() => {
							handleExchangeCard(false);
						}}
					>
						ยกเลิก
					</button>
				</div>
			</div>
		</main>
	);
};

export default ExChangeCard;

