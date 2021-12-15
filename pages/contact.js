import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";

function Contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>Contact Us | K2 Environmental</title>
        </Head>
        <Container>
          <div>
            If you need help with anything or wish to enquire about our
            services, please use the contact form below. We will be in contact
            with you as soon as possible. If you have any feedback, compliments
            or complaints, please use the customer feedback form here.
          </div>
        </Container>
      </Layout>
    </>
  );
}

export default Contact;
