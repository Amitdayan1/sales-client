import React from "react";
import Cookies from "universal-cookie/es6";
import axios from "axios";

class Sale extends React.Component {

    render() {

        return (
            <div>
                <div style={{
                    border: "yellow solid 4px",
                    width: "50%",
                    textAlign: "center",
                    marginBottom: "3%",
                    marginLeft: "25%"
                }}>
                    <h3 style={{color:this.props.border}}>{this.props.data.saleText}</h3></div>
            </div>
        )
    }
}

export default Sale;