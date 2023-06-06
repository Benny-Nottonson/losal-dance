"use client";
import YoutubeVideo from "./components/youtube";
import Carousel from "./components/carousel";
import { CircleDollarSign } from "lucide-react";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-stone-800">
			<section className="flex flex-col items-center justify-center w-full h-auto">
				<section className="flex flex-col items-center justify-center w-full h-auto bg-dark">
					<h1 className="text-white text-center text-2xl italic">
						We are artists <br /> We are athletes <br /> We are musicians <br />{" "}
						We are Los Al Dance
					</h1>
				</section>
				<section className="pt-8">
					<YoutubeVideo videoId="BVCNGxNCWzI" />
				</section>
				<Carousel />
				<section className="bg-dark w-full h-40">
					<h1 className="text-white text-center text-2xl pt-4 pb-4">
						Support the dance program!
					</h1>
					<div className="mb-20 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-center h-auto">
						<a
							href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
							className="group rounded-lg border border-transparent px-16 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h2 className={"mb-3 text-2xl font-semibold text-green-400"}>
								Venmo{" "}
								<span className="inline-block translate-y-1.5 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
									<CircleDollarSign size={24} />
								</span>
							</h2>
						</a>
						<a
							href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
							className="group rounded-lg border border-transparent px-16 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h2 className={"mb-3 text-2xl font-semibold text-green-400"}>
								Paypal{" "}
								<span className="inline-block translate-y-1.5 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
									<CircleDollarSign size={24} />
								</span>
							</h2>
						</a>
					</div>
				</section>
			</section>
		</main>
	);
}
