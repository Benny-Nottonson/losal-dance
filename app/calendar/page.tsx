"use client";
export default function Calendar() {
	return (
		<main className="flex h-auto flex-col items-center justify-between bg-stone-800">
			<section className="flex flex-col items-center justify-center w-full h-auto bg-dark">
				<h1 className="text-white text-center text-2xl p-2">
					2021-2022 Dance Program Calendar
				</h1>
			</section>
			<div className="flex flex-col items-center justify-center w-full bg-white">
				<iframe src="https://calendar.google.com/calendar/embed?src=09c0b109f3a568808d41a142eeff0e8e1ae186067cba8e03d52890ba752cec4e%40group.calendar.google.com&ctz=America%2FLos_Angeles" className="border-0" width="800" height="600" />
			</div>
		</main>
	);
}
