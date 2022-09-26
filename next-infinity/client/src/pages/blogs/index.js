import axios from "axios";
import useSWR from "swr";
import Link from "next/link"
const fetcher = (url) => axios.get(url).then(res => res.data)
export const getStaticProps=async()=>{
  const blogs = await fetcher("http://localhost:3450/blogs")

return {
  props: { blogs },
}
}

function Blogs( { blogs }) {
  const { data } = useSWR("http://localhost:3450/blogs", fetcher, { blogs })
  console.log(data);
  return (
    <div>Blogs page
{/* 
      {
        data?data.map(blog=>{
          return(<Link key={blog.id} passHref href={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
          </Link>)
        }):<h2>Loading...</h2>
      } */}
    </div>
  )
}

export default Blogs