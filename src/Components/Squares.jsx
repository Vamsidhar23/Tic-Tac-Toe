import React from "react";

function Square(props){

    const classes = `${props.className ? `${props.className} ` : ''}square ${props.state === "X" ? "x-symbol" : props.state === "0" ? "o-symbol" : ""}`;
    return (
        <span className= {classes} onClick={() => props.onClick(props.index)}>
            {props.state}
        </span>
    );
}
export default Square;


