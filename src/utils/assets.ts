export const publicAsset = (path: string) => {
  if (!path || /^(https?:|data:|blob:)/i.test(path)) return path;

  const base = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.replace(/^\/+/, "")}`;
};
