import { Metadata, NextPage } from "next";

import PageContactUs from "@/components/PageContactUs";

export const metadata: Metadata = { title: "Contact Us" };

const ContactUs: NextPage = () => {
  return <PageContactUs />;
};

export default ContactUs;
