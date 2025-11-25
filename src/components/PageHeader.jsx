import React from 'react';

const PageHeader = ({
                        title,
                        subtitle,
                        background = "gradient-bg",
                        textColor = "text-white"
                    }) => {
    return (
        <section className={`${background} ${textColor} py-20`}>
            <div className="container-custom text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
                <div className="w-24 h-1 bg-current opacity-80 mx-auto mt-6"></div>
            </div>
        </section>
    );
};

export default PageHeader;