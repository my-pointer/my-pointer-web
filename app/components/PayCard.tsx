import axios from "axios";
import useUser from "../hooks/useUser";
import toast from "react-hot-toast";

interface IPayCard {
	handleClose: (value: boolean) => void;
}
const PayCard = ({ handleClose }: IPayCard) => {
	const convertNumberToMoney = (balance: number) => {
		return Intl.NumberFormat("en-IN", {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(balance);
	};

	const { userData } = useUser();

	const handlePayCard = (value: boolean) => {
		handleClose(value);
	};

	const handlePay = async () => {
		const accessToken = localStorage.getItem("accessToken");
		try {
			const response = await axios.post(
				"http://localhost:5002/api/v1/credit/pay",
				{
					customerId: userData!.id,
					price: 10000,
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
					<h1 className="text-4xl font-bold text-orange-600">สรุปยอด ม.ค.</h1>
				</div>

				<div className="h-full mt-5">
					<div className="flex justify-between">
						<div>IPhone case</div>
						<div>{convertNumberToMoney(3000)}</div>
					</div>

					<div className="flex justify-between">
						<div>Head phone wireless</div>
						<div>{convertNumberToMoney(5700)}</div>
					</div>

					<div className="flex justify-between">
						<div>Backpack</div>
						<div>{convertNumberToMoney(1350)}</div>
					</div>

					<div className="flex justify-between mt-4">
						<div>ส่วนลด</div>
						<div>{convertNumberToMoney(100)}</div>
					</div>

					<div className="flex justify-between">
						<div>ดอกเบี้ย</div>
						<div>{convertNumberToMoney(50)}</div>
					</div>

					<div className="flex justify-between mt-12">
						<div>
							<strong>รวมทั้งหมด</strong>
						</div>
						<div>{convertNumberToMoney(10000)}</div>
					</div>
				</div>
				<div className="text-center">
					<button
						type="button"
						className="bg-orange-500 hover:bg-orange-600 w-full py-3 rounded-full text-white"
						onClick={() => handlePay()}
					>
						จ่ายเลย
					</button>

					<button
						type="button"
						className="w-fit mt-2 text-gray-500"
						onClick={() => {
							handlePayCard(false);
						}}
					>
						ยกเลิก
					</button>
				</div>
			</div>
		</main>
	);
};

export default PayCard;

