import React from "react";

interface InputProps {
	name: string;
	type: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ name, type, value, onChange }: InputProps) {
	return (
		<div className="flex">
			<div className="flex items-center justify-center text-zinc-300 text-ld w-1/3 p-3 bg-zinc-700 rounded-sm rounded-e-none">
				{name}
			</div>
			<input
				type={type}
				value={value}
				onChange={onChange}
				className="bg-zinc-600 focus:border-zinc-800 text-zinc-300 rounded-sm rounded-s-none w-400 focus:outline-none p-3 caret-zinc-300"
			/>
		</div>
	);
}
