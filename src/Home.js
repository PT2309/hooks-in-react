import { useEffect, useState  } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'State Hooks', body: 'Lorem ipsum...' , author: 'Steve', id: 1 },
        { title: 'Classes in React', body: 'Lorem ipsum...' , author: 'John', id: 2 },
        { title: 'CSS', body: 'Lorem ipsum...' , author: 'John', id: 3}
    ])

    const [name, setName] = useState('Steve');

    const handleDelete = (id) => {
        console.log('Trigger delete');
        const newBlogs = blogs.filter( blog => blog.id !== id );
        setBlogs(newBlogs);
    }

    useEffect( () => {
        console.log('use effect ran');
        // console.log(blogs);
        // setBlogs(['Empty array']);
    },[])

    return(
        <div className="home">
            <BlogList blogs={blogs} name={"All blogs"} handleDelete={handleDelete}></BlogList>
            <button onClick={ () => { setName('Jobs')}}>Change Name</button>
            {/* <BlogList blogs={blogs.filter( blog => blog.author === 'John')} name="Blogs by John" handleDelete={handleDelete}></BlogList> */}
        </div>
    )
}

export default Home;