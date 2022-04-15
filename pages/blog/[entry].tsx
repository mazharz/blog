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
import { BlogEntry } from "@/Lib/types/blog";

const DiaryEntry: NextPage<BlogEntry> = ({ title, content }) => {
  return (
    <div>
      <Meta
        title={`MZ | ${title}`}
        description={`Mazhar's diary entry named ${title}.`}
      />
      <BackButton>
        <Link href="/blog" isButtonShaped>
          ←
        </Link>
      </BackButton>
      <DiaryHeaderText>{title}</DiaryHeaderText>
      <DiaryTextContainer
        dangerouslySetInnerHTML={{ __html: content }}
      ></DiaryTextContainer>
    </div>
  );
};

interface Params extends ParsedUrlQuery {
  entry: string;
}

export const getStaticProps: GetStaticProps<{}, Params> = async context => {
  const { entry } = context.params!;
  const blog: BlogEntry = await getBlogData(entry);

  return {
    props: blog,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getBlogList();

  return {
    paths: paths.map(p => `/blog/${p}`),
    fallback: false,
  };
};

export default DiaryEntry;
