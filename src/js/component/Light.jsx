import React from "react";

const Light = ({color, onClick}) => {
    let lightColor;
    if (color == "red") {
        lightColor = "danger";
    };
    if (color == "yellow") {
        lightColor = "warning"
    };
    if (color == "green") {
        lightColor = "success"
    }
    if (color == "off") {
        lightColor = "secondary"
    }
    return (
        <div className={`col-lg-10 row justify-content-center h-auto m-2`}>
            <button type="button" className={`btn btn-${lightColor} ${color}-light-shadow w-100 rounded-circle ratio ratio-1x1`} onClick={onClick}></button>
        </div>
    )
}

export default Light;