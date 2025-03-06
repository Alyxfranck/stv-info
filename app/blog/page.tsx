import { BlogPosts } from 'app/components/posts'
import { Navbar } from '../components/nav'
export const metadata = {
  title: 'STV FRANCK',
  description: 'STV INFOS.',
}

export default function Page() {
  return (
    <section>
      <Navbar />
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">STV</h1>
      <BlogPosts />
    </section>
  )
}
