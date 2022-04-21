import { createContext, useState, useEffect } from "react";
import REACT_APP_NEWS_API_KEY from "../credentials";
const GlobalContext = createContext();
export default GlobalContext;

export const GlobalProvider = ({ children }) => {
    const api_url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${REACT_APP_NEWS_API_KEY}`;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const response = await fetch(api_url)
        const response_data = await response.json()
        setData(response_data.articles)
        setLoading(false)
        console.log('Ia m here');
    }

    useEffect(() => {
        if (loading) {
            fetchData();
        }
    });



    const contextData = {
        // variables
        data: data,
    }
    return (
        <GlobalContext.Provider value={contextData}>
            {children}
        </GlobalContext.Provider>
    )
}

