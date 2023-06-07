"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { saveAs } from "file-saver";

export default function Handouts(): JSX.Element {
	const [fileNames, setFileNames] = useState<string[]>([]);

	useEffect(() => {
		const fetchFileNames = async () => {
			try {
				const response = await fetch("handout-pdfs.txt");
				if (response.ok) {
					const fileList = await response.text();
					const fileNames = fileList
						.split("\n")
						.filter((name) => name.trim() !== "");
					setFileNames(fileNames);
				} else {
					console.error("Error fetching file names:", response.statusText);
				}
			} catch (error) {
				console.error("Error fetching file names:", error);
			}
		};

		fetchFileNames();
	}, []);

	return (
		<main className="flex  flex-col items-center justify-between bg-stone-800">
			<section className="flex flex-col items-center justify-center w-full h-auto bg-dark">
				<h1 className="text-white text-center text-2xl p-2">Handouts</h1>
			</section>
			<section className="flex flex-col items-center justify-center w-full bg-white">
				{fileNames.map((fileName) => (
					<div className="p-4">
						<Link
							href={`/handouts/${fileName}`}
							className="flex items-center justify-center w-full h-16 p-4 text-2xl text-white bg-dark hover:scale-105 hover:duration-300"
							download
							onClick={(e) => {
								e.preventDefault();
								saveAs(`/handouts/${fileName}`, fileName);
							}}
						>
							<Download className="w-8 h-8 mr-2" />
							{fileName}
						</Link>
						<object
							key={fileName}
							data={`/handouts/${fileName}`}
							className="p-8 h-pdf"
							type="application/pdf"
						>
							<div className="text-dark">No online PDF viewer installed</div>
						</object>
					</div>
				))}
			</section>
		</main>
	);
}
