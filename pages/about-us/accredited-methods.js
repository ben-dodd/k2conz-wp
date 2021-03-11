import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Table from "../../components/Table";
import { MdFileDownload } from "react-icons/md";
import get from "lodash/get";
import { accreditedMethods } from "../../lib/data";

export default function AccreditedMethods() {
  // TODO: Add search for methods
  const columns = [
    { Header: "Category", accessor: "category", width: "w-3/12" },
    { Header: "Description", accessor: "description", width: "w-4/12" },
    {
      Header: "Organisation",
      accessor: (originalRow, rowIndex) => `${get(originalRow, "org.name")}`,
      id: "org",
      width: "w-2/12",
      Cell: ({ row }) =>
        row?.original?.org?.url ? (
          <Link href={row?.original?.org?.url}>
            <a target="_blank" className="underline cursor-pointer">
              {row?.original?.org?.name}
            </a>
          </Link>
        ) : (
          <span>{row?.original?.org?.name}</span>
        ),
    },
    {
      Header: "Method",
      accessor: (originalRow, rowIndex) =>
        `${get(originalRow, "method.number", "")} ${get(
          originalRow,
          "method.name",
          ""
        )}`,
      id: "method",
      width: "w-4/12",
      Cell: ({ row }) =>
        row?.original?.method?.url ? (
          <Link href={row?.original?.method?.url}>
            <a target="_blank" className="underline cursor-pointer">
              {`${row?.original?.method?.number} ${row?.original?.method?.name}`}
            </a>
          </Link>
        ) : (
          <span>
            {`${row?.original?.method?.number} ${row?.original?.method?.name}`}
          </span>
        ),
    },
    { Header: "Tags", accessor: "tags" },
  ];
  return (
    <>
      <Layout>
        <Head>
          <title>Accredited Methods | K2 Environmental</title>
        </Head>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <img
                className="float-left m-4"
                src="/logos/ianz.svg"
                width={80}
                height={80}
              />
              <p>
                K2 Environmental is accredited by{" "}
                <a href="https://www.ianz.govt.nz/">
                  International Accreditation New Zealand (IANZ)
                </a>{" "}
                for the methods listed in the tables below.
              </p>
              <p>
                This means we have been assessed and found to be performing in a
                professional and technically reliable way in accordance with
                international standards.
              </p>
            </div>
            <div className="ml-8">
              <Link href="https://cabis.ianz.govt.nz/ianzwebportal/ViewScope.aspx?Program=6cc6c246-8115-4a3d-9bac-ee5758b6506c">
                <a target="_blank">
                  <div className="flex content-center mb-4 hover-button">
                    <MdFileDownload className="mr-4 mb-8 text-2xl self-center" />
                    <div>
                      <div className="font-bold">
                        Certificate of Accreditation
                      </div>
                      <div>Christchurch Office</div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="https://cabis.ianz.govt.nz/ianzwebportal/ViewScope.aspx?Program=af227741-1039-4816-8fad-24570bef9185">
                <a target="_blank">
                  <div className="flex content-center mb-4 hover-button">
                    <MdFileDownload className="mr-4 mb-8 text-2xl self-center" />
                    <div>
                      <div className="font-bold">
                        Certificate of Accreditation
                      </div>
                      <div>Auckland Office</div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <Table
            data={accreditedMethods}
            columns={columns}
            hiddenColumns={["tags"]}
          />
        </Container>
      </Layout>
    </>
  );
}
