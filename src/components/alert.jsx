import React from "react";
function Alert(props) {
    return ( 
        <div style={{fontSize:".65rem"}} >
            <i className="fa-solid fa-triangle-exclamation text-danger "></i>
            <span  className=" text-danger ">{props.message}</span>
        </div>
      
     );
}

export default Alert;