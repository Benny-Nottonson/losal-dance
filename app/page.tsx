"use client";
import YoutubeVideo from "./components/youtube";
import Carousel from "./components/carousel";
import { CircleDollarSign } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-white">
			<section className="flex flex-col items-center justify-center w-full h-auto">
				<section className="flex flex-col items-center justify-center w-full h-auto bg-dark">
					<h1 className="text-white text-center text-2xl italic p-2">
						We are artists <br /> We are athletes <br /> We are musicians <br />{" "}
						We are Los Al Dance
					</h1>
				</section>
				<section className="pt-8">
					<YoutubeVideo videoId="BVCNGxNCWzI" />
				</section>
				<Carousel />
				<section className="bg-dark w-full h-auto">
					<h1 className="text-white text-center text-2xl pt-4 pb-4">
						Support the dance program!
					</h1>
					<div className="mb-4 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-center h-auto">
						<Link
							href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
							className="group"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h2
								className={
									"mb-3 text-2xl font-semibold group-hover:scale-110 duration-300"
								}
							>
								Venmo{" "}
								<span className="inline-block translate-y-1.5 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
									<CircleDollarSign size={24} />
								</span>
							</h2>
						</Link>
						<Link
							href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
							className="group"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h2
								className={
									"mb-3 text-2xl font-semibold group-hover:scale-110 duration-300"
								}
							>
								Paypal{" "}
								<span className="inline-block translate-y-1.5 transition-transform group-hover:translate-x-1 motion-reduce:transform-none duration-300">
									<CircleDollarSign size={24} />
								</span>
							</h2>
						</Link>
					</div>
				</section>
			</section>
		</main>
	);
}
