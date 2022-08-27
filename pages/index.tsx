import { Meta } from "@/Components/layout/meta/meta";
import type { NextPage } from "next";
import {
  HeadingTitle,
  RegularParagraph,
  RegularParagraphContainer,
} from "@/Styles/index";
import { Link } from "@/Components/element/link/link";

const Home: NextPage = () => {
  return (
    <>
      <Meta
        title="Mazhar Zandsalimi"
        description="Mazhar Zandsalimi's personal website"
      />

      <RegularParagraphContainer>
        <HeadingTitle>Hello, friend.</HeadingTitle>
        <RegularParagraph>
          I&apos;m Maz, an optimistic nihilist, Cartesian skepticist, realist,
          humble perfectionist!
        </RegularParagraph>
        <RegularParagraph>
          On this site, you can find links to my hobby{" "}
          <Link href="/projects">projects</Link> and blog{" "}
          <Link href="/blog">posts</Link> that I&apos;ve come up with over the
          years.
        </RegularParagraph>
      </RegularParagraphContainer>
    </>
  );
};

export default Home;
