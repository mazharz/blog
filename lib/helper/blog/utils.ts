export const getBlogTitleByEntry = (entry: string): string => {
  return entry.replace(/-/g, " ");
};
