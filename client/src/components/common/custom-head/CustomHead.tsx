import { FC, PropsWithChildren } from "react";
import Head from "next/head";

interface CustomHeadProps extends PropsWithChildren {
  title?: string;
  description?: string;
}

const CustomHead: FC<CustomHeadProps> = ({ title, description, children }) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <title>{title || "NextJS Blog"}</title>
      {children}
    </Head>
  );
};

export default CustomHead;
