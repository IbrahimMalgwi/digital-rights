import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post, featured = false, variant = 'default' }) => {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Featured Blog Card (Hero/Featured section)
    if (featured) {
        return (
            <article className="group relative bg-white rounded-2xl overflow-hidden card-hover">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

                {/* Background Image */}
                <div className="relative h-[500px] overflow-hidden">
                    {post.image ? (
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center">
                            <div className="text-center text-white">
                                <span className="text-8xl mb-4 block">📝</span>
                                <p className="text-xl font-display font-semibold">Featured Article</p>
                            </div>
                        </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 z-20">
                        <span className="inline-flex items-center px-4 py-2 bg-white/95 backdrop-blur-sm text-primary-600 rounded-full text-sm font-semibold shadow-soft">
                            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
                            {post.category}
                        </span>
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 text-white/80 text-sm mb-3">
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-white/80 text-lg mb-6 max-w-3xl line-clamp-2">
                        {post.excerpt}
                    </p>

                    {/* Author and Link */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-white font-medium">{post.author}</p>
                                <p className="text-white/60 text-sm">Author</p>
                            </div>
                        </div>

                        <Link
                            to={`/blog/${post.id}`}
                            className="group/btn inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-soft"
                        >
                            Read Full Article
                            <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </article>
        );
    }

    // Regular Blog Card with multiple variants
    return (
        <article className={`
            group bg-white rounded-2xl overflow-hidden transition-all duration-500
            ${variant === 'horizontal' ? 'flex flex-col md:flex-row' : ''}
            ${variant === 'minimal' ? 'border-none shadow-none hover:shadow-soft' : 'card-hover border border-gray-100'}
        `}>
            {/* Image Section */}
            <div className={`
                relative overflow-hidden
                ${variant === 'horizontal' ? 'md:w-2/5 h-64 md:h-auto' : 'h-52'}
            `}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>

                {post.image ? (
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center">
                        <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">📄</span>
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center px-3 py-1.5 bg-white/95 backdrop-blur-sm text-primary-600 rounded-full text-xs font-semibold shadow-soft">
                        {post.category}
                    </span>
                </div>

                {/* Reading Time Badge */}
                <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center px-3 py-1.5 bg-primary-600 text-white rounded-full text-xs font-semibold shadow-soft">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className={`
                ${variant === 'horizontal' ? 'md:w-3/5 p-8' : 'p-6'}
            `}>
                {/* Meta Information */}
                <div className="flex items-center text-sm text-secondary-500 mb-3">
                    <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{formattedDate}</span>
                    </div>

                    {variant !== 'minimal' && (
                        <>
                            <span className="mx-2">•</span>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>{post.author}</span>
                            </div>
                        </>
                    )}
                </div>

                {/* Title */}
                <h3 className={`
                    font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors cursor-pointer
                    ${featured ? 'text-3xl' : variant === 'horizontal' ? 'text-2xl' : 'text-xl'}
                `}>
                    <Link to={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-secondary-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                </p>

                {/* Author (for minimal variant) */}
                {variant === 'minimal' && (
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {post.author.charAt(0)}
                        </div>
                        <span className="text-sm text-secondary-600">{post.author}</span>
                    </div>
                )}

                {/* Read More Link */}
                <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group/link"
                >
                    <span>Read More</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </article>
    );
};

export default BlogCard;