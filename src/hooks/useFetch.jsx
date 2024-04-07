import { useEffect, useState } from "react"

// Hook name
// This hook will call the API from the given parameter
// And when new parameter is passed, it will called the new url
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);

    // Once the hook is called/ created we want to call the API and returned the data to user
    // fetch
    // Everytime the url change, we will call back the API to new url
    useEffect(() => {
        // Function definition
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const jsonData = await response.json();

                setData(jsonData);
            }
            catch (err) {
                setError(true)

            }
            setLoading(false);
        }

        // Function execution
        fetchData();

    }, [url]);



    // The data returned by the hook
    return { data, error, loading }
}