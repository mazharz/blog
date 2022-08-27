import { GetStaticProps, NextPage } from "next";
import { Meta } from "@/Components/layout/meta/meta";
import { getBlogList } from "@/Lib/helper/blog/blog";
import { TBlogPostMetadata } from "@/Lib/types/blog";
import { Posts } from "@/Components/page/blog/posts/posts";

type Props = {
  posts: string;
};

const Diary: NextPage<Props> = ({ posts }) => {
  const parsedPosts: TBlogPostMetadata[] = JSON.parse(posts);
  return (
    <>
      <Meta
        title="MZ | Blog"
        description="The list of Mazhar's diary entries."
      />
      <Posts posts={parsedPosts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getBlogList();

  return {
    props: {
      posts: JSON.stringify(posts),
    },
  };
};

export default Diary;
