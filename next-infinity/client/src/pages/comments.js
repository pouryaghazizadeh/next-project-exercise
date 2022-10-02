// import axios from "axios";
// import useSWR from "swr";
// const fetcher = (url) => axios.get(url).then(res => res.data)
// export async function getServerSideProps() {
//   const comments = await fetcher("http://localhost:3450/comments")
//   // console.log(comments);
  // return {
  //   props: { comments },// fallback: falsem 
  // }
// }


function Comments() {
  // const { data } = useSWR("http://localhost:3450/comments", fetcher, { comments })


  // console.log("this is data", data);

  //  console.log("dataaaa",data.map((data)=>console.log(data)))


  //  if(error){<h2>something is wrong</h2>}
  // if (!data) { }
  return (
    <div>
      i there
      {/* hi there
      {
        data ?
          data.map((response) => {
            return (<div key={response.id}>
              <p>name:{response.userName}</p>
              <p>comment:{response.comment}</p>
            </div>)

          }) : <h2>Loading...</h2>
      } */}
    </div>
  )
}

export default Comments