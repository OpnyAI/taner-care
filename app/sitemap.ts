import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://taner-care.de";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/alltagsbegleitung`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pflegeberatung`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pflegeboxen`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
    },
  ];
}
