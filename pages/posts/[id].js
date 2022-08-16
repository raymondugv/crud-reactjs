import { useRouter } from "next/router";
import Head from "next/head";

function PostDetail({ post }) {
	const router = useRouter();
	const {
		query: { id },
	} = router;

	const title = post.title ? "Edit `" + post.title + "`" : "Create new Post";
	const textBtn = post.title ? "Update" : "Create";

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<h1>{title}</h1>

			<div className="card w-100 bg-gray-100 shadow-xl">
				<form action="#">
					<div className="card-body">
						<div className="grid grid-cols-2 gap-4">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Title</span>
									<span className="label-text-alt text-red-600">
										required*
									</span>
								</label>
								<input
									type="text"
									placeholder="Post title"
									className="input input-bordered w-full"
									required
									name="title"
									value={post.title}
								/>
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Slug</span>
									<span className="label-text-alt text-red-600">
										required*
									</span>
								</label>
								<input
									type="text"
									placeholder="post-url"
									className="input input-bordered w-full"
									required
									name="slug"
									value={post.slug}
								/>
							</div>
						</div>

						<div className="form-control w-1/2">
							<label className="label">
								<span className="label-text">Category</span>
								<span className="label-text-alt">required</span>
							</label>
							<select
								className="select select-bordered"
								name="category_id"
							>
								<option disabled selected>
									Pick one
								</option>
								<option>Category 1</option>
								<option>Category 2</option>
							</select>
						</div>

						<div className="form-control">
							<label className="label">
								<span className="label-text">Description</span>
							</label>
							<textarea
								className="textarea textarea-bordered h-24"
								name="description"
								placeholder="Description"
							>
								{post.description}
							</textarea>
						</div>

						<div className="card-actions justify-center mt-4">
							<button className="btn btn-primary" type="submit">
								{textBtn}
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
	const { id } = context.params;
	const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/" + id);
	const data = await res.json();

	return {
		props: {
			post: data.post,
		},
	};
}

export default PostDetail;
