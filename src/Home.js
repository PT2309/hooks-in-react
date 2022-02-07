import { useEffect, useState  } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


/**
 * 
 * 1 && 1 = 1
 * 1 && 0 = 0
 * 0 && 1 = 0
 * 0 && 0 = 0
 */

const Home = () => {
    
    // const [blogs, setBlogs] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);
    const { error, isLoading, data: blogs} = useFetch('http://localhost:5000/blogs');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter( blog => blog.id !== id );
    //     setBlogs(newBlogs);
    // }

    // useEffect( () => {
    //     setTimeout( () => {
    //         fetch('http://localhost:5000/blogs')
    //          .then( res => {
    //              if(!res.ok){
    //                 throw Error('Could not fetch the desired data!!!')  
    //              }           
    //               return res.json();                   
    //             })
    //          .then( blogs => {
    //             console.log(blogs)
    //             setBlogs(blogs);
    //             setIsLoading(false);
    //         }).catch( err => {
    //             setIsLoading(false);
    //             setError(err.message);
    //         });
    //     }, 3000
    //     )
    // }, [])

    return(
        <div className="home">
            { error && <div> {error} </div>}
            {isLoading && <div>Loading data........</div>}
            {blogs && <BlogList blogs={blogs} name="All blogs" ></BlogList>}
            {/* <button onClick={ () => { setName('Jobs')}}>{name}</button> */}
            {/* <BlogList blogs={blogs.filter( blog => blog.author === 'John')} name="Blogs by John" handleDelete={handleDelete}></BlogList> */}
        </div>
    )
}

export default Home;