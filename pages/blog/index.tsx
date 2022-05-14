import { GetStaticProps, NextPage } from "next";
import { Meta } from "@/Components/layout/meta/meta";
import { Link } from "@/Components/element/link/link";
import { Capitalize, DiaryEntryListContainer } from "@/Styles/pages/diary";
import { CenteredFullHeightContainer } from "@/Styles/globals";
import { getBlogList } from "@/Lib/helper/blog/blog";
import { getBlogTitleByEntry } from "@/Lib/helper/blog/utils";

type props = {
  entries: string[];
};

const Diary: NextPage<props> = ({ entries }) => {
  return (
    <>
      <Meta
        title="MZ | Diary"
        description="The list of Mazhar's diary entries."
      />
      <CenteredFullHeightContainer>
        <DiaryEntryListContainer>
          {entries.map((entry, index) => (
            <Link key={index} href={"/blog/" + entry} isButtonShaped>
              <Capitalize>{getBlogTitleByEntry(entry)}</Capitalize>
            </Link>
          ))}
        </DiaryEntryListContainer>
      </CenteredFullHeightContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const entries = await getBlogList();

  return {
    props: {
      entries,
    },
  };
};

export default Diary;
