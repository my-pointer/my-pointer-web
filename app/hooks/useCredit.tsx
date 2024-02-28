import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IUserBalance, IUserCredit } from "../interfaces/credit";
interface ICreditHook {
	userId?: number;
}
const useCredit = ({ userId }: ICreditHook) => {
	const [creditIsLoading, setCreditIsLoading] = useState<boolean>(true);
	const [userCredit, setUserCredit] = useState({} as IUserCredit);
	const [userBalance, setUserBalance] = useState({} as IUserBalance);
	const [reloadBalance, setReloadBalance] = useState<boolean>(false);

	const getUserCredit = async (userId: number) => {
		setCreditIsLoading(true);
		try {
			const accessToken = localStorage.getItem("accessToken");
			const response = await axios.get(`http://localhost:5002/api/v1/credit/point/${userId}`, {
				headers: { Authorization: `Bearer ${accessToken}` },
			});
			const data = response.data;
			setUserCredit(data.data);

			const responseBalance = await axios.get(`http://localhost:5002/api/v1/credit/balance/${userId}`, {
				headers: { Authorization: `Bearer ${accessToken}` },
			});
			const balanceData = await responseBalance.data;
			setUserBalance(balanceData.data);
		} catch (error) {
			toast.error("Can not get user credit!");
		}
		setCreditIsLoading(false);
	};

	const handleTriggerReload = (value: boolean) => {
		setReloadBalance(value);
	};

	useEffect(() => {
		getUserCredit(userId!);
	}, []);

	useEffect(() => {
		getUserCredit(userId!);
	}, [reloadBalance]);

	return { userCredit, creditIsLoading, userBalance, handleTriggerReload };
};

export default useCredit;

