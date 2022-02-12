import { Link } from "react-router-dom";

// Template:   'John runs' + number + 'miles everyday' = `John runs ${number} miles`
const BlogList = ({blogs, name}) => {
    return(
        <div className='blog-list'>
            <h2>{name}</h2>
            { blogs.map( blog => {
                let { id, title, author} = blog;
                return(                   
                        <div className='blog-view' key={id}>
                            <Link to={`/blogs/${id}`}>
                                <h2>{title}</h2>
                                <p>Written by: {author}</p>
                                <p>Read More .........</p>
                            </Link>
                        </div>                    
                )}
            )}
        </div>
        )
}

export default BlogList;