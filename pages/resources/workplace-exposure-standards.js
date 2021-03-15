import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getCSVData, getJSONData } from "../../lib/api";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Table from "../../components/Table";
import { MdFileDownload } from "react-icons/md";
import get from "lodash/get";

function WorkplaceExposureStandards({ data, substances }) {
  // console.log(data);
  console.log(substances);
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

WorkplaceExposureStandards.getInitialProps = async () => {
  const data = await getCSVData("wes.csv");
  const substances = await getJSONData("substances.json");
  return { data, substances };
};

export default WorkplaceExposureStandards;
