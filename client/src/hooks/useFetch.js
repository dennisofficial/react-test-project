import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [getError, setError] = useState(null);

    useEffect(() => {
        const abortControler = new AbortController();

        fetch(url, { signal: abortControler.signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Data could not be fetched!");
                }
                return response.json();
            })
            .then((data) => {
                setBlogs(data.data);
                setLoading(false);
            })
            .catch((e) => {
                if (e.name === "AbortError") {
                    return;
                }
                setError(e.message);
                setLoading(false);
            });
        return () => abortControler.abort();
    }, [url]);

    return { data, isLoading, getError };
};

export { useFetch };
