import { Form } from "./components/Form";
import { UserList } from "./components/UserList";

export function App() {
	return (
		<main className="bg-zinc-900 h-screen flex flex-col items-center gap-10 overflow-auto p-[50px]">
			<Form />
			<UserList />
		</main>
	);
}
