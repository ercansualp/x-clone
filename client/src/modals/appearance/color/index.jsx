import PropTypes from "prop-types";
import ColorItem from "~/modals/appearance/color/color-item/index.jsx";
import {useState} from "react";

export default function Color() {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ["bg-[#1d9bf0]", "bg-[#ffd400]", "bg-[#f91880]", "bg-[#7856ff]", "bg-[#ff7a00]", "bg-[#00ba7c]"];

    return (
        <>
            <span className="mb-1 text-xs text-[color:var(--color-third)] font-bold leading-[18px]">Renk</span>
            <div className="mb-[11px] py-1 flex items-center bg-[color:var(--background-secondary)] rounded-2xl justify-around h-[61px]">
                {
                    colors.map((color, index) => (
                        <ColorItem key={index} index={index} colorIndex={colorIndex} setColorIndex={setColorIndex} color={color} />
                    ))
                }
            </div>
        </>
    )
}

Color.propTypes = {
    colorIndex: PropTypes.bool,
    setColorIndex: PropTypes.func
}