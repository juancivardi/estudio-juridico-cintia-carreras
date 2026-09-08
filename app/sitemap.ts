import type { MetadataRoute } from "next";
import { practiceAreas } from "@/data/practiceAreas";

const baseUrl = "https://abogada-cintia-carreras.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const areas = Object.keys(practiceAreas).map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
    },
    ...areas,
  ];
}