import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://haca-web.com'

    const routes = [
        '',
        '/about',
        '/solutions',
        '/pricing',
        '/contact',
        '/blog',
        '/legal/privacy',
        '/legal/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
