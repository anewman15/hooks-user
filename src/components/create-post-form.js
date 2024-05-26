import { useState } from 'react'

export function CreatePostForm( { posts, dispatch }) {

	const initialFormData = { id: posts?.length + 1, title: "", subtitle: "", content: "", likes: 0 };
	const [postFormData, setPostFormData] = useState(initialFormData);

	const handleChange = e => {	
		setPostFormData({
			...postFormData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch( { type: "create", payload: postFormData });
		setPostFormData(initialFormData);
	};

	return (
		<div className="mx-auto">
			<h2 className="title">Create Post</h2>
			<form className="p-6 bg-white" onSubmit={handleSubmit}>
				<div className="form-control">
					<label 
						htmlFor="title"
						className="form-label"
					>
						Title
					</label>
					<input
						className="form-input"
						name="title"
						type="text"
						value={postFormData?.title}
						onChange={handleChange}
						placeholder="Add title"
					/>
				</div>
				<div className="form-control">
					<label
						htmlFor="subtitle"
						className="form-label"
					>
						Subtitle
					</label>
					<input
						className="form-input"
						name="subtitle"
						type="text"
						value={postFormData.subtitle}
						onChange={handleChange}
						placeholder="Add subtitle"
					/>
				</div>
				<div className="form-control">
					<label
						htmlFor="content"
						className="form-label"
					>
						Content
					</label>
					<textarea
						className="form-textarea"
						name="content"
						rows={7}
						cols={15}
						value={postFormData?.content}
						onChange={handleChange}
						placeholder="Add content"
					></textarea>
				</div>
				<button className="btn-primary" type="submit">Create</button>
			</form>
		</div>
	);
};
