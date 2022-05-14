import path from "path";
import { marked } from "marked";
import { readdir, readFile } from "fs/promises";
import { split, map, compose, sortWith, nth, descend } from "ramda";
import { BlogEntry } from "@/Lib/types/blog";
import { getBlogTitleByEntry } from "./utils";

const BLOG_DIRECTORY = "/public/data/blog";
const directory = path.join(process.cwd(), BLOG_DIRECTORY);

export const getBlogList = async (): Promise<string[]> => {
  const filenames = await readdir(directory);

  const splitAndTakeNth = (n: number) =>
    compose<string[], string[], string>(nth(n), split("."));

  const sortAndSelect = compose(
    map(splitAndTakeNth(1)),
    sortWith([descend(splitAndTakeNth(0))])
  );

  return sortAndSelect(filenames);
};

export const getBlogData = async (entry: string): Promise<BlogEntry> => {
  const title = getBlogTitleByEntry(entry);
  const filenames = await readdir(directory);
  const wantedFileName = filenames.filter(item => item.includes(entry));
  const filePath = path.join(
    process.cwd(),
    `${BLOG_DIRECTORY}/${wantedFileName}`
  );

  const markdownText = await readFile(filePath, "utf8");
  marked.setOptions({ gfm: true });
  const content = marked.parse(markdownText);

  return {
    entry,
    title,
    content,
  };
};
