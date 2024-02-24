import { Button } from "@nextui-org/react"
import { Helmet } from "react-helmet-async"

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="h-[100vh] bg-slate-700 text-white flex justify-center items-center flex-col">
        <div className="text-6xl">
          MD. NAZRUL ISLAM
        </div>
        <div className="text-3xl mt-2 text-emerald-500">
          Software Developer
        </div>
        <div className="mt-2">
          <Button className="bg-danger">Get in Touch</Button>
        </div>
      </div>
    </>
  )
}
