import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Link } from "@/Components/element/link/link";
import { Meta } from "@/Components/layout/meta/meta";
import {
  BackButton,
  PostHeaderText,
  PostTextContainer,
} from "@/Styles/pages/blog/post";
import { ParsedUrlQuery } from "querystring";
import { getBlogData, getBlogList } from "@/Lib/helper/blog/blog";
import { TBlogPost } from "@/Lib/types/blog";
import Prism from "prismjs";
import { useEffect } from "react";

type Props = {
  post: string;
};

const BlogPost: NextPage<Props> = ({ post }) => {
  const postData: TBlogPost = JSON.parse(post);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <Meta title={`Maz | ${postData.title}`} description={postData.title} />
      <BackButton>
        <Link href="/" isButtonShaped>
          ←
        </Link>
      </BackButton>
      <PostHeaderText>{postData.title}</PostHeaderText>
      <PostTextContainer
        dangerouslySetInnerHTML={{ __html: postData.content }}
      ></PostTextContainer>
    </div>
  );
};

interface Params extends ParsedUrlQuery {
  post: string;
}

export const getStaticProps: GetStaticProps<{}, Params> = async context => {
  const { post: slug } = context.params!;
  const post: TBlogPost | null = await getBlogData(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: JSON.stringify(post),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogList();

  return {
    paths: posts.map(p => `/${p.slug}`),
    fallback: false,
  };
};

export default BlogPost;
