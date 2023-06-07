"use client";

import { useEffect, useState } from "react";

export default function Placement() {
	const getFile = async (level: string) => {
		try {
			const response = await fetch(`${level}.mdx`);
			if (response.ok) {
				const placementList = await response.text();
				const placements = placementList
					.split("\n")
					.filter((name) => name.trim() !== "");
				return placements;
			} else {
				console.error("Error fetching file names:", response.statusText);
				return [];
			}
		} catch (error) {
			console.error("Error fetching file names:", error);
			return [];
		}
	};

	const [beginning, setBeginning] = useState<string[]>([]);
	const [intermediate1, setIntermediate1] = useState<string[]>([]);
	const [intermediate2, setIntermediate2] = useState<string[]>([]);
	const [intermediate3, setIntermediate3] = useState<string[]>([]);
	const [advanced, setAdvanced] = useState<string[]>([]);

	useEffect(() => {
		const fetchFileNames = async () => {
			setBeginning(await getFile("placement/beginning"));
			setIntermediate1(await getFile("placement/intermediate1"));
			setIntermediate2(await getFile("placement/intermediate2"));
			setIntermediate3(await getFile("placement/intermediate3"));
			setAdvanced(await getFile("placement/advanced"));
		};

		fetchFileNames();
	}, []);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-stone-800">
			<section className="flex flex-col items-center justify-center w-full h-auto bg-dark">
				<h1 className="text-white text-center text-2xl p-2">Placement</h1>
			</section>
			<section className="flex flex-col items-center justify-center w-full bg-white">
				<div className="flex flex-col items-center justify-center w-full h-auto bg-white">
					<h1 className="text-dark text-center text-2xl p-2">Beginning</h1>
					{beginning.map((name) => (
						<div key={name} className="text-dark text-center text-2xl p-2">
							{name}
						</div>
					))}
				</div>
				<div className="flex flex-col items-center justify-center w-full h-auto bg-white">
					<h1 className="text-dark text-center text-2xl p-2">Intermediate 1</h1>
					<div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
						{intermediate1.map((name) => (
							<div key={name} className="text-dark text-center text-2xl p-2">
								{name}
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col items-center justify-center w-full h-auto bg-white">
					<h1 className="text-dark text-center text-2xl p-2">Intermediate 2</h1>
					{intermediate2.map((name) => (
						<div key={name} className="text-dark text-center text-2xl p-2">
							{name}
						</div>
					))}
				</div>
				<div className="flex flex-col items-center justify-center w-full h-auto bg-white">
					<h1 className="text-dark text-center text-2xl p-2">Intermediate 3</h1>
					{intermediate3.map((name) => (
						<div key={name} className="text-dark text-center text-2xl p-2">
							{name}
						</div>
					))}
				</div>
				<div className="flex flex-col items-center justify-center w-full h-auto bg-white">
					<h1 className="text-dark text-center text-2xl p-2">Advanced</h1>
					{advanced.map((name) => (
						<div key={name} className="text-dark text-center text-2xl p-2">
							{name}
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
