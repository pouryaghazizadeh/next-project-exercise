
import axios from "axios";
import useSWR from "swr";
import Image from "next/image"
const fetcher = (url) => axios.get(url).then(res => res.data)
export const getStaticProps=async()=>{
    const aboutUs = await fetcher("http://localhost:3450/about-us")

  return {
    props: { aboutUs },// fallback: falsem 
  }
}

function AboutUs({aboutUs}) {
    const { data } = useSWR("http://localhost:3450/about-us", fetcher, { aboutUs})

console.log(data);
  return (
    <div>

        {/* about us page
        {
          data? data.map((value)=>{
            return(
            <div key={value.id}>
              <h2>{value.title}</h2>
              <Image  alt="Assassin-creed" src={value.image}
                 width={1000} 
        height={500} 
              />

              </div>)
          }):<h2>loading...</h2>
        } */}

    </div>
  )
}

export default AboutUs