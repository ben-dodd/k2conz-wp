import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Header from "../components/header";
import Menu from "../components/menu";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";
import { services } from "../public/config/services";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Specialists in Air Quality Testing | K2 Environmental</title>
        </Head>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 justify-center py-8">
            {services.map((e) => (
              <Link href={e.url}>
                <a className="flex flex-col items-center hover:underline">
                  <Image
                    src={`/images/${e.image}.png`}
                    width={200}
                    height={200}
                    alt={e.shortDescription}
                  />
                  <div className="font-bold">{e.title}</div>
                </a>
              </Link>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
