import { useState } from "react";
import { useHistory } from "react-router";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('Jim');
    const [body, setBody] = useState('');
    const history = useHistory();

    // const data = {title, author, body};
    // console.log(JSON.stringify(data));

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({title, author, body})
        }).then( () => {
            // history.go(1);
            history.push('/');
        })
    }
    
    return(
        <div className='create'>
            <h2>Write your blog here!!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type='text'
                    required
                    value={title}
                    onChange={(e) => { setTitle(e.target.value)}}
                ></input>
                <label>Author</label>
                <select
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value)}}
                >
                    <option value='Jim'>Jim</option>
                    <option value='Micheal'>Micheal</option>
                    <option value='Dwight'>Dwight</option>
                </select>
                <label>Write here</label>
                <textarea
                    value={body}
                    required
                    onChange={(e) => { setBody(e.target.value)}}
                >
                </textarea>
                <button>Add Blog</button>
            </form>
        </div>
    )
}
export default CreateBlog;