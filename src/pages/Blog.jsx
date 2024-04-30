import { useEffect, useState } from 'react';

import { BlogCard } from '../components/BlogCard';

import './Blog.css';

export const Blog = () => {
	const [blogs, setBlogs] = useState([]);

	const fetchData = () => {
		fetch('http://localhost:3000/api/blogData.json')
			.then((response) => response.json())
			.then((data) => setBlogs(data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<section id="blogs" className="blogs">
			<div className="container-fluid">
				<div className="row">
					<h4 className="section-title">Our Blog</h4>
				</div>
				<div className="row mt-5">
					{blogs &&
						blogs.length > 0 &&
						blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
				</div>
			</div>
		</section>
	);
};
