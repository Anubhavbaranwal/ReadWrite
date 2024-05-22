import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { Topbar } from "../components/Topbar";
import { useoneBlog } from "../Hooks/indes";
import {useParams} from "react-router-dom";

 const Blog = () => {
    const { id } = useParams();

    const {loading, blog} = useoneBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div>
            <Topbar />
            <div className="h-screen flex flex-col justify-center">   
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
}

export default Blog;