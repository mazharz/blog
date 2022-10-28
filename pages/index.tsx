import { GetStaticProps, NextPage } from "next";
import { Meta } from "@/Components/layout/meta/meta";
import { getBlogList } from "@/Lib/helper/blog/blog";
import { TBlogPostMetadata } from "@/Lib/types/blog";
import { Posts } from "@/Components/page/blog/posts/posts";

type Props = {
  posts: string;
};

const Home: NextPage<Props> = ({ posts }) => {
  const parsedPosts: TBlogPostMetadata[] = JSON.parse(posts);
  return (
    <>
      <Meta title="Maz | Blog" description="Mazhar's blog posts" />
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

export default Home;
