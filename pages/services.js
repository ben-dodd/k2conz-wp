import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Layout from "../components/layout";
import Accordion from "../components/accordion";
import { services } from "../public/config/services";

function Services() {
  return (
    <>
      <Layout>
        <Head>
          <title>Our Services | K2 Environmental</title>
        </Head>
        <Container>
          <div className="page-title">Our Services</div>
          <div className="flex">
            <div>
              K2 Environmental offer a range of services across the
              environmental testing field. We have experienced technicians
              across the country ready to help you with your testing needs.
            </div>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-16 justify-center py-8">
            {services.map((e) => (
              <div>
                <Link href={e.url}>
                  <a className="font-bold hover:underline">{e.title}</a>
                </Link>
                <div>
                  <div className="float-right">
                    <Link href={e.url}>
                      <a className="hover:underline">
                        <Image
                          src={`/images/${e.image}.png`}
                          width={200}
                          height={200}
                          alt={e.shortDescription}
                        />
                      </a>
                    </Link>
                  </div>
                  <div>{e.longDescription}</div>
                </div>
              </div>
            ))}
          </div>
          <Accordion
            title="FAQ"
            content={[
              {
                title: "What areas of the country do you service?",
                body:
                  "We operate out of offices in Auckland, Christchurch, Wellington and Hamilton providing services throughout New Zealand.",
              },
              {
                title: "What is the name of your company?",
                body: "K2 Environmental Ltd",
              },
            ]}
          />
        </Container>
      </Layout>
    </>
  );
}

export default Services;
