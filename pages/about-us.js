import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";

export default function AboutUs() {
  return (
    <>
      <Layout>
        <Head>
          <title>About Us | K2 Environmental</title>
        </Head>
        <Container>
          <div>
            <p>
              K2 Environmental was founded in 1997 by Stuart and Carol Keer-Keer
              operating from the family home in Christchurch. The business
              quickly outgrew the dining room table and in 2000 the Auckland
              office was opened. Over the years we have seen each office expand
              with the addition of the asbestos lab in 2011 and two further
              offices in Hamilton and Wellington in 2019.
            </p>
            <p>
              As the business grew, so did the range of testing we offer. What
              started out as stack and emissions testing developed to include
              workplace/occupational health, biological, asbestos and
              methamphetamine testing.
            </p>
            <p>
              We are passionate about what we do and our highly experienced team
              of industry professionals work closely with our clients to provide
              a quality and efficient service.
            </p>
          </div>
        </Container>
      </Layout>
    </>
  );
}
