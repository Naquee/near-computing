

export default async function sitemap() {
    const baseUrl = "https://www.nearcomputing.in/";

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/repair`, lastModified: new Date() },
        { url: `${baseUrl}/laptop-rental`, lastModified: new Date() },
        { url: `${baseUrl}/product-sell`, lastModified: new Date() },
        { url: `${baseUrl}/contact-us`, lastModified: new Date() },
    ]
}