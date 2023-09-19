import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";

const Animate = ({sx, ...props}) => {
    const [translateY, setTranslateY] = useState(1000);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTranslateY(0);
            setOpacity(1);   
        });

        return () => {
            clearTimeout(timeout);
        }
    },[])

    if(props.type === "fade") {
        return (
            <Box sx={{
                ...sx,
                transition: "opacity 1s ease",
                opacity: opacity,
                transitionDelay: props.delay + "s" || "unset",
            }}>
                {props.children}
            </Box>
        )
    }

    return (
        <Box
            sx={{
                ...sx,
                transform: `traslateY(${translateY}px)`,
                transition: "transform 1s ease, opacity 2s ease",
                opacity: opacity,
                transitionDelay: props.delay + "s" || "unset",
            }}
        >
            {props.children}
        </Box>
    )
}

export default Animate;