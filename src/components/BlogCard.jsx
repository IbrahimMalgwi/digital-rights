import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post, featured = false }) => {
    if (featured) {
        return (
            <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-4xl">
                        {post.image ? (
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        ) : (
                            <div className="text-center p-8">
                                <div className="text-6xl mb-4">📱</div>
                                <p className="text-lg font-semibold">Blog Image</p>
                            </div>
                        )}
                    </div>
                    <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
                    </div>
                </div>
                <div className="p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <span className="mx-2">•</span>
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors cursor-pointer">
                        {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
            <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
                        <Link
                            to={`/blog/${post.id}`}
                            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center group"
                        >
                            Read More
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl">
                    {post.image ? (
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <div className="text-center p-6">
                            <div className="text-4xl mb-2">💡</div>
                            <p className="text-sm font-semibold">Blog Image</p>
                        </div>
                    )}
                </div>
                <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-2 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors cursor-pointer">
                    {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">By {post.author}</span>
                    <Link
                        to={`/blog/${post.id}`}
                        className="text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm flex items-center group"
                    >
                        Read
                        <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;