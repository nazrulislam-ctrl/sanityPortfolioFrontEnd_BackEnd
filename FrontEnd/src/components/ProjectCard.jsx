import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export default function ProjectCard({project}) {
  const{projectName, projectUrl, githubUrl,projectImage}= project;
  return (
    <>
      <Card className="py-4 my-4 flex justify-center items-center h-[70vh] w-[100%] bg-emerald-100">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{projectName}</h4>  
        </CardHeader>
        <CardBody className=" flex-col justify-between overflow-visible py-2 h-[90%] w-[85%]">
          <Image
            alt="Card background"
            className="object-cover rounded-xl h-[300px] w-[300px]"
            src={projectImage}
            
          />
          <div className="my-2 gap-4 flex  justify-center">
            <Button disabled={project.projectUrl? false:true} color="danger"><a href={projectUrl}>Live</a></Button>
            <Button disabled={project.githubUrl? false:true} variant="bordered"><a href={githubUrl}>Github</a></Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
