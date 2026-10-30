import React, { useState } from 'react';
import { siteContent } from '../data/content';
import { getAssetUrl } from '../utils/assets.js';
import Hero from '../components/cards/Hero';

const mentalHealthDayCategoryPrefix = 'World Mental Health Day/Week 2026';

const mentalHealthDayLocations = [
    {
        name: 'Abuja',
        country: 'Nigeria',
        folders: ['WMHD-Abuja', 'WMHD-ABUJA'],
        prefixes: ['WMHDABJ'],
        count: 10,
        extensions: ['JPG', 'jpg', 'jpeg', 'JPEG']
    },
    {
        name: 'Nairobi',
        country: 'Kenya',
        folders: ['WMHD-Nairobi', 'WMHD-NAIROBI'],
        prefixes: ['WMHDNRB', 'WHMDNRB'],
        count: 10,
        extensions: ['jpg', 'JPG', 'jpeg', 'JPEG']
    },
    {
        name: 'Maiduguri',
        country: 'Nigeria',
        folders: ['WMHD-Maiduguri', 'WMHDMDG-Maiduguri'],
        prefixes: ['WMHDMDG'],
        count: 12,
        extensions: ['jpg', 'JPG', 'jpeg', 'JPEG']
    }
];

const mentalHealthDayCategories = mentalHealthDayLocations.map((location) => ({
    name: `${mentalHealthDayCategoryPrefix} · ${location.name}`,
    location: location.name,
    items: Array.from({ length: location.count }, (_, index) => {
        const suffix = index === 0 ? '' : index;
        const candidates = location.folders.flatMap((folder) =>
            location.prefixes.flatMap((prefix) =>
                location.extensions.map((extension) => `/images/${folder}/${prefix}${suffix}.${extension}`)
            )
        );

        return {
            id: `wmhd-${location.name}-${index}`,
            title: `World Mental Health Day/Week 2026 in ${location.name}`,
            image: candidates[0],
            imageCandidates: candidates,
            category: `${mentalHealthDayCategoryPrefix} · ${location.name}`,
            description: `A moment from the World Mental Health Day/Week 2026 collection in ${location.name}.`,
            location: `${location.name}, ${location.country}`,
            date: 'October 10, 2026'
        };
    })
}));

const categoryStyles = {
    'Community Outreach': { icon: '🤝', color: 'bg-primary-50 text-primary-700' },
    Webinars: { icon: '💻', color: 'bg-accent-50 text-accent-700' },
    Trainings: { icon: '🛠️', color: 'bg-secondary-100 text-secondary-800' },
    Conferences: { icon: '🎤', color: 'bg-primary-100 text-primary-800' },
    'Advocacy Campaigns': { icon: '📢', color: 'bg-accent-100 text-accent-800' },
    'Team Activities': { icon: '👥', color: 'bg-secondary-100 text-secondary-800' },
    'Partner Engagements': { icon: '🤝', color: 'bg-primary-50 text-primary-700' },
    'Media Appearances': { icon: '📺', color: 'bg-accent-50 text-accent-700' }
};

const getCategoryStyle = (category) => categoryStyles[category] || {
    icon: '📸',
    color: 'bg-primary-50 text-primary-700'
};

const GalleryImage = ({ item, alt, className }) => {
    if (!item.image) return null;

    const candidates = item.imageCandidates || [item.image];

    return (
        <img
            src={getAssetUrl(candidates[0])}
            alt={alt}
            className={className}
            loading="lazy"
            decoding="async"
            onError={(event) => {
                const image = event.currentTarget;
                const nextIndex = Number(image.dataset.fallbackIndex || 0) + 1;
                if (nextIndex < candidates.length) {
                    image.dataset.fallbackIndex = String(nextIndex);
                    image.src = getAssetUrl(candidates[nextIndex]);
                } else {
                    image.style.display = 'none';
                }
            }}
        />
    );
};

