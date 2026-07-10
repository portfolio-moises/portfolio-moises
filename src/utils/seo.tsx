import { useEffect } from "react";
import { siteConfig } from "../config/site";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

const upsertMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }

  link.href = href;
};

const upsertJsonLd = (data?: Record<string, unknown> | Record<string, unknown>[]) => {
  const existing = document.getElementById("structured-data");
  existing?.remove();

  if (!data) return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "structured-data";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

const toAbsoluteUrl = (pathOrUrl: string) => new URL(pathOrUrl, siteConfig.canonicalUrl).toString();

const SEO = ({ title, description, path = "/", image = "/images/placeholders/og-portfolio.svg", structuredData }: SeoProps) => {
  useEffect(() => {
    const canonical = toAbsoluteUrl(path);
    const imageUrl = toAbsoluteUrl(image);

    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonical);
    upsertMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);
    upsertCanonical(canonical);
    upsertJsonLd(structuredData);
  }, [description, image, path, structuredData, title]);

  return null;
};

export default SEO;
