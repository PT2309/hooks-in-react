import { useEffect, useState  } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id );
        setBlogs(newBlogs);
    }

    useEffect( () => {
        setTimeout( () => {fetch('http://localhost:5000/blogs')
            .then( res => res.json())
            .then( blogs => {
                console.log(blogs)
                setBlogs(blogs);
                setIsLoading(false);
            })}, 3000
        )
    }, [])

    return(
        <div className="home">
            {isLoading && <div>Loading data........</div>}
            {blogs && <BlogList blogs={blogs} name="All blogs" handleDelete={handleDelete}></BlogList>}
            {/* <button onClick={ () => { setName('Jobs')}}>{name}</button> */}
            {/* <BlogList blogs={blogs.filter( blog => blog.author === 'John')} name="Blogs by John" handleDelete={handleDelete}></BlogList> */}
        </div>
    )
}

export default Home;