const Gallery = () => {
    const galleryItems = siteContent.gallery || [];
    const existingCategories = Array.from(new Set(galleryItems.map((item) => item.category)))
        .map((name) => ({
            name,
            items: galleryItems.filter((item) => item.category === name)
        }));
    const categories = [...mentalHealthDayCategories, ...existingCategories];
    const [activeCategory, setActiveCategory] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const activeCollection = categories.find((category) => category.name === activeCategory);
    const activeItems = activeCollection?.items || [];
    const categoryPanelId = 'gallery-panel';

    const Lightbox = ({ item, onClose }) => (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={onClose}
            role="presentation"
        >
            <div
                className="visual-panel relative w-full max-w-5xl animate-fade-in"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={item.title}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-secondary-900 shadow-lg transition-colors hover:bg-secondary-100"
                    aria-label="Close image preview"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="grid md:grid-cols-2">
                    <div className="relative flex min-h-72 items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100 md:min-h-[500px]">
                        <span className="text-6xl text-primary-400" aria-hidden="true">📷</span>
                        <GalleryImage
                            item={item}
                            alt={item.title}
                            className="absolute inset-0 h-full w-full object-contain"
                        />
                    </div>
                    <div className="p-6 md:p-8">
                        <span className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-medium ${getCategoryStyle(item.category).color}`}>
                            {item.category}
                        </span>
                        <h2 className="mb-2 text-2xl font-display font-bold text-secondary-900">{item.title}</h2>
                        <p className="mb-6 text-secondary-600">{item.description}</p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="card rounded-xl p-3">
                                <div className="mb-1 text-xs text-secondary-500">Location</div>
                                <div className="text-sm font-medium text-secondary-900">{item.location || 'N/A'}</div>
                            </div>
                            <div className="card rounded-xl p-3">
                                <div className="mb-1 text-xs text-secondary-500">Date</div>
                                <div className="text-sm font-medium text-secondary-900">{item.date || 'N/A'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="overflow-hidden">
            <Hero
                compact
                eyebrow="In the field"
                title="Our work in pictures"
                subtitle="Moments from community outreach, training, advocacy, partnerships, and events across Africa."
            />

            <section aria-labelledby="gallery-heading" className="bg-gradient-to-b from-primary-50 via-white to-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                        <span className="inline-flex rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800">
                            Community highlights
                        </span>
                        <h2 id="gallery-heading" className="mt-5 text-3xl font-display font-bold tracking-tight text-secondary-900 md:text-5xl">
                            Explore the gallery
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-secondary-600 md:text-lg">
                            Browse every collection, or choose a category to explore all its photos.
                        </p>
                    </header>

                    {!activeCollection && (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {categories.map((category) => {
                                const previewItems = category.items.slice(0, 2);
                                const color = getCategoryStyle(category.name).color;

                                return (
                                    <button
                                        key={category.name}
                                        type="button"
                                        onClick={() => {
                                            setActiveCategory(category.name);
                                            setSelectedImage(null);
                                        }}
                                        aria-label={`Open ${category.name}, ${category.items.length} photos`}
                                        className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-secondary-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                                    >
                                        <div className="grid aspect-[2/1] grid-cols-2 gap-1 overflow-hidden bg-secondary-100">
                                            {[0, 1].map((previewIndex) => {
                                                const item = previewItems[previewIndex];
                                                return (
                                                    <div key={item?.id || previewIndex} className="relative overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
                                                        <span className="absolute inset-0 flex items-center justify-center text-3xl text-primary-400" aria-hidden="true">📷</span>
                                                        {item && (
                                                            <GalleryImage
                                                                item={item}
                                                                alt={`${category.name} gallery preview ${previewIndex + 1}`}
                                                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="flex items-center justify-between gap-3 p-4 md:p-5">
                                            <div className="min-w-0">
                                                <span className={`mb-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${color}`}>
                                                    {category.name.startsWith(mentalHealthDayCategoryPrefix)
                                                        ? mentalHealthDayCategoryPrefix
                                                        : 'Gallery collection'}
                                                </span>
                                                <h3 className="truncate text-base font-semibold text-secondary-900 md:text-lg">
                                                    {category.name.startsWith(mentalHealthDayCategoryPrefix)
                                                        ? category.name.split(' · ')[1]
                                                        : category.name}
                                                </h3>
                                            </div>
                                            <span className="shrink-0 rounded-full bg-secondary-50 px-3 py-1 text-xs font-medium text-secondary-600">
                                                {category.items.length} photos
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {activeCollection && (
                <section
                    id={categoryPanelId}
                    role="region"
                    aria-labelledby="gallery-collection-heading"
                    className="page-section-white"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                            <div>
                                {activeCategory.startsWith(mentalHealthDayCategoryPrefix) && (
                                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
                                        {mentalHealthDayCategoryPrefix}
                                    </p>
                                )}
                                <h2 id="gallery-collection-heading" className="text-2xl font-display font-bold text-secondary-900 md:text-3xl">
                                    {activeCategory.startsWith(mentalHealthDayCategoryPrefix)
                                        ? activeCategory.split(' · ')[1]
                                        : activeCategory}
                                </h2>
                                <p className="mt-2 text-secondary-600">
                                    {activeItems.length} {activeItems.length === 1 ? 'photo' : 'photos'} in this collection
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                {activeCategory.startsWith(mentalHealthDayCategoryPrefix) && (
                                    <span className="rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-800">
                                        October 10, 2026
                                    </span>
                                )}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setActiveCategory('');
                                        setSelectedImage(null);
                                    }}
                                    className="rounded-full border border-secondary-200 bg-white px-4 py-2 text-sm font-semibold text-secondary-700 transition-colors hover:border-primary-300 hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                                >
                                    All categories
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {activeItems.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setSelectedImage(item)}
                                    aria-label={`View ${item.title}`}
                                    className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-secondary-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
                                        <span className="absolute inset-0 flex items-center justify-center text-5xl text-primary-400" aria-hidden="true">📷</span>
                                        <GalleryImage
                                            item={item}
                                            alt={item.title}
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                            {item.location || item.category}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-secondary-900 group-hover:text-primary-700">{item.title}</h3>
                                        {item.description && (
                                            <p className="mt-1 line-clamp-2 text-sm text-secondary-500">{item.description}</p>
                                        )}
                                        {item.date && <p className="mt-3 text-xs text-secondary-400">{item.date}</p>}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {selectedImage && <Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} />}
        </div>
    );
};

export default Gallery;
