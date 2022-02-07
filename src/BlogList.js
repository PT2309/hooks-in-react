const BlogList = ({blogs, name}) => {

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
                    </div>
                )}
            )}
        </div>
        )
}

export default BlogList;