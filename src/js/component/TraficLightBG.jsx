import React from "react";

const TraficLightBG = ({children}) => {
    return (
    <div className="p-5 d-flex align-items-center justify-content-center vh-100">
        <div className={`m-5 py-5 justify-content-center w-25 row bg-black rounded-5`}>
            {children}
        </div>
    </div>
    )
}

export default TraficLightBG;