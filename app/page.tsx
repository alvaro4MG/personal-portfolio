import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Álvaro Martínez García
      </h1>
      <p className="mb-4">
        {`I'm a last year Computer Engineering at University of Alicante (Spain). I'm learning about different tools for software and game development. This portfolio will show and prove the advances that I make.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
