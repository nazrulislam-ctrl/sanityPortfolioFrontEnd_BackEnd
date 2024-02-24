import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { client } from "../config/sanityConfig"
import { Button } from "@nextui-org/react"

const About = () => {
  const[about, setAbout]= useState([])
  const getAbout=async()=>{
    let queries= `*[_type== "profileInfo"]{profileName, designation,"profileImage":profileImage.asset->url,_id,"profileDetails":profileDetails->profileDetails, "buttonUrl":buttonUrl.asset->url}`
    const aboutData= await client.fetch(queries);
    setAbout(aboutData[0]);
  }

  useEffect(()=>{
    getAbout();
  },[])

  return (
    <>
      <Helmet>
        <title>About</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="flex justify-center items-center bg-purple-700 h-[100vh] gap-10">
      <div>
        <img className="h-[300px] w-[250px] rounded-3xl" src={about.profileImage} alt="" />
      </div>
      <div>
        <p className="font-bold text-red-300 text-5xl"> {about.profileName}</p>
        <div className="font-bold text-amber-400 text-xl pt-3">
          {about.designation}
        </div>
        <div>
          {/* {about.profileDetails}  */}
        </div>
        <Button className="text-black mt-5 bg-danger-500">Learn More</Button>
      </div>
      </div>
    </>
  )
}

export default About