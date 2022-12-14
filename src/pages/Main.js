import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/pages/main.scss";

import BlackLogo from "../icons/BlackLogo";
import WhiteLogo from "../icons/WhiteLogo";
import downArrowBlack from "../icons/downArrowBlack";
import downArrowWhite from "../icons/downArrowWhite";

import EssentialsPreview from "../components/EssentialsPreview";

export default function Main({theme}) {
    const [Logo, setLogo] = useState(theme === 'dark' ? BlackLogo : WhiteLogo)
    const [Arrow, setArrow] = useState(theme === 'dark' ? downArrowWhite : downArrowBlack)

    useEffect(()=>{
        setArrow(theme === 'dark' ? downArrowWhite : downArrowBlack)
        setLogo(theme === 'dark' ? WhiteLogo : BlackLogo);
    }, 
    [theme])

    return (
        <div className="mainView">
            <div className="faceView">
                {Logo}
                <p className="faceTitle">Official Y.S.V. club website</p>
                {Arrow}
            </div>
            <EssentialsPreview/>
        </div>
    )
}