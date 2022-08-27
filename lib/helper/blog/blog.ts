import path from "path";
import { marked } from "marked";
import { readdir } from "fs/promises";
import { TBlogPost, TBlogPostMetadata } from "@/Lib/types/blog";
import matter from "gray-matter";

const BLOG_DIRECTORY = "/public/data/blog";
const directory = path.join(process.cwd(), BLOG_DIRECTORY);

const getAllMetadata = (filenames: string[]): TBlogPostMetadata[] => {
  return filenames.map((filename: string) => {
    const filePath = path.join(process.cwd(), `${BLOG_DIRECTORY}/${filename}`);
    const metadata = matter.read(filePath).data;
    return {
      title: metadata.title,
      slug: metadata.slug,
      date: metadata.date,
      tags: metadata.tags,
      filePath,
    };
  });
};

export const getBlogList = async (): Promise<TBlogPostMetadata[]> => {
  const filenames = await readdir(directory);

  const metadata = getAllMetadata(filenames);

  const sorted = metadata.sort((a: TBlogPostMetadata, b: TBlogPostMetadata) =>
    a.date.getTime() < b.date.getTime() ? 1 : -1
  );

  return sorted;
};

export const getBlogData = async (slug: string): Promise<TBlogPost | null> => {
  const filenames = await readdir(directory);
  const metadata = getAllMetadata(filenames);
  const filtered = metadata.filter(meta => meta.slug === slug);
  const post = filtered.length >= 1 ? filtered[0] : null;
  if (!post) return null;

  const postData = matter.read(post.filePath);
  marked.setOptions({ gfm: true });
  const content = marked.parse(postData.content);

  return {
    title: postData.data.title,
    slug: postData.data.slug,
    date: postData.data.date,
    tags: postData.data.tags,
    // @ts-ignore
    filePath: postData.path,
    content,
  };
};
