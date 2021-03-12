import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Header from "../components/header";
import Menu from "../components/menu";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";

export default function Index() {
  const services = [
    {
      name: "Asbestos Services",
      desc:
        "Asbestos testing, surveys and risk management for residential, commercial and industrial buildings. Our asbestos analysis laboratory can do asbestos identification, soil testing and air testing.",
      url: "/services/asbestos-services",
      img: "asbestos",
    },
    {
      name: "Workplace Testing",
      desc:
        "We do a range of occupational hygiene testing to help you create a safe work environment that complies with New Zealand standards.",
      url: "/services/workplace-exposure",
      img: "workplace",
    },
    {
      name: "Indoor Air Quality",
      desc:
        "We provide a range of solutions for ensuring the air in your home or workplace is safe and healthy. This includes ventilation assessments, testing for toxins, and particulate testing.",
      url: "/services/indoor-air-quality-testing",
      img: "iaq",
    },
    {
      name: "Stack Testing",
      desc:
        "We have decades of experience in stack testing and carry accreditation for all commonly tested substances. Choose us for trusted and reliable emissions testing.",
      url: "/services/stack-testing",
      img: "stack",
    },
    {
      name: "Mould Testing",
      desc:
        "We provide diagnostic testing for moisture, mould and bacteria problems in your home or workplace.",
      url: "/services/bacteria-and-mould-testing",
      img: "mould",
    },
    {
      name: "Noise Testing",
      desc:
        "Protect yourself and your workers from noise-induced hearing loss with our workplace noise assessments. We can also do environmental noise monitoring.",
      url: "/services/noise-testing",
      img: "noise",
    },
    {
      name: "Mask Fit Testing",
      desc:
        "Ensure your mask is well-fitted, safe and effective. Come in to one of our offices or we can come to you.",
      url: "/services/mask-fit-testing-new-zealand",
      img: "mask",
    },
    {
      name: "Meth Testing",
      desc:
        "Reliable methamphetamine testing from baseline testing to post-decontamination assessments.",
      url: "/services/meth-testing",
      img: "meth",
    },
  ];
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
                    src={`/images/${e.img}.png`}
                    width={200}
                    height={200}
                  />
                  <div className="font-bold">{e.name}</div>
                </a>
              </Link>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
