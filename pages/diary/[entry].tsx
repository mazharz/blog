import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { diaryEntries } from "@/Data/diary";
import { Link } from "@/Components/element/link";
import { marked } from "marked";
import { Meta } from "@/Components/layout/meta";
import fs from "fs";
import path from "path";
import {
  BackButton,
  DiaryHeaderText,
  DiaryTextContainer,
} from "@/Styles/pages/diary/entry";

type props = {
  entry: string;
  title: string;
  content: string;
};

const DiaryEntry: NextPage<props> = ({ entry, title, content }) => {
  return (
    <div>
      <Meta
        title={`MZ | ${title}`}
        description={`Mazhar's diary entry named ${title}.`}
      />
      <BackButton>
        <Link href="/diary" isButtonShaped>
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

export const getStaticProps: GetStaticProps = async context => {
  const { entry } = context.params as { entry: string };
  const title = diaryEntries.blog.filter(item => item.id === entry)[0].title;

  const filename = path.join(process.cwd(), `/public/data/diary/${entry}.md`);

  const markdownText = fs.readFileSync(filename, "utf8");
  marked.setOptions({ gfm: true });
  const content = marked.parse(markdownText);

  return {
    props: {
      entry,
      title,
      content: content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = diaryEntries.blog.map(entry => ({
    params: { entry: entry.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default DiaryEntry;
