const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Blog Mania</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={ { 
                    color: 'white',
                    backgroundColor: '#f1326d',
                    borderRadius: '8px'}}>New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar;