import { IUser } from "../interfaces/user";
import { jwtDecode } from "jwt-decode";

export default function useUser() {
	const accessToken = localStorage.getItem("accessToken");

	if (accessToken !== null) {
		const userData: IUser = jwtDecode(accessToken as string);
		return { userData };
	} else {
		return { userData: null };
	}
}

