import React from "react";


function Sale (props) {
    console.log(props.data)
    console.log(props.border)
    return (
       <div>
           {props.border=="green" ?
               <div style={{
                   border: "green solid 4px",
                   width: "50%",
                   textAlign: "center",
                   marginBottom: "3%",
                   marginLeft: "25%"
               }}>
                   {props.data.saleText}
               </div>:
               <div style={{
                   border: "red solid 4px",
                   width: "50%",
                   textAlign: "center",
                   marginBottom: "3%",
                   marginLeft: "25%"
               }}>
                   {props.data.saleText}
               </div>
           }
       </div>
    )
}
export default Sale;