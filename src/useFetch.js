// Custom hook to fetch the data from url
import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout( () => {
            fetch(url, { signal: abortController.signal})
                .then( res => {
                    if(!res.ok){
                        throw Error('Could not fetch the desired data!!!')  
                    }           
                    return res.json();                   
                })
                .then( data => {
                    console.log(data)
                    setData(data);
                    setIsLoading(false);})
                .catch( err => {
                    if(err.name === 'AbortError'){
                        console.log('Aborted the fetch')
                    }else{
                        setIsLoading(false);
                        setError(err.message);
                    }
                    
            });
        }, 1000)
        // Cleanup function for useEffect
        return () => abortController.abort();
    }, [url])

    return(
        { error, isLoading, data }
    )
}

export default useFetch;