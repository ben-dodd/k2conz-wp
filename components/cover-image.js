import Link from 'next/link'

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <img
      alt="Cover Image"
      src={coverImage?.sourceUrl}
      className={`shadow-small h-48 w-full object-cover ${
        slug && 'hover:shadow-medium transition-shadow duration-200'
      }`}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/${slug}`} href="/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
