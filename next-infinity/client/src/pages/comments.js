
import useSWR from "swr"
const fetcher = (url) => fetch(url).then((res) => res.json());
export async function getServerSideProps() {
const comments = fetcher("http://localhost:3450/comments")

// console.log(comments);
    return {
      props: {comments : JSON.parse(JSON.stringify(comments))}, 
    }
  }

function Comments({comments}) {
console.log(comments,"fdsdsd");
 const {data}=useSWR("http://localhost:3450/comments",fetcher,{comments})
 console.log("dataaaa",data);
  return (
    <div>comments</div>
  )
}

export default Comments