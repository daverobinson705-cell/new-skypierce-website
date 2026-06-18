export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

    const staticPages = [
        { url: "", changefreq: "daily", priority: 1.0 },
    ];

    const allPages = [...staticPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPages.map((page) => {
        return `
        <url>
            <loc>${baseUrl}/${page.url}</loc>
            <changefreq>${page.changefreq}</changefreq>
            <priority>${page.priority}</priority>
        </url>`;
    }).join("")}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
