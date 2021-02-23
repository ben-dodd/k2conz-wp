import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  const addresses = [
    {
      name: "Christchurch Office",
      address1: "PO Box 28147",
      address2: "Unit 24, 105 Bamford Street",
      address3: "Woolston",
      address4: "Christchurch 8023",
    },
    {
      name: "Auckland Office",
      address1: "Unit 23, 203 Kirkbride Road",
      address2: "Airport Oaks",
      address3: "Auckland 2022",
    },
    {
      name: "Wellington Office",
      address1: "Unit 5, 408 Hutt Road",
      address2: "Alicetown",
      address3: "Lower Hutt 5010",
    },
    {
      name: "Hamilton Office",
      address1: "37 Lake Road",
      address2: "Frankton",
      address3: "Hamilton 3204",
    },
  ];
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-self-center">
          {" "}
          {addresses.map((address) => (
            <div className="pt-4">
              <h2 className="font-bold"> {address?.name} </h2>
              {address?.address1} <br /> {address?.address2} <br />{" "}
              {address?.address3} <br /> {address?.address4}{" "}
            </div>
          ))}{" "}
          <div className="pt-4 pb-4 flex justify-start text-sm font-bold tracking-tighter leading-tight col-span-2">
            <div className="pr-2"> Follow us </div>{" "}
            <a href="https://www.facebook.com/k2environmental/"> facebook </a>{" "}
            <a href="https://www.linkedin.com/company/k2-environmental-lt">
              linkedin{" "}
            </a>{" "}
            <a href="https://www.instagram.com/k2__environmental__ltd/">
              instagram{" "}
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
