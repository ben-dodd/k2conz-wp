import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";

function CustomerFeedback() {
  return (
    <>
      <Layout>
        <Head>
          <title>Customer Feedback | K2 Environmental</title>
        </Head>
        <Container>
          <div className="text-lg font-bold">How did we do?</div>
          <div>
            We are committed to providing a high quality service to our clients.
            If you have any concerns, questions or compliments regarding our
            services, please let us know.
          </div>
        </Container>
      </Layout>
    </>
  );
}

export default CustomerFeedback;
