export default function PostTitle({ children }) {
  return (
    <h1
      className="pt-8 text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left text-k2light max-w-readability"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
