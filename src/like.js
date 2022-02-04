import React,{useState} from 'react';
import {AiFillLike} from "react-icons/ai"


const Like = () => {
    const[counter, setCounter]= useState(0);
    
    const likeClick = () =>{
        setCounter(counter+1);
    };

return ( 
    <div>

    <div className="icon"><h4>Do you like this vedio</h4>
    <AiFillLike  onClick={likeClick} className="like-icon"/> {counter}
    </div>

    </div>
 );
}

export default Like;