import path from "path";
import { marked } from "marked";
import { readdir, readFile } from "fs/promises";
import { split, map, head, compose } from "ramda";
import { BlogEntry } from "@/Lib/types/blog";
import { getBlogTitleByEntry } from "./utils";

const BLOG_DIRECTORY = "/public/data/blog";

export const getBlogList = async (): Promise<string[]> => {
  const directory = path.join(process.cwd(), BLOG_DIRECTORY);
  const filenames = await readdir(directory);
  const splitAndTakeFirst = compose<[string], string[], string>(
    head,
    split(".")
  );
  const paths = map(splitAndTakeFirst, filenames);
  return paths;
};

export const getBlogData = async (entry: string): Promise<BlogEntry> => {
  const title = getBlogTitleByEntry(entry);
  const filename = path.join(process.cwd(), `${BLOG_DIRECTORY}/${entry}.md`);

  const markdownText = await readFile(filename, "utf8");
  marked.setOptions({ gfm: true });
  const content = marked.parse(markdownText);

  return {
    entry,
    title,
    content,
  };
};
