import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";

export default function MaskFitTesting() {
  return (
    <>
      <Layout>
        <Head>
          <title>Mask Fit Testing | K2 Environmental</title>
        </Head>
        <Container>
          <h2 className="page-title md:page-title__md">
            Mask Fit Testing
          </h2>
          <div className="grid grid-cols-4 gap-16 place-items-center py-8"></div>
        </Container>
      </Layout>
    </>
  );
}
