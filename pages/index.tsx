import { device, remByPx } from "@/Styles/globals";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const HeadingTitle = styled.h1`
  font-size: ${remByPx[50]};
  color: ${props => props.theme.color4};
`;
const BigParagraph = styled.p`
  font-size: ${remByPx[30]};
  color: ${props => props.theme.color4};
`;
const RegularParagraphContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0;
  margin: ${remByPx[30]} 0;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${remByPx[30]};
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    gap: ${remByPx[50]};
  }
`;
const RegularParagraph = styled.p`
  font-size: ${remByPx[16]};
  line-height: ${remByPx[24]};
  color: ${props => props.theme.color4};
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mazhar Zandsalimi</title>
        <meta
          name="description"
          content="Mazhar Zandsalimi's personal website"
        />
      </Head>

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
