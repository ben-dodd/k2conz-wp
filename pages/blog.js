import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import BlogRoll from '../components/blog-roll'
import { getAllPostsForHome } from '../lib/api'

export default function Blog({ allPosts: { edges } }) {
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
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome()
  return {
    props: {
      allPosts,
    },
  }
}
