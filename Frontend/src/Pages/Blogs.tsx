import useblog from "../Hooks/indes"
import BlogCard from "../components/BlogCard"
import { Topbar } from "../components/Topbar"

const Blogs = () => {
  const {loading,Blogs}=useblog();

  if(loading===false){
    return <div>
      Loading...
    </div>
  }
  
  return (
    <div>
      <Topbar/>
    <div className="flex justify-center">
    <div className="max-w-xl">
    <BlogCard  title={"Blog Title"} description={"Blog Description"} date={"2021-09-01"} author={"Author Name"} />
    <BlogCard  title={"Blog Title"} description={"Blog Description"} date={"2021-09-01"} author={"Author Name"} />
    <BlogCard  title={"Blog Title"} description={"Blog Description"} date={"2021-09-01"} author={"Author Name"} />
    </div>
    </div>
    </div>
  )
}

export default Blogs