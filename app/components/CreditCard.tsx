import VisaLineIcon from "remixicon-react/VisaLineIcon";
export default function CreditCard() {
	const cardNumber = (number: number) => {
		const originalNumber: string = number.toString();

		return `${originalNumber.substring(0, 4)} **** **** ${originalNumber.substring(12)}`;
	};
	return (
		<div className="bg-gradient-to-tr from-pink-500 to-orange-500 bg-opacity-10 text-white h-fit rounded-lg w-fit min-w-[420px] min-h-[230px] px-7 py-3 shadow-2xl">
			<div className="flex justify-end w-full">
				<VisaLineIcon size={54} />
			</div>

			<div className="mx-auto">
				<div>
					<small className="opacity-70">Card Number</small>
					<h1 className="text-xl tracking-widest">{cardNumber(1234567890123456)}</h1>
				</div>

				<div className="mt-5 flex w-full">
					<div className="w-8/12 ">
						<small className="opacity-70">Card Holder</small>
						<h1 className="text-xl font-semibold tracking-wide">Leanne Graham</h1>
					</div>

					<div className="w-4/12 flex justify-between">
						<div>
							<small className="opacity-70">Exp Date</small>
							<h1 className="text-xl font-semibold tracking-wide">10/27</h1>
						</div>

						<div>
							<small className="opacity-70">CVV</small>
							<h1 className="text-xl font-semibold tracking-wide">999</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

