import {useState, useEffect} from "react"
import axios from 'axios'

const UseApi = (url) =>{
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{ 
        const getData = async() =>{
            try{
                const response = await axios.get(url);
                if(response.status !== 200){
                    throw new Error (`Error! status: ${response.status}`);
                }
                setData(response.data); 
    
            }catch(error){
            setError(error.message);
                console.error(`Error fetching data: ${error}`);
            }
        }
        getData(url);
    }, [url]);

    return{data,error};

}
export default UseApi; 


//-------------metodo 2---------------

/* const UseApi = (url) =>{
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{ 
        const getData = async() =>{
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error (`Error! status: ${response.status}`);
                }
                const json_data = await response.json();
                setData(json_data); 
    
            }catch(error){

            setError(error.message);
            setError(error.message);
                console.error(`Error fetching data: ${error}`);
            }
        }
        getData(url);
    }, [url]);
    return{data,error};
}
export default UseApi; 
 */