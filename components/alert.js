import Container from './container'
import Link from 'next/link'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={`border-b ${
        preview
          ? 'bg-accent-7 border-accent-7 text-white'
          : 'bg-accent-1 border-accent-2'
      }`}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.
              <Link href="/api/exit-preview">
                <a className="underline hover:text-cyan duration-200 transition-colors">
                  Click here
                </a>
              </Link>
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <Link
                href={`https://github.com/zeit/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              >
                <a className="underline hover:text-success duration-200 transition-colors">
                  available on GitHub
                </a>
              </Link>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
