import React, { useState } from "react";
import { Input } from "./components/Input";

export function App() {
	// States to store input values and response messages
	const [userData, setUserData] = useState({
		user: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [responseMessage, setResponseMessage] = useState("");

	// Function to handle input changes
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

	// Function to handle form submission
	const getUserCredentials = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();

		try {
			const response = await fetch("/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: userData.user,
					email: userData.email,
					password: userData.password,
					confirm_password: userData.confirmPassword,
				}),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error);
			}

			const result = await response.json();
			setResponseMessage(result.message || "User authenticated successfully");
		} catch (error: any) {
			console.error("Error submitting data:", error);
			setResponseMessage(error.message || "Error submitting data");
		}
	};

	// Determine the background color based on the response message
	const getBackgroundColor = () => {
		if (responseMessage) {
			return responseMessage.startsWith("Authenticated user:")
				? "bg-green-500"
				: "bg-red-500";
		}
		return "bg-zinc-700";
	};

	return (
		<main className="bg-zinc-900 h-screen flex flex-col justify-center items-center">
			<div className="w-[1000px] h-[450px] bg-zinc-800 p-8 rounded-lg flex flex-col items-center justify-between">
				<form
					onSubmit={getUserCredentials}
					className="flex flex-col gap-4 justify-center items-center"
				>
					<div className="flex flex-col gap-5">
						{/* Inputs */}
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
						<Input
							name="Confirm Password"
							type="password"
							value={userData.confirmPassword}
							onChange={(e) => handleInputChange(e, "confirmPassword")}
						/>
					</div>
					<div>
						<button
							type="submit"
							className="bg-blue-400 p-2 pt-1 pb-1 rounded-sm w-16"
						>
							Submit
						</button>
					</div>
				</form>
				<div
					className={`mt-4 p-4 rounded-lg text-white w-[375px] h-[45px] flex items-center justify-center transition ${getBackgroundColor()}`}
				>
					{responseMessage || "Complete the fields"}
				</div>
			</div>
		</main>
	);
}
