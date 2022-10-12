import React, { useContext, useEffect, useState } from "react";

//context <API></>
//create context(warehouse)
//provider  (delivery boy)
//consumer==>alternate-->(useContext())hook
export const API_URL=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext=React.createContext();

//we need to create a Provider function 
const AppProvider=({children})=>{

    const [isLoading,setIsLoading]=useState(true);
    const [movie ,setMovie]= useState([]);
    const [isError, setIsError]=useState({show:"false",msg:""});
    const [query,setQuery]=useState("titanic")



    const getMovies=async (url)=>{
        setIsLoading(true);
        try{
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            if(data.Response==='True'){
                setMovie(data.Search);
                setIsLoading(false);
                setIsError({show:false, msg : "",});
            }else{
                setIsError({show:true, msg : data.Error,});
            }

        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
            //debouncing method==> to write the text in input and then we render the function; otherwise it will render after every word typing
            
       let timerOut= setTimeout(()=>{
       
            getMovies(`${API_URL}&s=${query}`);
        },500)

       return () =>clearTimeout(timerOut);

    },[query]);


    return <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>{children}</AppContext.Provider>
};

//i am creating Global Custom Context Hooks
const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};
