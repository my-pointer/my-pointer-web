export default function useAuth() {
	const handleLogout = () => {
		localStorage.removeItem("accessToken");
		window.location.href = "/login";
	};
	return { handleLogout };
}

