import React, { useReducer } from 'react'
import { postsReducer, initialPosts } from "../reducers/postsReducer";
import { HandThumbDownIcon, HandThumbUpIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Posts() {
	
	const [posts, dispatch] = useReducer(postsReducer, initialPosts);
	
	return (
		<div className="container mx-auto my-16 bg-gray-100 rounded-lg">
			<div className="ml-8 pt-8 w-3/5 bg-inherit">
				<h2 className="title">All Posts</h2>
				{posts?.map(post => {
					return (
						<div class="card">
							<div class="p-6">
								<div className="px-2">
									<div className="flex justify-between items-center">
										<div>
											<h5 class="mb-1 text-xl font-medium leading-tight">
												{post?.title}
											</h5>
											<h6
												class="subtitle">
												{post?.subtitle}
											</h6>
										</div>
										<div 
											className="relative flex justify-center items-center"
										>
											<HeartIcon
												height={32}
												width={32}
												className="text-red-500 fill-red-500"
											/>
											<span
												className="absolute text-gray-50 text-xs font-normal"
											>{post?.likes}</span>
										</div>
									</div>
								</div>
								<p class="mb-4 text-base leading-normal bg-gray-50 p-2">
									{post?.content}
								</p>
								<div className="flex gap-4">
									<button
										type="button"
										class="btn-like"
										onClick={() => dispatch({ type: "unlike", payload: { id: post?.id }})}
									>
										<HandThumbDownIcon 
											height={20}
											width={20}
											className="text-red-400"
										/>
									</button>
									<button
										type="button"
										class="btn-like"
										onClick={() => dispatch({ type: "like", payload: { id: post?.id }})}	
									>
										<HandThumbUpIcon
											height={20}
											width={20}
											className="text-blue-700"
										/>
									</button>
								</div>
							</div>
						</div>
				)})}
			</div>
		</div>
	);
};


