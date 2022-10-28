import { Link } from "@/Components/element/link/link";
import { TBlogPostMetadata } from "@/Lib/types/blog";
import { Date, PostLinkContainer, Tags, Title } from "./styles";
import dayjs from "dayjs";

type Props = {
  post: TBlogPostMetadata;
};

const PostLink = ({ post }: Props) => {
  const formattedDate = dayjs(post.date).format("YYYY ddd, MMM D");

  return (
    <Link key={post.slug} href={"/" + post.slug} hasUnderline={false}>
      <PostLinkContainer>
        <Date>{formattedDate}</Date>
        <Title>{post.title}</Title>
        <Tags>{post.tags}</Tags>
      </PostLinkContainer>
    </Link>
  );
};

export { PostLink };
