import React, { useState } from "react";
import { Input } from "./components/Input";

export function App() {
	// Estados para armazenar os valores dos inputs
	const [userData, setUserData] = useState({
		user: "",
		email: "",
		password: "",
	});

	// Função para lidar com a mudança nos inputs
	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		fieldName: string
	) => {
		const { value } = event.target;
		setUserData((prevState) => ({
			...prevState,
			[fieldName]: value,
		}));
	};

	// Função para lidar com o envio do formulário
	const getUserCredentials = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		return userData;
	};

	return (
		<main className="bg-zinc-900 h-screen flex flex-col justify-center items-center">
			<form onSubmit={getUserCredentials}>
				<div className="flex flex-col gap-4 justify-center items-center">
					{/* Inputs */}
					<div className="flex flex-col gap-5">
						<Input
							name="User"
							type="text"
							value={userData.user}
							onChange={(e) => handleInputChange(e, "user")}
						/>
						<Input
							name="Email"
							type="email"
							value={userData.email}
							onChange={(e) => handleInputChange(e, "email")}
						/>
						<Input
							name="Password"
							type="password"
							value={userData.password}
							onChange={(e) => handleInputChange(e, "password")}
						/>
					</div>

					<div>
						<button
							type="submit"
							className="bg-blue-400 p-2 pt-1 pb-1 rounded-sm w-16"
						>
							Entrar
						</button>
					</div>
				</div>
			</form>
		</main>
	);
}
