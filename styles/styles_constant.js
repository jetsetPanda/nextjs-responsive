import React from "react";

const getStyles = props => {

    /**
     * @Omar: constants, just for fun. Also to demonstrate prop application using my custom viewport observer context/hook in styled-components
     * @note - this is currently used in Header.js
     */

    return (props.viewport === 'mobile') ? {
        h1: {
            size: '25px',
            lineH: '29px'
        },
        p: {
            size: '12px',
            lineH: '15px'
        },
        pCopy: 'Looking for a great deal on home appliances? Packages are the best bet. Most appliance packages consist of a range, refrigerator, over-the-range microwave, and dishwasher. However, some upscale brands have packages that incorporate wall ovens, cooktops, and integrated refrigerators\n\nUse our handy mobile filters to help you narrow down the best package for your needs!\n\n'
    } : {
        h1: {
            size: '40px',
            lineH: '47px'
        },
        p: {
            size: '20px',
            lineH: '23px'
        },
        pCopy: 'Looking for a great deal on home appliances? Packages are the best bet. Most appliance packages consist of a range, refrigerator, over-the-range microwave, and dishwasher. However, some upscale brands have packages that incorporate wall ovens, cooktops, and integrated refrigerators.'
    };
}

export default getStyles;