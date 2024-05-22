import { useEffect, useState } from "react";
import ApiClient from "../../config/Api";


export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": string
    }
}

export const useoneBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        getblogs();
    }, [id])

    const getblogs = async () => {
        try {
            setLoading(true);
            const res= await ApiClient.get(`/api/v1/blog/${id}`);
            setBlog(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        loading,
        blog
    }

}

const useblog = () => {
    const [loading,setLoading] = useState(false);
    const [blogs,setBlogs] = useState<Blog[]>([]);
    
    useEffect(() => {
        getblogs();
    }, [])

    const getblogs = async () => {
        try {
            setLoading(true);
            const res= await ApiClient.get("/api/v1/blog/bulk/");
            if (typeof setBlogs === 'function') {
                setBlogs(res.data);
              } else {
                console.error('setBlogs is not a function');
              }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
  return {
    loading,
    blogs
  }
}

export default useblog