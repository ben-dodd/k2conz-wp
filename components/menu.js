import { useState } from "react";
import Link from "next/link";
import useMediaQuery from "../lib/useMediaQuery";
import { MdMenu, MdExpandMore, MdChevronRight } from "react-icons/md";
import Breadcrumbs from "../components/breadcrumbs";

export default function Menu() {
  const [menuState, setMenuState] = useState(null);
  const [secondMenuState, setSecondMenuState] = useState(null);
  const menu = {
    main: [
      { url: "/", name: "Home" },
      { url: "/services", name: "Services", menu: "services" },
      { url: "/resources", name: "Resources", menu: "resources" },
      { url: "/blog", name: "Blog" },
      { url: "/about-us", name: "About Us", menu: "about" },
      { url: "/contact", name: "Contact" },
    ],
    services: [
      {
        url: "/services/asbestos-services",
        name: "Asbestos Services",
        menu: "asbestos",
      },
      {
        url: "/services/bacteria-and-mould-testing",
        name: "Biological Testing",
      },
      { url: "/services/meth-testing", name: "Meth Testing" },
      {
        url: "/services/indoor-air-quality-testing",
        name: "Indoor Air Quality Testing",
      },
      { url: "/services/workplace-exposure", name: "Workplace Testing" },
      { url: "/services/noise-testing", name: "Noise Testing" },
      {
        url: "/services/house-risk-assessment",
        name: "House Risk Assessments",
      },
      {
        url: "/services/mask-fit-testing-new-zealand",
        name: "Mask Fit Testing",
      },
      { url: "/services/stack-testing", name: "Stack Testing" },
      { url: "/services/ambient-air-testing", name: "Ambient Air Testing" },
    ],
    resources: [
      {
        url: "/resources/workplace-exposure-standards",
        name: "Workplace Exposure Standards",
      },
      { url: "/resources/technical-notes", name: "Technical Notes" },
      { url: "/resources/report-guides", name: "Report Guides" },
      { url: "/resources/brochures", name: "Brochures" },
      { url: "/resources/diagrams", name: "Diagrams" },
      { url: "/resources/asbestos-guide", name: "Asbestos Guide" },
      { url: "/resources/guide-to-microbes", name: "Guide to Microbes" },
      { url: "/resources/glossary", name: "Glossary" },
      { url: "/resources/calculators", name: "Calculators" },
    ],
    about: [
      { url: "/about-us/accredited-methods", name: "Accredited Methods" },
      {
        url: "/about-us/careers-with-k2-environmental",
        name: "Careers with K2 Environmental",
      },
    ],
    asbestos: [
      {
        url: "/services/asbestos-services/asbestos-testing",
        name: "Asbestos Analysis",
      },
      {
        url: "/services/asbestos-services/asbestos-survey",
        name: "Asbestos Survey",
      },
    ],
  };

  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  return (
    <div className="sticky top-0 bg-white z-50 border-b border-accent-5">
      {isSmallScreen ? (
        <div>
          <div className="flex justify-between">
            <MdMenu /> Menu
          </div>
          {menuState && (
            <div className="flex flex-col justify-center">
              {menu.menuState &&
                menu.menuState.map((e) => (
                  <Link href={e.url}>
                    <a>{e.name}</a>
                  </Link>
                ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="max-w-6xl mx-auto flex flex-row justify-between px-8">
            {menu.main.map((e) => (
              <div
                key={e?.name}
                onMouseEnter={e.menu ? () => setMenuState(e.menu) : null}
                onMouseLeave={() => setMenuState(null)}
              >
                <Link href={e.url}>
                  <div className="flex justify-between items-center cursor-pointer">
                    <a className="hover:underline py-2">{e.name}</a>
                    {e.menu && <MdExpandMore />}
                  </div>
                </Link>
                {e.menu && menu[e.menu] && menuState === e.menu && (
                  <div className="absolute bg-white z-50 py-4 border-accent-5 border shadow-medium">
                    {menu[e.menu].map((e) => (
                      <div
                        key={e?.name}
                        onMouseEnter={
                          e.menu ? () => setSecondMenuState(e.menu) : null
                        }
                        onMouseLeave={() => setSecondMenuState(null)}
                      >
                        <Link href={e.url}>
                          <div className="flex justify-between items-center cursor-pointer px-4 hover:bg-gray-200">
                            <a className="p-2">{e.name}</a>
                            {e.menu && <MdChevronRight />}
                          </div>
                        </Link>
                        {e.menu && menu[e.menu] && secondMenuState === e.menu && (
                          <div className="absolute right-0 bg-white z-50 py-4 border-accent-5 border shadow-medium">
                            {menu[e.menu].map((e) => (
                              <Link key={e?.name} href={e.url}>
                                <div className="flex justify-between items-center cursor-pointer hover:bg-gray-200">
                                  <a className="p-2">{e.name}</a>
                                  {e.menu && <MdChevronRight />}
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
