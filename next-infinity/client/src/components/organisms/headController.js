import React from 'react'
import { HeadComponent as Head } from '../molecules/Head'
function headController({metaDataHead}) {
  return (
    <Head>
      {
        metaDataHead?.map(()=>{
        })
      }


    </Head>
  )
}

export default headController