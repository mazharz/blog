import { Meta } from "@/Components/layout/meta/meta";
import type { NextPage } from "next";
import {
  BigParagraph,
  HeadingTitle,
  RegularParagraph,
  RegularParagraphContainer,
} from "@/Styles/index";
import { Link } from "@/Components/element/link/link";

const Home: NextPage = () => {
  return (
    <div>
      <Meta
        title="Mazhar Zandsalimi"
        description="Mazhar Zandsalimi's personal website"
      />

      <main>
        <HeadingTitle>Hey!</HeadingTitle>
        <BigParagraph>
          I&apos;m Mazhar (Maz for short), I&apos;m a software engineer
          homosapien. Let me tell you a bit about myself:
        </BigParagraph>
        <RegularParagraphContainer>
          <RegularParagraph>
            I&apos;m an optimistic nihilist, meaning that I believe that there
            is no point to life other than taking on the challenge to{" "}
            <b>make what is, better</b>.
          </RegularParagraph>
          <RegularParagraph>
            I&apos;m more of a Cartesian skepticist, meaning I doubt most,
            whilst accepting new maxims only through logical reasoning and the
            scientific method.
          </RegularParagraph>
          <RegularParagraph>
            I take on the approach of slowing down the <b>inevitable</b> demise,
            meaning I try my best to defer unfortunate events as best as I can
            (ex. getting old and weary).
          </RegularParagraph>
          <RegularParagraph>
            I&apos;m more of a realist. I prefer the harsh reality to the
            sugar-coated fake masks that humans usually like to make to deceive
            themselves.
          </RegularParagraph>
          <RegularParagraph>
            I&apos;m kind of a perfectionist, meaning I try my best to do what I
            do in the best way possible, but I stop at the &quot;good
            enough&quot; point.
          </RegularParagraph>
          <RegularParagraph>
            I like to stay humble, as I know that I know nothing, meaning for
            every subject that I kinda know, there is someone who masters it
            perfectly.
          </RegularParagraph>
        </RegularParagraphContainer>
        <BigParagraph>
          On this site, you can find links to my hobby{" "}
          <Link href="/projects">projects</Link> and blog{" "}
          <Link href="/blog">posts</Link> that I&apos;ve come up with over the
          years.
        </BigParagraph>
      </main>
    </div>
  );
};

export default Home;
