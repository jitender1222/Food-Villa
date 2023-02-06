import React, { useState } from 'react'
import Shimmer from './Shimmer';


const Section=({name,desc,show,setShow})=>{
   return (
    <>
       <div className='border-2 border-black mt-10'>
        <h1>{name}</h1>
        {
          show ? (
            <div>
              <p>{desc}</p>
              <button onClick={()=>setShow(false)}>Hide</button>
            </div>
          ):  <button onClick={()=>setShow(true)}>show</button>
        }
      </div>
    </>
  )
}

const About = () => {

  const [show,setShow]=useState();

  return (
    <>
    <h2 className='font-bold text-center mt-10 text-4xl'>FAQ</h2>
    <div>
      <Section name={"Our team is so popular"}  
      desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
      show={show}
      setShow={()=>setShow(true)}
      />
      <Section name={"Explore our carrer Page"}
      desc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}

      show={show==="carrer"}
      setShow={()=>setShow("carrer")}
      />
      <Section name={"Contact us"}
      desc={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,comes from a line in section 1.10.32."}

      show={show==="team"}
      setShow={()=>setShow("team")}
      />
    </div>
    </>
  )
}

export default About