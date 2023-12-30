import Head from "next/head";
import React from "react";

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="Near Computing" href="https://www.nearcomputing.in/" />
    </Head>
  );
};

export default Seo;
