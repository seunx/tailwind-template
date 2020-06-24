import React from 'react';

import BlogCard from '../components/Cards/BlogCard';
import BlogCard2 from '../components/Cards/BlogCard2';
import BlogCard3 from '../components/Cards/BlogCard3';
import BlogCard4 from '../components/Cards/BlogCard4';
import Divider from '../components/Dividers/Divider';
import BlogCard5 from '../components/Cards/BlogCard5';

const Blog = () => {
	return (
		<section className="text-gray-700 body-font">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap -m-4">
					<BlogCard />
					<BlogCard2 />
					<BlogCard />
				</div>
				<div className="flex flex-wrap -m-12">
					<BlogCard3 />
					<BlogCard3 />
				</div>
				<div className="-my-8">
					<BlogCard4 />
					<Divider />
					<BlogCard4 />
					<Divider />
					<BlogCard4 />
					<Divider />
				</div>
				<div className="flex flex-wrap -mx-4 -my-8">
					<BlogCard5 />
					<BlogCard5 />
					<BlogCard5 />
				</div>
			</div>
		</section>
	);
};

export default Blog;
