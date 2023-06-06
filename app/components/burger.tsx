import { useState } from "react";
import PageLink from "./pageLink.tsx";

interface HamburgerMenuProps {
	links: string[];
	current: string;
}

export default function HamburgerMenu({
	links,
	current,
}: HamburgerMenuProps): JSX.Element {
	const [open, setOpen] = useState(false);
	const pageLinks = links.map((link) => {
		return <PageLink key={link} title={link} current={current} />;
	});
	const toggleMenu = () => {
		setOpen(!open);
	};
	return (
		<div className="relative flex flex-col items-end justify-center w-12 h-12">
			<button
				className="absolute z-10 w-12 h-12 p-2 text-zinc-100 rounded-full focus:outline-none"
				onClick={toggleMenu}
			>
				<span className="sr-only">Open main menu</span>
				<svg className="w-full h-full" viewBox="0 0 24 24" aria-hidden="true">
					{open ? (
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 111.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 010-1.414z"
							fill="currentColor"
						/>
					) : (
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
							fill="currentColor"
						/>
					)}
				</svg>
			</button>
			<div
				className={`absolute z-0 w-70 bg-slate-800/75 translate-y-48 text-xl py-2 mt-2 rounded-md shadow-lg right-0 origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none ${
					open ? "block" : "hidden"
				}`}
			>
				<div className="flex flex-col items-end justify-center w-full h-full space-y-2 p-4">
					{pageLinks}
				</div>
			</div>
		</div>
	);
}
