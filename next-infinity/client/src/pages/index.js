import metaDataHome from "../metaData/metaData.Home.json"
import RegisterComponents from "../layoutEngin/registerHeader"
import {HeadComponent as Head} from "../components/molecules/Head"
import Title from "../components/atoms/Title"
export default function Home() {
  return (
  <>
{/* <RegisterComponents uiData={metaDataHome} /> */}
<Head>
  <Title text="hi from home"/>
  {/* <title>hi there</title> */}
  {/* <Title >
    hi
  </Title> */}
</Head>

<h1>hi from home</h1>
    </>
   

  )
}
