import type { NextPage } from "next";
import { BlogData, MicroCMSBlogData } from "types/blogData";

type Props = {
  blogData: BlogData;
};
const Index: NextPage<Props> = ({ blogData }) => {
  return (
    <div>
      <h1>ブログタイトル:{blogData.title}</h1>
      <div
        className="blog-contents"
        dangerouslySetInnerHTML={{ __html: blogData.body }}
      ></div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const fetchBlogData = await fetch(`${process.env.MICROCMS_ENDPOINT}/blogs`, {
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY,
    },
  });
  const microCMSBlogData: MicroCMSBlogData = await fetchBlogData.json();

  const paths = microCMSBlogData.contents.map((blogData) => ({
    params: { id: blogData.id },
  }));
  // console.log({ paths });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const fetchBlogData = await fetch(
    `${process.env.MICROCMS_ENDPOINT}/blogs/${params.id}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY,
      },
    }
  );
  const blogData: BlogData = await fetchBlogData.json();
  console.log(blogData);

  return {
    props: {
      blogData,
    },
  };
};

export default Index;
