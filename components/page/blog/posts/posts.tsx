import { TBlogPostMetadata } from "@/Lib/types/blog";
import { PostLink } from "../post-link/post-link";
import { PostListContainer, Separator } from "./style";

type Props = {
  posts: TBlogPostMetadata[];
};

const Posts = ({ posts }: Props) => {
  return (
    <PostListContainer>
      {posts.map((post, index) => (
        <div key={post.slug}>
          <PostLink post={post} />
          {index < posts.length - 1 && <Separator />}
        </div>
      ))}
    </PostListContainer>
  );
};

export { Posts };
