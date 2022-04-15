import { FC } from "react";
import Head from "next/head";

type props = {
  title: string;
  description: string;
};

const Meta: FC<props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta key="robots" name="robots" content="INDEX, FOLLOW" />
    </Head>
  );
};

export { Meta };
