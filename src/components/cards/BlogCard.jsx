import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post, featured = false }) => {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    if (featured) {
        return (
            <article className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-64 bg-gradient-to-br from-amber-500 to-emerald-600">
                    {post.image ? (
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-6xl text-white/30">📝</span>
                        </div>
                    )}
                </div>
                <div className="p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span>{formattedDate}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">By {post.author}</span>
                        <Link to={`/blog/${post.id}`} className="text-sm text-gray-900 font-medium hover:text-gray-700">
                            Read more →
                        </Link>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
            <div className="relative h-48 bg-gradient-to-br from-amber-500 to-emerald-600">
                {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl text-white/30">📄</span>
                    </div>
                )}
                <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium rounded-full">
                    {post.category}
                </span>
            </div>
            <div className="p-5">
                <div className="flex items-center text-xs text-gray-400 mb-2">
                    <span>{formattedDate}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">By {post.author}</span>
                    <Link to={`/blog/${post.id}`} className="text-sm text-gray-900 font-medium hover:text-gray-700">
                        Read →
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;