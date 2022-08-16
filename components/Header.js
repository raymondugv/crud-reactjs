import Image from "next/image";

const Header = () => {
	return (
		<div className="navbar bg-gray-100">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">
					CRUD Project
				</a>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
					<label
						tabIndex="0"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="avatar">
							<div className="w-24 rounded-full">
								<Image
									alt="avatar"
									src="https://placeimg.com/192/192/people"
									layout="fill"
								/>
							</div>
						</div>
					</label>
					<ul
						tabIndex="0"
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-box w-52"
					>
						<li>
							<a>Profile</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
