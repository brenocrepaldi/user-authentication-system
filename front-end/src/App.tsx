import { Input } from "./components/Input";

export function App() {
	return (
		<main className="bg-zinc-900 h-screen flex flex-col justify-center items-center">
			<div className="flex flex-col gap-4 justify-center items-center">
				{/* Inputs */}
				<div className="flex flex-col gap-5">
					<Input name="User" />
					<Input name="Email" />
					<Input name="Password" />
				</div>

				<div>
					<button className="bg-blue-400 p-2 pt-1 pb-1 rounded-sm w-16">
						Entrar
					</button>
				</div>
			</div>
		</main>
	);
}
