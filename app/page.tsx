import { BlogPosts } from 'app/components/posts'
import { Navbar } from './components/nav'
export default function Page() {
  return (
    
    <section>
      <Navbar />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
       STV INFOS
      </h1>
      <p className="mb-4">
        {`Hier Finden Sie alle Informationen über den Unterricht`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
