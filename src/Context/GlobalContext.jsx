import { createContext, useState, useEffect } from "react";
const GlobalContext = createContext();
export default GlobalContext;

export const GlobalProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchData = async () => {
        const api_url = `http://127.0.0.1:8000/api/fetch-news/`;
        const response = await fetch(api_url)
        if(response.status === 200){
            const response_data = await response.json()
            setData(response_data)
            setLoading(false)
            console.log("i am here");
        }
    }

    useEffect(() => {
        if (loading) {
            fetchData();
        }
    },[loading]);



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

