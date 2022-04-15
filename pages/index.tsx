import { Meta } from "@/Components/layout/meta/meta";
import type { NextPage } from "next";
import {
  BigParagraph,
  HeadingTitle,
  RegularParagraph,
  RegularParagraphContainer,
} from "@/Styles/index";

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
          I&apos;m a software engineer who loves perfection. I&apos;m always
          working on something that I believe makes the future a brighter place.
        </BigParagraph>
        <RegularParagraphContainer>
          <RegularParagraph>
            I went to the University of Kurdistan when I was young! Back then I
            fell in love with Linux and the open source world. I thought I would
            become a sysadmin, I even installed openstack for my university. But
            then, something strange happened!
          </RegularParagraph>
          <RegularParagraph>
            I figured what I do in life should match my philosophy of life. So I
            changed my path towards a more influential one. I figured I want to
            make things and contribute to the world. And since I used my chrome
            more than anything, I chose web!
          </RegularParagraph>
          <RegularParagraph>
            On a more personal level, I study French, philosophy, and psychology
            on very beginner levels. These satisfy the side of me that wants to
            pursue questions like &quot;Why are we here?!&quot; and
            &quot;What&apos;s the meaning of life?&quot;
          </RegularParagraph>
        </RegularParagraphContainer>
        <BigParagraph>
          On this site, you can find links to my hobby projects and diary
          entires that I&apos;ve come up with over the years.
        </BigParagraph>
      </main>
    </div>
  );
};

export default Home;
