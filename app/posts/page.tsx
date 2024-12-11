import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className='pb-24 pt-40'>
      <head>
      <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.milanghimire.info.np/posts" />
        
        
        </head> 
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Posts</h1>

        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}
