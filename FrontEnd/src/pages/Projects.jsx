import { Helmet } from "react-helmet-async"
import ProjectCard from "../components/ProjectCard"
import ProjectSlider from "../components/ProjectSlider"


export default function Projects() {
  return (
    <>
    <Helmet>
      <title>Projects</title>
      <link rel="canonical" href="https://www.tacobell.com/" />
    </Helmet>
    <div className=" mx-auto p-3 bg-gray-600 ">
      <ProjectSlider/>
    </div>
  </>
  )
}
