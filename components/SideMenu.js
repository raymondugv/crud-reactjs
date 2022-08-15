import Link from "next/link";
import MenuItem from "./MenuItem";

function SideMenu() {
	return (
		<ul className="menu p-4 overflow-y-auto w-60 bg-gray-100 text-base-content">
			<li>
				<MenuItem href="/" title="Dashboard" />
			</li>
			<li>
				<MenuItem href="/posts" title="List" />
			</li>
			<li>
				<MenuItem href="/users" title="Users"></MenuItem>
			</li>
		</ul>
	);
}

export default SideMenu;
