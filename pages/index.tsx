import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const HeadingTitle = styled.h1`
  color: ${props => props.theme.color5};
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
        <HeadingTitle>Welcome to my website!</HeadingTitle>
      </main>
    </div>
  );
};

export default Home;
