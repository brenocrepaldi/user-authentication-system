import React, { useState } from "react";
import { Input } from "./Input";

export function Form() {
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
			const response = await fetch("/user/authenticate", {
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

			// Reset input values after successful authentication
			setUserData({
				user: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error("Error submitting data:", error);
				setResponseMessage(error.message || "Error submitting data");
			} else {
				console.error("Unknown error:", error);
				setResponseMessage("Unknown error occurred");
			}
		}
	};

	// Determine the background color based on the response message
	const handleBackgroundColor = () => {
		if (responseMessage) {
			return responseMessage.startsWith("Authenticated user:")
				? "bg-green-500"
				: "bg-red-500";
		}
		return "bg-zinc-700";
	};

	return (
		<div className="w-[1000px] min-h-[500px] bg-zinc-800 p-8 rounded-lg flex flex-col items-center">
			<form
				onSubmit={getUserCredentials}
				className="flex flex-col gap-5 justify-center items-center"
			>
				<div
					className={`mt-4 p-4 rounded-lg text-white text-lg w-[555px] h-[45px] flex items-center justify-center transition ${handleBackgroundColor()}`}
				>
					{responseMessage || "Complete the fields"}
				</div>
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
				<button
					type="submit"
					className="bg-blue-500 text-white text-lg p-2 pt-1 pb-1 rounded-sm w-[350px] h-[45px] transition-colors duration-300 ease-in-out hover:bg-blue-400 hover:text-blue-900"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
