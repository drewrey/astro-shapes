export const parseFileName = (path: string) => {
  return path
    .split("/")
    .slice(-1)[0]
    .replace(".astro", "")
    .replace(/-/g, " ")
    .trim();
};
