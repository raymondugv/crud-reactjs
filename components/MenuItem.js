import Link from "next/link";

function MenuItem({ href, title }) {
	return (
		<Link href={href} passHref>
			<a>{title}</a>
		</Link>
	);
}

export default MenuItem;
