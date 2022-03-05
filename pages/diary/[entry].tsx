import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { diaryEntries } from "@/Data/diary";
import { Link } from "@/Components/element/link";
import styled from "styled-components";
import { remByPx, screenSize } from "@/Styles/globals";
import { useEffect, useState } from "react";
import { marked } from "marked";
import { Meta } from "@/Components/layout/meta";
import fs from "fs";
import path from "path";

type props = {
  entry: string;
  title: string;
  content: string;
};

const BackButton = styled.div`
  margin-top: ${remByPx[18]};
  font-size: ${remByPx[22]};
  font-weight: 500;
  line-height: ${remByPx[18]};
`;
const DiaryHeaderText = styled.h1`
  margin: 0 auto ${remByPx[18]};
  padding: ${remByPx[18]} 0;
  border-bottom: ${({ theme }) => `${remByPx[2]} solid ${theme.color8}`};
  max-width: ${screenSize.tabletS};
  color: ${({ theme }) => theme.color4};
`;
const DiaryTextContainer = styled.div`
  margin: 0 auto ${remByPx[50]};
  max-width: ${screenSize.tabletS};
  color: ${({ theme }) => theme.color4};
  font-weight: 400;
  counter-reset: h2counter;
  h2 {
    counter-reset: h3counter;
  }
  h2:before {
    content: counter(h2counter) ".  ";
    counter-increment: h2counter;
  }
  h3:before {
    content: counter(h2counter) "." counter(h3counter) "  ";
    counter-increment: h3counter;
  }
  p {
    text-align: justify;
  }
  li {
    margin: ${remByPx[8]} 0;
  }
  a {
    color: ${({ theme }) => theme.color5};
    :hover {
      color: ${({ theme }) => theme.color4};
    }
    cursor: "pointer";
    text-decoration: "underline";
    transition: color 0.3s ease-in-out;
    font-weight: 500;
  }
`;

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
