import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  fetchAndParseCSV,
  getJSONData,
  getPubChemDataFromCas,
} from "../../lib/api";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Table from "../../components/Table";
import { MdFileDownload } from "react-icons/md";
import get from "lodash/get";

function WorkplaceExposureStandards({ data }) {
  console.log(data);
  // console.log(
  //   data &&
  //     data.map((c) => {
  //       if (c?.CAS) {
  //         let casArray = [];
  //         let casNumbers = c?.CAS.split(" ");
  //         casNumbers.forEach((cas) => {
  //           getPubChemDataFromCas(cas).then((id) => casArray.push(id));
  //         });
  //         return { ...c, CAS: casArray };
  //       } else return c;
  //     })
  // );
  const columns = [
    { Header: "Substance", accessor: "Substance", width: "w-4/12" },
    { Header: "CAS #", accessor: "CAS", width: "w-2/12" },
    { Header: "TWA (mg/m3)", accessor: "TWAmgm3", width: "w-1/12" },
    { Header: "TWA (ppm)", accessor: "TWAppm", width: "w-1/12" },
    { Header: "STEL (mg/m3)", accessor: "STELmgm3", width: "w-1/12" },
    { Header: "STEL (ppm)", accessor: "STELppm", width: "w-1/12" },
    { Header: "Keys", accessor: "Keys", width: "w-1/12" },
    // { Header: "CEILING (mg/m3)", accessor: "CEILINGmgm3", width: "w-1/12" },
    // { Header: "CEILING (ppm)", accessor: "CEILINGppm", width: "w-1/12" },
    // { Header: "Year Adopted", accessor: "Year Adopted", width: "w-2/12" },
    { Header: "Next Review", accessor: "Next Review", width: "w-1/12" },
  ];
  return (
    <>
      <Layout>
        <Head>
          <title>Workplace Exposure Standards | K2 Environmental</title>
        </Head>
        <Container>
          <Table data={data} columns={columns} pageSize={20} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchAndParseCSV("https://api.k2.co.nz/data/wes.csv");
  console.log(data);
  return { props: { data } };
}

// WorkplaceExposureStandards.getInitialProps = async () => {
//
// };

export default WorkplaceExposureStandards;
