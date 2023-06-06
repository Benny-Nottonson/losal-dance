"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./burger";
import PageLink from "./pageLink.tsx";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [burgerMenu, setBurgerMenu] = useState(false);
	const pathname = usePathname();
	const isHome = pathname === "/";
	const getPages = () => {
		const pages = [
			"Clinic",
			"Tickets",
			"Camp",
			"Volunteer",
			"Audition",
			"Calendar",
			"Handouts",
			"Placement",
		];
		return pages;
	};
	const pages = getPages();
	const links = pages.map((page) => {
		return <PageLink key={page} title={page} current={pathname} />;
	});
	const burger = <HamburgerMenu links={pages} current={pathname} />;

	const widthNeeded = () => {
		const padding = 20;
		const characterWidth = 17;
		const width = pages.reduce((acc, page) => {
			return acc + page.length;
		}, 0);
		return width * characterWidth + padding;
	};
	const checkBurgerMenu = () => {
		const width = widthNeeded();
		const pageWidth = window.innerWidth;
		if (width > pageWidth) {
			setBurgerMenu(true);
		} else {
			setBurgerMenu(false);
		}
	};
	useEffect(() => {
		checkBurgerMenu();
	}, [pathname]);
	useEffect(() => {
		window.addEventListener("resize", checkBurgerMenu);
		return () => window.removeEventListener("resize", checkBurgerMenu);
	}, []);
	return (
		<nav
			ref={ref}
			className="block z-50 flex items-center justify-center w-full h-16 px-20 border-b-4 border-primary bg-white"
		>
			<div className="flex items-center justify-between w-full h-full space-x-10">
				<div className="flex items-center justify-start w-full h-full">
					{!isHome && (
						<Link
							href="/"
							className="duration-200 text-dark hover:scale-110 hover:duration-300"
						>
							<ArrowLeft className="w-6 h-6 " />
						</Link>
					)}
				</div>
				{burgerMenu ? burger : links}
			</div>
		</nav>
	);
};

export default Navigation;
