import Head from "next/head";
import Link from "next/link";

const PostIndex = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Posts</title>
			</Head>

			<div className="grid grid-cols-2 gap-4 mb-4">
				<div>
					<h1>Posts</h1>
				</div>
				<div className="text-end">
					<a href="/posts/create" className="btn btn-primary">
						Create new Post
					</a>
				</div>
			</div>

			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Title</th>
							<th>Slug</th>
							<th>Category</th>
							<th>Description</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{posts.map((post, index) => {
							return (
								<tr key={index}>
									<th>{post.id}</th>
									<td>{post.title}</td>
									<td>{post.slug}</td>
									<td>{post.category_id}</td>
									<td>{post.description}</td>
									<td className="text-end">
										<a href={"/posts/" + post.id}>
											<button className="btn btn-circle btn-sm">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
												</svg>
											</button>
										</a>
										<a href="#">
											<button className="btn btn-circle btn-error btn-sm ml-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
														clipRule="evenodd"
													/>
												</svg>
											</button>
										</a>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export async function getServerSideProps() {
	const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts");
	const data = await res.json();

	return {
		props: {
			posts: data.posts,
		},
	};
}

export default PostIndex;
