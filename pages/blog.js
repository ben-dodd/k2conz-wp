import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Header from "../components/header";
import Menu from "../components/menu";
import Layout from "../components/layout";
import BlogRoll from "../components/blog-roll";
import { getAllPostsForHome, getPages } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Blog({ allPosts: { edges } }) {
  const heroPost = edges[0]?.node;
  // const morePosts = edges.slice(1);
  // const pages = getPages();

  return (
    <>
      <Layout>
        <Head>
          <title>Latest Posts | K2 Environmental</title>
          <meta property="og:description" content="" />
        </Head>
        <Container>{edges.length > 0 && <BlogRoll posts={edges} />}</Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();
  return {
    props: {
      allPosts,
    },
  };
}
