import React from "react";
import { Instagram, Facebook, Music2 as Tiktok } from "lucide-react";

export default function Footer(): JSX.Element {
	return (
		<footer className="flex flex-col items-center justify-center w-full h-48 px-20 py-10 space-y-10 border-t-2 border-zinc-400 bg-black">
			<div className="flex items-center justify-center w-full h-20 space-x-10">
				<div className="flex items-center justify-start w-full h-20">
					<h1 className="text-sm font-bold text-center text-zinc-100">
						All rights reserved,
						<br /> Losal Dance
					</h1>
				</div>
				<div className="flex flex-col items-center justify-center w-full h-40 ml-0">
					<h1 className="text-xl font-bold text-center text-zinc-100">
						Follow us
					</h1>
					<div className="flex items-center justify-center w-full h-20 space-x-10 ">
						<a
							href="https://www.instagram.com/losaldanceprogram/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Instagram className="w-8 h-8 text-zinc-100" />
						</a>
						<a
							href="https://www.facebook.com/losaldanceprogram/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Facebook className="w-8 h-8 text-zinc-100" />
						</a>
						<a
							href="https://www.tiktok.com/@losaldanceprogram?lang=en"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Tiktok className="w-8 h-8 text-zinc-100" />
						</a>
					</div>
				</div>
				<div className="flex items-center justify-end w-full h-20">
					<h1 className="text-sm font-bold text-center text-zinc-100">
						Los Alamitos HS <br />
						3591 Cerritos Ave. <br />
						Los Alamitos, CA 90720
					</h1>
				</div>
			</div>
		</footer>
	);
}
