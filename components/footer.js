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
          <Image src="/images/veritas.svg" height="24" width="48" />
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
  const ianzLogo =
    "https://www.k2.co.nz/wp-content/uploads/2020/08/IANZ-Test-150x150.jpg";
  const veritasLogo =
    "https://www.k2.co.nz/wp-content/uploads/2020/06/RGB_SCREEN_Single_Cert_OHSAS_18001.svg";
  return (
    <footer className="bg-accent-1 border-t border-accent-5">
      <Container>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 mt-8 rounded-lg border-accent-5 bg-white border-t">
            {" "}
            {addresses.map((address) => (
              <div className="pt-4">
                <h2 className="font-bold"> {address?.name} </h2>
                <div className="mb-8">
                  <div>{address?.address1}</div>
                  <div>{address?.address2}</div>
                  <div>{address?.address3}</div>
                  <div>{address?.address4}</div>
                </div>
                <div className="mb-8">
                  {address.phone && (
                    <a className="flex mb-1" href={`tel:${address?.phone}`}>
                      <MdPhone className="hover:font-lg" />
                      <div className="pl-4">{address?.phone}</div>
                    </a>
                  )}
                  <a className="flex mb-1" href={`tel:${address?.mobile}`}>
                    <MdSmartphone />
                    <div className="pl-4">{address?.mobile}</div>
                  </a>
                  <a className="flex mb-1" href="mailto:info@k2.co.nz">
                    <MdEmail />
                    <div className="pl-4 self-center">info@k2.co.nz</div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <Image src="/images/ianz.jpg" width="100" height="100" />
          </div>
          <div className="pt-4 pb-4 flex justify-between text-sm font-bold col-span-2 content-center">
            <a href="https://www.facebook.com/k2environmental/">
              <Image src="/social/fb_find_us.svg" width="100" height="24" />
            </a>{" "}
            <a href="https://www.linkedin.com/company/k2-environmental-lt">
              <Image src="/social/linkedin.png" width="100" height="24" />
            </a>{" "}
            <a href="https://www.instagram.com/k2__environmental__ltd/">
              Follow us on{" "}
              <Image src="/social/instagram.png" width="24" height="24" />
            </a>{" "}
          </div>
          <div />
          <div className="pt-4 text-xs">
            {" "}
            Copyright© 2021 K2 Environmental{" "}
          </div>{" "}
        </div>{" "}
      </Container>{" "}
    </footer>
  );
}
