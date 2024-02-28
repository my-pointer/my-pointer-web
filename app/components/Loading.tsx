import React from "react";

const Loading = () => {
	return (
		<dialog open={true}>
			<div className="fixed inset-0 bg-black/40"></div>
			<div className="flex justify-center h-screen items-center w-fit">
				<span className="p-20 bg-white shadow-xl rounded-lg">Loading</span>
			</div>
		</dialog>
	);
};

export default Loading;

