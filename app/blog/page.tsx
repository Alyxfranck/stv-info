import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'STV FRANCK',
  description: 'STV INFOS.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">STV</h1>
      <BlogPosts />
    </section>
  )
}
