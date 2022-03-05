export type TDiaryEntry = {
  id: string;
  title: string;
};

export type TDiaryEntries = {
  blog: TDiaryEntry[];
};

export const diaryEntries: TDiaryEntries = {
  blog: [
    {
      id: "grow-up",
      title: "Grow Up!",
    },
    {
      id: "its-as-if-its-fair",
      title: "It's as if it's fair.",
    },
    {
      id: "becoming-a-god",
      title: "Becoming a god!",
    },
    {
      id: "discrimination",
      title: "Discrimination",
    },
    {
      id: "how-to-know",
      title: "How to Know!",
    },
  ],
};
