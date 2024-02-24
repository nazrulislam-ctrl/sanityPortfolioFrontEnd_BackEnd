import { useAuth0 } from "@auth0/auth0-react"
import { Navigate } from "react-router-dom";


export default function PrivateRouter({children}) {
    const {user}=useAuth0();
  return (
   <div className="flex justify-center items-center">{ user? children: <Navigate to={"/home"} />}</div>
  )
}
