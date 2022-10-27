import Date from '../components/date'
import PostTitle from '../components/post-title'
import Categories from '../components/categories'

export default function PostHeader({ title, date, categories }) {
  return (
    <div className="max-w-readability mx-auto">
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-md">
        Posted <Date dateString={date} />
        <Categories categories={categories} />
      </div>
    </div>
  )
}
