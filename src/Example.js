import { useState, useEffect } from "react";

const Example = () => {
    const [count, setCount] = useState(0);


    function difference(){
        let arr = [1, 2, 3, 4, 5];

        let newMapArray = arr.map( element => { return element * 2 })
        console.log(newMapArray, 'Output for a map array')
        
        let newFilterArray = arr.filter( element => {return element%2 === 0} )
        console.log(newFilterArray, 'Output from filter array');
    }

    useEffect( () => {
        console.log("Use effect ran")
    })

    return(
        <div>
            <p>You clicked { count } times</p>
            <button onClick={difference()}>Click Me!</button>
        </div>

    )
}

export default Example;