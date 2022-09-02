import { Input } from "@/Components/element/input/input";
import { useWindowDimensions } from "@/Lib/hooks/useWindowDimensions";
import { TBlogFilters } from "@/Lib/types/blog";
import { screenSize, screenSizeNumbers } from "@/Styles/globals";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FiltersContainer } from "./style";

type Props = {
  filters: TBlogFilters;
  setFilters: Dispatch<SetStateAction<TBlogFilters>>;
};

const Filters = ({ filters, setFilters }: Props) => {
  const { width } = useWindowDimensions();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case "date":
        return setFilters({ ...filters, date: e.currentTarget.value });
      case "title":
        return setFilters({ ...filters, title: e.currentTarget.value });
      case "tags":
        return setFilters({ ...filters, tags: e.currentTarget.value });
    }
  };

  const isTabletOrBigger = () => {
    const tablet = screenSizeNumbers.tablet;
    if (width && width >= Number(tablet)) return true;
    return false;
  };

  return (
    <FiltersContainer>
      <Input
        value={filters.date}
        changeHandler={handleChange}
        placeholder="Filter by date"
        name="date"
      />
      <Input
        value={filters.title}
        changeHandler={handleChange}
        placeholder="Filter by title"
        name="title"
      />
      <Input
        value={filters.tags}
        changeHandler={handleChange}
        placeholder="Filter by tags"
        hasTextRightAligned={isTabletOrBigger()}
        name="tags"
      />
    </FiltersContainer>
  );
};
export { Filters };
