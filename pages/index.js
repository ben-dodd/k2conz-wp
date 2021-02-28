import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Header from "../components/header";
import Layout from "../components/layout";
import BlogRoll from "../components/blog-roll";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts: { edges } }) {
  // const heroPost = edges[0]?.node;
  // const morePosts = edges.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Specialists in Air Quality Testing | K2 Environmental</title>

          <meta property="og:url" content="https://www.k2.co.nz" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="K2 Environmental Ltd" />
          <meta property="og:image" content={""} />
          <meta property="og:description" content="" />
          <meta property="fb:app_id" content="your fb app id" />
          <meta property="twitter:card" content="summary" />
        </Head>
        <Container>
          <Header />
          {/*heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )*/}
          {edges.length > 0 && <BlogRoll posts={edges} />}
          {/*morePosts.length > 0 && <MoreStories posts={morePosts} />*/}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // console.log(preview);
  const allPosts = await getAllPostsForHome();
  return {
    props: {
      allPosts,
    },
  };
}
