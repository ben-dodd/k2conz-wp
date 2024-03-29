import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({ title, coverImage, excerpt, slug }) {
  return (
    <div className="p-4">
      <div className="mb-5">
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/${slug}`} href="/[slug]">
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div
        className="text-lg leading-relaxed mb-4 font-thin"
        dangerouslySetInnerHTML={{
          __html:
            excerpt.length > 200 ? `${excerpt.substring(0, 200)}...` : excerpt,
        }}
      />
    </div>
  )
}
