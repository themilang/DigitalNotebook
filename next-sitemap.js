const siteUrl = "https://www.milanghimire.info.np";

module. exports = {
   
siteUrl,
generateRobotsTxt: true, // Generate a robots.txt file
exclude: [], // Exclude specific pages or routes (optional)
changefreq: 'daily', // Change frequency of pages (optional)
priority: 0.8, // Default priority of pages (optional)

siteUrl: 'https://www.milanghimire.info.np', // Replace with your site URL
  generateRobotsTxt: true, // Generate robots.txt file
  additionalPaths: async (config) => [
    {
      loc: '/posts', // The URL path to include
      changefreq: 'daily', // Optional: Change frequency
      priority: 0.9, // Optional: Priority for this path
    },
  ],
};