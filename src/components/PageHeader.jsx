import React from 'react';

const PageHeader = ({
                        title,
                        subtitle,
                        background = "bg-white",
                        textColor = "text-gray-900",
                        showBorder = true
                    }) => {
    return (
        <section className={`${background} ${textColor} py-16 md:py-24`}>
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Breadcrumb or category can be added here */}
                    {/* <div className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
                        Category • Breadcrumb
                    </div> */}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                            {subtitle}
                        </p>
                    )}

                    {showBorder && (
                        <div className="flex justify-center items-center space-x-4">
                            <div className="w-12 h-0.5 bg-primary-500 rounded-full"></div>
                            <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                            <div className="w-12 h-0.5 bg-primary-500 rounded-full"></div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageHeader;