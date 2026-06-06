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
            <article className="group card-hover overflow-hidden h-full flex flex-col">
                <div className="relative h-72 bg-gradient-to-br from-secondary-950 via-primary-700 to-accent-600 overflow-hidden">
                    {post.image ? (
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" decoding="async" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-6xl text-white/30">📝</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/75 via-secondary-950/10 to-transparent" />
                    <span className="absolute left-5 top-5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-secondary-900 shadow-soft backdrop-blur">
                        {post.category}
                    </span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center text-xs text-secondary-500 mb-3">
                        <span>{formattedDate}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-secondary-950 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-secondary-600 mb-5 flex-1 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                        <span className="text-xs text-secondary-500 font-medium">By {post.author}</span>
                        <Link to={`/blog/${post.id}`} className="text-sm text-primary-700 font-bold hover:text-accent-700 transition-colors flex items-center">
                            Read more
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article className="group card-hover overflow-hidden h-full flex flex-col">
            <div className="relative h-52 bg-gradient-to-br from-secondary-950 via-primary-600 to-accent-500 overflow-hidden">
                {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" decoding="async" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl text-white/30">📄</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/65 to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm text-secondary-700 text-xs font-semibold rounded-full">
                    {post.category}
                </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-xs text-secondary-500 mb-2">
                    <span>{formattedDate}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-950 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-secondary-600 mb-5 flex-1 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-3 border-t border-secondary-100">
                    <span className="text-xs text-secondary-500 font-medium">By {post.author}</span>
                    <Link to={`/blog/${post.id}`} className="text-sm text-primary-700 font-bold hover:text-accent-700 transition-colors flex items-center">
                        Read
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
