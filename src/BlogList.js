const BlogList = ({blogs, name, handleDelete}) => {

    return(
        <div className='blog-list'>
            <h2>{name}</h2>
            { blogs.map( blog => {
                let { id, title, author, body} = blog;
                return(
                    <div className='blog-view' key={id}>
                        <h2>{title}</h2>
                        <p>{author}</p>
                        <p>{body}</p>
                        <button onClick={() => {handleDelete(blog.id)}}>Delete Blog!</button>
                    </div>
                )}
            )}
        </div>
        )
}

export default BlogList;