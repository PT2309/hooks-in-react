const BlogList = (props) => {

    return(
        <div className='blog-list'>
            <h2>{props.name}</h2>
            { props.blogs.map( blog => {
                return(
                    <div className='blog-view' key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                        <button onClick={() => {props.handleDelete(blog.id)}}>Delete Blog!</button>
                    </div>
                )}
            )}
        </div>
        )
}

export default BlogList;