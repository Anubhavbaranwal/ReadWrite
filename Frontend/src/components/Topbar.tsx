import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Topbar = () => {
  return (
    <div className="flex justify-between p-4 border-b ">
      <Link to="/blogs"><div className="font-bold text-xl">Medium</div></Link>
      <div className="flex justify-between">
      <button type="button" className=" mr-8 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
        <Avatar author="abc"/>
        </div>
    </div>
  )
}
