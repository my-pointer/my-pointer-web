export interface IUserCredit {
	id: number;
	point: number;
	cardNumber: string;
	cardHolderName: string;
	customerId: number;
}

export interface IUserBalance {
	id: number;
	balance: number;
	customerId: number;
}

