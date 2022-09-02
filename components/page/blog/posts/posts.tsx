import { TBlogFilters, TBlogPostMetadata } from "@/Lib/types/blog";
import dayjs from "dayjs";
import { useState } from "react";
import { Filters } from "../filters/filters";
import { PostLink } from "../post-link/post-link";
import { PostListContainer, Separator } from "./style";

type Props = {
  posts: TBlogPostMetadata[];
};

const Posts = ({ posts }: Props) => {
  const [filters, setFilters] = useState<TBlogFilters>({
    date: "",
    title: "",
    tags: "",
  });

  const filterByFields = (posts: TBlogPostMetadata[]) => {
    return posts.filter(
      post =>
        dayjs(post.date)
          .format("YYYY ddd, MMM D")
          .toLowerCase()
          .includes(filters.date) &&
        post.title.toLowerCase().includes(filters.title) &&
        post.tags.toLowerCase().includes(filters.tags)
    );
  };

  return (
    <>
      <Filters filters={filters} setFilters={setFilters} />
      <PostListContainer>
        {filterByFields(posts).map((post, index) => (
          <div key={post.slug}>
            <PostLink post={post} />
            {index < posts.length - 1 && <Separator />}
          </div>
        ))}
      </PostListContainer>
    </>
  );
};

export { Posts };
