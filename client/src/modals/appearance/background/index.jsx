import {useAppearance} from "~/store/appearance/hooks.js";
import {setBackgroundColor, setColor, setBoxShadow} from "~/store/appearance/actions.js";
import classNames from "classnames";

export default function Background() {
    const {backgroundColor, color} = useAppearance();
    return (
        <>
            <span className="mb-1 text-[color:var(--color-third)] text-[13px] font-bold leading-5">Arka plan</span>
            <div className="bg-[color:var(--background-secondary)] rounded-2xl py-1 px-3 mb-3 flex justify-center max-w-[519px]">
                <div
                    onClick={() => {
                        setColor({
                            ...color,
                            base: "#0f1419",
                            baseSecondary: "#8b98a5"
                        })
                        setBackgroundColor({
                            name: "default",
                            primary: "#fff",
                            secondary: "#f7f9f9",
                            third: "#eff3f4",
                            modal: "#00000066"
                        })
                        setBoxShadow("0 0 15px rgba(101,119,134,0.2), 0 0 3px 1px rgba(101,119,134,0.15)")
                    }}
                    className={classNames("px-5 m-1 rounded border border-[#333639] flex items-center bg-white group cursor-pointer min-h-[64px] w-[156.33px]", {
                        "!border-[color:var(--color-primary)] !border-2": backgroundColor.name === "default"
                    })}>
                    <div
                        className="relative -ml-[11px] -mr-[11px] w-10 h-10 flex items-center justify-center group-hover:bg-[#71767b1a] rounded-full transition-colors">
                        <div className="w-5 h-5 border-2 border-[#b9cad3] rounded-full"></div>
                    </div>
                    <div className="text-[#0f1419] font-bold leading-5 ml-[5px] flex-1 text-center">Varsayılan</div>
                </div>
                <div
                    onClick={() => {
                        setColor({
                            ...color,
                            base: "#f7f9f9",
                            baseSecondary: "#8b98a5"
                        })
                        setBackgroundColor({
                            name: "dimly",
                            primary: "#15202b",
                            secondary: "#1e2732",
                            third: "#263340",
                            modal: "#5b708366"
                        })
                        setBoxShadow("rgba(136, 153, 166, 0.2) 0px 0px 15px, rgba(136, 153, 166, 0.15) 0px 0px 3px 1px")
                    }}
                    className={classNames("px-5 m-1 rounded border border-[#333639] flex items-center bg-[#15202b] group cursor-pointer min-h-[64px] w-[156.33px]", {
                        "!border-[color:var(--color-primary)] !border-2": backgroundColor.name === "dimly"
                    })}>
                    <div
                        className="relative -ml-[11px] -mr-[11px] w-10 h-10 flex items-center justify-center group-hover:bg-[#71767b1a] rounded-full transition-colors">
                        <div className="w-5 h-5 border-2 border-[#5c6e7e] rounded-full"></div>
                    </div>
                    <div className="text-[#f7f9f9] font-bold leading-5 ml-[5px] flex-1 text-center">Loş</div>
                </div>
                <div
                    onClick={() => {
                        setColor({
                            ...color,
                            base: "#e7e9ea",
                            baseSecondary: "#71767b"
                        })
                        setBackgroundColor({
                            name: "lights-off",
                            primary: "#000",
                            secondary: "#16181c",
                            third: "#273340",
                            modal: "#5b708366"
                        })
                        setBoxShadow("rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px")
                    }}
                    className={classNames("px-5 m-1 rounded border border-[#425364] flex items-center bg-black group cursor-pointer min-h-[64px] w-[156.33px]", {
                        "!border-[color:var(--color-primary)] !border-2": backgroundColor.name === "lights-off"
                    })}>
                    <div
                        className="relative -ml-[11px] -mr-[11px] w-10 h-10 flex items-center justify-center group-hover:bg-[#71767b1a] rounded-full transition-colors">
                        <div className="w-5 h-5 border-2 border-[#3e4144] rounded-full"></div>
                    </div>
                    <div
                        className="text-[#e7e9ea] font-bold leading-5 ml-[5px] flex-1 justify-center flex items-center">Işıklar
                        kapalı
                    </div>
                </div>
            </div>
        </>
    )
}