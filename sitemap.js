// The base URL for your website
const URL = "https://www.flourishfoundationacademy.org";

// Example: If you have a function to fetch dynamic data like blog posts
// async function getBlogPosts() {
//   // In a real app, you would fetch this data from a CMS or database
//   const res = await fetch('https://.../posts');
//   return res.json();
// }

export default async function sitemap() {
  // Fetch dynamic routes
  // const posts = await getBlogPosts();
  // const postRoutes = posts.map((post) => ({
  //   url: `${URL}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  // }));

  // Define your static routes
  const staticRoutes = [
    {
      url: URL,
      lastModified: new Date(),
    },
    // Add more static pages like /about, /contact, etc.
    // { url: `${URL}/about`, lastModified: new Date() },
  ];

  // Combine and return all routes
  return [...staticRoutes /*, ...postRoutes */];
}
