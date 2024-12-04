import { Icon, MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";

const PostsComponent = ({ allPosts }) => {
	const postsPerPage = 5;
	const totalPages = Math.ceil(allPosts.length / postsPerPage);

	const lastPage = totalPages;
	const maxDisplayedPages = 5;
	const [currentPage, setCurrentPage] = useState(1);
	const [paginatedPosts, setPaginatedPosts] = useState(
		allPosts.slice(
			(currentPage - 1) * postsPerPage,
			currentPage * postsPerPage,
		),
	);

	const startPage = Math.max(
		1,
		Math.min(
			currentPage - Math.floor(maxDisplayedPages / 2),
			lastPage - maxDisplayedPages + 1,
		),
	);
	const endPage = Math.min(lastPage, startPage + maxDisplayedPages - 1);

	return (
		<>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-8 p-4">
				{paginatedPosts.map((post) => (
					<div className="relative overflow-hidden mx-auto rounded-xl p-4 bg-white border-2 transition-transform duration-500 hover:-translate-y-1 hover:scale-105 dark:bg-neutral-900 m-4 flex flex-col">
						<a
							href={`/posts/documentation/${post.slug}/`}
							className="block flex-grow"
						>
							<img
								src={post.data.coverSrc}
								alt=""
								className="w-auto h-auto object-contain"
							/>
						</a>
						<div className="text-center mt-auto">
							<p className="text-xl">{post.data.title}</p>
						</div>
					</div>
				))}
			</div>
			<nav
				className="mb-8 flex items-center text-black justify-center gap-x-1"
				aria-label="Pagination"
			>
				<button
					onClick={() => {
						setCurrentPage(currentPage - 1);
						setPaginatedPosts(
							allPosts.slice(
								(currentPage - 2) * postsPerPage,
								(currentPage - 1) * postsPerPage,
							),
						);
					}}
					aria-label="Previous page"
					className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-1.5 rounded-lg px-2.5 py-2 text-sm"
				>
					<MoveLeft />
				</button>

				<ul className="flex items-center gap-x-1">
					{Array.from({ length: endPage - startPage + 1 }, (_, i) => {
						const pageNumber = startPage + i;
						const isActive = currentPage === pageNumber;
						const pageClass = `min-h-[38px] min-w-[38px] flex justify-center items-center py-2 px-3 text-sm rounded-lg ${isActive ? "bg-neutral-200 focus:bg-neutral-300 dark:bg-neutral-600 dark:focus:bg-neutral-500 dark:text-white" : "text-neutral-800 hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100"}`;
						return (
							<li key={pageNumber}>
								<button
									onClick={() => {
										setCurrentPage(pageNumber);
										setPaginatedPosts(
											allPosts.slice(
												(pageNumber - 1) * postsPerPage,
												pageNumber * postsPerPage,
											),
										);
									}}
									className={pageClass}
								>
									{pageNumber}
								</button>
							</li>
						);
					})}
				</ul>

				<button
					onClick={() => {
						setCurrentPage(currentPage + 1);
						setPaginatedPosts(
							allPosts.slice(
								currentPage * postsPerPage,
								(currentPage + 1) * postsPerPage,
							),
						);
					}}
					aria-label="Next page"
					className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-1.5 rounded-lg px-2.5 py-2 text-sm"
				>
					<MoveRight />
				</button>
			</nav>
		</>
	);
};

export default PostsComponent;
