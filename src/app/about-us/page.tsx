import { Metadata, NextPage } from "next";

import PageAboutUs from "@/components/PageAboutUs";

export const metadata: Metadata = { title: "About Us" };

const About: NextPage = () => {
  return <PageAboutUs />;
};

export default About;
