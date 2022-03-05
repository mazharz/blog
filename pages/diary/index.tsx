import { NextPage } from "next";
import { diaryEntries } from "@/Data/diary";
import { Meta } from "@/Components/layout/meta";
import styled from "styled-components";
import { Link } from "@/Components/element/link";

const DiaryContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DiaryEntryListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  row-gap: 1rem;
`;

const Diary: NextPage = () => {
  return (
    <>
      <Meta
        title="MZ | Diary"
        description="The list of Mazhar's diary entries."
      />
      <DiaryContainer>
        <DiaryEntryListContainer>
          {diaryEntries.blog.map((entry, index) => (
            <Link key={index} href={"/diary/" + entry.id} isButtonShaped>
              {entry.title}
            </Link>
          ))}
        </DiaryEntryListContainer>
      </DiaryContainer>
    </>
  );
};

export default Diary;
