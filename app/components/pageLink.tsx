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
				isCurrent ? "text-primary hover:scale-110 hover:duration-300" : "text-dark hover:scale-110 hover:duration-300"
			}`}
		>
			{title}
		</Link>
	);
}
