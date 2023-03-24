
import {Link, useLoaderData} from '@remix-run/react'
import { getPosts } from '~/models/post.server'
import {json} from '@remix-run/node'



export async function loader(){
   return json({posts:await getPosts()})
}


const BlogPost = () => {

const {posts} = useLoaderData<typeof loader>()


  return (
    <main>
      <h1>Blog Post</h1>
     
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
      
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default BlogPost