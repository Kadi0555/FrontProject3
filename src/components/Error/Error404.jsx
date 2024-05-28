import React, { useState } from "react";



export default function Error404(){
    const [Error,setError] = useState('Error 404!');
    return(
        <>
            <div className="error"><h1 onClick={(event) =>{
                if(event.target.textContent === "Error 404!"){
                    setError('это значит стриница не найдена !!!');
                }else{
                    return true;
                }
            }}>{Error}</h1></div>
        </>
    )
}