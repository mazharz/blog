import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Link } from "@/Components/element/link/link";
import { Meta } from "@/Components/layout/meta/meta";
import {
  BackButton,
  DiaryHeaderText,
  DiaryTextContainer,
} from "@/Styles/pages/diary/entry";
import { ParsedUrlQuery } from "querystring";
import { getBlogData, getBlogList } from "@/Lib/helper/blog/blog";
import { TBlogPost } from "@/Lib/types/blog";
import Prism from "prismjs";
import { useEffect } from "react";

type Props = {
  post: string;
};

const DiaryEntry: NextPage<Props> = ({ post }) => {
  const postData: TBlogPost = JSON.parse(post);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <Meta
        title={`MZ | ${postData.title}`}
        description={`Mazhar's diary entry named ${postData.title}.`}
      />
      <BackButton>
        <Link href="/blog" isButtonShaped>
          ←
        </Link>
      </BackButton>
      <DiaryHeaderText>{postData.title}</DiaryHeaderText>
      <DiaryTextContainer
        dangerouslySetInnerHTML={{ __html: postData.content }}
      ></DiaryTextContainer>
    </div>
  );
};

interface Params extends ParsedUrlQuery {
  entry: string;
}

export const getStaticProps: GetStaticProps<{}, Params> = async context => {
  const { entry: slug } = context.params!;
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
    paths: posts.map(p => `/blog/${p.slug}`),
    fallback: false,
  };
};

export default DiaryEntry;
