export const getAssetUrl = (path) => {
    if (!path) return '';
    if (/^(https?:)?\/\//.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
        return path;
    }

    const publicUrl = process.env.PUBLIC_URL || '';
    const normalizedPublicUrl = publicUrl.endsWith('/') ? publicUrl.slice(0, -1) : publicUrl;
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    return `${normalizedPublicUrl}${normalizedPath}`;
};
