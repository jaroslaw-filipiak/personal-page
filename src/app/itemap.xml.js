//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://j-filipiak.pl/api/wp-json/wp/v2/posts';
const SITEMAP_URL = 'https://j-filipiak.pl';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://j-filipiak.pl</loc>
     </url>
     <url>
       <loc>https://j-filipiak.pl/o-mnie</loc>
     </url>
     <url>
     <loc>https://j-filipiak.pl/kontakt</loc>
     </url>
     <url>
     <loc>https://j-filipiak.pl/polityka-prywatnosci</loc>
     </url>
     <url>
     <loc>https://j-filipiak.pl/case-studies/23knots</loc>
     </url>
     <url>
     <loc>https://j-filipiak.pl/case-studies/femmefab</loc>
     </url>
     <url>
     <loc>https://j-filipiak.plcase-studies/promise4cloud/</loc>
     </url>
     <url>
     <loc>https://j-filipiak.pl/case-studies/siborsoft</loc>
     </url>
     <url>
     <loc>https://j-filipiak.pl/case-studies/skinoren</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${SITEMAP_URL}/blog/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
