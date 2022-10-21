import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import useMediaQuery from '../lib/useMediaQuery'

export default function Header() {
  const [scroll, setScroll] = useState(0)

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const scrollCheck = window.scrollY < 100;
  //     if (scrollCheck !== scroll) {
  //       setScroll(scrollCheck);
  //     }
  //   });
  // });

  const isSmallScreen = useMediaQuery('(max-width: 640px)')
  const isMedScreen = useMediaQuery('(max-width: 768px)')
  const ianzDims = isMedScreen ? 60 : 80
  const socialW = isMedScreen ? 70 : 90
  const socialH = isMedScreen ? 17 : 22

  return isSmallScreen ? (
    <div className="flex justify-center p-4">
      <Link as={`/`} href="/">
        <a aria-label="Home">
          <Image
            alt="K2 Environmental Logo"
            src="/logos/k2-environmental.svg"
            width="200"
            height="200"
          />
        </a>
      </Link>
    </div>
  ) : (
    <div className="max-w-6xl flex mx-auto justify-between items-center lg:items-end p-4">
      <Link as={`/`} href="/">
        <a aria-label="Home">
          <Image
            alt="K2 Environmental Logo"
            src="/logos/k2.svg"
            width="100"
            height="100"
          />
        </a>
      </Link>
      <div className="text-center">
        <div className="text-header text-2xl md:text-3xl lg:text-4xl text-gray-800">
          K2 Environmental Ltd
        </div>
        <div className="serif italic text-lg md:text-xl lg:text-2xl text-gray-600">
          Specialists in Air Quality Testing
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Image
          alt="IANZ Logo"
          src="/logos/ianz.svg"
          width={ianzDims}
          height={ianzDims}
        />
        <div className="flex flex-col items-end ml-4">
          <a
            className="hover-button mb-2"
            href="https://www.facebook.com/k2environmental/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt="Facebook Social Link"
              src="/social/fb_find_us.svg"
              width={socialW}
              height={socialH}
            />
          </a>
          <a
            className="hover-button"
            href="https://www.linkedin.com/company/k2-environmental-lt"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt="LinkedIn Social Link"
              src="/social/linkedin.png"
              width={socialW}
              height={socialH}
            />
          </a>
          {/*<a href="https://www.instagram.com/k2__environmental__ltd/">
            Follow us on{" "}
            <Image src="/social/instagram.png" width="24" height="24" />
          </a>*/}
        </div>
      </div>
    </div>
  )
}
