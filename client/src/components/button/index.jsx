import {createElement, useState, useEffect} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {colors} from "~/utils/consts.jsx";

export default function Button({ size, children, onClick }) {
    const [selectedColor, setselectedColor] = useState();

    useEffect(() => {
        console.log("ercan", colors)
        setselectedColor(colors.find(color => color.active).value);
    }, [colors])

    return createElement("button", {
        className: classNames("text-[#e7e9ea] rounded-full font-bold hover:bg-[#1a8cd8] transition-colors", colors.find(color => color.active).value, {
            "px-4 h-9": size === "normal",
            "px-4 h-[52px] w-full text-[17px]": size === "large",
        }),
        onClick: () => onClick ? onClick() : null
    }, children);
}

Button.propTypes = {
    size: PropTypes.oneOf(["normal", "large"]),
    children: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    size: "normal",
}