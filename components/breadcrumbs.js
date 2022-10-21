import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { titleCase } from '../lib/text'

import { MdChevronRight } from 'react-icons/md'

const convertBreadcrumb = (string) => {
  return titleCase(
    string
      .replace(/-/g, ' ')
      .replace(/oe/g, 'ö')
      .replace(/ae/g, 'ä')
      .replace(/ue/g, 'ü')
  )
}

export default function Breadcrumbs() {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState(null)

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        }
      })

      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }

  return (
    <div className="border-b border-accent-5 bg-gray-800 text-white">
      <div className="flex items-center max-w-5xl mx-auto px-4">
        <Link href="/">
          <a className="hover:underline">Home </a>
        </Link>{' '}
        <MdChevronRight />{' '}
        {breadcrumbs.map((breadcrumb, i) => (
          <div key={breadcrumb.href} className="flex items-center">
            <Link href={breadcrumb.href}>
              <a className="hover:underline">
                {convertBreadcrumb(breadcrumb.breadcrumb)}
              </a>
            </Link>{' '}
            <MdChevronRight />{' '}
          </div>
        ))}
      </div>
    </div>
  )
}
