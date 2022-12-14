import React from "react"


export const EssentialsPreview = () => {
    return(
    <div className="essentialsPreview">
        <p className="essentialsTitle">Explore essentials</p>
        <div className="essentialRow">
            <div className="essential">
                <img className="essentialimg" src="https://i.pinimg.com/564x/53/f6/ce/53f6ce0380439b5952aeba52fe629375.jpg"/>
            </div>
            <div className="essential">
                <img className="essentialimg" src="https://i.pinimg.com/564x/82/c6/df/82c6df3a94b5b019e9833cb9099721b1.jpg"/>
            </div>
            <div className="essential">
                <img className="essentialimg" src="https://i.pinimg.com/564x/2a/c1/e6/2ac1e63f4ff1450c01e628f53cdf4d35.jpg"/>
            </div>
            
        </div>
    </div>)
}

export default EssentialsPreview;