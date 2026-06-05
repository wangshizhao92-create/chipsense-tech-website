import type { MetadataRoute } from "next";

const siteUrl = "https://chipsense-tech-website.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/products/tmr-current-sensor",
    "/products/tmr-current-sensor/p-series",
    "/products/tmr-current-sensor/m-series",
    "/products/industrial-environment-monitoring",
    "/products/information-technology-computing",
    "/projects",
    "/cooperation",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/products"
          ? 0.9
          : route.startsWith("/products")
            ? 0.8
            : 0.7,
  }));
}