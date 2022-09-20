import axios from "axios";
import useSWR, { unstable_serialize} from "swr";

// const fetcher = (url) => axios.get(url).then(res => res.data)
// export const getStaticProps = async (context) => {
//     const { params } = context
//     console.log(params);
//     // const blogDetail = await fetcher(`http://localhost:3450/blogs/${params}`)
//     const blogDetail = await axios.get(`http://localhost:3450/blogs/${params.blogId}`).then(res => res.data)
//     console.log("fdffd",blogDetail);
//     return {
//         props: {
//             blogDetail,
//              },
     
//     }
// }

// export const getStaticPaths = async()=>{
//     return({
//         paths:[
//             {
//                 params:{blogId:"1"}
//             },
//             {
//                 params:{blogId:"2"}
//             }
//         ],
//         fallback:false

//     }
//     )
// }



export async function getServerSideProps(context) {
    const { params } = context
    const blogDetail = await axios.get(`http://localhost:3450/blogs/${params.blogId}`).then(res => res.data)
    return {
      props: {blogDetail}, // will be passed to the page component as props
    }
  }
function BlogDetail({ blogDetail }) {
console.log('blogDetail', blogDetail)
    // const { data } = useSWR(, fetcher, { blogDetail })
    // console.log(data);
    return (
        <div>{
            blogDetail? blogDetail.map(data=>{
                return(<div key={data.id}>
                    <h3>{data.title}</h3>
                    <p>{data.story}</p>

                </div>)
            }):
            <h2>Loading...</h2>
            } </div>
    )
}

export default BlogDetail