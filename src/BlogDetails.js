import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch(`http://localhost:5000/blogs/${id}`)
    // console.log(data);

    return(
        <div>
            <div>Blog Details Page for {id}</div>
            <div className='blog-details'>
                { isLoading && <div>Loading...</div> }
                { error && <div>{ error }</div> }
                { blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                        <p>{blog.body}</p>
                    </article>
                )}               
            </div>  
        </div>  
    )
}

export default BlogDetails;