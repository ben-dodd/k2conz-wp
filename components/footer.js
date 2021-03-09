import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Image from "next/image";
import { MdEmail, MdPhone, MdSmartphone } from "react-icons/md";

export default function Footer() {
  const addresses = [
    {
      name: (
        <div className="flex content-start">
          <div className="pr-4">Christchurch Office</div>
          <Image src="/logos/veritas.svg" height="24" width="48" />
        </div>
      ),
      address1: "PO Box 28147",
      address2: "Unit 24, 105 Bamford Street",
      address3: "Woolston",
      address4: "Christchurch 8023",
      phone: "03 384 8966",
      mobile: "027 433 7872",
    },
    {
      name: "Auckland Office",
      address1: "Unit 23, 203 Kirkbride Road",
      address2: "Airport Oaks",
      address3: "Auckland 2022",
      phone: "09 275 1261",
      mobile: "027 675 8223",
    },
    {
      name: "Wellington Office",
      address1: "Unit 5, 408 Hutt Road",
      address2: "Alicetown",
      address3: "Lower Hutt 5010",
      phone: "04 595 4563",
      mobile: "027 533 7872",
    },
    {
      name: "Hamilton Office",
      address1: "37 Lake Road",
      address2: "Frankton",
      address3: "Hamilton 3204",
      phone: null,
      mobile: "027 233 7874",
    },
  ];
  return (
    <footer className="bg-accent-1 border-t border-accent-5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 border-accent-5">
          {addresses.map((address) => (
            <div className="pt-4 flex flex-col justify-between items-start">
              <div>
                <h2 className="font-bold"> {address?.name} </h2>
                <div className="mb-2">
                  <div>{address?.address1}</div>
                  <div>{address?.address2}</div>
                  <div>{address?.address3}</div>
                  <div>{address?.address4}</div>
                </div>
              </div>
              <div className="mb-8">
                {address.phone && (
                  <a
                    className="flex mb-1 items-center hover:text-blue-900 underline"
                    href={`tel:${address?.phone}`}
                  >
                    <MdPhone className="hover:font-lg" />
                    <div className="pl-4">{address?.phone}</div>
                  </a>
                )}
                <a
                  className="flex mb-1 items-center hover:text-blue-900 underline"
                  href={`tel:${address?.mobile}`}
                >
                  <MdSmartphone />
                  <div className="pl-4">{address?.mobile}</div>
                </a>
                <a
                  className="flex mb-1 items-center hover:text-blue-900 underline"
                  href="mailto:info@k2.co.nz"
                >
                  <MdEmail />
                  <div className="pl-4 self-center">info@k2.co.nz</div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-xs text-center md:text-right">
          Copyright© 2021 K2 Environmental
        </div>
      </Container>
    </footer>
  );
}
