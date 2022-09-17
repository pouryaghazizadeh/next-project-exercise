import {Image as ImageNext}  from 'next/image'


// note about give h/w size to image:if your image be local you don`t need to give them because next have access to the file but if image be remote you must specify the h/w  

// note two : configure the image in next.config.js =>domains
// note three => if you dont know about the size you can use layout property that next provide fx=> layout="fill"
// objectFit
// priority it is very nice for logo

function Image({...rest}) {
  return (
    <ImageNext {...rest} />
  )
}

export default Image