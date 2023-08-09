import React from "react";

const TraficLightBG = ({children}) => {
    return (
    <div className="d-flex justify-content-center">
        <div className={`m-5 p-3 justify-content-center w-25 row bg-black rounded`}>
            {children}
        </div>
    </div>
    )
}

export default TraficLightBG;