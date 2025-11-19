import { Metadata, NextPage } from "next";

import PageWhatIs from "@/components/PageWhatIs";

export const metadata: Metadata = { title: "What is Gemstone Genomics" };

const WhatIs: NextPage = () => {
  return <PageWhatIs />;
};

export default WhatIs;
