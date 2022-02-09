import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {    
    const { error, isLoading, data: blogs} = useFetch('http://localhost:5000/blogs');

    return(
        <div className="home">
            { error && <div> {error} </div>}
            {isLoading && <div>Loading data........</div>}
            {blogs && <BlogList blogs={blogs} name="All blogs" ></BlogList>}
        </div>
    )
}

export default Home;