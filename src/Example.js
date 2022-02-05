import { useState, useEffect } from "react";

const Example = () => {
    const [count, setCount] = useState(0);

    useEffect( () => {
        console.log("Use effect ran")
    })

    return(
        <div>
            <p>You clicked { count } times</p>
            <button onClick={ () => setCount(count + 1)}>Click Me!</button>
        </div>

    )
}

export default Example;