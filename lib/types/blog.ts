export type TBlogPost = TBlogPostMetadata & {
  content: string;
};

export type TBlogPostMetadata = {
  title: string;
  slug: string;
  date: Date;
  tags: string;
  filePath: string;
};

export type TBlogFilters = {
  date: string;
  title: string;
  tags: string;
};
