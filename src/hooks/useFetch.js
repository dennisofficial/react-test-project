import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [getError, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Data could not be fetched!");
                }
                return response.json();
            })
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch((e) => {
                setError(e.message);
                setLoading(false);
            });
    }, [url]);

    return { data, isLoading, getError };
};

export { useFetch };
