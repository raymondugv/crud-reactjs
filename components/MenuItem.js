import Link from "next/link";

const MenuItem = ({ href, title }) => {
	return (
		<Link href={href} passHref>
			<a>{title}</a>
		</Link>
	);
};

export default MenuItem;
