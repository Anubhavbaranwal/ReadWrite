import { useEffect, useState } from "react";
import ApiClient from "../../config/Api";

const useblog = () => {
    const [loading,setLoading] = useState(false);
    const [Blogs,setBlogs] = useState([]);
    
    useEffect(() => {
        getblogs();
    }, [])

    const getblogs = async () => {
        try {
            setLoading(true);
            const res= await ApiClient.get("/api/v1/blog/bulk");
            setBlogs(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
  return {
    loading,
    Blogs
  }
}

export default useblog