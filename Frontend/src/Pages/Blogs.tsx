import { useNavigate } from "react-router-dom";
import useblog from "../Hooks/indes"
import BlogCard from "../components/BlogCard";
// import BlogCard, { BlogCardProps } from "../components/BlogCard"
import { BlogSkeleton } from "../components/Skeleton";
import { Topbar } from "../components/Topbar"

const Blogs = () => {
  const {loading,blogs}=useblog();
  const navigate=useNavigate();

  if(blogs===undefined || loading===true){
    return <div className="flex justify-center">
      <div>
             <BlogSkeleton/>
             <BlogSkeleton />
             <BlogSkeleton />
             <BlogSkeleton />
             <BlogSkeleton />     
             <BlogSkeleton />     
             <BlogSkeleton />     
     </div>
     </div>
  }

  return (
    <div>
      <Topbar/>
    <div  className="flex justify-center w-full mt-10">
        <div >
          {blogs &&  blogs?.map((blog) => <div onClick={()=>{return navigate(`/blog/${blog.id}`);}}><BlogCard 
            id={blog.id}
            author={blog.author.name || "Anonymous"}
            title={blog.title}
            description={blog.content}
            date={"2nd Feb 2024"}
          />
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Blogs