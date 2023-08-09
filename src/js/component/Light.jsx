import React from "react";

const Light = ({color}) => {
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
    return (
        <div className="col-lg-7 row justify-content-center h-auto m-2">
            <button type="button" className={`btn btn-${lightColor} w-100 rounded-circle ratio ratio-1x1`}></button>
        </div>
    )
}

export default Light;