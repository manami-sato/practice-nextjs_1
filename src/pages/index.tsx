import { NextPage } from "next";
import Link from "next/link";

const IndexPage: NextPage = () => (
  <div>
    <h1>Hello Next.js 👋</h1>
    <Link href="about" passHref>
      <a href="/">about</a>
    </Link>
  </div>
);

export default IndexPage;
