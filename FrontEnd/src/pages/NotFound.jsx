import { Helmet } from "react-helmet-async"

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not <Found></Found></title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    </>
  )
}

export default NotFound