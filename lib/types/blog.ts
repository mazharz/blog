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
