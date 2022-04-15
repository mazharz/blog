import { NextPage } from "next";
import { diaryEntries } from "@/Data/diary";
import { Meta } from "@/Components/layout/meta";
import { Link } from "@/Components/element/link";
import { DiaryContainer, DiaryEntryListContainer } from "@/Styles/pages/diary";

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
