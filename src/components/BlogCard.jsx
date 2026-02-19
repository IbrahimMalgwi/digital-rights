import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post, featured = false }) => {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Featured Blog Card
    if (featured) {
        return (
            <article className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                    {post.image ? (
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-4xl text-gray-400">📝</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{formattedDate}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        <Link to={`/blog/${post.id}`}>
                            {post.title}
                        </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                    </p>

                    {/* Author & Link */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-semibold text-sm mr-2">
                                {post.author.charAt(0)}
                            </div>
                            <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <Link
                            to={`/blog/${post.id}`}
                            className="text-primary-600 font-medium hover:text-primary-700 text-sm"
                        >
                            Read More →
                        </Link>
                    </div>
                </div>
            </article>
        );
    }

    // Regular Blog Card
    return (
        <article className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
                {post.image ? (
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl text-gray-400">📄</span>
                    </div>
                )}

                {/* Category Tag */}
                <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-medium rounded">
                    {post.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Meta */}
                <div className="flex items-center text-xs text-gray-500 mb-2">
                    <span>{formattedDate}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                </p>

                {/* Author & Link */}
                <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">By {post.author}</span>
                    <Link
                        to={`/blog/${post.id}`}
                        className="text-primary-600 text-sm font-medium hover:text-primary-700"
                    >
                        Read →
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;