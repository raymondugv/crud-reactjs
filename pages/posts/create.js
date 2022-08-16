import axios from "axios";
import Head from "next/head";
import { useState } from "react";

function CreatePost() {
	const [query] = useState({});

	const createPost = async (e) => {
		e.preventDefault();
		const data = {
			title: e.target.title.value,
			slug: e.target.slug.value,
			category_id: e.target.category_id.value,
			description: e.target.description.value,
		};

		axios
			.post(process.env.NEXT_PUBLIC_API_URL + "/posts", data)
			.then((res) => {
				console.log(res);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<>
			<Head>
				<title>Create new Post</title>
			</Head>

			<h1>Create new Post</h1>

			<div className="card w-100 bg-gray-100 shadow-xl">
				<form onSubmit={createPost} method="POST">
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
								<option value="1">Category 1</option>
								<option value="2">Category 2</option>
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
							></textarea>
						</div>

						<div className="card-actions justify-center mt-4">
							<button className="btn btn-primary" type="submit">
								Create
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default CreatePost;
