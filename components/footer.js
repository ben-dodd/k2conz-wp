import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="flex flex-col lg:flex-row items.center justify-between">
          <div>
            <h2>Christchurch Office</h2>PO Box 28147
            <br />
            Unit 24, 105 Bamford Street
            <br />
            Woolston
            <br />
            Christchurch 8023
          </div>
          <div>
            <h2>Auckland Office</h2>Unit 23, 203 Kirkbride Road
            <br />
            Airport Oaks,
            <br />
            Auckland 2022
          </div>
          <div>
            <h2>Wellington Office</h2>5/408 Hutt Road,
            <br />
            Alicetown,
            <br />
            Lower Hutt 5010
          </div>
          <div>
            <h2>Hamilton</h2>37 Lake Road
            <br />
            Frankton,
            <br />
            Hamilton 3204
          </div>
        </div>
      </Container>
      <Container>
        <div className="py-3 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex justify-between text-sm font-bold tracking-tighter leading-tight">
            <div className="pr-2">Follow us</div>
            <a href="https://www.facebook.com/k2environmental/">facebook</a>
            <a href="https://www.linkedin.com/company/k2-environmental-lt">
              linkedin
            </a>
            <a href="https://www.instagram.com/k2__environmental__ltd/">
              instagram
            </a>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="text-xs">Copyright © 2021 K2 Environmental</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
