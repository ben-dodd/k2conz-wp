import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";

export default function IndoorAirQualityTesting() {
  return (
    <>
      <Layout>
        <Head>
          <title>Indoor Air Quality Testing | K2 Environmental</title>
        </Head>
        <Container>
          <h2 className="mb-8 mt-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
            Indoor Air Quality Testing
          </h2>
          <div className="grid grid-cols-4 gap-16 place-items-center py-8"></div>
        </Container>
      </Layout>
    </>
  );
}