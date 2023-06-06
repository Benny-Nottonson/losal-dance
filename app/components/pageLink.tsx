import Link from "next/link";

interface PageLinkProps {
	title: string;
	current: string;
}

export default function PageLink({
	title,
	current,
}: PageLinkProps): JSX.Element {
	const isCurrent = current.toLowerCase().slice(1) === title.toLowerCase();
	return (
		<Link
			href={`/${title.toLowerCase()}`}
			className={`duration-200 ${
				isCurrent ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"
			}`}
		>
			{title}
		</Link>
	);
}
